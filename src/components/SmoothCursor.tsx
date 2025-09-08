import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SmoothCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;

    // Set initial positions
    gsap.set(cursor, { scale: 1, opacity: 1 });
    gsap.set(cursorDot, { scale: 1, opacity: 1 });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorDot, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.out' });
    };

    const handleLinkHover = (e: Event) => {
      gsap.to(cursor, { scale: 2, duration: 0.3, ease: 'power2.out' });
    };

    const handleLinkLeave = (e: Event) => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    // Animate cursor following mouse
    const animateCursor = () => {
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Animation loop
    const tick = () => {
      animateCursor();
      requestAnimationFrame(tick);
    };
    tick();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects for interactive elements
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.1) 70%, transparent 100%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] hidden lg:block"
        style={{
          backgroundColor: '#d4af37',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default SmoothCursor;
