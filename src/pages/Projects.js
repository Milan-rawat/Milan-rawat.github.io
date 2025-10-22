import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Quotes Manager",
      description: "A web application for managing and sharing quotes.",
      image: "/images/projects/quotesmanager.png",
      link: "https://react-http-e320b.firebaseapp.com/quotes"
    },
    {
      id: 2,
      title: "Shops List",
      description: "An application for listing and managing shops.",
      image: "/images/projects/shopslist.png",
      link: "https://shopslistapp.herokuapp.com"
    },
    {
      id: 3,
      title: "Tenants Manager",
      description: "A system for managing tenant information and records.",
      image: "/images/projects/tenantsmanager.png",
      link: "https://tenantsmanager.herokuapp.com/"
    },
    {
      id: 4,
      title: "Natours",
      description: "A tour booking website with modern UI.",
      image: "/images/projects/natours.png",
      link: "https://natours2app.herokuapp.com"
    },
    {
      id: 5,
      title: "Next Meetup",
      description: "A meetup organization and management platform.",
      image: "/images/projects/nextmeetup.png",
      link: "https://nextjs-meetups-orcin.vercel.app/"
    },
    {
      id: 6,
      title: "React Meals",
      description: "A food ordering application built with React.",
      image: "/images/projects/reactmeals.png",
      link: "https://reactmealsapp.herokuapp.com/"
    }
  ];

  return (
    <div className="projects section">
      <div className="section-header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of the projects I've worked on
        </motion.p>
      </div>

      <motion.div 
        className="projects-grid grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card card"
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link btn btn-outline"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
