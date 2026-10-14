import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoShowcaseSection from '../components/VideoShowcaseSection';
import ProblemSection from '../components/ProblemSection';
import ProductsSection from '../components/ProductsSection';
import ValuePropSection from '../components/ValuePropSection';
import ProcessSection from '../components/ProcessSection';
import TargetIndustriesSection from '../components/TargetIndustriesSection';
import BrandStorySection from '../components/BrandStorySection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfferSection from '../components/OfferSection';
import CommitmentSection from '../components/CommitmentSection';
import FaqSection from '../components/FaqSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';
import RfqDrawer from '../components/RfqDrawer';
import SeoHead from '../components/SeoHead';

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] font-sans selection:bg-[#A66A3F] selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <BrandStorySection />
        <VideoShowcaseSection />
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
      <RfqDrawer />
    </div>
  );
}

export function IndonesianPage() {
  return (
    <AppProvider initialLang="in">
      <SeoHead lang="in" path="/id" />
      <MainLayout />
    </AppProvider>
  );
}

export function EnglishPage() {
  return (
    <AppProvider initialLang="en">
      <SeoHead lang="en" path="/en" />
      <MainLayout />
    </AppProvider>
  );
}

export function RootPage() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedLang = localStorage.getItem('sayang_lang');
        if (savedLang === 'en') {
          navigate('/en', { replace: true });
        } else if (!savedLang && navigator.language && navigator.language.toLowerCase().startsWith('en')) {
          navigate('/en', { replace: true });
        } else {
          navigate('/id', { replace: true });
        }
      }
    } catch {
      // ignore
    }
  }, [navigate]);

  return (
    <AppProvider initialLang="in">
      <SeoHead lang="in" path="/id" />
      <MainLayout />
    </AppProvider>
  );
}

export default IndonesianPage;
