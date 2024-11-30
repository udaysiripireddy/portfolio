import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Uday Kumar Siripireddy. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/udaysiripireddy"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/udaysiripireddy/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          LeetCode
        </a>
        <a
          href="https://www.linkedin.com/in/uday-kumar-siripireddy/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
        <a
          href="https://vercel.com/udaysiripireddys-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Vercel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
