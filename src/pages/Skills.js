import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaJava, FaPython, FaCode, FaChartBar } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const [viewMode, setViewMode] = useState('chips'); // 'list' or 'chips'
  
  const skillsData = [
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "JavaScript", level: 85, icon: <FaJs />, color: "#F7DF1E" },
        { name: "ReactJS", level: 80, icon: <FaReact />, color: "#61DAFB" },
        { name: "NodeJS", level: 75, icon: <FaNode />, color: "#339933" },
        { name: "ExpressJS", level: 70, icon: <FaNode />, color: "#000000" },
        { name: "MongoDB", level: 65, icon: <FaDatabase />, color: "#47A248" }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85, icon: <FaJs />, color: "#F7DF1E" },
        { name: "Java", level: 70, icon: <FaJava />, color: "#007396" },
        { name: "Python", level: 60, icon: <FaPython />, color: "#3776AB" },
        { name: "C/C++", level: 55, icon: <FaCode />, color: "#00599C" }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Data Science Fundamentals", level: 40, icon: <FaChartBar />, color: "#4E79A7" }
      ]
    }
  ];

  return (
    <div className="skills section">
      <div className="section-header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are my technical skills and expertise
        </motion.p>
        <motion.div 
          className="view-toggle"
          onClick={() => setViewMode(viewMode === 'chips' ? 'list' : 'chips')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={viewMode === 'chips' ? 'active' : ''}>Chip View</span>
          <span className="toggle-divider">|</span>
          <span className={viewMode === 'list' ? 'active' : ''}>List View</span>
        </motion.div>
      </div>

      <div className="skills-content grid">
        {skillsData.map((category, index) => (
          <motion.div
            className="skills-category card"
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ y: -5 }}
          >
            <h2>{category.category}</h2>
            {viewMode === 'list' ? (
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 * index + 0.1 * skillIndex }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="skills-chips">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    className="skill-chip"
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`skill-chip-icon ${skill.name.toLowerCase().replace(/[\s\/]/g, "-").replace("+", "plusplus")}`}>
                      {skill.icon}
                    </div>
                    <div className="skill-chip-label">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
