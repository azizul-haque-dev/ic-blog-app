import { Router } from "express";
import {
  createPost,
  getPosts,
  postDeleteById,
  singlePost,
  updatePost,
  updatePostImage
} from "../controllers/post.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

router.post("/create", verifyUser, upload.single("image"), createPost);
router.patch(
  "/update-post-image/:id",
  verifyUser,
  upload.single("image"),
  updatePostImage
);
router.put("/update/:id", verifyUser, updatePost);
router.delete("/delete/:id", verifyUser, postDeleteById);
router.get("/get", verifyUser, getPosts);
router.get("/get/:id", verifyUser, singlePost);

export default router;
