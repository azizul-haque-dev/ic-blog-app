import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models.js";
import { generateResetToken } from "../services/token.services.js";
import cloudinary from "../utils/coudinary.config.js";

import mongoose from "mongoose";
import { CommentModel } from "../models/comments.models.js";
import {
  checkEmailExists,
  getUserStats,
  updateUserById
} from "../services/user.services.js";

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Validate email
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "No user found with this email, Please provide a valid email"
      });
    }

    // Generate reset token
    const token = generateResetToken({ email });

    // Build reset link
    const resetLink = `${process.env.APP_URL}/reset-password/${token}`;

    // Prepare email template
    // const template = PASSWORD_RESET_REQUEST_TEMPLATE(resetLink);

    //Send email
    // await sendEmail({
    //   to: email,
    //   subject: "Reset your IC Blog App password",
    //   html: template
    // });

    // Send success response
    res.status(200).json({
      success: true,
      resetLink,
      message: " You will receive a reset link. Please check your email"
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later."
    });
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

    res.status(200).json({
      success: true,
      message: "Password has been reset successfully."
    });
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

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await UserModel.findById(userId).select(
      "-password -emailVerificationToken -verificationTokenExpireAt -resetPasswordToken -resetPasswordExpires"
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found for profile." });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.error("Get User Profile Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later."
    });
  }
};

//  Update user profile (name, email)
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    // Validate input
    if (!name && !email) {
      return res.status(400).json({
        success: false,
        message: "At least one field (name or email) is required to update"
      });
    }

    // Validate name length
    if (name && (name.trim().length < 2 || name.trim().length > 50)) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 50 characters"
      });
    }

    // Validate email format
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format"
        });
      }

      // Check if email already exists
      const emailExists = await checkEmailExists(email, userId);
      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: "Email is already in use by another account"
        });
      }
    }

    // Prepare update data
    const updateData = {};
    if (name) updateData.name = name.trim();
    if (email) updateData.email = email.toLowerCase().trim();

    // Update user using service
    const updatedUser = await updateUserById(userId, updateData);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Update profile error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

const getUserStatistics = async (req, res) => {
  try {
    const userId = req.user.id;

    const stats = await getUserStats(userId);

    return res.status(200).json({
      success: true,
      stats
    });
  } catch (error) {
    console.error("Get user statistics error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
const addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const id = req.user.id;
    const userId = new mongoose.Types.ObjectId(id);
    const postObjectId = new mongoose.Types.ObjectId(postId);

    if (!postId || !content) {
      return res.status(400).json({
        success: false,
        message: "postId and content are required"
      });
    }

    const newComment = await CommentModel.create({
      postId: postObjectId,
      userId,
      content
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: newComment
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add comment"
    });
  }
};

export {
  addComment,
  forgetPassword,
  getUserProfile,
  getUserStatistics,
  resetPassword,
  updateUserProfile,
  uploadAvatar
};
