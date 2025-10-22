import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaBars, FaXmark } from 'react-icons/fa6';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Milan Rawat</h1>
        </Link>
        
        {/* Hamburger menu for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
