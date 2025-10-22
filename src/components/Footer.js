import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Milan Rawat. All rights reserved.</p>
          <p>Designed and built with React</p>
          <div className="footer-links">
            <a href="https://github.com/Milan-rawat" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/milan-rawat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/immrawat" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
