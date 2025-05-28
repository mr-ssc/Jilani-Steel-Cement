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

  // Set active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    const linkName = 
      path === '/' ? 'Home' :
      path === '/About' ? 'About' :
      path === '/Products' ? 'Products' :
      path === '/Gallery' ? 'Gallery' :
      path === '/Contact' ? 'Contact' : 'Home';
    setActiveLink(linkName);
  }, []);

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

  // Navigation items data
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/About", icon: <FaInfoCircle /> },
    { name: "Products", path: "/Products", icon: <FaBox /> },
    { name: "Gallery", path: "/Gallery", icon: <FaImage /> },
    { name: "Contact", path: "/Contact", icon: <FaPhone /> },
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Jilani Logo" />
          </a>
          <div className="navbar-brand">
            <a href="/">
              <strong>JILANI</strong>
              <span>Steel & Cement</span>
            </a>
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
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={activeLink === item.name ? "active" : ""}
                  onClick={() => {
                    setActiveLink(item.name);
                    closeMenu();
                  }}
                >
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
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