import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5EFE5] text-[#3A2A20] font-sans selection:bg-[#A65F3F] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <VideoShowcaseSection />
        <ProblemSection />
        <ProductsSection />
        <ValuePropSection />
        <ProcessSection />
        <TargetIndustriesSection />
        <BrandStorySection />
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
