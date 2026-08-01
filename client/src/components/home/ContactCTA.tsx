import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';

export const ContactCTA: React.FC = () => {
  const { openModal } = useInquiryModal();

  return (
    <section className="py-24 bg-white border-t border-olive-700/10 text-olive-700 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-olive-50 border border-olive-200 rounded-3xl p-10 sm:p-14 shadow-lg">
          <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">PLAN YOUR SPECIAL DAY</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-olive-700 mt-2">
            Ready to Create an Unforgettable Celebration?
          </h2>
          <p className="text-xs sm:text-sm text-olive-600 mt-4 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Visit us near Shiv Mandir, Mungroura, Jamalpur or request a personalized consultation today. We assure on-time setup and flawless craftsmanship.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-ultra bg-olive-700 hover:bg-rose-700 text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>

            <a
              href="https://wa.me/919431200000?text=Hi%20Sintu%20Decorators,%20I%20want%20to%20inquire%20about%20event%20decoration"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-4 h-4" />
              Instant WhatsApp Chat
            </a>

            <a
              href="tel:+919431200000"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest bg-rose-50 border border-rose-200 text-rose-700 shadow-md hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4 text-rose-700" />
              +918969207777
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
