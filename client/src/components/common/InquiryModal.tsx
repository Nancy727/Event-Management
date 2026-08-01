import React, { useState } from 'react';
import { X, Calendar, Phone, User, Send, CheckCircle2 } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';
import { apiService } from '../../services/api';
import { SintuBrandLogo } from './SintuBrandLogo';
import confetti from 'canvas-confetti';

export const InquiryModal: React.FC = () => {
  const { isOpen, selectedService, closeModal } = useInquiryModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: selectedService || 'Wedding Decoration',
    eventDate: '',
    guestCount: '300',
    location: 'Jamalpur / Munger',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiService.sendContactMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        guestCount: parseInt(formData.guestCount, 10),
        location: formData.location,
        message: formData.message || `Inquiry for ${formData.eventType}`,
      });

      setLoading(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-olive-700/60 backdrop-blur-md animate-fadeIn font-sans">
      <div className="bg-white border-2 border-olive-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-olive-700">
        {/* Close Button with high contrast */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-olive-700 hover:text-white bg-rose-100 hover:bg-rose-700 p-2.5 rounded-full transition-colors shadow-md border border-rose-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-olive-700">Inquiry Received</h3>
            <p className="text-xs text-olive-600 font-light">
              Thank you, <span className="font-bold text-olive-700">{formData.name}</span>. Sintu Decorators team will call you at <span className="text-rose-700 font-bold">{formData.phone}</span> shortly to discuss custom designs, catering, and pricing.
            </p>
            <div className="pt-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest bg-olive-700 text-white hover:bg-rose-700 transition-colors shadow-md"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-center">
              <SintuBrandLogo size="sm" />
              <h2 className="font-serif text-2xl font-normal text-olive-700 mt-3">
                Book Event Consultation
              </h2>
              <p className="text-xs text-rose-700 font-bold uppercase tracking-wider mt-1">
                Near Shiv Mandir, Mungroura, Jamalpur
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-olive-700 mb-1 uppercase tracking-wider">Your Name *</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-rose-700 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 text-xs bg-olive-50 border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-olive-700 mb-1 uppercase tracking-wider">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-rose-700 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 text-xs bg-olive-50 border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-olive-700 mb-1 uppercase tracking-wider">Event Category</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-olive-50 border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none font-bold"
                  >
                    <option value="Minimal Small Party">Minimal Small Party (from ₹50k)</option>
                    <option value="Minimal Wedding Event">Minimal Wedding Event (from ₹1.5L - ₹2L)</option>
                    <option value="Moderate Wedding with Catering">Moderate Wedding + Catering (from ₹7L - ₹8L)</option>
                    <option value="Tent House & Pandal">Waterproof Tent House Setup</option>
                    <option value="Exotic Flower Styling">Exotic Flower & Haldi Styling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-olive-700 mb-1 uppercase tracking-wider">Target Event Date</label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-rose-700 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 text-xs bg-olive-50 border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-olive-700 mb-1 uppercase tracking-wider">Special Requirements / Catering Dishes</label>
                <textarea
                  rows={3}
                  placeholder="Mention guest count, venue location, or specific food menu items & luxury demands..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs bg-olive-50 border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-olive-700 hover:bg-rose-700 text-white shadow-md flex items-center justify-center gap-2 transition-all"
              >
                {loading ? 'Submitting...' : 'Send Inquiry'}
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
