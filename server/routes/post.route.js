import { Router } from "express";
import { createPost, deleteUserPost, getUserAllPost, updateUserPost } from "../controllers/post.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

import { isUser } from "../middlewares/roleAuth.js";

const router = Router();

router.use(verifyUser,isUser)

router.post("/create",  upload.single("image"), createPost);

router.get("/my-post", getUserAllPost)

router.put("/:postId",  updateUserPost)

router.delete("/:postId", deleteUserPost)

export default router;
