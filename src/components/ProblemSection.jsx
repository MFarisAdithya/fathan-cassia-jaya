import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="solusi" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#A66A3F]/20 via-[#E28743]/12 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[520px] h-[520px] bg-gradient-to-l from-[#D97706]/18 via-[#C47F4E]/12 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#A66A3F]/10 via-[#6F7652]/08 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />
        </div>

        {/* 3 Aesthetic Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14 sm:mt-16">
          {t.problem.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[220px] sm:min-h-[250px]"
            >
              {/* Top ambient glow accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#A66A3F]/60 to-transparent group-hover:via-[#A66A3F] transition-all duration-500" />

              {/* Top Badge & Number */}
              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-xs font-semibold text-[#A66A3F] tracking-widest glass-badge px-3 py-1 rounded-full">
                  {item.id}
                </span>
                <span className="text-[#A66A3F]/40 group-hover:text-[#A66A3F] transition-colors duration-300 font-serif text-lg italic">
                  ✦
                </span>
              </div>

              {/* Question Text (Large, Bold, Editorial & Simple) */}
              <div className="py-6 sm:py-8 flex items-center justify-center text-center relative z-10">
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-snug group-hover:text-[#A66A3F] transition-colors duration-300">
                  "{item.question}"
                </h3>
              </div>

              {/* Bottom Subtle Indicator Line */}
              <div className="w-8 h-[2px] bg-[#2C241D]/15 dark:bg-[#E8DFD1]/15 group-hover:w-16 group-hover:bg-[#A66A3F] transition-all duration-500 rounded-full mx-auto relative z-10" />

              {/* Faint Background Watermark */}
              <span className="absolute -bottom-6 -right-2 text-8xl font-serif text-[#2C241D]/[0.03] dark:text-[#F5F1E8]/[0.03] pointer-events-none select-none italic font-normal">
                ?
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Solution Callout Banner (Refined Editorial Style) */}
        <div className="mt-14 sm:mt-18 max-w-3xl mx-auto relative rounded-2xl p-8 sm:p-11 text-center overflow-hidden border border-[#A66A3F]/35 shadow-card bg-gradient-to-b from-[#2C241D] to-[#1E1712] text-[#F5F1E8]">
          {/* Inner Warm Glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#A66A3F]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            {/* Brand Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#A66A3F]/20 border border-[#A66A3F]/40 text-[#E8DFD1] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E28743]" />
              <span>UD Fathan Cassia Jaya</span>
            </div>

            {/* Solution Headline */}
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#F5F1E8]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F1E8] via-[#E8DFD1] to-[#C47F4E]">
                {t.problem.solutionHeadline}
              </span>
            </h3>

            {/* Solution Description */}
            <p className="font-body text-sm sm:text-base text-[#E8DFD1]/85 max-w-xl mx-auto leading-relaxed font-normal">
              "{t.problem.solutionDesc}"
            </p>

            {/* WhatsApp CTA Button */}
            <div className="pt-3">
              <a
                href={getWhatsAppUrl(
                  lang === 'en'
                    ? "Hello UD Fathan Cassia Jaya, I would like to consult on spice supplies for my business."
                    : "Halo UD Fathan Cassia Jaya, saya ingin berkonsultasi mengenai kebutuhan rempah dan meminta penawaran harga."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn font-body inline-flex items-center space-x-2.5 bg-gradient-to-r from-[#A66A3F] to-[#8e5831] hover:from-[#8e5831] hover:to-[#734321] text-white px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-98 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover/btn:scale-110" />
                <span>{t.problem.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
