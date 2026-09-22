import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function FinalCtaSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="kontak" className="relative bg-[#2C241D] dark:bg-[#140E0A] text-[#F5F1E8] py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#2C241D]/20 grain-overlay-light transition-colors duration-300">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A66A3F]/12 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-3">
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#C9A77A] font-semibold">
            {t.finalCta.badge}
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F5F1E8] leading-[1.15] max-w-3xl mx-auto">
          {t.finalCta.title}
        </h2>

        <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

        {/* Subheadline */}
        <p className="font-body text-base sm:text-lg text-[#F5F1E8]/80 font-normal leading-relaxed max-w-2xl mx-auto">
          {t.finalCta.subtitle}
        </p>

        {/* WhatsApp Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={getWhatsAppUrl(t.finalCta.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-[#A66A3F] hover:bg-[#8e4f33] text-white px-9 py-4 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-[#A66A3F]/30 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>{t.finalCta.chatBtn}</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Supporting Text */}
        <p className="font-body text-xs text-[#F5F1E8]/50 tracking-wider uppercase font-normal pt-2">
          {lang === 'en' ? 'Discuss your spice supply requirements with our team.' : 'Diskusikan kebutuhan pasokan rempah bersama tim kami.'}
        </p>

      </div>
    </section>
  );
}

