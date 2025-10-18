import mongoose from "mongoose";

const dislikeSchema = new mongoose.Schema(
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

// Ensure a user can dislike a post only once
dislikeSchema.index({ postId: 1, userId: 1 }, { unique: true });

export const DislikeModel =
  mongoose.models.Dislike || mongoose.model("Dislike", dislikeSchema);
