import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Music, Utensils } from "lucide-react";
import ShinyText from "./TextAnimations/ShinyText/ShinyText";
import LiquidEther from "./Backgrounds/LiquidEther/LiquidEther";

const Gallery: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  // Circular Gallery images (Special Occasions)
  const circularImages = [
    "/images/circulargallery/image14.jpg",
    "/images/circulargallery/image15.jpg",
    "/images/circulargallery/image16.jpg",
    "/images/circulargallery/image8.jpg",
    "/images/circulargallery/image12.jpg",
    "/images/circulargallery/image2.jpg",
    "/images/circulargallery/image4.jpg",
    "/images/circulargallery/image5.jpg",
    "/images/circulargallery/image13.jpg",
    "/images/circulargallery/image6.jpg",
    "/images/circulargallery/image9.jpg",
    "/images/circulargallery/image1.jpg",
    "/images/circulargallery/image7.jpg",
    "/images/circulargallery/image10.jpg",
    "/images/circulargallery/image11.jpg",
    "/images/circulargallery/image17.jpg",
  ];

  // Rolling Gallery media (Wedding Events)
  const rollingImages = [
    "/images/rollinggallery/image1.jpg",
    "/images/rollinggallery/image2.jpg",
    "/images/rollinggallery/image3.jpg",
    "/images/rollinggallery/image4.jpg",
    "/images/rollinggallery/image5.jpg",
    "/images/rollinggallery/image6.jpg",
  ];

  const rollingVideos = [
    "/images/rollinggallery/video1.mp4",
    "/images/rollinggallery/video2.mp4",
    "/images/rollinggallery/video3.mp4",
    "/images/rollinggallery/video4.mp4",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="relative">
        {/* Header */}
        <motion.header
          className="py-10 pb-24 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500 relative overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
            <LiquidEther
              colors={["#ca8a04", "#eab308", "#fbbf24", "#fde047"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              className="w-full h-full"
            />
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal ml-8 mb-10 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h1 className="text-center">
              <ShinyText
                text="Our Gallery"
                disabled={false}
                speed={3}
                className="text-5xl md:text-6xl font-light mb-4 text-yellow-500 font-serif tracking-tight inline-block"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Showcase of our finest event management, catering, and music
              services
            </p>
          </div>
        </motion.header>
        {/* Wedding Events Gallery */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Special Occasions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
              Creating unforgettable moments for every special event
            </p>

            {/* Grid Layout - 2 columns for photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative">
              {circularImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setExpandedImage(expandedImage === img ? null : img)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-[2s] ease-in-out ${
                    expandedImage === img 
                      ? 'fixed inset-0 z-50 m-0 bg-black/95 flex items-center justify-center p-4' 
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Special occasion ${index + 1}`}
                    className={`w-full h-full transition-all duration-[2s] ease-in-out ${
                      expandedImage === img ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Special Occasions Gallery */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Wedding Events
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Celebrating love stories with elegance and style
            </p>
            
            {/* Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {rollingImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setExpandedImage(expandedImage === img ? null : img)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-[2s] ease-in-out ${
                    expandedImage === img 
                      ? 'fixed inset-0 z-50 m-0 bg-black/95 flex items-center justify-center p-4' 
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Wedding event ${index + 1}`}
                    className={`w-full h-full transition-all duration-[2s] ease-in-out ${
                      expandedImage === img ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rollingVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setExpandedVideo(expandedVideo === video ? null : video)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-[2s] ease-in-out ${
                    expandedVideo === video 
                      ? 'fixed inset-0 z-50 m-0 bg-black/95 flex items-center justify-center p-4' 
                      : 'aspect-video'
                  }`}
                >
                  <video
                    src={video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className={`w-full h-full transition-all duration-[2s] ease-in-out ${
                      expandedVideo === video ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Highlight */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Users size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Event Management
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete event planning and management from conception to
                  execution
                </p>
              </div>
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Utensils size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Catering Services
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Delicious multi-cuisine catering with professional service
                  staff
                </p>
              </div>
              <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Music size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Music & Entertainment
                </h3>
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
