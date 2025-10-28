import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          &copy; {new Date().getFullYear()} Travel Agency. Sva prava pridržana.
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
