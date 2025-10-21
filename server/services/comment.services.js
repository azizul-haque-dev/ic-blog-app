import { CommentModel } from "../models/comments.models.js";

export const createComment = async (postId, userId, content) => {
  try {
    const comment = new CommentModel({
      postId,
      userId,
      content
    });
    await comment.save();

    // Populate the author's information before returning
    const newComment = await CommentModel.findById(comment._id).populate(
      "userId",
      "name avatarUrl"
    );
    return newComment;
  } catch (error) {
    console.error("Error in createCommentForPost service:", error);
    throw new Error("Could not create comment.");
  }
};


export const getApprovedComments = async (postId) => {
  try {
    const comments = await CommentModel.find({
      postId,
      status: "approved"
    })
      .populate("userId", "name avatarUrl") // Populate author details
      .sort({ createdAt: "desc" }); // Show newest comments first
    return comments;
  } catch (error) {
    console.error("Error in getApprovedCommentsForPost service:", error);
    throw new Error("Could not retrieve comments.");
  }
};
