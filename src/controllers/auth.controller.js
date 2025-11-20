import { registerUser } from '../services/auth.service.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email and password are required' });
    }

    const user = await registerUser({ name, email, password });

    return res.status(201).json(user);
  } catch (err) {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : 'Failed to register user';

    return res.status(status).json({ error: message });
  }
}
