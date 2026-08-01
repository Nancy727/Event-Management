import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, MapPin, ArrowRight } from 'lucide-react';
import { PortfolioMedia } from '../../types';
import { apiService } from '../../services/api';
import { LightboxModal } from '../common/LightboxModal';

export const PortfolioHighlight: React.FC = () => {
  const [items, setItems] = useState<PortfolioMedia[]>([]);
  const [activeItem, setActiveItem] = useState<PortfolioMedia | null>(null);

  useEffect(() => {
    apiService.getPortfolio().then((data) => {
      setItems(data.slice(0, 3));
    });
  }, []);

  return (
    <section className="py-24 bg-white text-olive-700 relative border-t border-olive-700/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">RECENT PORTFOLIO</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-olive-700 mt-1">
              Visual Showcase of Real Events
            </h2>
            <p className="text-xs sm:text-sm text-olive-600 mt-2 max-w-2xl font-light">
              Explore royal mandaps, Haldi marigold swings, and waterproof tent houses executed across Bari Daryapur, Jamalpur, and Munger.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-4 md:mt-0 font-bold text-xs uppercase tracking-widest text-rose-700 hover:underline flex items-center gap-1 group"
          >
            Explore Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const borderClass = isEven ? 'border-rose-200 hover:border-rose-700' : 'border-olive-200 hover:border-olive-700';

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer border shadow-md h-80 transition-all duration-500 hover:shadow-2xl ${borderClass}`}
              >
                <img
                  src={item.mediaUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-700/90 via-olive-700/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {item.location && (
                    <p className="text-[10px] text-rose-200 font-bold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                  )}
                  <h3 className="font-serif text-lg font-normal text-white group-hover:text-rose-200 transition-colors line-clamp-1 mt-1">
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

      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};
