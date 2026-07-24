import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioLinks } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Milan Rawat. All rights reserved.</p>
          <p>Designed and built with React</p>
          <div className="footer-links">
            <a
              href={portfolioLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={portfolioLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
