import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home section">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I'm <span className="highlight">Milan Rawat</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm a tech enthusiast and full stack web developer with experience in HTML, CSS, JavaScript, 
            React, Node.js, Express.js, and MongoDB. I enjoy creating web applications and solving 
            programming challenges.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>
            <a 
              href="https://drive.google.com/file/d/1epJ-msMA2d7hFRvxkdFvFnRvM0HJSuG3/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="image-placeholder">
            <motion.img 
              src="/images/img.JPG" 
              alt="Milan Rawat" 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pulse"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="home-sections grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div 
          className="section-card card"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>About Me</h3>
          <p>Learn more about my background, education, and interests.</p>
          <Link to="/about" className="btn btn-outline">Explore</Link>
        </motion.div>
        
        <motion.div 
          className="section-card card"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Experience</h3>
          <p>Discover my professional journey and work experience.</p>
          <Link to="/experience" className="btn btn-outline">View</Link>
        </motion.div>
        
        <motion.div 
          className="section-card card"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Skills</h3>
          <p>See my technical skills and expertise.</p>
          <Link to="/skills" className="btn btn-outline">See Skills</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
