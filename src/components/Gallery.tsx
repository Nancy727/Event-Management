import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Image as ImageIcon, Users, Music, Utensils } from 'lucide-react';
import gsap from 'gsap';
import './Gallery.css';

const Gallery: React.FC = () => {
  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      '.gallery-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    // Luxury sparkle animation for title
    gsap.fromTo(
      '.gallery-header h1',
      { opacity: 0, rotationX: -15, y: 30 },
      { 
        opacity: 1, 
        rotationX: 0, 
        y: 0, 
        duration: 1.2, 
        ease: 'back.out(1.7)',
        delay: 0.3
      }
    );
    
    // Scroll-triggered sideways swipe animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const offset = scrollY * 0.1;
        const direction = isEven ? 1 : -1;
        const swipeAmount = Math.sin(offset * 0.01 + index) * 20 * direction;
        
        gsap.set(item, {
          x: swipeAmount,
          rotationY: swipeAmount * 0.2
        });
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'Wedding',
      title: 'Royal Wedding Mandap',
      description: 'Luxurious mandap decoration with traditional elements',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 2,
      type: 'video',
      category: 'Corporate',
      title: 'Corporate Event Setup',
      description: 'Professional corporate event management',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 3,
      type: 'image',
      category: 'Birthday',
      title: 'Kids Birthday Party',
      description: 'Colorful and fun birthday celebration setup',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 4,
      type: 'image',
      category: 'Catering',
      title: 'Multi-Cuisine Buffet',
      description: 'Extensive catering setup with various cuisines',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 5,
      type: 'video',
      category: 'Music',
      title: 'Live Music Performance',
      description: 'Professional musicians and DJ setup',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 6,
      type: 'image',
      category: 'Wedding',
      title: 'Reception Decoration',
      description: 'Elegant reception hall decoration',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 7,
      type: 'image',
      category: 'Wedding',
      title: 'Bridal Stage Setup',
      description: 'Stunning bridal stage with floral arrangements',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 8,
      type: 'video',
      category: 'Corporate',
      title: 'Conference Hall Decor',
      description: 'Professional corporate conference setup',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 9,
      type: 'image',
      category: 'Birthday',
      title: 'Theme Birthday Party',
      description: 'Creative themed birthday celebration',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 10,
      type: 'image',
      category: 'Catering',
      title: 'Live Cooking Station',
      description: 'Interactive live cooking experience',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 11,
      type: 'video',
      category: 'Music',
      title: 'DJ Performance',
      description: 'High-energy DJ and sound system setup',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 12,
      type: 'image',
      category: 'Wedding',
      title: 'Garden Wedding Setup',
      description: 'Beautiful outdoor garden wedding decoration',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 13,
      type: 'image',
      category: 'Corporate',
      title: 'Product Launch Event',
      description: 'Elegant product launch event setup',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 14,
      type: 'video',
      category: 'Birthday',
      title: 'Surprise Birthday Setup',
      description: 'Creative surprise birthday party arrangement',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 15,
      type: 'image',
      category: 'Catering',
      title: 'Dessert Station',
      description: 'Elegant dessert and sweets display',
      thumbnail: '/api/placeholder/400/300',
    },
    {
      id: 16,
      type: 'image',
      category: 'Music',
      title: 'Traditional Music Setup',
      description: 'Traditional Indian music performance setup',
      thumbnail: '/api/placeholder/400/300',
    },
  ];

  const categories = ['All', 'Wedding', 'Corporate', 'Birthday', 'Catering', 'Music'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const serviceStats = [
    { icon: Users, label: 'Events Completed', value: '500+' },
    { icon: Music, label: 'Music Shows', value: '150+' },
    { icon: Utensils, label: 'Catering Services', value: '300+' },
    { icon: ImageIcon, label: 'Happy Clients', value: '400+' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {/* Header */}
        <motion.header 
          className="gallery-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1>Our Gallery</h1>
            <p>Showcase of our finest event management, catering, and music services</p>
          </div>
        </motion.header>

        {/* Stats Section */}
        <motion.section 
          className="gallery-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container">
            <div className="stats-grid">
              {serviceStats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon size={32} />
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.section 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="container">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Gallery Grid */}
        <motion.section 
          className="gallery-grid-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="container">
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="gallery-item-image">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="gallery-item-overlay">
                      {item.type === 'video' ? (
                        <Play size={40} className="play-icon" />
                      ) : (
                        <ImageIcon size={40} className="image-icon" />
                      )}
                    </div>
                  </div>
                  <div className="gallery-item-content">
                    <span className="gallery-item-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Highlight */}
        <motion.section 
          className="services-highlight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="container">
            <h2>Our Comprehensive Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <Users size={48} />
                <h3>Event Management</h3>
                <p>Complete event planning and management from conception to execution</p>
              </div>
              <div className="service-card">
                <Utensils size={48} />
                <h3>Catering Services</h3>
                <p>Delicious multi-cuisine catering with professional service staff</p>
              </div>
              <div className="service-card">
                <Music size={48} />
                <h3>Music & Entertainment</h3>
                <p>Live music performances, DJ services, and entertainment coordination</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Gallery;
