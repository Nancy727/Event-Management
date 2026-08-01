import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Where is Sintu Decorators office located in Jamalpur?',
      a: 'Our main office & material warehouse is situated near Shiv Mandir, Mungroura, Jamalpur, Munger, Bihar 811214. You can visit us daily from 8:00 AM to 10:00 PM for live design catalogs and menu discussions.',
      boxClass: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
      q: 'What is the starting price for wedding decor and catering packages?',
      a: 'Minimal small parties start at ₹25,000 - ₹35,000. Minimal wedding mandap & tent setups start at ₹1 Lakh - ₹1.5 Lakhs. Moderate weddings along with full multi-course catering range from ₹4.5 Lakhs - ₹6 Lakhs+. Ultra luxury destination weddings range from ₹12 Lakhs - ₹25 Lakhs+. Everything depends on guest count, decor complexity, and food menu items.',
      boxClass: 'bg-olive-50 border-olive-200 text-olive-700',
    },
    {
      q: 'How far in advance should we book Sintu Decorators for a wedding?',
      a: 'During peak Bihari wedding seasons (Lagna months in April-May & Nov-Dec), we recommend booking 1 to 3 months in advance to reserve your preferred mandap themes, German tent house structures, and catering teams.',
      boxClass: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
      q: 'Are your tent house pandal structures completely waterproof?',
      a: 'Yes! We use high-peak German hanger structures and heavy-duty 3-ply waterproof vinyl drapes with plush carpeted flooring to ensure 100% weather resilience even during heavy rains.',
      boxClass: 'bg-olive-50 border-olive-200 text-olive-700',
    },
    {
      q: 'Which areas do you serve in Munger district?',
      a: 'We provide full transportation, catering, and decor installation across Jamalpur town, Munger city, Mungroura, Bari Daryapur, Kasimbazar, Safiasarai, Gymkhana grounds, and surrounding local areas in Munger district.',
      boxClass: 'bg-rose-50 border-rose-200 text-rose-700',
    },
  ];

  return (
    <section className="py-24 bg-white text-olive-700 border-t border-olive-700/10 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">GOT QUESTIONS?</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-olive-700 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-olive-600 mt-2 font-light">
            Everything you need to know about booking wedding decor, catering & tent house services in Jamalpur & Munger.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border shadow-sm overflow-hidden transition-all ${faq.boxClass}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-normal text-base sm:text-lg text-inherit hover:opacity-80 transition-colors"
                >
                  <span className="flex items-center gap-3.5">
                    <HelpCircle className="w-6 h-6 shrink-0 text-current" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-6 h-6 shrink-0 transition-transform text-current ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm leading-relaxed font-light border-t border-current/10 opacity-90 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
