import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadingRef.current || !progressRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    if (isLoading) {
      // Loading animation
      tl.set(loadingRef.current, { opacity: 1, pointerEvents: 'all' })
        .fromTo(progressRef.current, 
          { scaleX: 0, transformOrigin: 'left' },
          { scaleX: 1, duration: 2, ease: 'power2.inOut' }
        )
        .fromTo(textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=1.5'
        );
    } else {
      // Exit animation
      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in'
      })
      .to(progressRef.current, {
        scaleX: 0,
        transformOrigin: 'right',
        duration: 0.5,
        ease: 'power2.inOut'
      }, '-=0.2')
      .to(loadingRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      style={{ opacity: 0, pointerEvents: 'none' }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Loading text */}
        <div ref={textRef} className="text-center">
          <h2 className="text-2xl font-light text-yellow-500 mb-2">Sintu Decorators</h2>
          <p className="text-gray-300 text-sm">Creating extraordinary experiences</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
