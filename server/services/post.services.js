import { PostModel } from "../models/post.model.js";

export const getPostsByUserId = async (userId) => {
  try {
    return await PostModel.find({ userId }).sort({ createdAt: -1 });
  } catch (error) {
    console.error("Error in getPostsByUserId service:", error);
    throw new Error("Could not retrieve user posts.");
  }
};



export const updateUserPostById = async (postId, userId, updateData) => {
  try {
    // The query { _id: postId, userId } ensures a user can ONLY update their own post.
    const post = await PostModel.findOneAndUpdate(
      { _id: postId, userId: userId },
      updateData,
      { new: true, runValidators: true }
    );
    return post;
  } catch (error) {
    console.error("Error in updateUserPostById service:", error);
    throw new Error("Could not update the post.");
  }
};


export const deleteUserPostById = async (postId, userId) => {
  try {
    // Atomically finds a post owned by the user and deletes it.
    const post = await PostModel.findOneAndDelete({ _id: postId, userId: userId });
    // The pre-hook on your PostModel automatically handles deleting the Cloudinary image and associated comments.
    return post;
  } catch (error) {
    console.error("Error in deleteUserPostById service:", error);
    throw new Error("Could not delete the post.");
  }
};

