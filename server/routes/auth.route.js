import { Router } from "express";
import { loginUser, logoutUser, registerUser, verifyEmail } from "../controllers/auth.controllers.js";
import { verifyUser } from "../middlewares/verifyuser.js";

const router = Router();

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);

router.post("/login", loginUser)
router.post("/logout", verifyUser, logoutUser)

export default router;
