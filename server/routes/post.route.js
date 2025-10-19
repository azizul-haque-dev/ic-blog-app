import { Router } from "express";
import {
  createPost,
  updatePost,
  updatePostImage
} from "../controllers/post.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

router.post("/create", verifyUser, upload.single("image"), createPost);
router.put(
  "/update-avater/:id",
  verifyUser,
  upload.single("image"),
  updatePostImage
);
router.put("/update/:id", verifyUser, updatePost);
router.delete("/delete/:id", verifyUser, postDeleteById);
router.get("/get", getPosts);
router.get("/get/:id", getPostById);

export default router;
