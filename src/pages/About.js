import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/About.css';

const About = () => {
  const reducedMotion = useReducedMotion();
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about section">
      <div className="section-header">
        <motion.h1
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get to know me better
        </motion.p>
      </div>

      <div className="about-content">
        <motion.div
          className="about-card card"
          initial={reducedMotion ? {} : { x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Who I Am</h2>
          {aboutContent.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          className="about-card card"
          ref={servicesRef}
          initial={reducedMotion ? {} : { x: 20, opacity: 0 }}
          animate={servicesInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>What I Do</h2>
          <div className="services">
            {aboutContent.services.map((service, index) => (
              <motion.div
                className="service-item"
                key={index}
                initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={reducedMotion ? {} : { y: -5 }}
              >
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
