import jwt from "jsonwebtoken";

export function requiredAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Missing or invalid authorization header" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded._id,
      name: decoded.name,
      email: decoded.email,
    };
    next();
  } catch (err) {
    console.error("JWT verification failed", err.message);
    return res.status(401).json({ error: "Invalid token" });
  }
}
