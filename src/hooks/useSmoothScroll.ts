import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

let lenis: Lenis | null = null;

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with Pagani-style smooth scrolling
    lenis = new Lenis({
      duration: 1.2, // Smooth duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Disable on mobile for better performance
      touchMultiplier: 2,
      infinite: false,
    });

    // GSAP integration for smooth scrolling
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration
    lenis.on('scroll', () => {
      // Custom scroll handling if needed
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return lenis;
};

export const scrollTo = (target: string | number, options?: any) => {
  if (lenis) {
    lenis.scrollTo(target, {
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  }
};
