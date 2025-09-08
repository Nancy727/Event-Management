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
import CircularGallery from "./TextAnimations/CircularGallery/CircularGallery";
import RollingGallery from "./animations/RollingGallery";

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
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="opacity-0 gallery-container">
        {/* Header */}
        <motion.header
          className="py-32 pb-24 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <Link to="/" className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal mb-8 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-light mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent text-center font-serif tracking-tight animate-[sparkle_3s_ease-in-out_infinite]">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Showcase of our finest event management, catering, and music
              services
            </p>
          </div>
        </motion.header>

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon size={32} className="text-white mb-4 mx-auto" />
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-[600px] relative">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        {/* Video Gallery */}
        <motion.section
          className="py-24 bg-gradient-to-b from-black via-black/95 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Event Highlights
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Experience the magic of our events through stunning video captures
            </p>
            <RollingGallery
              videos={[
                {
                  id: "1",
                  title: "Royal Wedding Celebration",
                  url: "/videos/wedding-1.mp4",
                  thumbnail: "/images/wedding-1.jpg"
                },
                {
                  id: "2",
                  title: "Corporate Event Excellence",
                  url: "/videos/corporate-1.mp4",
                  thumbnail: "/images/corporate-1.jpg"
                },
                {
                  id: "3",
                  title: "Grand Birthday Bash",
                  url: "/videos/birthday-1.mp4",
                  thumbnail: "/images/birthday-1.jpg"
                },
                {
                  id: "4",
                  title: "Anniversary Celebration",
                  url: "/videos/anniversary-1.mp4",
                  thumbnail: "/images/anniversary-1.jpg"
                }
              ]}
            />
          </div>
        </motion.section>

        {/* Services Highlight */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Users size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Event Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete event planning and management from conception to
                  execution
                </p>
              </div>
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Utensils size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Catering Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Delicious multi-cuisine catering with professional service
                  staff
                </p>
              </div>
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Music size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Music & Entertainment</h3>
                <p className="text-gray-300 leading-relaxed">
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
