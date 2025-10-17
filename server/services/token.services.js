import jwt from "jsonwebtoken";
export function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "7d" });
}

export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, process.env.ACCESS_SECRET);
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.REFRESH_SECRET);
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
