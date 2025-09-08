import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
// Page transition wrapper component
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
    
    // Create a timeline for smooth transitions
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set('.page-content', {
      opacity: 0,
      y: 50,
    });
    
    // Smooth page transition sequence
    tl.to('.transition-overlay', {
      yPercent: 0,
      duration: 0.8,
      ease: 'power4.inOut',
    })
    .to('.page-content', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
    .to('.transition-overlay', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, '-=0.6');
  }, [location]);
  
  return (
    <>
      <div className="page-content w-full min-h-screen">{children}</div>
      <div className="transition-overlay fixed inset-0 bg-black transform -translate-y-full z-50" 
           style={{ willChange: 'transform' }} />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-black text-white relative">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Homepage - Only Hero section with navigation links */}
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Hero />
                </PageTransition>
              } 
            />
            
            {/* Gallery Page */}
            <Route 
              path="/gallery" 
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              } 
            />
            
            {/* About Page */}
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              } 
            />
            
            {/* Contact Page */}
            <Route 
              path="/contact" 
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App
