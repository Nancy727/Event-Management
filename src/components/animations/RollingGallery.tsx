import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './RollingGallery.css';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

interface RollingGalleryProps {
  videos: Video[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ videos }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    let scrollInterval: ReturnType<typeof setInterval>;

    const scrollContent = () => {
      const scrollWidth = scroller.offsetWidth || 0;
      if (container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };

    const startScroll = () => {
      scrollInterval = setInterval(scrollContent, 30);
    };

    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      startScroll();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    startScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const videoList = [...videos, ...videos]; // Duplicate list for seamless loop

  return (
    <div className="rolling-gallery-container" ref={containerRef}>
      <div className="rolling-gallery-scroller" ref={scrollerRef}>
        {videoList.map((video, index) => (
          <motion.div
            key={`${video.id}-${index}`}
            className="video-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3>{video.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;
