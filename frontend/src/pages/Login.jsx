import React from 'react';
import { use, useState } from "react";
import { loginUser } from "../api/Auth.api";
import { useAuth } from "../context/Auth.context";
import {
  formStyle,
  input_style,
  form_text_style,
  buttonStyle,
  BackgroundStyle,
} from "../styles/style.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errr, setError] = useState("");
  const { login, loginToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const data = await loginUser({ email, password });
      setMessage("Logged in!");
      login(data.token);
      console.log("TOKEN:", data.token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={BackgroundStyle}>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Login to your account
        </h1>
      </div>
      <div className={formStyle}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={form_text_style}>Email</label>
            <br />
            <input className={input_style} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label className={form_text_style}>Password</label>
            <br />
            <input className={input_style}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className={buttonStyle} type="submit">
              <label className={form_text_style}>Login</label>
            </button>
            {errr && <p style={{ color: "red" }}>{errr}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
