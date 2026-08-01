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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Local Trust Badge in Rose Pink Box */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-rose-50 border-2 border-rose-200 text-rose-700 text-xs uppercase tracking-widest font-extrabold mb-8 shadow-sm animate-float">
          <Award className="w-5 h-5 text-rose-700 shrink-0" />
          <span>Haute Couture Event & Catering Design • Shiv Mandir, Mungroura, Jamalpur</span>
        </div>

        {/* Featured MINDY WEISS Style Brand Typography Signature */}
        <div className="my-4 transform sm:scale-110 md:scale-125 transition-transform">
          <SintuBrandLogo size="lg" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-olive-700 tracking-tight leading-tight max-w-4xl mt-6">
          Architects of Regal Weddings & <span className="rose-gradient-text block italic font-light mt-1">Unforgettable Celebrations</span>
        </h1>

        {/* Subtitle in Brandon Grotesque */}
        <p className="mt-6 text-xs sm:text-sm md:text-base text-olive-600 max-w-2xl mx-auto font-sans font-light tracking-wide leading-relaxed">
          Bespoke floral mandap architecture, multi-course gourmet catering counters, and German structure waterproof tent houses across Jamalpur & Munger. Powered by our proprietary <span className="text-rose-700 font-bold">Sintu AI Planner</span>.
        </p>

        {/* Primary Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
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

        {/* Key Highlights Bar - Alternating Rose Pink & Olive Green Boxes */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 shadow-sm">
            <p className="text-[10px] text-rose-700 font-extrabold uppercase tracking-ultra">Heritage</p>
            <p className="text-xs font-bold text-olive-700 mt-1">15+ Years Near Shiv Mandir</p>
          </div>
          <div className="p-5 rounded-2xl bg-olive-50 border border-olive-200 shadow-sm">
            <p className="text-[10px] text-olive-700 font-extrabold uppercase tracking-ultra">Infrastructure</p>
            <p className="text-xs font-bold text-rose-700 mt-1">German Waterproof Pandal</p>
          </div>
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 shadow-sm">
            <p className="text-[10px] text-rose-700 font-extrabold uppercase tracking-ultra">Florals & Catering</p>
            <p className="text-xs font-bold text-olive-700 mt-1">Exotic Flowers & Multi-Cuisine</p>
          </div>
          <div className="p-5 rounded-2xl bg-olive-50 border border-olive-200 shadow-sm">
            <p className="text-[10px] text-olive-700 font-extrabold uppercase tracking-ultra">Clientele</p>
            <p className="text-xs font-bold text-rose-700 mt-1">1200+ Ceremonies Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
