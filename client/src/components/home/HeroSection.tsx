import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, Award } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';
import { SintuBrandLogo } from '../common/SintuBrandLogo';

export const HeroSection: React.FC = () => {
  const { openModal } = useInquiryModal();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white text-olive-700 font-sans">
      {/* Background Soft Rose & Olive Glowing Spheres */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-rose-100/70 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-olive-100/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Hero Background Mandap Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/royal_mandap.jpg')`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Mindy Weiss Style Brand Signature */}
        <div className="mb-4 transform scale-110 sm:scale-125 transition-transform">
          <SintuBrandLogo size="lg" />
        </div>

        {/* Clean Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-olive-700 tracking-tight leading-tight max-w-4xl mt-4">
          Architects of Regal Weddings & <span className="rose-gradient-text block italic font-light mt-1">Unforgettable Celebrations</span>
        </h1>

        {/* Elegant Subtitle */}
        <p className="mt-6 text-sm sm:text-base text-olive-600 max-w-xl mx-auto font-sans font-light tracking-wide leading-relaxed">
          Bespoke floral mandaps, gourmet catering counters, and waterproof pandals in Jamalpur & Munger.
        </p>

        {/* Clean Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs uppercase tracking-ultra bg-olive-700 hover:bg-rose-700 text-white shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-5 h-5 text-white" />
            Book Consultation
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            to="/ai-consultant"
            className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 text-rose-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-rose-700 animate-pulse" />
            Consult Sintu AI
          </Link>
        </div>
      </div>
    </section>
  );
};
