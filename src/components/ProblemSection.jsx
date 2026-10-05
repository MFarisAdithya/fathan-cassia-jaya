import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';

export default function ProblemSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="solusi" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-gradient-to-r from-[#A66A3F]/15 via-[#E28743]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#D97706]/15 via-[#C47F4E]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C241D] dark:text-[#F5F1E8] tracking-tight leading-tight">
            {t.problem.title}
          </h2>
        </div>

        {/* 3 Simple Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {t.problem.items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#251E18] rounded-2xl shadow-card hover:shadow-xl border border-[#2C241D]/08 dark:border-[#E8DFD1]/15 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Top Accent Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-[#C2410C] via-[#A66A3F] to-[#E28743]" />

              {/* Card Question Body */}
              <div className="p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex items-center justify-center text-center">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2C241D] dark:text-[#F5F1E8] leading-snug group-hover:text-[#A66A3F] transition-colors">
                  {item.question}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Headline, Subtitle, & CTA Button */}
        <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#A66A3F] dark:text-[#E28743] uppercase tracking-wide flex items-center justify-center flex-wrap gap-2">
            <span>🔥</span>
            <span>{t.problem.solutionHeadline}</span>
            <span>🔥</span>
          </h3>

          <p className="font-body text-sm sm:text-base text-[#2C241D]/80 dark:text-[#E8DFD1]/80 max-w-xl mx-auto leading-relaxed font-normal">
            {t.problem.solutionDesc}
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl(
                lang === 'en'
                  ? "Hello UD Fathan Cassia Jaya, I would like to consult on spice supplies for my business."
                  : "Halo UD Fathan Cassia Jaya, saya ingin berkonsultasi mengenai kebutuhan rempah dan meminta penawaran harga."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center space-x-2.5 bg-[#A66A3F] hover:bg-[#8e5831] text-white px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-md hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{t.problem.ctaBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
