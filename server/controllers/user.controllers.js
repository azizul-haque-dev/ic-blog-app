import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models.js";
import { sendEmail } from "../services/sendEmail.js";
import { generateResetToken } from "../services/token.services.js";
import cloudinary from "../utils/coudinary.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE } from "../utils/emailTemplete.js";

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // ✅ Validate email
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // ✅ Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({
        message: "No user found with this email, Please provide a valid email"
      });
    }

    // ✅ Generate reset token
    const token = generateResetToken({ email });

    // ✅ Build reset link
    const resetLink = `${process.env.APP_URL}/reset-password/${token}`;

    // ✅ Prepare email template
    const template = PASSWORD_RESET_REQUEST_TEMPLATE(resetLink);

    // ✅ Send email
    await sendEmail({
      to: email,
      subject: "Reset your IC Blog App password",
      html: template
    });

    // ✅ Send success response
    res.status(200).json({
      message: " You will receive a reset link. Please check your email"
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    //Validate input
    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ message: "Token and new password are required." });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters." });
    }

    //Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    //Find user
    const user = await UserModel.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    //Update password
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const uploadAvatar = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded!" });
    }

    const avatarUrl = req.file.path; // Cloudinary secure_url
    const avatarId = req.file.filename; // Cloudinary public_id
    const { id } = req.user; // Logged-in user ID (from token)

    // Check if user exists
    const user = await UserModel.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    //  delete previous avatar from Cloudinary
    if (user.avatarId) {
      await cloudinary.uploader.destroy(user.avatarId);
    }

    // Update user avatar info
    user.avatarUrl = avatarUrl;
    user.avatarId = avatarId;
    await user.save();

    // Send success response
    res.status(200).json({
      success: true,
      message: "Avatar uploaded successfully!"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { forgetPassword, resetPassword, uploadAvatar };
