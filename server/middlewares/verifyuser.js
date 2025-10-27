import { verifyAccessToken } from "../services/token.services.js";

export const verifyUser = (req, res, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.headers["authorization"]?.split(" ")[1] ||
      null;

    console.log({ accessToken, message: "Access token received in server" });

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token"
      });
    }

    const decoded = verifyAccessToken(accessToken);
    if (!decoded)
      return res.status(401).json({
        success: false,
        message: "Invalid access token"
      });

    console.log({ decoded, message: "Decoded user info" });

    // Attach decoded user to request
    req.user = decoded;

    next();
  } catch (error) {
    console.error({ errorName: error.name, errorMessage: error.message });

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "expired access token"
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid access token"
    });
  }
};
