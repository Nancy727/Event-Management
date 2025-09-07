import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './App.css';

// Page transition wrapper component
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Luxurious page transition animation
    const tl = gsap.timeline();
    
    // Fade out previous content
    tl.to('.page-content', {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.in'
    })
    // Sparkle effect during transition
    .fromTo('.page-content', {
      opacity: 0,
      y: 50,
      rotationX: 15,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 1.2,
      ease: 'back.out(1.7)'
    })
    // Add a subtle glow effect
    .to('.page-content', {
      boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.page-content', {
      boxShadow: '0 0 0px rgba(212, 175, 55, 0)',
      duration: 0.8,
      ease: 'power2.out'
    });
  }, [location]);
  
  return <div className="page-content">{children}</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
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
