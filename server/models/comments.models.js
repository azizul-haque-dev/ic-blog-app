import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "suspended", "pending"]
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const CommentModel =
  mongoose.models.comment || mongoose.model("comment", commentSchema);
