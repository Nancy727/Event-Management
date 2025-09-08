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
import ScrollTrigger from "gsap/ScrollTrigger";
import CircularGallery from "./TextAnimations/CircularGallery/CircularGallery";
import RollingGallery from "./RollingGallery";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery: React.FC = () => {
  useEffect(() => {
    // Set up horizontal scroll sections
    const sections = document.querySelectorAll<HTMLElement>(".horizontal-section");
    
    sections.forEach((section) => {
      const container = section.querySelector<HTMLElement>(".horizontal-container");
      if (!container) return;

      // Create horizontal scroll animation
      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const serviceStats = [
    { icon: Users, label: "Events Completed", value: "500+" },
    { icon: Music, label: "Music Shows", value: "150+" },
    { icon: Utensils, label: "Catering Services", value: "300+" },
    { icon: ImageIcon, label: "Happy Clients", value: "400+" },
  ];

  const videos = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="gallery-container">
        {/* Header */}
        <motion.header
          className="relative z-10 py-32 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500/20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <Link to="/" className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal mb-8 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-light mb-4 text-yellow-500 text-center font-serif tracking-tight">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Showcase of our finest event management, catering, and music services
            </p>
          </div>
        </motion.header>

        {/* Stats Section - Horizontal Scroll */}
        <section className="horizontal-section">
          <div className="horizontal-container flex min-w-max items-center">
            <div className="w-screen flex-shrink-0 flex items-center justify-center">
              <h2 className="text-4xl text-white mb-12">Our Achievements</h2>
            </div>
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="w-[400px] flex-shrink-0 p-8 mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg">
                  <stat.icon size={32} className="text-white mb-4 mx-auto" />
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Circular Gallery Section */}
        <section className="w-full min-h-screen flex items-center justify-center bg-black/30">
          <div className="max-w-[1800px] w-full h-[800px] mx-auto">
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={1.5}
            />
          </div>
        </section>

        {/* Special Occasions Gallery */}
        <section className="w-full py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Special Occasions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the magic of our events through stunning captures
              </p>
            </div>
            <div className="w-full">
              <RollingGallery 
                images={videos.map(video => video.thumbnail)}
                autoplay={true}
                pauseOnHover={true}
              />
            </div>
          </div>
        </section>

        {/* Services Section - Horizontal Scroll */}
        <section className="horizontal-section">
          <div className="horizontal-container flex min-w-max items-center">
            <div className="w-screen flex-shrink-0 p-24 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                Our Comprehensive Services
              </h2>
            </div>
            <div className="w-screen flex-shrink-0 p-24 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <Users size={48} className="text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Event Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Complete event planning and management from conception to execution
                  </p>
                </div>
                <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <Utensils size={48} className="text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Catering Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Delicious multi-cuisine catering with professional service staff
                  </p>
                </div>
                <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <Music size={48} className="text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Music & Entertainment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Live music performances, DJ services, and entertainment coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
