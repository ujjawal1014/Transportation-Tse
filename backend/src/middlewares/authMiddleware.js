const jwtProvider = require('../config/jwtProvider');
const User = require('../models/user.model');

// Middleware to check if the user is logged in
const requireLogin = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authorizationHeader.split(" ")[1]; // Extract the token part
    
    const userId = jwtProvider.getUserIdFromToken(token); // Get the user ID from the token

    if (!userId) {
      return res.status(401).json({ message: "Invalid token. User ID not found." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "Invalid token. User not found." });
    }

    req.user = user; // Attach the user to the request object for subsequent middleware
    next(); 
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Middleware to restrict access to Admins only
const requireAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      return next(); 
    } else {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
  } catch (error) {
    console.error("Admin check error:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { requireLogin, requireAdmin };
