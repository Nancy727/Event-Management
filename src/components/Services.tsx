import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Camera, 
  Music, 
  Utensils, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Luxury wedding experiences.',
      features: ['Planning', 'Coordination', 'Design']
    },
    {
      icon: Users,
      title: 'Corporate',
      description: 'Premium business events.',
      features: ['Conferences', 'Meetings', 'Galas']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Artistic visual storytelling.',
      features: ['Weddings', 'Events', 'Portraits']
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Curated performances.',
      features: ['Live Music', 'DJ', 'Shows']
    },
    {
      icon: Utensils,
      title: 'Catering',
      description: 'Exquisite culinary experiences.',
      features: ['Fine Dining', 'Custom Menus', 'Service']
    },
    {
      icon: Sparkles,
      title: 'Design',
      description: 'Transformative spaces.',
      features: ['Decor', 'Lighting', 'Styling']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="services" className="services section section-dark">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Services</h2>
          <p>
            Crafted with precision and elegance.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <ArrowRight size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                className="service-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Begin Your Journey</h3>
            <p>Let us craft your vision.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Inquire
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
