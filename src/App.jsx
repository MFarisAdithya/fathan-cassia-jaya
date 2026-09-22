import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import ProblemSection from './components/ProblemSection';
import ProductsSection from './components/ProductsSection';
import ValuePropSection from './components/ValuePropSection';
import ProcessSection from './components/ProcessSection';
import TargetIndustriesSection from './components/TargetIndustriesSection';
import BrandStorySection from './components/BrandStorySection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import CommitmentSection from './components/CommitmentSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

function MainContent() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] font-sans selection:bg-[#A66A3F] selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <BrandStorySection />
        <VideoShowcaseSection />
        <ProblemSection />
        <ProductsSection />
        <ValuePropSection />
        <ProcessSection />
        <TargetIndustriesSection />
        <TestimonialsSection />
        <OfferSection />
        <CommitmentSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
