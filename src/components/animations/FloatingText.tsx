import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatingTextProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const FloatingText = ({ text, direction = 'left', speed = 50, className = '' }: FloatingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const containerElement = containerRef.current;

    if (!textElement || !containerElement) return;

    // Clone the text to create a seamless loop
    const clonedText = textElement.cloneNode(true) as HTMLElement;
    containerElement.appendChild(clonedText);

    // Calculate the duration based on text width and speed
    const textWidth = textElement.offsetWidth;
    const duration = textWidth / speed;

    // Create infinite scroll animation
    gsap.to([textElement, clonedText], {
      x: direction === 'left' ? -textWidth : textWidth,
      duration,
      repeat: -1,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(x => direction === 'left' ? 
          parseFloat(x) % textWidth :
          parseFloat(x) % -textWidth
        )
      }
    });

    // Pause animation when out of view
    ScrollTrigger.create({
      trigger: containerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play pause resume pause'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={textRef} className="inline-block">
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

export default FloatingText;
