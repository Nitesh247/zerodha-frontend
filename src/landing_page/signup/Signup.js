// frontend/src/landing_page/Signup.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://zerodha-backend-7bz9.onrender.com";
const Zerodha_URL = process.env.REACT_ZERODHA_URL || "https://zerodha-dashboard-ivs4.onrender.com";


function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/signup`, form);

      console.log("Signup response:", res.data);

      // save token if backend sends it
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert(res.data.message || "Signup successful! Redirecting to Dashboard...");

      // 🚀 redirect to dashboard app
      window.location.href = Zerodha_URL;
    } catch (err) {
      console.error("Signup error:", err.response?.data || err);
      alert(
        err?.response?.data?.message ||
          "Signup failed: User may already exist or server error"
      );
    }
  };

  return (
    <div className="container p-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100" type="submit">
          Sign up
        </button>
        

     <p className="mt-3 text-center">
     Already have an account?{" "}
     <Link to="/login">Login here</Link>
     </p>

      </form>
    </div>
  );
}

export default Signup;
