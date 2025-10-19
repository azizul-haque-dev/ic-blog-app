import mongoose from "mongoose";
import cloudinary from "../utils/coudinary.config.js";
import { CommentModel } from "./comments.models.js";
import { DislikeModel } from "./dislike.model.js";
import { LikeModel } from "./like.models.js";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imageId: { type: String, required: true },
    categories: { type: [String], required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "rejected", "pending"]
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
    dislikes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }
    ]
  },
  { timestamps: true }
);
// Text index for search
postSchema.index({ title: "text", content: "text" });
// filter by category index
postSchema.index({ categories: 1 });
// Pre middleware for findOneAndDelete
postSchema.pre("findOneAndDelete", async function (next) {
  try {
    const doc = await this.model.findOne(this.getFilter());
    if (!doc) return next();

    // 1. Delete post image from Cloudinary
    if (doc.imageId) {
      await cloudinary.uploader.destroy(doc.imageId);
    }

    //  Delete all comments related to this post
    await CommentModel.deleteMany({ postId: doc._id });

    //  Delete all likes related to this post
    await LikeModel.deleteMany({ postId: doc._id });

    //  Delete all dislikes related to this post
    await DislikeModel.deleteMany({ postId: doc._id });

    next();
  } catch (err) {
    next(err);
  }
});

export const PostModel =
  mongoose.models.Post || mongoose.model("Post", postSchema);
