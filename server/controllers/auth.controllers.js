import crypto from "crypto";
import { z } from "zod";
import { UserModel } from "../models/user.models.js";
import {
  generateAccessToken,
  generateVerifyEmailToken,
  verifyEmailToken,
  verifyRefreshToken
} from "../services/token.services.js";

import { validatePassword } from "../services/auth.services.js";
const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string"
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string"
    })
    .min(6, { message: "Password must be at least 6 characters" })
});

const registerSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string"
    })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(30, { message: "Name must be less than 30 characters" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string"
    })
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string"
    })
    .min(6, { message: "Password must be at least 6 characters" })
});
const registerUser = async (req, res) => {
  try {
    const parseBody = registerSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res
        .status(400)
        .json({ success: false, message: parseBody.error.issues });
    }
    const { name, email, password } = parseBody.data;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    function generate6DigitCode() {
      const n = crypto.randomInt(0, 1_000_000);
      return String(n).padStart(6, "0");
    }
    const code = generate6DigitCode();

    const emailToken = generateVerifyEmailToken(email);

    // await sendEmail({
    //   to: email,
    //   subject: "Verify your account",
    //   html: VERIFICATION_EMAIL_TEMPLATE(emailVerificationToken)
    // });
    const user = new UserModel({
      name,
      email,
      password,
      emailVerificationToken: code,
      verificationTokenExpireAt: Date.now() + 5 * 60 * 1000
    });
    await user.save();

    return res.status(201).json({
      success: true,
      email,
      code,
      emailToken,
      message: "A code has been sent to your account, please verify it."
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { code, token } = req.body;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // 🔹 Verify token validity
    let decoded;
    try {
      decoded = verifyEmailToken(token);
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token" });
    }

    const { email } = decoded;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.isVerified) {
      return res
        .status(200)
        .json({ success: true, message: "Email already verified" });
    }

    if (!user.emailVerificationToken || !user.verificationTokenExpireAt) {
      return res
        .status(400)
        .json({ success: false, message: "No verification token found" });
    }

    if (Date.now() > user.verificationTokenExpireAt) {
      return res
        .status(401)
        .json({ success: false, message: "Verification code expired" });
    }

    if (user.emailVerificationToken !== code) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid verification code" });
    }

    // ✅ Update user verification fields
    user.isVerified = true;
    user.emailVerificationToken = null;
    user.verificationTokenExpireAt = null;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully"
    });
  } catch (error) {
    console.error("Verify email error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

const loginUser = async (req, res) => {
  try {
    //  Validate request body
    const parseBody = loginSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res
        .status(400)
        .json({ success: false, message: parseBody.error.issues });
    }
    const { email, password } = parseBody.data;

    //  Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    //  Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in."
      });
    }

    //Check if user account status is approved (not pending or suspended)
    if (user.status !== "approved") {
      return res.status(403).json({
        success: false,
        message: `Your account status is: ${user.status}. Please contact support.`
      });
    }

    //  Verify password
    const isPasswordValid = await validatePassword(user.password, password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatarUrl
    };

    //  Generate Access and Refresh Tokens
    const accessToken = generateAccessToken(userData);
    // const refreshToken = generateRefreshToken(user._id);
    // isProduction
    const isProduction = process.env.NODE_ENV === "production";
    // Set tokens in secure, httpOnly cookies
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: isProduction ? "none" : "lax",
      path: "/"
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 24 * 60 * 60 * 1000 // 15 minutes
    });

    // res.cookie("refreshToken", refreshToken, {
    //   ...cookieOptions,
    //   maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    // });

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: userData,
      accessToken: accessToken
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const logoutUser = async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  try {
    const cookieOptions = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax"
    };

    // Clear the accessToken cookie
    res.clearCookie("accessToken", cookieOptions);

    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const refreshToken = async (req, res) => {
  try {
    const body = req.body || {};
    const token =
      req.cookies?.refreshToken ||
      req.headers["authorization"]?.split(" ")[1] ||
      null;
  

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Refresh token missing" });
    }

    const decoded = await verifyRefreshToken(token);
    const user = await UserModel.findById(decoded.userId);
    if (!user || user.refreshToken !== token) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid or expired refresh token" });
    }

    // ✅ শুধু access token রিনিউ করো
    const newAccessToken = generateAccessToken(user._id);

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000 // 15 min
    });

    return res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      accessToken: newAccessToken
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { loginUser, logoutUser, refreshToken, registerUser, verifyEmail };
