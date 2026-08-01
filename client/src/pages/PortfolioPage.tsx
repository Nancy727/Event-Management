import React, { useState, useEffect } from 'react';
import { Eye, MapPin } from 'lucide-react';
import { PortfolioMedia } from '../types';
import { apiService } from '../services/api';
import { LightboxModal } from '../components/common/LightboxModal';
import { SintuBrandLogo } from '../components/common/SintuBrandLogo';

export const PortfolioPage: React.FC = () => {
  const [items, setItems] = useState<PortfolioMedia[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<PortfolioMedia | null>(null);

  useEffect(() => {
    apiService.getPortfolio().then((data) => setItems(data));
  }, []);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'wedding', label: 'Royal Mandaps' },
    { id: 'stage-reception', label: 'Reception Stages' },
    { id: 'flower-decor', label: 'Flower Styling' },
    { id: 'tent-house', label: 'Tent House' },
    { id: 'birthday', label: 'Birthday & Theme' },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((i) => i.categoryId === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-white text-olive-700 min-h-screen font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">CURATED PORTFOLIO</span>
        <div className="mt-3">
          <SintuBrandLogo size="md" />
        </div>
        <p className="text-xs sm:text-sm text-olive-600 mt-4 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Browse real event setups executed near Shiv Mandir, Mungroura, Bari Daryapur, and across Jamalpur & Munger.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat.id
                  ? 'bg-olive-700 text-white shadow-md scale-105'
                  : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const borderClass = isEven ? 'border-rose-200 hover:border-rose-700' : 'border-olive-200 hover:border-olive-700';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer border shadow-md h-80 transition-all duration-500 hover:shadow-2xl ${borderClass}`}
              >
                <img
                  src={item.mediaUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-700/90 via-olive-700/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  {item.location && (
                    <p className="text-[10px] text-rose-200 font-bold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                  )}
                  <h3 className="font-serif text-lg font-normal text-white group-hover:text-rose-200 transition-colors mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-olive-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LightboxModal item={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  );
};
