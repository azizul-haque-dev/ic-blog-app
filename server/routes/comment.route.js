import { Router } from "express";
import {
  createCommentForPost,
  getCommentsForPost
} from "../controllers/comment.controllers.js";
import { verifyUser } from "../middlewares/verifyuser.js";

// The { mergeParams: true } option is crucial for nested routing.
// It allows this router to access parameters from its parent router
const router = Router({ mergeParams: true });


router.post("/", verifyUser, createCommentForPost);


router.get("/", getCommentsForPost);

export default router;

