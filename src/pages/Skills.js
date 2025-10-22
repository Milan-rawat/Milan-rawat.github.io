import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaJava, FaPython, FaCode, FaChartBar, FaGitAlt, FaDocker, FaMobile, FaLinux, FaPlug, FaUserLock, FaRobot } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap, SiDjango, SiPostgresql, SiMysql, SiSqlite, SiFirebase, SiVectorlogozone, SiVercel, SiNetlify, SiJupyter, SiOpenai, SiSocketdotio, SiPostman, SiGithubactions, SiVite, SiExpress, SiJsonwebtokens, SiGithub, SiExpo, SiTensorflow } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import '../styles/Skills.css';

const Skills = () => {
  const [viewMode, setViewMode] = useState('chips'); // 'list' or 'chips'
  
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 85, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript (ES6+)", level: 85, icon: <FaJs />, color: "#F7DF1E" },
        { name: "ReactJS", level: 85, icon: <FaReact />, color: "#61DAFB" },
        { name: "React Native", level: 75, icon: <FaMobile />, color: "#61DAFB" },
        { name: "Next.js", level: 75, icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux / Redux Toolkit", level: 80, icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "#38BDF8" },
        { name: "Bootstrap", level: 75, icon: <SiBootstrap />, color: "#7952B3" },
        { name: "Expo", level: 70, icon: <SiExpo />, color: "#000020" },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNode />, color: "#339933" },
        { name: "Express.js", level: 80, icon: <SiExpress />, color: "#000000" },
        { name: "Django", level: 70, icon: <SiDjango />, color: "#092E20" },
        { name: "RESTful APIs", level: 85, icon: <FaCode />, color: "#000000" },
        { name: "MVC Architecture", level: 80, icon: <FaCode />, color: "#000000" },
        { name: "JWT Auth", level: 75, icon: <SiJsonwebtokens />, color: "#000000" },
        { name: "Socket.io", level: 75, icon: <SiSocketdotio />, color: "#010101" },
        { name: "API Integration", level: 80, icon: <FaPlug />, color: "#FF6C37" },
        { name: "Postman", level: 85, icon: <SiPostman />, color: "#FF6C37" }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 75, icon: <DiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", level: 70, icon: <SiPostgresql />, color: "#336791" },
        { name: "SQL (MySQL)", level: 70, icon: <FaDatabase />, color: "#4479A1" },
        { name: "SQL (SQLite)", level: 65, icon: <SiSqlite />, color: "#0F80CC" },
        { name: "Firebase (Firestore)", level: 70, icon: <SiFirebase />, color: "#FFCA28" },
        { name: "Firebase (Auth)", level: 70, icon: <FaUserLock />, color: "#FFCA28" },
        { name: "ChromaDB", level: 60, icon: <SiVectorlogozone />, color: "#00A38E" },
        { name: "Pinecone", level: 60, icon: <FaDatabase />, color: "#00A38E" }
      ]
    }
  ];
  
  const otherSkillsData = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "React Router DOM", icon: <FaReact /> },
    { name: "dotenv", icon: <FaCode /> },
    { name: "Basic Linux Commands", icon: <FaLinux /> },
    { name: "Data Science Fundamentals", icon: <FaChartBar /> },
    { name: "LangChain", icon: <FaRobot /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
    { name: "Jupyter Notebook", icon: <SiJupyter /> },
    { name: "Problem Solving & Debugging", icon: <FaCode /> },
    { name: "Team Collaboration (Git Workflow)", icon: <FaGitAlt /> }
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
                    <div className={`skill-chip-icon ${skill.name.toLowerCase().replace(/[\s\/]/g, "-").replace("+", "plusplus").replace(".", "").replace("(", "").replace(")", "").replace("&", "and")}`}>
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
        
        {/* Other Technologies & Tools Section with Different UI */}
        <motion.div
          className="skills-category card other-skills full-width"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <h2>Other Technologies & Tools</h2>
          <div className="other-skills-list">
            {otherSkillsData.map((skill, index) => (
              <motion.div 
                className="other-skill-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className={`other-skill-icon ${skill.name.toLowerCase().replace(/[\s\/]/g, "-").replace(".", "").replace("(", "").replace(")", "").replace("&", "and")}`}>
                  {skill.icon}
                </div>
                <div className="other-skill-name">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
