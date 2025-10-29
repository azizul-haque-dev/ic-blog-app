import { Router } from "express";
import {
  dislikePost,
  getLikeStatus,
  likePost
} from "../controllers/like.controllers.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

// All routes require authentication
router.use(verifyUser);

//  Like a post (toggle)
router.post("/:postId/like", likePost);

//  Dislike a post (toggle)
router.post("/:postId/dislike", dislikePost);

//  Get like/dislike status for a post
router.get("/:postId/status", getLikeStatus);

export default router;
