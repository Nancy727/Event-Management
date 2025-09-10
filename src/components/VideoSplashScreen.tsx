import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import videoFile from '../assets/images/Royal_Indian_Wedding_Video_Generation.mp4';

interface VideoSplashScreenProps {
  onComplete: () => void;
}

const VideoSplashScreen: React.FC<VideoSplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Function to handle user click to play with sound
  const handlePlayWithSound = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = false;
      videoElement.play()
        .then(() => {
          console.log('Video playing with sound after click');
          setShowPlayButton(false);
        })
        .catch(e => {
          console.error('Failed to play with sound after click:', e);
          // Try one more time with sound
          setTimeout(() => {
            videoElement.muted = false;
            videoElement.play().catch(e2 => {
              console.error('Second attempt to play with sound failed:', e2);
              setShowPlayButton(false);
            });
          }, 100);
        });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Set up event listener for when video ends
      const handleVideoEnd = () => {
        setIsVisible(false);
      };
      
      // Handle video load error
      const handleVideoError = () => {
        console.error('Video could not be loaded');
        // If video can't load, proceed to next screen after a delay
        setTimeout(() => setIsVisible(false), 1000);
      };
      
      // Attempt initial playback (will likely be muted due to browser policies)
      videoElement.volume = 1.0; // Set volume to maximum
      videoElement.muted = false; // Try to unmute it
      videoElement.play().catch(e => {
        console.warn('Initial unmuted playback failed, waiting for user interaction:', e);
        // Keep showing the play button for user to click
      });
      
      videoElement.addEventListener('ended', handleVideoEnd);
      videoElement.addEventListener('error', handleVideoError);
      
      // Add a click listener to the document to enable audio after any user interaction
      const documentClickHandler = () => {
        if (videoElement.muted) {
          videoElement.muted = false;
          videoElement.volume = 1.0;
          console.log('Attempted to unmute after document click');
        }
      };
      
      document.addEventListener('click', documentClickHandler);
      
      // Fallback timer in case video doesn't end properly
      const fallbackTimer = setTimeout(() => {
        console.log('Fallback timer triggered - proceeding to next screen');
        setIsVisible(false);
      }, 30000); // 30 second fallback
      
      // Clean up event listeners and timer
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
        videoElement.removeEventListener('error', handleVideoError);
        document.removeEventListener('click', documentClickHandler);
        clearTimeout(fallbackTimer);
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
              playsInline
              preload="auto"
              controls={false}
              onClick={handlePlayWithSound}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            
            {showPlayButton && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayWithSound}
              >
                <div className="bg-amber-500/80 rounded-full p-6 transform transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728M3 9.728c.764-1.068 1.431-2.172 1.728-3.272M21 16.272c-.764 1.068-1.431 2.172-1.728 3.272" />
                  </svg>
                </div>
                <div className="absolute bottom-16 text-white text-xl font-semibold">
                  Tap for Sound
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoSplashScreen;
