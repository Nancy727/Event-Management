import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Users,
  Calendar,
  Star,
  Music,
  Utensils,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Play,
} from "lucide-react";
import gsap from "gsap";

const AboutPage: React.FC = () => {
  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      ".about-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Luxury sparkle animation for title
    gsap.fromTo(
      ".about-header h1",
      { opacity: 0, rotationX: -15, y: 30 },
      {
        opacity: 1,
        rotationX: 0,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );

    // Scroll-triggered sideways swipe animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutItems = document.querySelectorAll(".about-item");

      aboutItems.forEach((item, index) => {
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { icon: Calendar, value: "500+", label: "Events Completed" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Star, value: "98%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: Users,
      title: "Event Management",
      description:
        "Complete event planning from conception to execution. We handle every detail to ensure your special day is perfect.",
      features: [
        "Wedding Planning",
        "Corporate Events",
        "Birthday Parties",
        "Anniversary Celebrations",
      ],
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description:
        "Multi-cuisine catering with professional service staff. From traditional Indian to international cuisines.",
      features: [
        "Multi-Cuisine Menu",
        "Professional Staff",
        "Custom Menu Planning",
        "Live Cooking Stations",
      ],
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description:
        "Live music performances, DJ services, and comprehensive entertainment coordination for all types of events.",
      features: [
        "Live Band Performances",
        "Professional DJ Services",
        "Sound System Setup",
        "Entertainment Coordination",
      ],
    },
  ];

  const teamMembers = [
    {
      name: "Sintu Kumar",
      role: "Founder & CEO",
      experience: "25+ Years",
      description:
        "Visionary leader with passion for creating memorable experiences",
    },
    {
      name: "Aprajita Devi",
      role: "Event Designer",
      experience: "20+ Years",
      description: "Creative expert in transforming venues into magical spaces",
    },
    {
      name: "Sangita Devi",
      role: "Catering Head",
      experience: "25+ Years",
      description: "Culinary master specializing in multi-cuisine preparations",
    },
  ];

  const milestones = [
    {
      year: "1999",
      event: "Company Founded",
      description: "Started with a vision to create extraordinary celebrations",
    },
    {
      year: "2005",
      event: "100+ Events",
      description: "Reached our first major milestone of successful events",
    },
    {
      year: "2010",
      event: "Team Expansion",
      description: "Expanded our team to include specialized departments",
    },
    {
      year: "2020",
      event: "Digital Innovation",
      description: "Introduced virtual event planning and hybrid celebrations",
    },
    {
      year: "2024",
      event: "500+ Events",
      description: "Celebrating over 500 successful events and counting",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="opacity-0 about-container">
        {/* Header */}
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
            <div className="about-header">
              <h1 className="text-5xl md:text-6xl font-light mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent text-center font-serif tracking-tight animate-[sparkle_3s_ease-in-out_infinite]">
                About Sintu Decorators
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto font-light">
              Excellence in Event Management Since 1999
            </p>
          </div>
        </motion.header>

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="about-item text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon size={32} className="text-white mb-4 mx-auto" />
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Company Overview */}
        <motion.section
          className="py-24 bg-gradient-to-b from-black via-black/95 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Excellence in event management since 1999
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="about-item">
                <div className="text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <Award size={48} className="text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Story</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    For over 25 years, Sintu Decorators has been synonymous with
                    excellence in event management, catering services, and
                    entertainment. We transform your dreams into unforgettable
                    experiences through meticulous planning, creative design, and
                    flawless execution.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="about-item p-6 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <div className="flex gap-4">
                    <Target size={24} className="text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl text-yellow-500 mb-2 font-normal">Mission</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        To create extraordinary celebrations that exceed
                        expectations and create lasting memories.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-item p-6 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <div className="flex gap-4">
                    <Eye size={24} className="text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl text-yellow-500 mb-2 font-normal">Vision</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        To be the most trusted name in event management across
                        India, known for innovation and excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              We offer a complete suite of services to make your event perfect
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="about-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
                  <service.icon size={48} className="text-white mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2 text-gray-300">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="py-24 bg-gradient-to-b from-black via-black/95 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Passionate professionals dedicated to making your events extraordinary
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="about-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={32} className="text-yellow-500" />
                  </div>
                  <h3 className="text-2xl text-white mb-2 font-light">{member.name}</h3>
                  <h4 className="text-gray-300 mb-2 font-medium">{member.role}</h4>
                  <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm rounded-full mb-4">
                    {member.experience}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Company Timeline */}
        <motion.section
          className="py-24 bg-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Our Journey
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Milestones that define our growth and success
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="about-item text-center p-8 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                >
                  <div className="text-yellow-500 font-bold text-xl mb-2">{milestone.year}</div>
                  <h3 className="text-2xl text-white mb-3 font-semibold">{milestone.event}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="py-24 bg-gradient-to-b from-black via-black/95 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Experience Our Work
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16">
              Testimonials and recognition from our valued clients
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="about-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <Play size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Company Introduction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Watch our story unfold through 25 years of excellence
                </p>
              </motion.div>
              <motion.div
                className="about-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <Heart size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Client Testimonials</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  "Sintu Decorators made our wedding absolutely perfect. Every
                  detail was handled with care and precision."
                </p>
                <span className="text-gray-400 text-sm italic">- Priya & Rahul, Wedding Clients</span>
              </motion.div>
              <motion.div
                className="about-item text-center p-12 bg-black/80 rounded-2xl border border-yellow-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-black/90 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <Award size={48} className="text-white mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-4">Awards & Recognition</h3>
                <p className="text-gray-300 leading-relaxed">
                  Recognized as one of the top event management companies in
                  Mumbai for three consecutive years.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
