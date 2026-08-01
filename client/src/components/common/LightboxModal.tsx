import React from 'react';
import { X, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { PortfolioMedia } from '../../types';
import { useInquiryModal } from '../../context/InquiryModalContext';

interface LightboxProps {
  item: PortfolioMedia | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({ item, onClose }) => {
  const { openModal } = useInquiryModal();
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-olive-700/60 backdrop-blur-md animate-fadeIn font-sans">
      <div className="relative max-w-4xl w-full bg-white border-2 border-olive-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-olive-700">
        {/* Close Button with high contrast */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-olive-700 bg-white hover:bg-rose-700 hover:text-white p-2.5 rounded-full transition-colors shadow-lg border border-olive-200"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Media Container */}
        <div className="w-full md:w-2/3 bg-black flex items-center justify-center min-h-[300px] md:min-h-[480px]">
          {item.mediaType === 'VIDEO' ? (
            <video src={item.mediaUrl} controls autoPlay className="max-h-[70vh] w-full object-contain" />
          ) : (
            <img
              src={item.mediaUrl}
              alt={item.title}
              className="max-h-[70vh] w-full object-contain"
            />
          )}
        </div>

        {/* Sidebar Details */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-between space-y-4 bg-white">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-rose-700 font-extrabold px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
              SINTU PORTFOLIO ITEM
            </span>
            <h3 className="font-serif text-xl font-normal text-olive-700 mt-3 leading-tight">
              {item.title}
            </h3>
            {item.location && (
              <p className="text-xs text-rose-700 flex items-center gap-1.5 mt-2 font-bold">
                <MapPin className="w-4 h-4 text-rose-700" />
                {item.location}
              </p>
            )}
            <p className="text-xs text-olive-600 mt-4 leading-relaxed font-light">
              {item.description || 'Custom handcrafted event decoration and tent house installation by Sintu Decorators.'}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-olive-100">
            <button
              onClick={() => {
                onClose();
                openModal(`Design Inquiry: ${item.title}`);
              }}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-olive-700 hover:bg-rose-700 text-white shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-white" />
              Inquire For This Design
            </button>

            <a
              href={`https://wa.me/919431200000?text=Hi%20Sintu%20Ji,%20I%20am%20interested%20in%20this%20design:%20${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl font-bold bg-emerald-700 hover:bg-emerald-600 text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              Ask Details on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
