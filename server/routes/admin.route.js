import { Router } from "express";
import {
  createUserByAdmin,
  deleteComment,
  deleteUserbyId,
  getAdminPost,
  getAllPendingPost,
  getAllPosts,
  getAllUsers,
  getWithoutPendingPost,
  updateCommentStatus,
  updatePostStatus,
  updateUserRole,
  updateUserStatus
} from "../controllers/admin.controller.js";
import { postDeleteById, singlePost } from "../controllers/post.controllers.js";
import { isAdmin } from "../middlewares/roleAuth.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

// Apply authentication and authorization middleware to all admin routes
router.use(verifyUser, isAdmin);

router.get("/users", getAllUsers);
router.post("/users/create", createUserByAdmin);
router.put("/users/:id/status", updateUserStatus);
router.put("/users/:id/role", updateUserRole);
router.delete("/users/:id", deleteUserbyId);


router.get("/posts", getAllPosts);
router.get("/posts/all", getAdminPost);

router.put("/posts/:id/status", updatePostStatus);
router.get("/get/pending-posts", getAllPendingPost);
router.get("/get/without-pending-posts", getWithoutPendingPost);
router.delete("/post/delete/:id", postDeleteById);
router.get("/get/:id", singlePost);

router.put("/comments/:commentId/status", updateCommentStatus);
router.delete("/comments/:commentId", deleteComment);

export default router;
