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
dislikeSchema.post("save", async function (doc, next) {
  try {
    await PostModel.findByIdAndUpdate(doc.postId, {
      $push: { dislikes: doc._id }
    });
    next();
  } catch (err) {
    next(err);
  }
});

export const DislikeModel =
  mongoose.models.Dislike || mongoose.model("Dislike", dislikeSchema);
