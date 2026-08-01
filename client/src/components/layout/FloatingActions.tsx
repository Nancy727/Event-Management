import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-30 flex flex-col gap-3 items-end pointer-events-auto font-sans">
      {/* Sintu AI Floating Prompt Widget */}
      <Link
        to="/ai-consultant"
        className="w-13 h-13 rounded-full bg-rose-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group border-2 border-rose-300"
        title="Consult Sintu AI Planner"
      >
        <Sparkles className="w-6 h-6 animate-pulse text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-olive-700 text-white text-xs uppercase tracking-widest font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-olive-600">
          Sintu AI Consultant
        </span>
      </Link>

      {/* Floating Direct Call */}
      <a
        href="tel:+919431200000"
        className="w-13 h-13 rounded-full bg-white text-olive-700 border-2 border-olive-700 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        title="Call Sintu Decorators (+91 94312 00000)"
      >
        <Phone className="w-6 h-6 fill-olive-700 text-olive-700" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-olive-700 text-white text-xs uppercase tracking-widest font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-olive-600">
          Call +91 94312 00000
        </span>
      </a>

      {/* Floating WhatsApp Trigger */}
      <a
        href="https://wa.me/919431200000?text=Hi%20Sintu%20Decorators,%20I%20want%20to%20inquire%20about%20event%20decoration"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group animate-bounce border-2 border-emerald-300"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-olive-700 text-white text-xs uppercase tracking-widest font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-olive-600">
          WhatsApp Sintu Ji
        </span>
      </a>
    </div>
  );
};
