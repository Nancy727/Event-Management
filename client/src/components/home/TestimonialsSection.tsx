import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      clientName: 'Rajesh & Priti Sharma',
      location: 'Jamalpur, Munger',
      rating: 5,
      comment: 'Sintu Decorators turned our wedding into an absolute fairytale near Shiv Mandir! The flower mandap and lighting exceeded our wildest expectations.',
      eventType: 'Wedding & Reception',
      boxClass: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
      clientName: 'Amitabh Kumar Roy',
      location: 'Bari Daryapur, Jamalpur',
      rating: 5,
      comment: 'Extremely professional tent house setup. Even during unexpected rain, the waterproof pandal stayed perfectly dry and safe. Sintu ji is very cooperative.',
      eventType: 'Sister Wedding',
      boxClass: 'bg-olive-50 border-olive-200 text-olive-700',
    },
    {
      clientName: 'Sunita & Vikram Singh',
      location: 'Mungroura, Jamalpur',
      rating: 5,
      comment: 'We booked them for our son’s 1st birthday theme decoration. The balloon arch and cake table backdrop were stunning. All guests were impressed!',
      eventType: 'Birthday Party',
      boxClass: 'bg-rose-50 border-rose-200 text-rose-700',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-olive-700/10 text-olive-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">TESTIMONIALS & REPUTATION</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-olive-700 mt-1">
            Loved By Families Across Munger District
          </h2>
          <p className="text-xs sm:text-sm text-olive-600 mt-2 font-light">
            Read real client experiences from weddings, tent houses, and celebrations managed by Sintu Decorators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border shadow-sm relative flex flex-col justify-between ${t.boxClass}`}
            >
              <Quote className="w-10 h-10 opacity-15 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic leading-relaxed font-serif font-light">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-current/10">
                <h4 className="font-bold text-xs uppercase tracking-widest">{t.clientName}</h4>
                <div className="flex items-center justify-between text-xs opacity-90 mt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</span>
                  <span className="font-semibold">{t.eventType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
