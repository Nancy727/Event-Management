import React from 'react';
import { motion } from 'framer-motion';


interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
}

const PixelCard: React.FC<PixelCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`pixel-card ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      <div className="pixel-card-content">
        {children}
      </div>
      <div className="pixel-noise"></div>
      <div className="pixel-border"></div>
    </motion.div>
  );
};

export default PixelCard;
