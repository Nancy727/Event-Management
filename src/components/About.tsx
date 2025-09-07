import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Star } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, value: '500+', label: 'Events Completed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Heritage',
      description: 'Traditional elegance meets modern sophistication.'
    },
    {
      title: 'Quality',
      description: 'Every detail crafted with excellence.'
    },
    {
      title: 'Service',
      description: 'Tailored to your unique vision.'
    },
    {
      title: 'Commitment',
      description: 'Exceeding expectations, always.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <Award size={20} />
              <span>About Sintu Decorators</span>
            </div>

            <h2>Excellence Since 2008</h2>
            
            <p className="about-description">
              Crafting extraordinary celebrations with precision and elegance.
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-icon">
                      <stat.icon size={24} />
                    </div>
                    <div className="stat-content">
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="about-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <Award size={60} />
                    <h4>Our Journey</h4>
                    <p>25+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-mission"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              Creating extraordinary celebrations that exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
