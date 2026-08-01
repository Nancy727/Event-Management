import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsCounter } from '../components/home/StatsCounter';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { PortfolioHighlight } from '../components/home/PortfolioHighlight';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AIConsultantPreview } from '../components/home/AIConsultantPreview';
import { BudgetEstimator } from '../components/common/BudgetEstimator';
import { FAQSection } from '../components/home/FAQSection';
import { ContactCTA } from '../components/home/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsCounter />
      <FeaturedServices />
      <PortfolioHighlight />

      {/* Interactive Budget Estimator Section on Pure White Background */}
      <section className="py-20 bg-white border-t border-olive-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BudgetEstimator />
        </div>
      </section>

      <AIConsultantPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
};
