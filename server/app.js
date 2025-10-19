import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import commentRoutes from "./routes/comment.route.js"

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.APP_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test Route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// auth route
app.use("/api/auth", authRoutes);
// user route
app.use("/api/user", userRoutes);
// admin route
app.use("/api/admin", adminRoutes)
// post route
app.use("/api/post", postRoutes);

// comment route
app.use("/api/posts/:postId/comments", commentRoutes)


app.use((err, req, res, next) => {
  console.error(err.stack, "error via middleware");
  if (process.env.NODE_ENV === "development") {
    return res.status(500).json({ message: err.message, stack: err.stack });
  }
  res.status(500).json({ message: "Something went wrong!" });
});

export { app };
