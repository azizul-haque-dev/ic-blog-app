import { PostModel } from "../models/post.model.js";

export const getPostsByUserId = async (userId) => {
  try {
    return await PostModel.find({ userId }).sort({ createdAt: -1 });
  } catch (error) {
    console.error("Error in getPostsByUserId service:", error);
    throw new Error("Could not retrieve user posts.");
  }
};
