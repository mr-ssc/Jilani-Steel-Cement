import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./Img/logo.png";
import {
  FaBox,
  FaHome,
  FaImage,
  FaInfoCircle,
  FaPhone,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-logo">
          <img src={logo} alt="Jilani Logo" />
          <div className="navbar-brand">
            <strong>JILANI</strong>
            <span>Steel & Cement</span>
          </div>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes size={24} color="#fff" />
          </button>
          <ul>
            <li>
              <a
                href="/"
                className={activeLink === "Home" ? "active" : ""}
                onClick={() => {
                  setActiveLink("Home");
                  closeMenu();
                }}
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className={activeLink === "About" ? "active" : ""}
                onClick={() => {
                  setActiveLink("About");
                  closeMenu();
                }}
              >
                <FaInfoCircle /> About
              </a>
            </li>
            <li>
              <a
                href="/Products"
                className={activeLink === "Products" ? "active" : ""}
                onClick={() => {
                  setActiveLink("Products");
                  closeMenu();
                }}
              >
                <FaBox /> Products
              </a>
            </li>
            <li>
              <a
                href="/Gallery"
                className={activeLink === "Gallery" ? "active" : ""}
                onClick={() => {
                  setActiveLink("Gallery");
                  closeMenu();
                }}
              >
                <FaImage /> Gallery
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className={activeLink === "Contact" ? "active" : ""}
                onClick={() => {
                  setActiveLink("Contact");
                  closeMenu();
                }}
              >
                <FaPhone /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          {menuOpen ? (
            <FaTimes size={26} color="#ff4e1d" />
          ) : (
            <GiHamburgerMenu size={26} color="#ff4e1d" />
          )}
        </button>
      </nav>

      {/* Overlay Blur */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;