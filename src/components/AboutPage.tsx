import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  Users, 
  Calendar, 
  Star,
  Music,
  Utensils,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Play
} from 'lucide-react';
import gsap from 'gsap';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      '.about-page-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    // Luxury title animation with sparkle effect
    gsap.fromTo(
      '.about-header h1',
      { opacity: 0, y: 50, rotationX: 90 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        duration: 1.5, 
        ease: 'power3.out',
        delay: 0.5
      }
    );
    
    // Static cards with subtle entrance animations only
      
    // Timeline items stagger animation
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100, rotationY: 45 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 2
      }
    );
  }, []);

  const stats = [
    { icon: Calendar, value: '500+', label: 'Events Completed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      icon: Users,
      title: 'Event Management',
      description: 'Complete event planning from conception to execution. We handle every detail to ensure your special day is perfect.',
      features: ['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Anniversary Celebrations']
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Multi-cuisine catering with professional service staff. From traditional Indian to international cuisines.',
      features: ['Multi-Cuisine Menu', 'Professional Staff', 'Custom Menu Planning', 'Live Cooking Stations']
    },
    {
      icon: Music,
      title: 'Music & Entertainment',
      description: 'Live music performances, DJ services, and comprehensive entertainment coordination for all types of events.',
      features: ['Live Band Performances', 'Professional DJ Services', 'Sound System Setup', 'Entertainment Coordination']
    }
  ];

  const teamMembers = [
    {
      name: 'Sintu Kumar',
      role: 'Founder & CEO',
      experience: '25+ Years',
      description: 'Visionary leader with passion for creating memorable experiences'
    },
    {
      name: 'Aprajita Devi',
      role: 'Event Designer',
      experience: '20+ Years',
      description: 'Creative expert in transforming venues into magical spaces'
    },
    {
      name: 'Sangita Devi',
      role: 'Catering Head',
      experience: '25+ Years',
      description: 'Culinary master specializing in multi-cuisine preparations'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Company Founded', description: 'Started with a vision to create extraordinary celebrations' },
    { year: '2005', event: '100+ Events', description: 'Reached our first major milestone of successful events' },
    { year: '2010', event: 'Team Expansion', description: 'Expanded our team to include specialized departments' },
    { year: '2020', event: 'Digital Innovation', description: 'Introduced virtual event planning and hybrid celebrations' },
    { year: '2024', event: '500+ Events', description: 'Celebrating over 500 successful events and counting' }
  ];

  return (
    <div className="about-page">
      <div className="about-page-container">
        {/* Header */}
        <motion.header 
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1>About Sintu Decorators</h1>
            <p>Excellence in Event Management Since 1999</p>
          </div>
        </motion.header>

        {/* Company Overview */}
        <motion.section 
          className="company-overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <div className="section-badge">
                  <Award size={20} />
                  <span>Our Story</span>
                </div>
                <h2>Crafting Extraordinary Celebrations</h2>
                <p>
                  For over 25 years, Sintu Decorators has been synonymous with excellence in event management, 
                  catering services, and entertainment. We transform your dreams into unforgettable experiences 
                  through meticulous planning, creative design, and flawless execution.
                </p>
                <div className="company-values">
                  <div className="value-item">
                    <Target size={24} />
                    <div>
                      <h4>Mission</h4>
                      <p>To create extraordinary celebrations that exceed expectations and create lasting memories.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <Eye size={24} />
                    <div>
                      <h4>Vision</h4>
                      <p>To be the most trusted name in event management across India, known for innovation and excellence.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-stats">
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="stat-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon size={32} />
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="services-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="container">
            <h2>Our Comprehensive Services</h2>
            <p>We offer a complete suite of services to make your event perfect</p>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="service-icon">
                    <service.icon size={48} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="team-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="container">
            <h2>Meet Our Expert Team</h2>
            <p>Passionate professionals dedicated to making your events extraordinary</p>
            
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="team-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <div className="team-member-image">
                    <Users size={40} />
                  </div>
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <span className="experience">{member.experience}</span>
                  <p>{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Company Timeline */}
        <motion.section 
          className="timeline-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="container">
            <h2>Our Journey</h2>
            <p>Milestones that define our growth and success</p>
            
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                >
                  <div className="timeline-content">
                    <div className="year">{milestone.year}</div>
                    <h3>{milestone.event}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Video/Media Section */}
        <motion.section 
          className="media-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="container">
            <h2>Experience Our Work</h2>
            <div className="media-grid">
              <div className="media-item video-placeholder">
                <Play size={60} />
                <h3>Company Introduction</h3>
                <p>Watch our story unfold through 15 years of excellence</p>
              </div>
              <div className="media-item">
                <Heart size={40} />
                <h3>Client Testimonials</h3>
                <p>"Sintu Decorators made our wedding absolutely perfect. Every detail was handled with care and precision."</p>
                <span>- Priya & Rahul, Wedding Clients</span>
              </div>
              <div className="media-item">
                <Award size={40} />
                <h3>Awards & Recognition</h3>
                <p>Recognized as one of the top event management companies in Mumbai for three consecutive years.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
