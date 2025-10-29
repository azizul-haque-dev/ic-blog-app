import mongoose from "mongoose";
import cloudinary from "../utils/coudinary.config.js";
import { CommentModel } from "./comments.models.js";
import { DislikeModel } from "./dislike.model.js";
import { LikeModel } from "./like.models.js";
import { UserModel } from "./user.models.js";

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
    categories: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "suspended", "pending"]
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }],
    dislikes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }
    ]
  },
  { timestamps: true }
);

// Text index for full-text search on title and content (weighted)
postSchema.index(
  { title: "text", content: "text" },
  {
    weights: { title: 10, content: 5 },
    name: "post_text_search"
  }
);

// Filter by category index
postSchema.index({ categories: 1 });

// Filter by status index (fixed typo from 'sataus')
postSchema.index({ status: 1 });

// Compound index for filtering approved posts by category
postSchema.index({ status: 1, categories: 1 });

// Index for sorting by creation date (common use case)
postSchema.index({ createdAt: -1 });

// Index for user's posts
postSchema.index({ userId: 1, createdAt: -1 });

// Pre middleware for findOneAndDelete
postSchema.pre("findOneAndDelete", async function (next) {
  try {
    const doc = await this.model.findOne(this.getFilter());
    if (!doc) return next();

    // 1. Delete post image from Cloudinary
    if (doc.imageId) {
      await cloudinary.uploader.destroy(doc.imageId);
    }

    // 2. Delete all comments related to this post
    await CommentModel.deleteMany({ postId: doc._id });

    // 3. Delete all likes related to this post
    await LikeModel.deleteMany({ postId: doc._id });

    // 4. Delete all dislikes related to this post
    await DislikeModel.deleteMany({ postId: doc._id });

    next();
  } catch (err) {
    next(err);
  }
});

postSchema.post("save", async function (doc, next) {
  try {
    if (doc.isNew) {
      await UserModel.findByIdAndUpdate(doc.userId, {
        $push: { posts: doc._id }
      });
    }
  } catch (err) {
    next(err);
  }
});

export const PostModel =
  mongoose.models.Post || mongoose.model("Post", postSchema);
