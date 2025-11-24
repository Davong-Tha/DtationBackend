import express from "express";
import pingRouter from "./routes/ping.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();
// CORS should be as early as possible
// Log every request and its Origin header
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} Origin: ${req.headers.origin}`
  );
  next();
});

// CORS: reflect whatever Origin the browser sends
app.use(
  cors({
    origin: true, // echo back req.headers.origin
  })
);

// Handle preflight for all routes
app.options("*", cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/ping", pingRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/project", projectRouter);

app.use((req, res) => {
  console.warn(`No route matched: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    error: "Not Found",
    method: req.method,
    path: req.originalUrl,
  });
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB");
    console.error(err);
    process.exit(1);
  }
}

start();
