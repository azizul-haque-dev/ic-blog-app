import { UserModel } from "../models/user.models.js";
import { PostModel } from "../models/post.model.js";
import { CommentModel } from "../models/comments.models.js";

export const getAllUsersWithStats = async () => {
  const users = await UserModel.find({}).select("-password");

  const totalUsers = await UserModel.countDocuments();
  const adminCount = await UserModel.countDocuments({ role: "admin" });
  const pendingUsers = await UserModel.countDocuments({
    status: "pending",
  });

  return {
    users,
    stats: {
      totalUsers,
      adminCount,
      pendingUsers,
    },
  };
};

export const createNewUser = async (userData) => {
  const { name, email, password, role, status } = userData;

  const newUser = new UserModel({
    name,
    email,
    password,
    role: role || "user",
    status: status || "approved",
    isVerified: true, 
  });

  await newUser.save();

  // Convert to a plain object to remove the password before returning
  const userResponse = newUser.toObject();
  delete userResponse.password;

  return userResponse;
};

export const updateUserStatusById = async (userId, status) => {
  return await UserModel.findByIdAndUpdate(
    userId,
    { status },
    { new: true } // 'new: true' returns the updated document
  ).select("-password");
};

export const getAllPostsFromAllUsers = async () => {
  const posts = await PostModel.find({})
    .populate("userId", "name email avatarUrl") // Correct path is "userId"
    .sort({ createdAt: -1 });
  const pendingPost = await PostModel.countDocuments({ sataus: "pending" });

  return { posts, pendingPost };
};

export const updatePostStatusById = async (id, status) => {
  const post = await PostModel.findByIdAndUpdate(id, { status }, { new: true });
  return post;
};

export const updateCommentStatusById = async (commentId, status) => {
  try {
    const comment = await CommentModel.findByIdAndUpdate(
      commentId,
      { status },
      { new: true, runValidators: true }
    );

    if (!comment) {
      throw new Error("Comment not found.");
    }
    return comment;
  } catch (error) {
    console.error("Error in updateCommentStatusById service:", error);
    throw error;
  }
};

export const deleteCommentById = async (commentId) => {
  try {
    const result = await CommentModel.findByIdAndDelete(commentId);

    if (!result) {
      throw new Error("Comment not found or already deleted.");
    }

    return { message: "Comment permanently deleted successfully." };
  } catch (error) {
    console.log(error);
  }
};
