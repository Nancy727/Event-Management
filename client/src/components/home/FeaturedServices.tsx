import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { ServiceItem } from '../../types';
import { apiService } from '../../services/api';
import { useInquiryModal } from '../../context/InquiryModalContext';

export const FeaturedServices: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const { openModal } = useInquiryModal();

  useEffect(() => {
    apiService.getServices().then((data) => {
      setServices(data.slice(0, 4));
    });
  }, []);

  return (
    <section className="py-24 bg-white text-olive-700 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">BESPOKE SERVICES</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-olive-700 mt-1">
              Curated Event, Tent & Catering Solutions
            </h2>
            <p className="text-xs sm:text-sm text-olive-600 mt-2 max-w-2xl font-light tracking-wide">
              Handcrafted wedding decor, waterproof tent house structures, and multi-cuisine catering setups across Munger & Jamalpur. Use our interactive budget calculator below for customized package estimates.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 font-bold text-xs uppercase tracking-widest text-rose-700 hover:underline flex items-center gap-1.5 group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 text-rose-700 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const featureList = Array.isArray(service.features)
              ? service.features
              : typeof service.features === 'string'
              ? JSON.parse(service.features || '[]')
              : [];

            const isEven = idx % 2 === 0;
            const boxClass = isEven ? 'bg-rose-50 border-rose-200' : 'bg-olive-50 border-olive-200';
            const btnClass = isEven ? 'bg-rose-700 hover:bg-olive-700 text-white' : 'bg-olive-700 hover:bg-rose-700 text-white';

            return (
              <div
                key={service.id}
                className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group ${boxClass}`}
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-normal text-olive-700 group-hover:text-rose-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-olive-600 mt-2.5 line-clamp-3 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-olive-700 font-medium">
                      {featureList.slice(0, 3).map((f: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openModal(service.title)}
                    className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-md ${btnClass}`}
                  >
                    <Calendar className="w-6 h-6 text-white shrink-0 stroke-[2.2]" />
                    <span>Inquire Service</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
