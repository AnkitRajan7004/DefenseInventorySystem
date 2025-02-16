import jwt from "jsonwebtoken";
import User from "../models/User.js";
const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(404).json({ success: false, error: "Token Not Provided" });
    }

    // Verify token using JWT secret
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // If the token is invalid
    if (!decoded) {
      return res.status(404).json({ success: false, error: "Token Not Valid" });
    }
    // Find user by decoded ID
    const user = await User.findById({_id: decoded._id}).select('-password');

    // If user not found
    if (!user) {
      return res.status(404).json({ success: false, error: "User Not Found" });
    }

    // Attach user to request object
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

export default verifyUser;
