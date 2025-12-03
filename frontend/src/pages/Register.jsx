import React from 'react';
import { useState } from "react";
import { registerUser } from "../api/Auth.api";
import {
  formStyle,
  input_style,
  form_text_style,
  buttonStyle,
  BackgroundStyle,
} from "../styles/style.js";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const data = await registerUser({ name, email, password });
      setMessage("Regsitered!");
      console.log("User:", data.name);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={BackgroundStyle}>
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold text-slate-900">
          Register and Create an account
        </h1>
        <p className="mt-2 text-sm text-slate-800">
          Join us and get started in a few seconds.
        </p>
      </div>
      <div className={formStyle}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={form_text_style}>Name</label>
            <br />
            <input
              className={input_style}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className={form_text_style}>Email</label>
            <br />
            <input
              className={input_style}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={form_text_style}>Password</label>
            <br />
            <input
              className={input_style}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={buttonStyle}>
            <label className={form_text_style}>Register</label>
          </button>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}
