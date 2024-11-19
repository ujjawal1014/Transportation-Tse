import React from "react";
import "./Footer.css"; // Ensure the CSS file is in the same folder
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo */}
        <div className="footer-left">
          <img
            src="https://www.pinclipart.com/picdir/middle/112-1128023_open-road-safety-signs-for-pedestrians-clipart.png" // Replace with your logo/image URL
            alt="DriveSafe Logo"
            className="footer-logo"
          />
        </div>

        {/* Middle Section: Title */}
        <div className="footer-title-container">
          <h2 className="footer-title">Drive Safe</h2>
          <p className="footer-subtitle">
            Stay alert, follow rules, drive responsibly, and save precious lives.
          </p>
        </div>

        {/* Center Section: Links */}
        <div className="footer-center">
          <ul className="footer-links">
            <li>
              <a href="/about-us" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/start-drive" className="footer-link">
                Start Drive
              </a>
            </li>
            <li>
              <a href="/traffic-rules" className="footer-link">
                Traffic Rules
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-right">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
