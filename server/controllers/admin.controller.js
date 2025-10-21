import { z } from "zod";
import {getAllUsersWithStats, createNewUser, updateUserStatusById, getAllPostsFromAllUsers, updatePostStatusById , updateCommentStatusById, deleteCommentById} from "../services/admin.services.js"

import { findUserByEmail } from "../services/user.services.js"; 

// Zod Schemas 
const userCreationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  role: z.enum(["user", "admin"]).optional(),
  status: z.enum(["pending", "approved", "suspended"]).optional(),
});

const statusUpdateSchema = z.object({
  status: z.enum(["pending", "approved", "suspended"]),
});

const postStatusUpdateSchema = z.object({
  status: z.enum(["pending", "approved", "suspended"]),
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
      return res.status(400).json({ success: false, errors: parseBody.error.issues });
    }

    const { email } = parseBody.data;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User with this email already exists." });
    }

    const newUser = await createNewUser(parseBody.data);
    res.status(201).json({ success: true, message: "User created successfully.", user: newUser });
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
      return res.status(400).json({ success: false, errors: parseBody.error.issues });
    }
    const { status } = parseBody.data;

    const updatedUser = await updateUserStatusById(id, status);

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    res.status(200).json({ success: true, message: "User status updated.", user: updatedUser });
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
    const parseBody = postStatusUpdateSchema.safeParse(req.body);
    if (!parseBody.success) {
      return res.status(400).json({ success: false, errors: parseBody.error.issues });
    }
    const { status } = parseBody.data;
    
    const updatedPost = await updatePostStatusById(id, status);
    if (!updatedPost) return res.status(404).json({ message: "Post not found." });
    
    res.status(200).json({ success: true, message: "Post status updated.", post: updatedPost });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};





export const updateCommentStatus = async (req, res) => {
  const { commentId } = req.params;
  const parseBody = commentStatusSchema.safeParse(req.body);

  if (!parseBody.success) {
    return res.status(400).json({ success: false, errors: parseBody.error.issues });
  }

  try {
    const updatedComment = await updateCommentStatusById(
      commentId,
      parseBody.data.status
    );
    res.status(200).json({
      success: true,
      message: "Comment status updated successfully.",
      data: updatedComment,
    });
  } catch (error) {
   
    if (error.message === "Comment not found.") {
      return res.status(404).json({ success: false, message: error.message });
    }
    
    console.error("Controller Error - updateCommentStatus:", error);
    res.status(500).json({ success: false, message: "An internal server error occurred." });
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
    res.status(500).json({ success: false, message: "An internal server error occurred." });
  }
};



