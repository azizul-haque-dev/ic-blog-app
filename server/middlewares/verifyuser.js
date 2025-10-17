import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    //  1. If no tokens at all
    if (!accessToken && !refreshToken) {
      return res.status(401).json({ message: "No tokens provided" });
    }

    //  2. Try verifying access token first
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      req.user = decoded;
      // Token is valid → go to next route
      return next();
    } catch (err) {
      // If access token expired, we will try refresh
      if (err.name !== "TokenExpiredError") {
        return res.status(401).json({ message: "Invalid access token" });
      }
    }

    //  3. Try refreshing token if access token expired
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token missing" });
    }

    try {
      const decodedRefresh = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET
      );
      const user = await UserModel.findById(decodedRefresh.id).select(
        "-password"
      );

      if (!user || user.refreshToken !== refreshToken) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }

      //  Generate new access token
      const newAccessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      //  issue new refresh token
      const newRefreshToken = jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
      );

      // ✅ Set new cookies
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000
      });
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
      });
      // set user to the req
      req.user = user;
      // Continue to the route
      next();
    } catch (refreshError) {
      console.error("Refresh failed:", refreshError);
      return res
        .status(403)
        .json({ message: "Invalid or expired refresh token" });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
