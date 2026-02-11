import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";

const AchievementsPage: React.FC = () => {
  // Achievement images
  const achievementImages = [
    "/images/achievements/image1.jpeg",
    "/images/achievements/image2.jpeg",
    "/images/achievements/image3.jpeg",
  ];

  useEffect(() => {
    // GSAP page entrance animation
    gsap.fromTo(
      ".achievements-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-900/10">
      <div className="achievements-container relative">
        {/* Header */}
        <motion.header
          className="py-10 pb-24 bg-yellow-500/5 backdrop-blur-lg border-b border-yellow-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-200 no-underline font-normal ml-8 mb-12 py-3 px-6 rounded-md border border-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-x-1 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4 text-yellow-500 text-center font-serif tracking-tight">
              Company Achievements
            </h1>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
              Celebrating our journey of excellence through memorable milestones
            </p>
          </div>
        </motion.header>

        {/* Achievements Grid */}
        <motion.section
          className="py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievementImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-yellow-500/20 bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-yellow-500 font-medium text-lg">
                        Achievement {index + 1}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AchievementsPage;
