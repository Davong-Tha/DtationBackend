import { registerUser, loginUser } from "../services/auth.service.js";

import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.email({ message: "Invalid email format" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function register(req, res) {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error.issues[0].message });
    }

    const { name, email, password } = result.data;

    const user = await registerUser({ name, email, password });

    return res.status(201).json(user);
  } catch (err) {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : "Failed to register user";

    return res.status(status).json({ error: message });
  }
}

export async function login(req, res) {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error.issues[0].message });
    }

    const { email, password } = result.data;

    const user = await loginUser({ email, password });

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);

    const status = err.statusCode || 500;
    return res.status(status).json({ error: err.message });
  }
}
