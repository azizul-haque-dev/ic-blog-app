import argon2 from "argon2";
import mongoose from "mongoose";
import cloudinary from "../utils/coudinary.config.js";
import { PostModel } from "./post.model.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, default: "" },
    avatarId: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String, default: null },
    verificationTokenExpireAt: { type: Date, default: null },
    posts: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }
    ],
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "suspended", "pending"]
    },
    role: { type: String, default: "user", enum: ["user", "admin"] }
  },
  { timestamps: true }
);

// Pre-save middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await argon2.hash(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

// Pre-update middleware
userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      update.password = await argon2.hash(update.password);
    } catch (err) {
      return next(err);
    }
  }
  next();
});
// remove image
userSchema.pre("remove", async function (next) {
  try {
    if (this.avatarId) {
      // delete fromCloudinary
      await cloudinary.uploader.destroy(this.avatarId);
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Delete image on user delete
userSchema.pre("findOneAndDelete", async function (next) {
  try {
    const doc = await this.model.findOne(this.getFilter());
    if (doc && doc.avatarId) {
      // delete fromCloudinary
      await cloudinary.uploader.destroy(doc.avatarId);
      // delete all user post
      await PostModel.deleteMany({ userId: doc._id });
    }
    next();
  } catch (err) {
    next(err);
  }
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
