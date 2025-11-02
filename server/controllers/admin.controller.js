import { z } from "zod";
import { PostModel } from "../models/post.model.js";
import {
  createNewUser,
  deleteCommentById,
  getAllPostsFromAllUsers,
  getAllUsersWithStats,
  updateCommentStatusById,
  updatePostStatusById,
  updateUserStatusById
} from "../services/admin.services.js";

import mongoose, { Mongoose } from "mongoose";
import { findUserByEmail } from "../services/user.services.js";
import { UserModel } from "../models/user.models.js";

// Zod Schemas
const userCreationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  role: z.enum(["user", "admin"]).optional(),
  status: z.enum(["pending", "approved", "suspended"]).optional()
});

const statusUpdateSchema = z.object({
  status: z.enum(["pending", "approved", "suspended"])
});

const postStatusUpdateSchema = z.object({
  status: z.enum(["pending", "approved", "suspended"])
});

const commentStatusSchema = z.object({
  status: z.enum(["pending", "approved", "suspended"], {
    required_error: "Status is required."
  })
});

//User Management Controllers

export const getAllUsers = async (req, res) => {
  try {
    const { users, stats } = await getAllUsersWithStats();
    res.status(200).json({ success: true, stats, users });
  } catch (error) {
    console.error("Controller Error - getAllUsers:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const createUserByAdmin = async (req, res) => {
  try {
    const parseBody = userCreationSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res
        .status(400)
        .json({ success: false, errors: parseBody.error.issues });
    }

    const { email } = parseBody.data;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists."
      });
    }

    const newUser = await createNewUser(parseBody.data);
    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: newUser
    });
  } catch (error) {
    console.error("Controller Error - createUserByAdmin:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const parseBody = statusUpdateSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res
        .status(400)
        .json({ success: false, errors: parseBody.error.issues });
    }
    const { status } = parseBody.data;

    const updatedUser = await updateUserStatusById(id, status);

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({
      success: true,
      message: "User status updated.",
      user: updatedUser
    });
  } catch (error) {
    console.error("Controller Error - updateUserStatus:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Content Management Controllers

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getAllPostsFromAllUsers();
    res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

export const updatePostStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const postId = new mongoose.Types.ObjectId(id);
    const parseBody = postStatusUpdateSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res
        .status(400)
        .json({ success: false, errors: parseBody.error.issues });
    }
    const { status } = parseBody.data;

    const updatedPost = await updatePostStatusById(postId, status);
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found." });

    res.status(200).json({
      success: true,
      message: "Post status updated.",
      post: updatedPost
    });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

export const updateCommentStatus = async (req, res) => {
  const { commentId } = req.params;
  const parseBody = commentStatusSchema.safeParse(req.body);

  if (!parseBody.success) {
    return res
      .status(400)
      .json({ success: false, errors: parseBody.error.issues });
  }

  try {
    const updatedComment = await updateCommentStatusById(
      commentId,
      parseBody.data.status
    );
    res.status(200).json({
      success: true,
      message: "Comment status updated successfully.",
      data: updatedComment
    });
  } catch (error) {
    if (error.message === "Comment not found.") {
      return res.status(404).json({ success: false, message: error.message });
    }

    console.error("Controller Error - updateCommentStatus:", error);
    res
      .status(500)
      .json({ success: false, message: "An internal server error occurred." });
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const result = await deleteCommentById(commentId);
    res.status(200).json({ success: true, message: result.message });
  } catch (error) {
    if (error.message.includes("not found")) {
      return res.status(404).json({ success: false, message: error.message });
    }

    console.error("Controller Error - deleteComment:", error);
    res
      .status(500)
      .json({ success: false, message: "An internal server error occurred." });
  }
};

export const getAllPendingPost = async (req, res) => {
  try {
    // Fetch pending posts with user info
    const pendingPosts = await PostModel.find({ status: { $ne: "approved" } })
      .populate("userId", "email name avatarUrl avatarId")
      .lean();

    // Count total pending posts
    const totalPendingPosts = await PostModel.countDocuments({
      status: { $ne: "approved" }
    });

    // Send success response
    return res.status(200).json({
      success: true,
      total: totalPendingPosts,
      posts: pendingPosts
    });
  } catch (error) {
    console.error("Error fetching pending posts:", error);

    // Send error response
    return res.status(500).json({
      success: false,
      message: "Failed to fetch pending posts",
      error: error.message
    });
  }
};
export const getWithoutPendingPost = async (req, res) => {
  try {
    // Fetch pending posts with user info
    const posts = await PostModel.find({ status: { $ne: "pending" } })
      .populate("userId", "email name avatarUrl avatarId")
      .lean();
    // Send success response
    return res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    console.error("Error fetching without pending posts posts:", error);

    // Send error response
    return res.status(500).json({
      success: false,
      message: "Failed to fetch pending posts",
      error: error.message
    });
  }
};

export const deleteUserbyId = async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const { id } = req.params;

    const userId = new mongoose.Types.ObjectId(id);

    //  Check if the user exists in the database
    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    //  Delete the user by ID
    await UserModel.findByIdAndDelete(id);

    //  Send a success response
    return res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);

    //  Handle unexpected server errors
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    //  Get the user ID from the request parameters
    const { id } = req.params;

    //  Get the new role from the request body
    const { role } = req.body;

    const userId = new mongoose.Types.ObjectId(id);

    //  Validate the role value
    const allowedRoles = ["user", "admin"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role value" });
    }

    //  Check if the user exists and update
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //  Send success response
    return res.status(200).json({
      success: true,
      message: "User role updated successfully"
    });
  } catch (error) {
    console.error("Error updating user role:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};
