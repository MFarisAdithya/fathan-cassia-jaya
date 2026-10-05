import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="solusi" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-gradient-to-r from-[#A66A3F]/15 via-[#E28743]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#D97706]/15 via-[#C47F4E]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.problem.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.problem.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2C241D]/80 dark:text-[#E8DFD1]/80 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.problem.subtitle}
          </p>
        </div>

        {/* 3 Question & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.problem.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-[#A66A3F] tracking-wider uppercase font-semibold glass-badge px-3 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#6F7652] dark:text-[#A66A3F]">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-snug group-hover:text-[#A66A3F] transition-colors">
                  "{item.title}"
                </h3>

                <div className="pt-4 border-t border-[#2C241D]/08 dark:border-[#E8DFD1]/10 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#A66A3F]">
                    <CheckCircle2 className="w-4 h-4 text-[#A66A3F] shrink-0" />
                    <span className="uppercase tracking-wider font-body">{lang === 'en' ? 'Our Answer & Solution' : 'Jawaban & Solusi Kami'}</span>
                  </div>
                  <p className="font-body text-sm text-[#2C241D]/80 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2C241D]/08 dark:border-[#E8DFD1]/10">
                <div className="w-8 h-[2px] bg-[#2C241D]/20 dark:bg-[#E8DFD1]/20 group-hover:w-16 group-hover:bg-[#A66A3F] transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Banner Copy: Kami Solusinya!! */}
        <div className="mt-14 max-w-3xl mx-auto bg-[#2C241D] dark:bg-[#140E0A] text-[#F5F1E8] p-7 sm:p-9 rounded-2xl text-center border border-[#A66A3F]/30 shadow-card relative overflow-hidden space-y-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A66A3F]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#A66A3F] tracking-wide block">
              {t.problem.bannerHeadline}
            </span>
            <p className="font-body text-sm sm:text-base leading-relaxed text-[#E8DFD1]/90 font-normal max-w-2xl mx-auto">
              "{t.problem.bannerDesc}"
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(lang === 'en' ? "Hello UD Fathan Cassia Jaya, I would like to consult on my spice sourcing needs." : "Halo UD Fathan Cassia Jaya, saya ingin berkonsultasi mengenai kebutuhan rempah dan meminta penawaran harga.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center space-x-2 bg-[#A66A3F] hover:bg-[#8e5831] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{lang === 'en' ? 'Consult With Us on WhatsApp' : 'Konsultasi Sekarang via WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

