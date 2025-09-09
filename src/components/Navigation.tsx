import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const navVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Navigation: React.FC = () => {
  return (
    <motion.nav
      className="fixed w-full bottom-1 z-40 pointer-events-none"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div 
            className="py-2 mb-4 pointer-events-auto backdrop-blur-sm px-1 bg-black/10 rounded-lg"
          >
            <div className="flex items-center gap-10 md:gap-16">
              {links.map((l) => (
                <motion.div key={l.to} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to={l.to} 
                    className="text-amber-300 hover:text-amber-100 transition-all px-1 py-1 text-sm md:text-base tracking-widest font-light uppercase font-serif relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-amber-200/60 hover:after:w-full after:transition-all"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
