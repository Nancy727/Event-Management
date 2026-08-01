import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';
import { apiService } from '../services/api';
import { useInquiryModal } from '../context/InquiryModalContext';
import { BudgetEstimator } from '../components/common/BudgetEstimator';

export const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { openModal } = useInquiryModal();

  useEffect(() => {
    apiService.getServices().then((data) => setServices(data));
  }, []);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'wedding', label: 'Wedding & Mandap' },
    { id: 'tent-house', label: 'Tent House & Pandal' },
    { id: 'flower-decor', label: 'Flower Styling' },
    { id: 'birthday', label: 'Birthday & Theme' },
    { id: 'stage-reception', label: 'Stage & Reception' },
    { id: 'lighting-sound', label: 'Lighting & Sound' },
    { id: 'catering-services', label: 'Catering & Hospitality' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.categoryId === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-white text-olive-700 min-h-screen font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">BESPOKE OFFERINGS</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-olive-700 mt-2">
          Bespoke Event, Tent & Catering Solutions
        </h1>
        <p className="text-xs sm:text-sm text-olive-600 mt-4 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          From royal mandaps near Shiv Mandir, Mungroura to heavy waterproof German tent houses and gourmet catering across Munger district.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-olive-700 text-white shadow-md scale-105'
                  : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, idx) => {
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
                className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${boxClass}`}
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-normal text-olive-700">
                      {service.title}
                    </h3>
                    <p className="text-xs text-olive-600 mt-2.5 leading-relaxed font-light">
                      {service.fullDesc}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-[10px] font-extrabold text-rose-700 uppercase tracking-ultra mb-2">Package Highlights</h4>
                      <ul className="space-y-2 text-xs text-olive-700">
                        {featureList.map((feat: string, fIdx: number) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openModal(service.title)}
                    className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-md ${btnClass}`}
                  >
                    <Calendar className="w-6 h-6 text-white shrink-0 stroke-[2.2]" />
                    <span>Inquire For {service.title}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Budget Estimator Component */}
        <BudgetEstimator />
      </div>
    </div>
  );
};
