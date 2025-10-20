import mongoose from "mongoose";
import { z } from "zod";
import { PostModel } from "../models/post.model.js";

import {getPostsByUserId, updateUserPostById, deleteUserPostById} from "../services/post.services.js"

//  Zod Schema — for validating incoming request data
const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long")
});

// Zod schema for validating post updates. All fields are optional.
const postUpdateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters.").optional(),
  content: z.string().min(10, "Content must be at least 10 characters.").optional(),
  categories: z.array(z.string()).min(1, "At least one category is required.").optional(),
}).partial(); // .partial() makes all fields in the schema optional.


// Controller function to create a new post
export const createPost = async (req, res) => {
  try {
    // Validate request body using Zod
    const { title, content, userId } = postSchema.parse(req.body);

    // Check if a file is uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded!" });
    }

    // Extract image details from the uploaded file
    const imageUrl = req.file.path;
    const imageId = req.file.filename;

    // Extract user ID from authenticated user
    const { id } = req.user;

    // Handle optional categories field
    let { categoris } = req.body;
    if (!categoris && !Array.isArray(categoris)) {
      categoris = [];
    }

    // Check if user exists
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "User not found!" });
    }

    //  Convert user ID to MongoDB ObjectId
    const userIdObject = new mongoose.Types.ObjectId(id);
    console.log({
      title,
      content,
      userId: userIdObject,
      categoris,
      imageUrl,
      imageId
    });

    // Create a new post document in MongoDB
    const newPost = new PostModel({
      title,
      content,
      userId: userIdObject,
      categoris,
      imageUrl,
      imageId
    });
    await newPost.save();

    // Send success response
    res.status(201).json({
      message: "Post created successfully!",
      post: newPost
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors.map((err) => err.message)
      });
    }

    // Handle all other errors
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const getUserAllPost = async (req, res) => {
  try {
    const posts = await getPostsByUserId(req.user.id);
    res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};




export const updateUserPost = async (req, res) => {
  const { postId } = req.params;
  const parseBody = postUpdateSchema.safeParse(req.body);

  if (!parseBody.success) {
    return res.status(400).json({ success: false, errors: parseBody.error.issues });
  }

  // Ensure there's something to update
  if (Object.keys(parseBody.data).length === 0) {
      return res.status(400).json({ success: false, message: "No update data provided." });
  }

  try {
    const updatedPost = await updateUserPostById(postId, req.user.id, parseBody.data);

    if (!updatedPost) {
      return res.status(404).json({ success: false, message: "Post not found or you don't have permission to edit it." });
    }
    res.status(200).json({ success: true, message: "Post updated successfully.", post: updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};


export const deleteUserPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const deletedPost = await deleteUserPostById(postId, req.user.id);

    if (!deletedPost) {
      return res.status(404).json({ success: false, message: "Post not found or you don't have permission to delete it." });
    }
    res.status(200).json({ success: true, message: "Post deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

