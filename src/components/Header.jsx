import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Naslovnica" },
  { to: "/about", label: "O nama" },
  { to: "/categories", label: "Kategorije" },
  { to: "/tours", label: "Izleti" },
  { to: "/contact", label: "Kontakt" },
  { to: "/faq", label: "F.A.Q." },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header sticky-top">
      <div className="container header-content">
        <Link to="/" className="logo">
          Travel Agency
        </Link>

        {/* Hamburger Icon za mobilni prikaz */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav className={`nav ${isOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
