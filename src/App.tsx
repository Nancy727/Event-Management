import gsap from 'gsap';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen';
import VideoSplashScreen from './components/VideoSplashScreen';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const tl = gsap.timeline();
    
    gsap.set('.page-content', {
      opacity: 0,
      y: 50,
    });
    
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
  const [showVideoSplash, setShowVideoSplash] = useState(true);
  const [showImageSplash, setShowImageSplash] = useState(false);

  const handleVideoSplashComplete = () => {
    setShowVideoSplash(false);
    setShowImageSplash(true);
  };

  const handleImageSplashComplete = () => {
    setShowImageSplash(false);
  };

  // First show video splash screen
  if (showVideoSplash) {
    return <VideoSplashScreen onComplete={handleVideoSplashComplete} />;
  }
  
  // Then show image splash screen
  if (showImageSplash) {
    return <SplashScreen onComplete={handleImageSplashComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-black text-white relative">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Homepage - Hero with bottom navigation */}
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Hero />
                  <Navigation />
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
