import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chatgptImage from '../assets/images/ChatGPT Image Sep 9, 2025, 04_19_52 PM.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Display splash screen for 3 seconds then trigger the exit animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // After exit animation completes, call onComplete to show the main content
  const handleAnimationComplete = () => {
    if (!isVisible) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full absolute inset-0"
          >
            <img 
              src={chatgptImage} 
              alt="Event Management Splash" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
