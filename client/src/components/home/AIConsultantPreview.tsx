import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Bot, Calculator, Layers, Utensils } from 'lucide-react';

export const AIConsultantPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white text-olive-700 border-t border-olive-700/10 relative overflow-hidden font-sans">
      {/* Soft Rose Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-ultra shadow-sm">
              <Bot className="w-5 h-5 text-rose-700 shrink-0" />
              INTEGRATED AI CONSULTANT
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-olive-700 leading-tight">
              Meet <span className="rose-gradient-text italic font-normal">Sintu AI Planner</span>: Your Virtual Event Architect
            </h2>

            <p className="text-xs sm:text-sm text-olive-600 leading-relaxed font-light">
              Calculate instant estimates for minimal small parties (from ₹50k), minimal wedding mandaps (from ₹1.5L - ₹2L), or moderate weddings with full multi-course catering (from ₹7L - ₹8L+) across Jamalpur and Munger.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-olive-700 font-bold pt-2">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-rose-200 shadow-sm">
                <Calculator className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Instant Budget Estimations</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-rose-200 shadow-sm">
                <Utensils className="w-5 h-5 text-rose-700 shrink-0" />
                <span>Catering & Food Menu Builder</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/ai-consultant"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-olive-700 hover:bg-rose-700 text-white shadow-xl hover:scale-105 transition-all group"
              >
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                Launch Sintu AI Planner
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Interactive Chat Interface Teaser Box */}
          <div className="lg:w-5/12 w-full bg-white border-2 border-olive-200 rounded-3xl p-6 shadow-xl font-sans text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-olive-700/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
                <span className="font-bold text-olive-700 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-rose-700" /> Sintu AI Consultant
                </span>
              </div>
              <span className="text-[10px] text-rose-700 font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200">Online AI Assistant</span>
            </div>

            <div className="p-4 rounded-2xl bg-olive-50 border border-olive-200 text-olive-700 shadow-sm font-medium">
              👋 Namaste! Ask me about wedding mandap costs, flower decorations, catering dishes, or tent house packages in Jamalpur.
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-bold ml-4">
              "Estimate cost for 500 guests moderate wedding with catering in Jamalpur."
            </div>

            <div className="p-4 rounded-2xl bg-olive-50 border border-olive-200 text-olive-700 leading-relaxed shadow-sm">
              ✨ **Calculated Range:** ₹7,00,000 - ₹8,50,000 including Royal Mandap, German waterproof pandal, 3D stage, and 15+ dish buffet catering counter.
            </div>

            <div className="pt-2">
              <Link
                to="/ai-consultant"
                className="w-full py-3.5 rounded-xl bg-rose-700 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:bg-olive-700 transition-all"
              >
                <Sparkles className="w-4 h-4 text-white" />
                Try Full AI Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
