import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo, portfolioLinks } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/Contact.css';

const Contact = () => {
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // mailto fallback - constructs a mailto link
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact section">
      <div className="section-header">
        <motion.h1
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={reducedMotion ? {} : { y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out for collaborations or opportunities
        </motion.p>
      </div>

      <div className="contact-content grid">
        <motion.div
          className="contact-info card"
          initial={reducedMotion ? {} : { x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
              <div>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <h2>Connect With Me</h2>
          <div className="social-links">
            <a
              href={portfolioLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form card"
          initial={reducedMotion ? {} : { x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Send Me a Message</h2>
          {submitStatus === 'success' && (
            <div className="form-message success" role="alert">
              Your email client has been opened. Thank you for reaching out!
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && <span className="form-error" id="name-error" role="alert">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && <span className="form-error" id="email-error" role="alert">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={errors.subject ? 'true' : 'false'}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                required
              />
              {errors.subject && <span className="form-error" id="subject-error" role="alert">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              ></textarea>
              {errors.message && <span className="form-error" id="message-error" role="alert">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="submit-btn btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (<><FaPaperPlane /> Send Message</>)}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
