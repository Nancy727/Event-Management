import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';

export const BottomCTA: React.FC = () => {
  const { openModal } = useInquiryModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-olive-700/10 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      {/* Phone Call */}
      <a
        href="tel:+919431200000"
        className="flex-1 py-3 rounded-xl bg-rose-50 text-rose-700 font-bold text-xs flex items-center justify-center gap-2 border border-rose-200 active:scale-95 transition-transform uppercase tracking-wider shadow-sm"
      >
        <Phone className="w-4 h-4 text-rose-700" />
        Call
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919431200000?text=Hi%20Sintu%20Decorators,%20I%20want%20to%20inquire%20about%20event%20decoration"
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform uppercase tracking-wider shadow-sm"
      >
        <MessageSquare className="w-4 h-4 text-white" />
        WhatsApp
      </a>

      {/* Book Event Modal Trigger */}
      <button
        onClick={() => openModal()}
        className="flex-[1.4] py-3 rounded-xl bg-olive-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform uppercase tracking-widest"
      >
        <Calendar className="w-4 h-4 text-white" />
        Book Consultation
      </button>
    </div>
  );
};
