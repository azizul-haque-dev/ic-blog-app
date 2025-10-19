import { Router } from "express";
import { createPost } from "../controllers/post.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

router.post("/create", verifyUser, upload.single("image"), createPost);

export default router;
