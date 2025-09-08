import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 font-playfair sparkle-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            Sintu
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Decorators
            </motion.span>
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-8 font-playfair"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Timeless Moments
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury event decorations that transform your special occasions into unforgettable experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/gallery" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg transition-all hover:from-yellow-600 hover:to-yellow-500 font-medium tracking-wide"
              >
                View Gallery
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-yellow-500 text-yellow-500 rounded-lg transition-all hover:bg-yellow-500 hover:text-black font-medium tracking-wide"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div 
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex gap-8 items-center justify-center">
            <Link to="/about" className="text-yellow-200 font-light text-lg tracking-widest uppercase font-serif hover:text-yellow-500 transition-all">
              About
            </Link>
            <Link to="/gallery" className="text-yellow-200 font-light text-lg tracking-widest uppercase font-serif hover:text-yellow-500 transition-all">
              Gallery
            </Link>
            <Link to="/contact" className="text-yellow-200 font-light text-lg tracking-widest uppercase font-serif hover:text-yellow-500 transition-all">
              Contact
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
