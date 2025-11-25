// frontend/src/landing_page/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container py-3 d-flex align-items-center">
        {/* Brand goes to home (/) */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span
            style={{
              fontWeight: 600,
              fontSize: "22px",
              letterSpacing: "2px",
              color: "#1e88e5",
            }}
          >
            ZERODHA
          </span>
        </Link>

        <div className="flex-grow-1 d-none d-lg-flex justify-content-end">
          <ul className="navbar-nav align-items-center gap-4">
            {/* Signup in navbar → /signup */}
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            {/* Your original code had Contact going to /signup too, keeping same behavior */}
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Contact
              </Link>
            </li>

            {/* Other links still anchor to sections on home page */}
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#support">
                Support
              </a>
            </li>
          </ul>
        </div>

        <button
          className="border-0 bg-transparent d-lg-none ms-3"
          type="button"
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "24px",
              lineHeight: "1",
            }}
          >
            ☰
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
