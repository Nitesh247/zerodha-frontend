import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔐 Call your backend /login
      const res = await axios.post(`${API_URL}/login`, form);

      console.log("Login response:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert(res.data.message || "Login successful! Redirecting to Dashboard...");

      // 🚀 Redirect to dashboard (same as signup)
      window.location.href = "http://localhost:3001";
    } catch (err) {
      console.error("Login error:", err.response?.data || err);

      // Show backend error message if present
      alert(
        err?.response?.data?.message ||
          "Login failed: Invalid credentials or server error"
      );
    }
  };

  return (
    <div className="container p-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
