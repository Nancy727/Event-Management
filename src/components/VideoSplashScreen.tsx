import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import videoFile from '../assets/images/Royal_Palace_Gate_Ganesh_Mantra_Video.mp4';

interface VideoSplashScreenProps {
  onComplete: () => void;
}

const VideoSplashScreen: React.FC<VideoSplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Set up event listener for when video ends
      const handleVideoEnd = () => {
        setIsVisible(false);
      };
      
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // Clean up event listener
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  // After exit animation completes, call onComplete to show the image splash screen
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full absolute inset-0"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoSplashScreen;
