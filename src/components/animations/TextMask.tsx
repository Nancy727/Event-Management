import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextMaskProps {
  text: string;
  className?: string;
}

const TextMask = ({ text, className = '' }: TextMaskProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    const mask = maskRef.current;

    if (!container || !textElement || !mask) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
      },
    });

    tl.fromTo(
      mask,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
      }
    ).fromTo(
      textElement,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      '<'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={maskRef}
        className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-10"
      />
      <div ref={textRef} className="relative z-0">
        {text}
      </div>
    </div>
  );
};

export default TextMask;
