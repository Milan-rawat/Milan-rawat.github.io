import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';
import { educationData, certificationsData } from '../data/certificationsData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/Experience.css';

const TimelineItem = ({ item, index, reducedMotion }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="experience-item"
      initial={reducedMotion ? {} : { opacity: 0, y: 30, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="experience-marker">
        <div className="marker-dot"></div>
      </div>
      <div className="experience-card card">
        <div className="experience-header">
          {item.image && (
            <div className="experience-logo">
              <img src={item.image} alt={item.company} width="60" height="60" loading="lazy" />
            </div>
          )}
          <div className="experience-meta">
            <h3>{item.role}</h3>
            <h4>{item.company}{item.location ? `, ${item.location}` : ''}</h4>
            <span className="experience-period">{item.startDate} — {item.endDate}</span>
          </div>
          {item.website && (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
              aria-label={`Visit ${item.company} website`}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

        {item.projects && item.projects.map((project, pIndex) => (
          <div className="experience-project" key={pIndex}>
            <h5 className="project-name">
              {project.name}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website`}
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </h5>
            <ul className="project-responsibilities">
              {project.responsibilities.map((resp, rIndex) => (
                <li key={rIndex}>{resp}</li>
              ))}
            </ul>
            {project.technologies && (
              <div className="project-tech-tags">
                {project.technologies.map((tech, tIndex) => (
                  <span className="tech-tag" key={tIndex}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="experience section">
      <div className="section-header">
        <motion.h1
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My professional journey and work experience
        </motion.p>
      </div>

      {/* Work Experience */}
      <div className="experience-timeline">
        <div className="timeline-line" aria-hidden="true"></div>
        {experienceData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} reducedMotion={reducedMotion} />
        ))}
      </div>

      {/* Education */}
      <motion.div
        className="education-section"
        initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="subsection-title">Education</h2>
        {educationData.map((edu) => (
          <div className="education-card card" key={edu.id}>
            {edu.image && (
              <div className="education-logo">
                <img src={edu.image} alt={edu.institution} width="60" height="60" loading="lazy" />
              </div>
            )}
            <div className="education-info">
              <h3>{edu.fullDegree}</h3>
              <h4>{edu.institution}</h4>
              <span className="experience-period">{edu.startDate} — {edu.endDate}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="certifications-section"
        initial={reducedMotion ? {} : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="subsection-title">Certifications</h2>
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} reducedMotion={reducedMotion} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const CertificationCard = ({ cert, index, reducedMotion }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="certification-card card"
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={reducedMotion ? {} : { y: -5 }}
    >
      <div className="cert-header">
        <h4>{cert.title}</h4>
        <span className="cert-issuer">{cert.issuer}</span>
      </div>
      <span className="cert-date">{cert.issueDate}</span>
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
          aria-label={`View ${cert.title} credential`}
        >
          View Credential <FaExternalLinkAlt />
        </a>
      )}
    </motion.div>
  );
};

export default Experience;
