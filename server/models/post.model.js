import cloudinary from "cloudinary";
import mongoose from "mongoose";
import { CommentModel } from "./comments.models";
import { DislikeModel } from "./dislike.model";
import { LikeModel } from "./like.models";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    imageId: { type: String, default: "" },
    categories: { type: [String], default: [] },
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
      await cloudinary.v2.uploader.destroy(doc.imageId);
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
