import { Router } from "express";
import {
  createPost,
  getPosts,
  getUserAllPost,
  postDeleteById,
  singlePost,
  updatePost,
  updatePostImage
} from "../controllers/post.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";
import { isUser } from "../middlewares/roleAuth.js";

import { isUser } from "../middlewares/roleAuth.js";

const router = Router();


router.use(verifyUser, isUser)

router.post("/create",  upload.single("image"), createPost);
router.patch(
  "/update-post-image/:id",
  upload.single("image"),
  updatePostImage
);



router.put("/update/:id", updatePost);
router.delete("/delete/:id",  postDeleteById);
router.get("/get",  getPosts);
router.get("/get/:id",  singlePost);

router.get("/my-post", getUserAllPost)




export default router;
