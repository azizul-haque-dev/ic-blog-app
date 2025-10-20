import mongoose from "mongoose";
import { z } from "zod";
import { PostModel } from "../models/post.model.js";
import cloudinary from "../utils/coudinary.config.js";

//  Zod Schema — for validating incoming request data
const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long")
});

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
    let { categories } = req.body;
    if (!categories && !Array.isArray(categories)) {
      categories = [];
    }

    // Check if user exists
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "User not found!" });
    }

    //  Convert user ID to MongoDB ObjectId
    const userIdObject = new mongoose.Types.ObjectId(id);
    // Create a new post document in MongoDB
    const newPost = new PostModel({
      title,
      content,
      userId: userIdObject,
      categories,
      imageUrl,
      imageId
    });
    await newPost.save();
    // Send success response
    return res.status(201).json({
      message: "Post created successfully!",
      post: newPost
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error?.errors?.map((err) => err.message) || []
      });
    }

    // Handle all other errors
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//  Update Post text fields only
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    let { categories } = req.body;

    // যদি categories string হয়, তাহলে parse করো
    if (typeof categories === "string") {
      try {
        categories = JSON.parse(categories);
      } catch {
        categories = [];
      }
    }

    // set categories to an empty array if it's not provided or not an array
    if (!categories || !Array.isArray(categories)) {
      return res.status(400).json({
        success: false,
        message: "Categories must be an array"
      });
    }

    const { title, content } = postSchema.parse(req.body);
    const updatePost = await PostModel.findByIdAndUpdate(
      id,
      { title, content, categories },
      { new: true }
    );
    if (!updatePost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post updated successfully!",
      updatePost
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error?.errors?.map((err) => err.message) || []
      });
    }
    console.error("Error updating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//  Update post image
export const updatePostImage = async (req, res) => {
  try {
    const { id } = req.params;

    //  Validate required params
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required!"
      });
    }

    //  Validate file upload
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded!"
      });
    }
    console.log(req.file, "update image");

    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!"
      });
    }

    // Remove previous image from Cloudinary
    if (post.imageId) {
      try {
        await cloudinary.uploader.destroy(post.imageId);
      } catch (err) {
        console.warn("Cloudinary delete failed:", err.message);
      }
    }

    // Update with new image details
    post.imageUrl = req.file.path;
    post.imageId = req.file.filename;

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post image updated successfully!"
    });
  } catch (error) {
    console.error("Error updating post image:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// post delete by id
export const postDeleteById = async (req, res) => {
  try {
    const { id } = req.params;

    // delete post by id
    const post = await PostModel.findByIdAndDelete(id);
    // if post is not found then send error message
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!"
      });
    }
    // send success message
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully!"
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// get all post
export const getPosts = async (req, res) => {
  try {
    // Extract pagination values
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 12);
    const skip = (page - 1) * limit;

    // Extract filters
    const { category, search } = req.query;

    //  Build dynamic filter object
    const filter = {};

    // Filter by category (case-insensitive match)
    if (category) {
      filter.categories = { $in: [category.toLowerCase()] };
    }

    // Search by title or content (Mongo text search)
    if (search) {
      filter.$text = { $search: search };
    }

    // Count total posts matching filter
    const totalPosts = await PostModel.countDocuments(filter);

    // If no posts found
    if (totalPosts === 0) {
      return res.status(200).json({
        success: true,
        message: "No posts found",
        posts: [],
        totalPages: 0,
        currentPage: 1
      });
    }

    const totalPages = Math.ceil(totalPosts / limit);
    const currentPage = Math.min(page, totalPages);

    // Fetch posts with filter, pagination, and sorting
    const posts = await PostModel.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v")
      .populate("userId", "name email avatarUrl");

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
      totalPages,
      currentPage
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// get single post
export const singlePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id)
      .populate("userId", "name email avatarUrl") // post user
      .populate("likes", "name email avatarUrl") // who likeed
      .populate("dislikes", "name email avatarUrl") // who disliked
      .populate({
        path: "comments",
        populate: { path: "userId", select: "name email avatarUrl" },
        select: "content status createdAt updatedAt"
      }) // who are commented
      .lean();
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found!"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post fetched successfully!",
      post
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
