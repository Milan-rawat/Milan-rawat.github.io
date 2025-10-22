import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! In a real application, this would be sent to the server.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact section">
      <div className="section-header">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out to me through any of these channels
        </motion.p>
      </div>

      <div className="contact-content grid">
        <motion.div
          className="contact-info card"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <h2>Contact Information</h2>
          <div className="contact-details">
            <motion.div 
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>milanrawat086@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Ludhiana, Punjab, India</p>
              </div>
            </motion.div>
          </div>
          
          <h2>Connect With Me</h2>
          <div className="social-links">
            <motion.a 
              href="https://github.com/Milan-rawat" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/milan-rawat" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://twitter.com/milan8rawat" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTwitter />
              <span>Twitter</span>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/milanrawat086" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInstagram />
              <span>Instagram</span>
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/milanrawat086" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaFacebook />
              <span>Facebook</span>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className="contact-form card"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn btn btn-primary">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
