import { UserModel } from "../models/user.models.js";
import { PostModel } from "../models/post.model.js";

export const getAllUsersWithStats = async () => {
  const users = await UserModel.find({}).select("-password");

  const totalUsers = await UserModel.countDocuments();
  const adminCount = await UserModel.countDocuments({ role: "admin" });
  const suspendedCount = await UserModel.countDocuments({ status: "suspended" });

  return {
    users,
    stats: {
      totalUsers,
      adminCount,
      suspendedCount,
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
    isVerified: true, // Admin-created accounts are verified by default
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
    .sort({ createdAt: -1 }); // Sort by newest first
  return posts;
};


export const updatePostStatusById = async (id, status) => {
 
  const post = await PostModel.findByIdAndUpdate(id, { status }, { new: true });
  return post;
};

