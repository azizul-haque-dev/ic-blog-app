import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
  verifyEmail
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh-token", refreshToken);

export default router;
