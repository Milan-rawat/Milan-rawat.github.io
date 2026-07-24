import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa6';
import { personalInfo, socialLinks, portfolioLinks, highlights } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/Home.css';

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const iconMap = { github: <FaGithub />, linkedin: <FaLinkedin /> };

  return (
    <div className="home section">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="hero-section" id="main-content">
        <motion.div
          className="hero-content"
          initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="hero-greeting"
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="highlight">{personalInfo.name}</span>
          </motion.h1>
          <motion.div
            className="rotating-title-wrapper"
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                className="rotating-title"
                initial={reducedMotion ? {} : { y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reducedMotion ? {} : { y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {personalInfo.rotatingTitles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
          <motion.p
            className="hero-summary"
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="hero-summary-full">{personalInfo.summary}</span>
            <span className="hero-summary-short">{personalInfo.summaryShort}</span>
          </motion.p>
          <motion.div
            className="social-icons-home"
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name} profile`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </motion.div>
          <motion.div
            className="hero-buttons"
            initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects <FaArrowRight className="btn-icon" />
            </Link>
            <a
              href={portfolioLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Download resume (opens in new tab)"
            >
              <FaDownload className="btn-icon" /> Download Resume
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={reducedMotion ? {} : { scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="image-placeholder">
            <img
              src="/images/img.JPG"
              alt="Milan Rawat - Full Stack Web Developer"
              width="300"
              height="300"
              loading="eager"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Highlights Strip */}
      <motion.div
        className="highlights-strip"
        initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {highlights.map((item, index) => (
          <div className="highlight-item" key={index}>
            <span className="highlight-value">{item.value}</span>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="home-sections grid"
        initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          className="section-card card"
          whileHover={reducedMotion ? {} : { y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>About Me</h3>
          <p>Learn more about my background, expertise, and interests.</p>
          <Link to="/about" className="btn btn-outline">Explore</Link>
        </motion.div>

        <motion.div
          className="section-card card"
          whileHover={reducedMotion ? {} : { y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Experience</h3>
          <p>Discover my professional journey across 4+ years of development.</p>
          <Link to="/experience" className="btn btn-outline">View</Link>
        </motion.div>

        <motion.div
          className="section-card card"
          whileHover={reducedMotion ? {} : { y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Skills</h3>
          <p>See my technical skills across frontend, backend, cloud, and AI.</p>
          <Link to="/skills" className="btn btn-outline">See Skills</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
