import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { apiService } from '../services/api';
import { SintuBrandLogo } from '../components/common/SintuBrandLogo';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Decoration',
    eventDate: '',
    guestCount: '300',
    location: 'Jamalpur',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        message: formData.message,
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
    <div className="pt-28 pb-24 bg-white text-olive-700 min-h-screen font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-ultra text-rose-700">GET IN TOUCH</span>
        <div className="mt-3">
          <SintuBrandLogo size="md" />
        </div>
        <p className="text-xs sm:text-sm text-olive-600 mt-4 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Visit our office near Shiv Mandir, Mungroura, Jamalpur or send your event requirements below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Box in Rose Pink (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-rose-50 border border-rose-200 shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-normal text-olive-700 border-b border-rose-200 pb-4">
                Office & Direct Contacts
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-olive-700 font-semibold uppercase tracking-wider">Address</strong>
                    <p className="text-olive-600 font-light mt-0.5">Near Shiv Mandir, Mungroura, Jamalpur, Munger, Bihar 811214, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-olive-700 font-semibold uppercase tracking-wider">Phone Call</strong>
                    <a href="tel:+919431200000" className="text-rose-700 font-bold hover:underline">
                      +918969207777
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-olive-700 font-semibold uppercase tracking-wider">WhatsApp Chat</strong>
                    <a
                      href="https://wa.me/919431200000?text=Hi%20Sintu%20Decorators,%20I%20want%20to%20inquire%20about%20event%20decoration"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Chat with Sintu Ji on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-olive-700 font-semibold uppercase tracking-wider">Business Hours</strong>
                    <p className="text-olive-600 font-light mt-0.5">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="rounded-3xl overflow-hidden border border-olive-200 shadow-md h-64 bg-olive-50 relative">
              <iframe
                title="Sintu Decorators Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.521877402636!2d86.4889!3d25.3168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzAwLjUiTiA4NsKwMjknMjAwLjAiRQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-80"
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=Jamalpur+Munger+Bihar"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-olive-700 text-white font-bold text-[11px] uppercase tracking-widest shadow-md"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Form Box in Olive Green (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-olive-50 border border-olive-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-olive-700">Inquiry Received</h3>
                  <p className="text-xs text-olive-600 font-light">
                    Thank you <span className="font-bold text-olive-700">{formData.name}</span>. Sintu Decorators team will review your requirements for <span className="text-rose-700 font-semibold">{formData.eventType}</span> and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-normal text-olive-700 mb-4">
                    Send Direct Event Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-olive-700 mb-1 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-olive-700 mb-1 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-olive-700 mb-1 uppercase tracking-wider">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none"
                      >
                        <option value="Wedding Decoration">Wedding & Royal Mandap</option>
                        <option value="Tent House & Pandal">Waterproof Tent House</option>
                        <option value="Exotic Flower Styling">Exotic Flower Styling</option>
                        <option value="Birthday & Anniversary">Birthday & Theme Party</option>
                        <option value="Government & Corporate">Government & Corporate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-olive-700 mb-1 uppercase tracking-wider">Target Event Date</label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-olive-700 mb-1 uppercase tracking-wider">Event Details & Specific Requirements</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please mention guest count, venue location (Jamalpur, Munger, Bari Daryapur), and preferred theme..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-white border border-olive-200 rounded-xl text-olive-700 focus:border-rose-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-olive-700 hover:bg-rose-700 text-white shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
