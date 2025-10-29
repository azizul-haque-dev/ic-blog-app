import mongoose from "mongoose";
import { PostModel } from "./post.model.js";

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

//  Add userId to Post.likes when like is created
likeSchema.post("save", async function (doc, next) {
  try {
    await PostModel.findByIdAndUpdate(doc.postId, {
      $addToSet: { likes: doc.userId }
    });
    next();
  } catch (err) {
    next(err);
  }
});

//  Remove userId from Post.likes when like is deleted
likeSchema.post("findOneAndDelete", async function (doc) {
  try {
    if (doc) {
      await PostModel.findByIdAndUpdate(doc.postId, {
        $pull: { likes: doc.userId }
      });
    }
  } catch (err) {
    console.error("Error removing like from post:", err);
  }
});

export const LikeModel =
  mongoose.models.Like || mongoose.model("Like", likeSchema);
