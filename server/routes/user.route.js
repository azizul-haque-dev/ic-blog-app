import { Router } from "express";

import {
  forgetPassword,
  getUserProfile,
  getUserStatistics,
  resetPassword,
  updateUserProfile,
  uploadAvatar
} from "../controllers/user.controllers.js";
import upload from "../middlewares/uploadImage.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

router.patch(
  "/upload/avater",
  verifyUser,
  upload.single("avatar"),
  uploadAvatar
);
router.post("/forget/password", forgetPassword);
router.patch("/reset/password", resetPassword);

router.get("/profile", verifyUser, getUserProfile);

router.patch("/profile", verifyUser, updateUserProfile);

router.get("/stats", verifyUser, getUserStatistics);

export default router;
