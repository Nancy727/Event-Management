import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      const deltaX = mouseX - currentX;
      const deltaY = mouseY - currentY;

      currentX += deltaX * 0.15;
      currentY += deltaY * 0.15;

      if (cursor && cursorGlow) {
        gsap.set(cursor, {
          x: mouseX,
          y: mouseY,
        });

        gsap.to(cursorGlow, {
          x: currentX,
          y: currentY,
          duration: 0.15,
        });
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference"
        style={{ filter: 'blur(0px)' }}
      />
      <div
        ref={cursorGlowRef}
        className="fixed pointer-events-none w-8 h-8 bg-yellow-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-40"
        style={{ filter: 'blur(8px)' }}
      />
    </>
  );
};

export default CustomCursor;
