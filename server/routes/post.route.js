import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostsForStaticGeneration,
  getUserAllPost,
  postDeleteById,
  singlePost,
  updatePost,
  updatePostImage
} from "../controllers/post.controllers.js";
import { isUser } from "../middlewares/roleAuth.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();
router.get("/get", getPosts);
router.get("/get/static", getPostsForStaticGeneration);
router.get("/get/:id", singlePost);

router.use(verifyUser, isUser);

router.post("/create", upload.single("image"), createPost);
router.patch("/update-post-image/:id", upload.single("image"), updatePostImage);

router.put("/update/:id", updatePost);
router.delete("/delete/:id", postDeleteById);

router.get("/my-post", getUserAllPost);

export default router;
