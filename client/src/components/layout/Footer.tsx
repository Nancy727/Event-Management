import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SintuBrandLogo } from '../common/SintuBrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-olive-700 pt-16 pb-28 md:pb-12 border-t border-olive-700/10 relative overflow-hidden font-sans">
      {/* Background Soft Rose Glow */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info with Mindy Weiss Style Signature Logo */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <SintuBrandLogo size="sm" />
            </Link>
            <p className="text-xs text-olive-600 leading-relaxed font-light mt-4">
              Jamalpur & Munger’s premier haute couture wedding planner & event consultant. Specializing in royal floral mandaps, 3D reception architecture, multi-cuisine catering, and weatherproof tent house setups near Shiv Mandir, Mungroura.
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-700 font-bold pt-2 uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 text-rose-700" /> 15+ Years Local Trust & Excellence
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-normal text-olive-700 mb-4 border-b border-olive-700/10 pb-2 inline-block uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-widest text-olive-600">
              <li><Link to="/" className="hover:text-rose-700 transition-colors">Home Overview</Link></li>
              <li><Link to="/about" className="hover:text-rose-700 transition-colors">Heritage & Story</Link></li>
              <li><Link to="/services" className="hover:text-rose-700 transition-colors">Bespoke Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-rose-700 transition-colors">Event Gallery</Link></li>
              <li><Link to="/ai-consultant" className="hover:text-rose-700 transition-colors">Sintu AI Consultant</Link></li>
              <li><Link to="/contact" className="hover:text-rose-700 transition-colors">Contact & Directions</Link></li>
              <li><Link to="/admin/login" className="text-[10px] text-gray-400 hover:text-rose-700 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Service Areas (Strictly Jamalpur & Munger - NO Bhagalpur) */}
          <div>
            <h3 className="font-serif text-base font-normal text-olive-700 mb-4 border-b border-olive-700/10 pb-2 inline-block uppercase tracking-widest">
              Areas Served
            </h3>
            <ul className="grid grid-cols-2 gap-2.5 text-xs text-olive-700 font-medium">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Jamalpur Town</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Munger City</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Mungroura</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Bari Daryapur</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Kasimbazar</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Safiasarai</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Gymkhana Ground</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-700 shrink-0" /> Railway Grounds</li>
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-normal text-olive-700 mb-4 border-b border-olive-700/10 pb-2 inline-block uppercase tracking-widest">
              Locate & Contact
            </h3>
            <p className="text-xs flex items-start gap-2.5 text-olive-600 font-light">
              <MapPin className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
              <span>Near Shiv Mandir, Mungroura, Jamalpur, Munger, Bihar 811214, India</span>
            </p>
            <p className="text-xs flex items-center gap-2.5 text-olive-600">
              <Phone className="w-4 h-4 text-rose-700 shrink-0" />
              <a href="tel:+919431200000" className="hover:text-rose-700 font-bold text-olive-700">+91 94312 00000</a>
            </p>
            <p className="text-xs flex items-center gap-2.5 text-olive-600">
              <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href="https://wa.me/919431200000?text=Hi%20Sintu%20Decorators,%20I%20want%20to%20inquire%20about%20event%20decoration" target="_blank" rel="noreferrer" className="hover:text-emerald-700 font-bold text-emerald-800">
                WhatsApp Sintu Ji
              </a>
            </p>
            <p className="text-xs flex items-center gap-2.5 text-olive-600">
              <Clock className="w-4 h-4 text-rose-700 shrink-0" />
              <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-olive-700/10 flex flex-col md:flex-row items-center justify-between text-xs text-olive-600 gap-4">
          <p>© {new Date().getFullYear()} SINTU DECORATORS. All rights reserved. Event & Catering Consultants Jamalpur, Munger.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Crafted with <Heart className="w-4 h-4 text-rose-700 fill-rose-700" /> for Haute Couture Celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
};
