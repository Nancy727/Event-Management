import React from 'react';
import { Award, Users, Star, Sparkles } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    { icon: Award, count: '15+', label: 'Years of Heritage', sub: 'Established near Shiv Mandir, Mungroura', boxClass: 'bg-rose-50 border-rose-200 text-rose-700' },
    { icon: Users, count: '1,200+', label: 'Royal Events Managed', sub: 'Weddings, Receptions & Summits', boxClass: 'bg-olive-50 border-olive-200 text-olive-700' },
    { icon: Star, count: '99%', label: 'Client Acclaim', sub: '5-Star local reputation', boxClass: 'bg-rose-50 border-rose-200 text-rose-700' },
    { icon: Sparkles, count: '50+', label: 'Bespoke Floral Themes', sub: 'Royalty & modern setups', boxClass: 'bg-olive-50 border-olive-200 text-olive-700' },
  ];

  return (
    <section className="py-14 bg-white border-y border-olive-700/10 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`p-6 rounded-3xl border shadow-sm hover:shadow-md transition-all group ${item.boxClass}`}>
                <Icon className="w-7 h-7 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-serif text-3xl sm:text-4xl font-normal">
                  {item.count}
                </span>
                <p className="font-bold text-xs uppercase tracking-widest mt-2">{item.label}</p>
                <p className="text-[11px] opacity-80 mt-1 font-light">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
