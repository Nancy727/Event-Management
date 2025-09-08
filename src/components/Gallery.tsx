import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Image as ImageIcon,
  Users,
  Music,
  Utensils,
} from "lucide-react";
import gsap from "gsap";
import "./Gallery.css";
import CircularGallery from "./TextAnimations/CircularGallery/CircularGallery";

const Gallery: React.FC = () => {
  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      ".gallery-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Luxury sparkle animation for title
    gsap.fromTo(
      ".gallery-header h1",
      { opacity: 0, rotationX: -15, y: 30 },
      {
        opacity: 1,
        rotationX: 0,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );

    // Scroll-triggered sideways swipe animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const galleryItems = document.querySelectorAll(".gallery-item");

      galleryItems.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const offset = scrollY * 0.1;
        const direction = isEven ? 1 : -1;
        const swipeAmount = Math.sin(offset * 0.01 + index) * 20 * direction;

        gsap.set(item, {
          x: swipeAmount,
          rotationY: swipeAmount * 0.2,
        });
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const serviceStats = [
    { icon: Users, label: "Events Completed", value: "500+" },
    { icon: Music, label: "Music Shows", value: "150+" },
    { icon: Utensils, label: "Catering Services", value: "300+" },
    { icon: ImageIcon, label: "Happy Clients", value: "400+" },
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
            <p>
              Showcase of our finest event management, catering, and music
              services
            </p>
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

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

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
                <p>
                  Complete event planning and management from conception to
                  execution
                </p>
              </div>
              <div className="service-card">
                <Utensils size={48} />
                <h3>Catering Services</h3>
                <p>
                  Delicious multi-cuisine catering with professional service
                  staff
                </p>
              </div>
              <div className="service-card">
                <Music size={48} />
                <h3>Music & Entertainment</h3>
                <p>
                  Live music performances, DJ services, and entertainment
                  coordination
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Gallery;
