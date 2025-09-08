import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, Star, ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, value: '500+', label: 'Events Completed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      title: 'Heritage',
      description: 'Traditional elegance meets modern sophistication.'
    },
    {
      title: 'Quality',
      description: 'Every detail crafted with excellence.'
    },
    {
      title: 'Service',
      description: 'Tailored to your unique vision.'
    },
    {
      title: 'Commitment',
      description: 'Exceeding expectations, always.'
    }
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
          <h1 className="text-5xl md:text-6xl font-light mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent text-center font-serif tracking-tight animate-[sparkle_3s_ease-in-out_infinite]">
            About Us
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl text-yellow-500 font-light mb-2 text-center">Excellence Since 2008</p>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Crafting Memorable Experiences with Passion and Precision
            </p>
          </motion.div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:text-left text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-lg mb-8 text-yellow-500 text-sm font-normal tracking-wide">
              <Award size={20} />
              <span>About Sintu Decorators</span>
            </div>

            <h2 className="text-5xl font-light text-white mb-8">Excellence Since 2008</h2>
            
            <p className="text-xl leading-relaxed mb-12 text-gray-300 font-light max-w-2xl">
              Crafting extraordinary celebrations with precision and elegance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900/50 border border-yellow-500/10 rounded-lg transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/80"
                >
                  <h4 className="text-lg text-yellow-500 mb-2 font-normal">{value.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/10 rounded-lg p-6 transition-all duration-300 hover:border-yellow-500/20 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-md flex items-center justify-center text-black flex-shrink-0">
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl text-yellow-500 font-semibold m-0">{stat.value}</h3>
                      <p className="text-sm text-gray-300 uppercase tracking-wider font-light m-0">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-black to-yellow-900/20 border border-yellow-500/20 shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-300">
                  <div>
                    <Award size={60} className="text-yellow-500 mb-4" />
                    <h4 className="text-2xl text-yellow-500 mb-2 font-normal">Our Journey</h4>
                    <p className="text-base text-gray-300 font-light">25+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-900/90 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-16 text-center relative z-10"
        >
          <div>
            <h3 className="text-4xl text-yellow-500 mb-8 font-light">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
              Creating extraordinary celebrations that exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
