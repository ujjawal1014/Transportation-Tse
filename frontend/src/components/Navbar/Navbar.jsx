import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../Login/Login"; // Import the login component
import Signup from "../Login/Signup"; // Import the signup component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal visibility
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // State for signup modal visibility

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Function to open the login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close the login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Function to open the signup modal
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  // Function to close the signup modal
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-brand">
        <Link to="/home" className="logo">
          DriveSafe
        </Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/about-us" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/start-drive" className="navbar-link">
            Start Drive
          </Link>
        </li>
        <li>
          <Link to="/traffic-rules" className="navbar-link">
            Traffic Rules
          </Link>
        </li>
        <li>
          <Link onClick={openLoginModal} className="navbar-link">
            Login
          </Link>
        </li>
        <li>
          <Link onClick={openSignupModal} className="navbar-link">
            Signup
          </Link>
        </li>
      </ul>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>
              &times;
            </span>
            <Login />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSignupModal}>
              &times;
            </span>
            <Signup />
          </div>
        </div>
      )}
    </nav>
  );
}
