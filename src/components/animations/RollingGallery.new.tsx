import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Media {
  id: string;
  title: string;
  thumbnail: string;
}

interface RollingGalleryProps {
  items: Media[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ items }) => {
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

  const mediaList = [...items, ...items]; // Duplicate list for seamless loop

  return (
    <div 
      className="w-full overflow-x-hidden relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[200px] before:h-full before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-black before:to-transparent after:content-[''] after:absolute after:top-0 after:right-0 after:w-[200px] after:h-full after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-black after:to-transparent"
      ref={containerRef}
    >
      <div 
        className="flex gap-8 p-8"
        ref={scrollerRef}
      >
        {mediaList.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="flex-none w-[300px] bg-black/50 rounded-2xl overflow-hidden cursor-pointer border border-yellow-500/10 transition-transform duration-300 hover:border-yellow-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-full h-[200px] overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-white drop-shadow-lg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="p-4 text-white text-lg text-center">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;
