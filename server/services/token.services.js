import jwt from "jsonwebtoken";
export function generateAccessToken(id) {
  return jwt.sign(id, process.env.ACCESS_SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(id) {
  return jwt.sign(id, process.env.REFRESH_SECRET, { expiresIn: "7d" });
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
