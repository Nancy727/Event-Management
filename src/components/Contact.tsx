import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  ArrowLeft
} from 'lucide-react';
const Contact: React.FC = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
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
      details: ['123 Event Street', 'Mumbai, Maharashtra 400001', 'India'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
      action: 'Schedule Meeting'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <motion.header
        className="py-32 pb-24 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal mb-8 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-yellow-500 text-center font-serif tracking-tight">
            Get in Touch
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl text-yellow-500 font-light mb-2 text-center">Let's Create Together</p>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Transform your vision into an extraordinary celebration
            </p>
          </motion.div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-yellow-500 font-light mb-6">Begin Your Journey</h3>
            <p className="text-gray-300 font-light mb-12">
              Our team is ready to craft your vision.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {contactInfo.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/90 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                      <method.icon size={28} className="text-yellow-500" />
                    </div>
                    <h4 className="text-2xl text-yellow-500 mb-4 font-light">{method.title}</h4>
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-base text-gray-300 mb-2 font-light">{detail}</p>
                    ))}
                    <button className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                      {method.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-8 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl text-yellow-500 mb-6 font-light">Follow Us</h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 transition-all hover:bg-yellow-500 hover:text-black"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 lg:p-12 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-xl">
              <h3 className="text-3xl text-yellow-500 font-light mb-12 text-center">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-16 text-yellow-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={48} className="mx-auto mb-8 text-yellow-500" />
                  <h4 className="text-2xl text-yellow-500 mb-4 font-normal">Message Sent Successfully!</h4>
                  <p className="text-gray-300 font-light">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm text-yellow-500 font-normal">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm text-yellow-500 font-normal">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm text-yellow-500 font-normal">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eventType" className="text-sm text-yellow-500 font-normal">Event Type *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      >
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eventDate" className="text-sm text-yellow-500 font-normal">Event Date</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="guestCount" className="text-sm text-yellow-500 font-normal">Expected Guests</label>
                      <select
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light"
                      >
                        <option value="">Select Guest Count</option>
                        <option value="50-100">50-100</option>
                        <option value="100-200">100-200</option>
                        <option value="200-500">200-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-yellow-500 font-normal">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your event vision..."
                      required
                      className="bg-black/50 border border-yellow-500/20 rounded-md p-3 text-yellow-200 text-sm transition-all focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 font-light resize-y min-h-[120px]"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
