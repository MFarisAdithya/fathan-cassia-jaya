import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function HeroSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section className="relative bg-[#2C241D] dark:bg-[#140E0A] text-[#F5F1E8] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-overlay-light vignette-dark transition-colors duration-300">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#A66A3F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#6F7652]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Ambient Warm Spice Orbs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#A66A3F]/25 via-[#E28743]/18 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-[#D97706]/20 via-[#A66A3F]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Subtle Geometric Corner Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#E8DFD1]/10 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l border-b border-[#E8DFD1]/10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 bg-[#6F7652]/20 border border-[#6F7652]/35 rounded-full px-4 py-1.5">
              <span className="text-[11px] font-body font-semibold tracking-[0.2em] text-[#E8DFD1] uppercase">
                {t.hero.badge}
              </span>
            </div>

            {/* Dominant Hero Headline — Playfair Display Serif */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.18] text-[#F5F1E8] tracking-tight max-w-2xl">
              {t.hero.headline}
            </h1>

            {/* Body Text — Manrope Weight 400 */}
            <p className="font-body text-base sm:text-lg text-[#E8DFD1]/85 leading-relaxed max-w-xl font-normal">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="font-body flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href={getWhatsAppUrl(t.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#A66A3F] hover:bg-[#8e5831] text-[#F5F1E8] px-7 py-3.5 rounded-lg font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.requestQuoteBtn}</span>
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-[#F5F1E8] border border-[#E8DFD1]/30 hover:border-[#E8DFD1] px-6 py-3.5 rounded-lg font-medium text-xs tracking-wider transition-all"
              >
                <span>{t.hero.seeProductsBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#E8DFD1]/80" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="font-body pt-6 border-t border-[#E8DFD1]/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#E8DFD1]/85">
              {t.hero.trustPills.map((pill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A66A3F]" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Original PNG Logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={SITE_INFO.heroLogoUrl || SITE_INFO.logoUrl}
                alt={t.siteInfo.name}
                className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
