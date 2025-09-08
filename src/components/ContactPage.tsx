import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Navigation,
  Users,
  Music,
  Utensils
} from 'lucide-react';
import gsap from 'gsap';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      '.contact-container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    // Luxury sparkle animation for title
    gsap.fromTo(
      '.contact-header h1',
      { opacity: 0, rotationX: -15, y: 30 },
      {
        opacity: 1,
        rotationX: 0,
        y: 0,
        duration: 1.2,
        ease: 'back.out(1.7)',
        delay: 0.3,
      }
    );

    // Scroll-triggered sideways swipe animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactItems = document.querySelectorAll('.contact-item');

      contactItems.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const offset = scrollY * 0.1;
        const direction = isEven ? 1 : -1;
        const swipeAmount = Math.sin(offset * 0.01 + index) * 20 * direction;

        gsap.set(item, {
          x: swipeAmount,
          rotationY: swipeAmount * 0.2,
        });
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sintudecorators.com', 'events@sintudecorators.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Event Street, Bandra West', 'Mumbai, Maharashtra 400050', 'India'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      action: 'Schedule Meeting'
    }
  ];

  const services = [
    { icon: Users, name: 'Event Management', description: 'Complete event planning and execution' },
    { icon: Utensils, name: 'Catering Services', description: 'Multi-cuisine catering with professional service' },
    { icon: Music, name: 'Music & Entertainment', description: 'Live music, DJ services, and entertainment' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="opacity-0 contact-container">
        {/* Header */}
        <motion.header
          className="py-32 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500/20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <Link to="/" className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal mb-8 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="contact-header">
              <h1 className="text-5xl md:text-6xl font-light mb-4 text-yellow-500 text-center font-serif tracking-tight">
                Contact Sintu Decorators
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Let's create your perfect event together
            </p>
          </div>
        </motion.header>

        {/* Services Overview */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="group p-8 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/90 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <service.icon size={32} className="text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 font-medium">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section
          className="py-24 bg-gradient-to-b from-black via-black/95 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Ready to plan your dream event? Let's make it happen together
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <motion.div 
                className="p-8 lg:p-12 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/90"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-left">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-white font-medium text-sm">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-white font-medium text-sm">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-white font-medium text-sm">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="eventType" className="block text-white font-medium text-sm">Event Type *</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                          required
                        >
                          <option value="" className="bg-black text-white">Select Event Type</option>
                          <option value="wedding" className="bg-black text-white">Wedding</option>
                          <option value="corporate" className="bg-black text-white">Corporate Event</option>
                          <option value="birthday" className="bg-black text-white">Birthday Party</option>
                          <option value="anniversary" className="bg-black text-white">Anniversary</option>
                          <option value="other" className="bg-black text-white">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="eventDate" className="block text-white font-medium text-sm">Event Date</label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="guestCount" className="block text-white font-medium text-sm">Expected Guests</label>
                        <select
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all"
                        >
                          <option value="" className="bg-black text-white">Select Guest Count</option>
                          <option value="50-100" className="bg-black text-white">50-100</option>
                          <option value="100-200" className="bg-black text-white">100-200</option>
                          <option value="200-500" className="bg-black text-white">200-500</option>
                          <option value="500+" className="bg-black text-white">500+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-white font-medium text-sm">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your event vision..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:bg-white/15 transition-all resize-none"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black rounded-lg font-medium tracking-wide transition-all hover:bg-yellow-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send size={20} />
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="contact-item text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                  <p className="text-gray-300 mb-6">Ready to plan your dream event? Contact us today!</p>

                  <div className="space-y-4">
                    {contactInfo.map((method, index) => (
                      <motion.div
                        key={method.title}
                        className="group p-8 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/90 hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon size={20} className="text-yellow-500" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-white font-medium mb-1">{method.title}</h4>
                          {method.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300 text-sm">{detail}</p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="contact-item text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 transition-all hover:bg-yellow-500 hover:text-black"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Find Us
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Visit our office or get directions to our location
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="contact-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <Navigation size={48} className="text-white mb-6 mx-auto" />
                <h4 className="text-2xl font-semibold text-white mb-4">Sintu Decorators</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  123 Event Street, Bandra West<br />Mumbai, Maharashtra 400050
                </p>
                <motion.button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-lg font-medium tracking-wide transition-all hover:bg-yellow-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin size={16} />
                  Open in Google Maps
                </motion.button>
              </div>
              {/* In a real application, you would integrate with Google Maps API */}
              <div className="lg:col-span-2 contact-item bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0234374234!2d72.8260621!3d19.0544472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzE2LjAiTiA3Mso0OSczMy44IkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sintu Decorators Location"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
