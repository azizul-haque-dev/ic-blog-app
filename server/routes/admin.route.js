import { Router } from "express";
import {
  getAllUsers,
  createUserByAdmin,
  updateUserStatus,
  getAllPosts,
  updatePostStatus,
  updateCommentStatus,
  deleteComment

} from "../controllers/admin.controller.js";
import { verifyUser } from "../middlewares/verifyuser.js"; 
import { isAdmin } from "../middlewares/roleAuth.js";

const router = Router();

// Apply authentication and authorization middleware to all admin routes
router.use(verifyUser, isAdmin);


router.get("/users", getAllUsers);
router.post("/users/create", createUserByAdmin);
router.put("/users/:id/status", updateUserStatus);


router.get("/posts", getAllPosts);
router.put("/posts/:id/status", updatePostStatus);


router.put("/comments/:commentId/status", updateCommentStatus);
router.delete("/comments/:commentId", deleteComment);

export default router;

