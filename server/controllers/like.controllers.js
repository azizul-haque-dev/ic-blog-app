import mongoose from "mongoose";
import { PostModel } from "../models/post.model.js";
import {
  getPostLikeCounts,
  getUserLikeStatus,
  toggleDislike,
  toggleLike
} from "../services/like.services.js";

//  Like a post
export const likePost = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    const postId = new mongoose.Types.ObjectId(req.params.postId);

    // Check if post exists
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    // Toggle like
    const result = await toggleLike(postId, userId);

    // Get updated counts
    const counts = await getPostLikeCounts(postId);

    return res.status(200).json({
      success: true,
      action: result.action,
      message: result.message,
      likesCount: counts.likesCount,
      dislikesCount: counts.dislikesCount
    });
  } catch (error) {
    console.error("Like post error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

//  Dislike a post
export const dislikePost = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    const postId = new mongoose.Types.ObjectId(req.params.postId);

    // Check if post exists
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    // Toggle dislike
    const result = await toggleDislike(postId, userId);

    // Get updated counts
    const counts = await getPostLikeCounts(postId);

    return res.status(200).json({
      success: true,
      action: result.action,
      message: result.message,
      likesCount: counts.likesCount,
      dislikesCount: counts.dislikesCount
    });
  } catch (error) {
    console.error("Dislike post error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

//  Get user's like/dislike status for a post
export const getLikeStatus = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id;

    // Validate post ID
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID"
      });
    }

    const status = await getUserLikeStatus(postId, userId);
    const counts = await getPostLikeCounts(postId);

    return res.status(200).json({
      success: true,
      hasLiked: status.hasLiked,
      hasDisliked: status.hasDisliked,
      likesCount: counts.likesCount,
      dislikesCount: counts.dislikesCount
    });
  } catch (error) {
    console.error("Get like status error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
