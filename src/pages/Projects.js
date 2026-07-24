import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData, professionalProjects } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/Projects.css';

const ProjectCard = ({ project, index, reducedMotion, featured }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      className={`project-card card ${featured ? 'featured' : ''}`}
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={reducedMotion ? {} : { y: -8 }}
    >
      {project.image && (
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.name} - ${project.subtitle}`}
            loading="lazy"
            width="400"
            height="225"
          />
          <div className="project-image-overlay"></div>
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <h3>{project.name}</h3>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        {project.technologies && (
          <div className="project-tech">
            {project.technologies.slice(0, 8).map((tech, i) => (
              <span className="tech-badge" key={i}>{tech}</span>
            ))}
            {project.technologies.length > 8 && (
              <span className="tech-badge tech-more">+{project.technologies.length - 8} more</span>
            )}
          </div>
        )}
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn primary"
              aria-label={`View ${project.name} live demo`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="projects section">
      <div className="section-header">
        <motion.h1
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured personal projects and professional work
        </motion.p>
      </div>

      {/* Featured Projects */}
      <section className="featured-projects" aria-label="Featured Projects">
        <h2 className="subsection-title">Featured Projects</h2>
        <div className="projects-grid featured-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
              featured={true}
            />
          ))}
        </div>
      </section>

      {/* Professional Projects */}
      <section className="professional-projects" aria-label="Professional Projects">
        <h2 className="subsection-title">Professional Work</h2>
        <p className="subsection-desc">Projects built during professional engagements</p>
        <div className="projects-grid professional-grid">
          {professionalProjects.map((project, index) => (
            <motion.article
              className="project-card card compact"
              key={project.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={reducedMotion ? {} : { y: -5 }}
            >
              <div className="project-content">
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                <span className="project-category-badge">{project.category}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
