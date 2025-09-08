import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


interface SparkleTextProps {
  children: React.ReactNode;
  className?: string;
}

const SparkleText: React.FC<SparkleTextProps> = ({ children, className = '' }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const createSparkle = (e: MouseEvent) => {
    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create sparkle effect
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-effect';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    textRef.current.appendChild(sparkle);

    // Create click spark
    const spark = document.createElement('div');
    spark.className = 'click-spark';
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Create 8 spark lines
    for (let i = 0; i < 8; i++) {
      const sparkLine = document.createElement('div');
      sparkLine.className = 'spark';
      sparkLine.style.transform = `rotate(${i * 45}deg)`;
      spark.appendChild(sparkLine);
    }

    textRef.current.appendChild(spark);

    // Cleanup
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.removeChild(sparkle);
        textRef.current.removeChild(spark);
      }
    }, 1000);
  };

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      element.addEventListener('click', createSparkle);
      return () => element.removeEventListener('click', createSparkle);
    }
  }, []);

  return (
    <motion.div
      ref={textRef}
      className={`sparkle-text ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default SparkleText;
