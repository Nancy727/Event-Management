import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, Sparkles } from 'lucide-react';
import { useInquiryModal } from '../../context/InquiryModalContext';
import { SintuBrandLogo } from '../common/SintuBrandLogo';

export const Navbar: React.FC = () => {
  const { openModal } = useInquiryModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'AI Consultant', path: '/ai-consultant', badge: 'AI' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-olive-700/10 py-3'
          : 'bg-white/95 backdrop-blur-sm py-4 border-b border-olive-700/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Mindy Weiss Style Brand Logo */}
        <Link to="/" className="hover:opacity-95 transition-opacity shrink-0">
          <SintuBrandLogo size="sm" />
        </Link>

        {/* Desktop Nav Links - Single Line Alignment with whitespace-nowrap */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 shrink-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[11px] lg:text-xs uppercase tracking-widest font-bold transition-all hover:text-rose-700 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-rose-700 font-extrabold'
                    : 'text-olive-700'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold bg-rose-700 text-white rounded-full flex items-center gap-1 shadow-sm shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-700 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:flex items-center space-x-4 shrink-0">
          <button
            onClick={() => openModal()}
            className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest bg-olive-700 hover:bg-rose-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4.5 h-4.5 text-white stroke-[2.2]" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-olive-700 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-rose-700" /> : <Menu className="w-7 h-7 text-olive-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-olive-700/10 px-6 py-6 space-y-4 shadow-2xl transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-widest text-olive-700 hover:text-rose-700 border-b border-olive-700/5 whitespace-nowrap"
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2.5 py-1 text-xs font-bold bg-rose-700 text-white rounded-full flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    {link.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-olive-700 text-white shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-white" />
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
