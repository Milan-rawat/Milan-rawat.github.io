import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '../data/skillsData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/Skills.css';

const SkillCategory = ({ group, index, reducedMotion }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="skills-category card"
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={reducedMotion ? {} : { y: -5 }}
    >
      <h2>{group.name}</h2>
      <div className="skills-badges">
        {group.skills.map((skill, skillIndex) => (
          <motion.span
            className="skill-badge"
            key={skillIndex}
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="skills section">
      <div className="section-header">
        <motion.h1
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies and tools I work with
        </motion.p>
      </div>

      <div className="skills-content">
        {skillGroups.map((group, index) => (
          <SkillCategory
            key={index}
            group={group}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
