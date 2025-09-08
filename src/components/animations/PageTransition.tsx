import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const transitionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation (page load)
    tl.fromTo(
      overlayRef.current,
      {
        scaleY: 1,
        transformOrigin: 'top'
      },
      {
        duration: 1.2,
        scaleY: 0,
        transformOrigin: 'bottom',
        ease: 'power4.inOut'
      }
    );

    // Reveal content with a stagger effect
    tl.fromTo(
      '.stagger-fade-up',
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      },
      '-=0.5'
    );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={transitionRef} className="relative">
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-yellow-500 z-50 transform origin-top"
      />
      {children}
    </div>
  );
};

export default PageTransition;
