import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "approved",
      enum: ["approved", "suspended"],
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// when comment created add comment id into post.comments
commentSchema.post("save", async function (doc, next) {
  try {
    await PostModel.findByIdAndUpdate(doc.postId, {
      $push: { comments: doc._id },
    });
    next();
  } catch (err) {
    next(err);
  }
});

// Static method: find comments by post
commentSchema.statics.findByPostId = function (postId) {
  return this.find({ postId })
    .populate("userId", "name email avatarUrl")
    .lean();
};

export const CommentModel =
  mongoose.models.comment || mongoose.model("comment", commentSchema);
