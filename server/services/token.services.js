import jwt from "jsonwebtoken";

export function generateAccessToken(payload) {
  try {
    const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "1d"
    });
    return token;
  } catch (error) {
    console.error("Error generating access token:", error);
    throw new Error("Failed to generate access token");
  }
}

export function generateRefreshToken(userId) {
  try {
    return jwt.sign({ userId }, process.env.REFRESH_SECRET, {
      expiresIn: "7d"
    });
  } catch (error) {
    console.error("Error generating refresh token:", error);
    throw new Error("Failed to generate refresh token");
  }
}



export function generateVerifyEmailToken(email) {
  try {
    const payload = { email }; 
    const secret = process.env.EMAIL_SECRET;

    if (!secret) {
      throw new Error("EMAIL_SECRET is missing from environment variables");
    }

    // Token expires in 5 minutes
    return jwt.sign(payload, secret, { expiresIn: "5m" });
  } catch (error) {
    console.error("Error generating email verification token:", error);
    throw new Error("Failed to generate email verification token");
  }
}


export function generateResetToken(email) {
  try {
    return jwt.sign(email, process.env.JWT_SECRET, { expiresIn: "10m" });
  } catch (error) {
    console.error("Error generating password reset token:", error);
    throw new Error("Failed to generate password reset token");
  }
}

export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, process.env.ACCESS_SECRET);
  } catch (error) {
    console.error("Access Token verification failed:", error);
    return null;
  }
}
export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.REFRESH_SECRET);
  } catch (error) {
    console.error("Refresh Token verification failed:", error);
    return null;
  }
}

export function verifyEmailToken(token) {
  try {
    return jwt.verify(token, process.env.EMAIL_SECRET);
  } catch (error) {
    console.error("Email Token verification failed:", error);
    return null;
  }
}
