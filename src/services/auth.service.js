import bcrypt from "bcryptjs";
import User from "../models/user.models.js";

export async function registerUser({ name, email, password }) {
  const existing = await User.findOne({ email });

  if (existing) {
    const error = new Error("Email already in use");
    error.statusCode = 409; // conflict
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash,
  });

  // don't return passwordHash to the caller
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}
