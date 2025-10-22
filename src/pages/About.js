import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about section">
      <div className="section-header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get to know me better
        </motion.p>
      </div>
      
      <div className="about-content grid">
        <motion.div
          className="about-card card"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <h2>Who I Am</h2>
          <p>
            I am a tech enthusiast learner currently working as a full stack web developer in Ludhiana, Punjab.
          </p>
          <p>
            I am a quick learner always on the lookout to acquire new skills and utilize them to my fullest potential. 
            I enjoy developing web applications as well as solving programming challenges.
          </p>
          <p>
            I am a full stack web developer with an eye for detail and focus on user centred design. 
            I have extensive experience with HTML, CSS, Javascript, React, NodeJS & MongoDB.
          </p>
        </motion.div>
        
        <motion.div
          className="about-card card"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <h2>What I Do</h2>
          <div className="services grid">
            <motion.div 
              className="service-item card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Creating responsive and interactive websites using modern technologies</p>
            </motion.div>
            
            <motion.div 
              className="service-item card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">⚙️</div>
              <h3>UI/UX Design</h3>
              <p>Designing user-friendly interfaces with focus on用户体验</p>
            </motion.div>
            
            <motion.div 
              className="service-item card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">📝</div>
              <h3>Technical Writing</h3>
              <p>Creating technical content and documentation</p>
            </motion.div>
            
            <motion.div 
              className="service-item card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">🔍</div>
              <h3>Problem Solving</h3>
              <p>Developing logical solutions to complex programming challenges</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
