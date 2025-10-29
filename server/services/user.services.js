import { DislikeModel } from "../models/dislike.model.js";
import { LikeModel } from "../models/like.models.js";
import { PostModel } from "../models/post.model.js";
import { UserModel } from "../models/user.models.js";
export const findUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email }).select("-password");
    return user;
  } catch (error) {
    console.error("Error in findUserByEmail service:", error);

    throw new Error("Error fetching user from database.");
  }
};

export const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id).select("-password");
    return user;
  } catch (error) {
    console.error("Error in findUserById service:", error);
    throw new Error("Error fetching user from database.");
  }
};

// update user by id
export const updateUserById = async (id, updateData) => {
  try {
    const user = await UserModel.findByIdAndUpdate(id, updateData, {
      new: true
    }).select("-password -emailVerificationToken -verificationTokenExpireAt ");
    return user;
  } catch (error) {
    console.error("Error in updateUserById service:", error);
  }
};

export const checkEmailExists = async (email) => {
  try {
    const user = await UserModel.findOne({
      email,
      _id: { $ne: excludeUserId }
    });
    return !!user;
  } catch (error) {
    console.error("Error in checkEmailExists service:", error);
  }
};

//  Get user statistics (posts, likes, dislikes)
export const getUserStats = async (userId) => {
  try {
    // Count total posts by user
    const totalPosts = await PostModel.countDocuments({ userId });

    // Get all user's post IDs
    const userPosts = await PostModel.find({ userId }).select("_id");
    const postIds = userPosts.map((post) => post._id);

    // Count total likes on all user's posts
    const totalLikes = await LikeModel.countDocuments({
      postId: { $in: postIds }
    });

    // Count total dislikes on all user's posts
    const totalDislikes = await DislikeModel.countDocuments({
      postId: { $in: postIds }
    });

    return {
      totalPosts,
      totalLikes,
      totalDislikes
    };
  } catch (error) {
    console.error("Error in getUserStats service:", error);
    throw new Error("Error fetching user stats from database.");
  }
};
