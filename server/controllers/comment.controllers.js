import { z } from "zod";

import {createComment, getApprovedComments } from "../services/comment.services.js";


const commentSchema = z.object({
  content: z
    .string({ required_error: "Comment content is required." })
    .min(1, "Comment cannot be empty.")
    .max(1000, "Comment cannot exceed 1000 characters.")
});


export const createCommentForPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id; // From verifyUser middleware

    const validation = commentSchema.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(400)
        .json({ success: false, message: validation.error.issues });
    }

    const { content } = validation.data;

    const newComment = await createComment(
      postId,
      userId,
      content
    );

    res.status(201).json({
      success: true,
      message: "Comment submitted and awaiting approval.",
      data: newComment
    });
  } catch (error) {
    console.error("Create Comment Controller Error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};


export const getCommentsForPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await getApprovedComments(postId);
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    console.error("Get Comments Controller Error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
