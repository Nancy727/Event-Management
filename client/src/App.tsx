import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { InquiryModalProvider } from './context/InquiryModalContext';
import { AuthProvider } from './context/AuthContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BottomCTA } from './components/layout/BottomCTA';
import { FloatingActions } from './components/layout/FloatingActions';
import { InquiryModal } from './components/common/InquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AIConsultantPage } from './pages/AIConsultantPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <InquiryModalProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col justify-between selection:bg-gold-500 selection:text-royal-950">
              <Navbar />

              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/ai-consultant" element={<AIConsultantPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                </Routes>
              </div>

              <Footer />
              <BottomCTA />
              <FloatingActions />
              <InquiryModal />
            </div>
          </BrowserRouter>
        </InquiryModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
