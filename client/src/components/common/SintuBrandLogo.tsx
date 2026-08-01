import React from 'react';

interface SintuBrandLogoProps {
  variant?: 'olive' | 'rose' | 'auto';
  size?: 'sm' | 'md' | 'lg';
}

export const SintuBrandLogo: React.FC<SintuBrandLogoProps> = ({ variant = 'auto', size = 'md' }) => {
  const mainTextSize = size === 'sm' ? 'text-lg sm:text-2xl' : size === 'lg' ? 'text-3xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-4xl';
  const subTextSize = size === 'sm' ? 'text-[8px] sm:text-[9.5px]' : size === 'lg' ? 'text-xs sm:text-sm' : 'text-[9px] sm:text-[11px]';

  const textColorClass = variant === 'rose'
    ? 'text-rose-700'
    : 'text-olive-700';

  const subColorClass = variant === 'rose'
    ? 'text-olive-600'
    : 'text-rose-700';

  return (
    <div className="inline-flex flex-col items-start sm:items-center justify-center tracking-tight select-none group shrink-0">
      {/* Mindy Weiss Style Interlocking Brand Typography */}
      <div className={`font-serif italic font-normal ${mainTextSize} ${textColorClass} transition-colors duration-300 leading-none flex items-baseline gap-1 sm:gap-2 whitespace-nowrap`}>
        {/* SINTU in High-Contrast Couture Italic Display */}
        <span className="tracking-tight hover:text-rose-700 transition-colors">
          <span className="text-[1.15em] font-light font-display not-italic">S</span>
          <span className="font-serif italic font-extralight -ml-0.5">i</span>
          <span className="font-serif font-light -ml-0.5">n</span>
          <span className="font-serif italic font-light -ml-0.5">t</span>
          <span className="font-serif font-normal -ml-0.5">u</span>
        </span>

        {/* DECORATORS with Sweeping Swash Accents */}
        <span className="tracking-tighter font-serif italic font-extralight opacity-95">
          <span className="text-[1.1em] not-italic font-display">D</span>
          <span className="font-serif italic font-light -ml-0.5">e</span>
          <span className="font-serif font-extralight -ml-0.5">c</span>
          <span className="font-serif italic font-light -ml-0.5">o</span>
          <span className="font-serif font-light -ml-0.5">r</span>
          <span className="font-serif italic font-extralight -ml-0.5">a</span>
          <span className="font-serif font-light -ml-0.5">t</span>
          <span className="font-serif italic font-light -ml-0.5">o</span>
          <span className="font-serif font-light -ml-0.5">r</span>
          <span className="font-serif italic font-normal -ml-0.5">s</span>
        </span>
      </div>

      {/* Subtitle in Brandon Grotesque Spaced Tracking - whitespace-nowrap prevents linebreaks */}
      <span className={`font-sans ${subTextSize} ${subColorClass} font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] mt-1 sm:mt-1.5 opacity-90 transition-all whitespace-nowrap`}>
        EVENT CONSULTANTS • JAMALPUR
      </span>
    </div>
  );
};
