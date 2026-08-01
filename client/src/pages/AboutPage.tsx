import React from 'react';
import { ShieldCheck, MapPin, Heart } from 'lucide-react';
import { SintuBrandLogo } from '../components/common/SintuBrandLogo';

export const AboutPage: React.FC = () => {
  const timeline = [
    { year: '2010', title: 'Foundation near Shiv Mandir', desc: 'Started operations in Mungroura, Jamalpur providing traditional tent house setups.', boxClass: 'bg-rose-50 border-rose-200' },
    { year: '2015', title: 'Fresh Flower Division', desc: 'Introduced direct imports of exotic roses and orchids for high-end wedding mandaps.', boxClass: 'bg-olive-50 border-olive-200' },
    { year: '2019', title: 'German Pandal Infrastructure', desc: 'Acquired heavy weatherproof German structure tents for large public & corporate events.', boxClass: 'bg-rose-50 border-rose-200' },
    { year: '2023', title: '3D Stage & Catering Counters', desc: 'Launched modern 3D fiber stage panels, cold pyro shows, and luxury buffet catering counters.', boxClass: 'bg-olive-50 border-olive-200' },
    { year: '2026', title: 'Sintu AI Planner Integration', desc: 'Pioneered AI-driven event budgeting and instant design recommendations in Bihar.', boxClass: 'bg-rose-50 border-rose-200' },
  ];

  const areasServed = [
    'Jamalpur Main Town',
    'Shiv Mandir & Mungroura',
    'Bari Daryapur',
    'Kasimbazar & Fort Area',
    'Safiasarai Junction',
    'Munger Town Hall Grounds',
    'Gymkhana & Railway Grounds',
    'Surrounding Munger District',
  ];

  return (
    <div className="pt-28 pb-24 bg-white text-olive-700 min-h-screen font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">HERITAGE & TRUST</span>
        <div className="mt-3">
          <SintuBrandLogo size="lg" />
        </div>
        <p className="text-xs sm:text-sm text-olive-600 mt-4 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Crafting haute couture celebrations near Shiv Mandir, Mungroura, Jamalpur for over 15 years with unyielding commitment to beauty, safety, and local heritage.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-rose-200">
            <img
              src="/royal_mandap.jpg"
              alt="Sintu Decorators Mandap Setup"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-700/90 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] text-rose-200 font-bold uppercase tracking-widest">Jamalpur Heritage</span>
              <h3 className="font-serif text-xl font-normal text-white mt-1">
                Founded on Craftsmanship & Reliability
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-normal text-olive-700">
              15+ Years of Royal Celebrations in Munger District
            </h2>
            <p className="text-xs sm:text-sm text-olive-600 leading-relaxed font-light">
              Sintu Decorators was established with a singular vision: to bring world-class haute couture wedding design, multi-course gourmet catering, and bulletproof event infrastructure to families in Jamalpur, Munger, and surrounding local areas.
            </p>
            <p className="text-xs sm:text-sm text-olive-600 leading-relaxed font-light">
              Minimal small parties start at ₹50,000, minimal wedding mandaps start at ₹1.5 Lakhs - ₹2 Lakhs, and grand wedding events with full catering range from ₹7 Lakhs - ₹8 Lakhs+, with every package tailored to guest count, decor complexity, and food menu items.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-rose-700 mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-olive-700">Weatherproof Guarantee</h4>
                <p className="text-[11px] text-olive-600 mt-1 font-light">German structure tents</p>
              </div>
              <div className="p-5 rounded-2xl bg-olive-50 border border-olive-200 shadow-sm">
                <Heart className="w-7 h-7 text-rose-700 fill-rose-700 mb-2" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-olive-700">Fresh Exotic Florals</h4>
                <p className="text-[11px] text-olive-600 mt-1 font-light">Handpicked orchids & roses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">OUR JOURNEY</span>
            <h2 className="font-serif text-3xl font-normal text-olive-700 mt-1">
              Milestones of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border shadow-sm relative ${item.boxClass}`}>
                <span className="text-2xl font-serif font-bold text-rose-700 block mb-2">{item.year}</span>
                <h4 className="font-bold text-xs uppercase tracking-wider text-olive-700">{item.title}</h4>
                <p className="text-[11px] text-olive-600 mt-2 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas Served Grid Box (NO Bhagalpur) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-olive-50 border border-olive-200 text-olive-700 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">LOCAL COVERAGE</span>
            <h2 className="font-serif text-3xl font-normal text-olive-700">
              Areas & Districts We Serve
            </h2>
            <p className="text-xs text-olive-600 font-light">
              We provide full logistics, tent house transport, decor, and catering setups across key local hubs:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {areasServed.map((area, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-olive-200 shadow-sm flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-700 shrink-0" />
                <span className="text-xs font-bold text-olive-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
