import { DislikeModel } from "../models/dislike.model.js";
import { LikeModel } from "../models/like.models.js";
import { PostModel } from "../models/post.model.js";

//  Toggle like on a post
export const toggleLike = async (postId, userId) => {
  try {
    // Check if user already liked this post
    const existingLike = await LikeModel.findOne({ postId, userId });

    if (existingLike) {
      // User already liked - remove the like
      await LikeModel.findByIdAndDelete(existingLike._id);
      await PostModel.findByIdAndUpdate(postId, {
        $pull: { likes: userId }
      });

      return {
        success: true,
        action: "unliked",
        message: "Like removed successfully"
      };
    }

    // Check if user has disliked this post
    const existingDislike = await DislikeModel.findOne({ postId, userId });

    if (existingDislike) {
      // User had disliked - remove dislike first
      await DislikeModel.findByIdAndDelete(existingDislike._id);
      await PostModel.findByIdAndUpdate(postId, {
        $pull: { dislikes: userId }
      });
    }

    // Add new like
    const newLike = new LikeModel({ postId, userId });
    await newLike.save();

    // Note: Like model's post-save hook will add userId to Post.likes array

    return {
      success: true,
      action: "liked",
      message: "Post liked successfully"
    };
  } catch (error) {
    console.error("Error in toggleLike service:", error);
    throw new Error("Error toggling like");
  }
};

//  Toggle dislike on a post
export const toggleDislike = async (postId, userId) => {
  try {
    // Check if user already disliked this post
    const existingDislike = await DislikeModel.findOne({ postId, userId });

    if (existingDislike) {
      // User already disliked - remove the dislike
      await DislikeModel.findByIdAndDelete(existingDislike._id);
      await PostModel.findByIdAndUpdate(postId, {
        $pull: { dislikes: userId }
      });

      return {
        success: true,
        action: "undisliked",
        message: "Dislike removed successfully"
      };
    }

    // Check if user has liked this post
    const existingLike = await LikeModel.findOne({ postId, userId });

    if (existingLike) {
      // User had liked - remove like first
      await LikeModel.findByIdAndDelete(existingLike._id);
      await PostModel.findByIdAndUpdate(postId, {
        $pull: { likes: userId }
      });
    }

    // Add new dislike
    const newDislike = new DislikeModel({ postId, userId });
    await newDislike.save();

    // Note: Dislike model's post-save hook will add userId to Post.dislikes array

    return {
      success: true,
      action: "disliked",
      message: "Post disliked successfully"
    };
  } catch (error) {
    console.error("Error in toggleDislike service:", error);
    throw new Error("Error toggling dislike");
  }
};

//  Get like/dislike status for a user on a post
export const getUserLikeStatus = async (postId, userId) => {
  try {
    const hasLiked = await LikeModel.exists({ postId, userId });
    const hasDisliked = await DislikeModel.exists({ postId, userId });

    return {
      hasLiked: !!hasLiked,
      hasDisliked: !!hasDisliked
    };
  } catch (error) {
    console.error("Error in getUserLikeStatus service:", error);
    throw new Error("Error getting like status");
  }
};

//  Get like/dislike counts for a post
export const getPostLikeCounts = async (postId) => {
  try {
    const likesCount = await LikeModel.countDocuments({ postId });
    const dislikesCount = await DislikeModel.countDocuments({ postId });

    return {
      likesCount,
      dislikesCount
    };
  } catch (error) {
    console.error("Error in getPostLikeCounts service:", error);
    throw new Error("Error getting like counts");
  }
};
