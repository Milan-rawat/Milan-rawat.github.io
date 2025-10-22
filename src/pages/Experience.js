import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {
  const educationData = [
    {
      id: 1,
      period: "2015-2017",
      title: "CLASS X | CICSE",
      institution: "Gurukul International Academy",
      image: "/images/education/gia.jpg"
    },
    {
      id: 2,
      period: "2017-2019",
      title: "CLASS XII | CISC",
      institution: "Gurukul International Academy",
      image: "/images/education/gia.jpg"
    },
    {
      id: 3,
      period: "2019-2022",
      title: "B.Sc IT | HNBGU",
      institution: "Institute of Hospitality, Management & Sciences",
      image: "/images/education/ihms.jpg"
    },
    {
      id: 4,
      period: "2022-2024",
      title: "MCA | LPU",
      institution: "Lovely Professional University",
      image: "/images/education/lpu.jpg"
    }
  ];

  const experienceData = [
    {
      id: 1,
      period: "March 2021 - June 2020",
      title: "Facilitator",
      company: "Google Cloud Ready",
      description: "Help 100+ student to make them cloud ready.",
      image: "/images/experience/gcr.jpg",
      certificate: "https://drive.google.com/file/d/1qQul9IyFtWBSatPtG6BBGRReqFREV623/view?usp=sharing"
    },
    {
      id: 2,
      period: "August 2021 - February 2022",
      title: "Full Stack Web Developer",
      company: "Applore Technologies",
      description: "Worked on full stack web application using React, Node.js, MongoDB, and Express.js.",
      image: "/images/experience/applore.jpg",
      website: "https://www.apploretechnologies.com"
    },
    {
      id: 3,
      period: "September 2022 - Present",
      title: "Full Stack Web Developer",
      company: "RTE Softwares",
      description: "Worked on full stack web application using React, Node.js, MongoDB, and Express.js.",
      image: "/images/experience/rte.png",
      website: "https://rtesoftwares.com"
    }
  ];

  const trainingData = [
    {
      id: 1,
      title: "Node.js, Express, MongoDB & More",
      platform: "Udemy",
      image: "/images/courses/webdev.jpg",
      certificate: "https://www.udemy.com/certificate/UC-ff78151d-0d22-47ce-b6e8-41dd56364bce/"
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      platform: "Udemy",
      image: "/images/courses/webdev.jpg",
      certificate: "https://www.udemy.com/certificate/UC-51b6f9c6-23c5-4aa2-bd02-58f4019cf18b/"
    },
    {
      id: 3,
      title: "What is Data Science",
      platform: "Coursera",
      image: "/images/courses/ds.jpg",
      certificate: "https://coursera.org/share/35662d1795a5ee643de7052c6be7dc99"
    }
  ];

  return (
    <div className="experience section">
      <div className="section-header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My educational background, work experience, and certifications
        </motion.p>
      </div>

      <div className="experience-content">
        {/* Education Section */}
        <motion.div
          className="section card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <h2>Education</h2>
          <div className="timeline-creative">
            {educationData.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div 
                  ref={ref}
                  className={`timeline-item-creative ${index % 2 === 0 ? 'left' : 'right'}`}
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timeline-content-creative card">
                    <div className="timeline-marker">
                      <div className="marker-inner"></div>
                    </div>
                    <div className="timeline-image-creative">
                      <img src={item.image} alt={item.institution} />
                    </div>
                    <div className="timeline-text-creative">
                      <h3>{item.title}</h3>
                      <h4>{item.institution}</h4>
                      <p className="period">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="section card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <h2>Work Experience</h2>
          <div className="timeline-creative">
            {experienceData.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div 
                  ref={ref}
                  className={`timeline-item-creative ${index % 2 === 0 ? 'left' : 'right'}`}
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timeline-content-creative card">
                    <div className="timeline-marker">
                      <div className="marker-inner"></div>
                    </div>
                    <div className="timeline-image-creative">
                      <img src={item.image} alt={item.company} />
                    </div>
                    <div className="timeline-text-creative">
                      <h3>{item.title}</h3>
                      <h4>{item.company}</h4>
                      <p className="period">{item.period}</p>
                      <p>{item.description}</p>
                      <div className="timeline-links">
                        {item.website && (
                          <a href={item.website} target="_blank" rel="noopener noreferrer">
                            Company Website
                          </a>
                        )}
                        {item.certificate && (
                          <a href={item.certificate} target="_blank" rel="noopener noreferrer">
                            Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Training Section */}
        <motion.div
          className="section card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <h2>Training & Certifications</h2>
          <div className="timeline-creative">
            {trainingData.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div 
                  ref={ref}
                  className={`timeline-item-creative ${index % 2 === 0 ? 'left' : 'right'}`}
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="timeline-content-creative card">
                    <div className="timeline-marker">
                      <div className="marker-inner"></div>
                    </div>
                    <div className="timeline-image-creative">
                      <img src={item.image} alt={item.platform} />
                    </div>
                    <div className="timeline-text-creative">
                      <h3>{item.title}</h3>
                      <h4>{item.platform}</h4>
                      <div className="timeline-links">
                        <a href={item.certificate} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
