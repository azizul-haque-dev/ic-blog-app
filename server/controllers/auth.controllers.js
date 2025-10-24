import crypto from "crypto";
import { z } from "zod";
import { UserModel } from "../models/user.models.js";
import { sendEmail } from "../services/sendEmail.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateVerifyEmailToken,
  verifyEmailToken
} from "../services/token.services.js";

import { validatePassword } from "../services/auth.services.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "../utils/emailTemplete.js";
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

    const emailVerificationToken = crypto
      .randomBytes(32)
      .toString("hex")
      .slice(0, 6);

    const emailToken = generateVerifyEmailToken({ email });

    await sendEmail({
      to: email,
      subject: "Verify your account",
      html: VERIFICATION_EMAIL_TEMPLATE(emailVerificationToken)
    });
    const user = new UserModel({
      name,
      email,
      password,
      emailVerificationToken,
      verificationTokenExpireAt: Date.now() + 5 * 60 * 1000
    });
    await user.save();
    res.cookie("emailToken", emailToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 5 * 60 * 1000
    });
    return res.status(201).json({
      success: true,
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
    const token = req.cookies.emailToken;
    const { code } = req.body;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { email } = verifyEmailToken(token);
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (user.isVerified) {
      return res
        .status(200)
        .json({ success: true, message: "Email already verified" });
    }

    if (Date.now() > user.verificationTokenExpireAt) {
      return res.status(401).json({ success: false, message: "Token expired" });
    }

    if (user.emailVerificationToken !== code) {
      return res.status(401).json({ success: false, message: "Invalid code" });
    }

    user.isVerified = true;
    user.emailVerificationToken = null;
    user.verificationTokenExpireAt = null;
    await user.save();

    res.clearCookie("emailToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });

    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
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

    //  Generate Access and Refresh Tokens
    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });

    // Set tokens in secure, httpOnly cookies
    const cookieOptions = {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000 // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatarUrl
    };

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: userData
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const logoutUser = (req, res) => {
  try {
    const cookieOptions = {
      httpOnly: true
    };

    // Clear both cookies
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

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

export { loginUser, logoutUser, registerUser, verifyEmail };
