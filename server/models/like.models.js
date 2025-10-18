import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
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
    }
  },
  { timestamps: true }
);

// Ensure a user can like a post only once
likeSchema.index({ postId: 1, userId: 1 }, { unique: true });

export const LikeModel =
  mongoose.models.Like || mongoose.model("Like", likeSchema);
