import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';

export default function OfferSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#A66A3F]/22 via-[#D97706]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-[#E28743]/18 via-[#C47F4E]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">09</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.offer.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.offer.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal leading-relaxed max-w-2xl mx-auto">
            {t.offer.subtitle}
          </p>
        </div>

        {/* 3 Offer Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {t.offer.items.map((offer) => (
            <div
              key={offer.num}
              className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#2C241D]/06 dark:border-[#E8DFD1]/10 pb-4">
                  <span className="font-heading text-2xl font-medium text-[#A66A3F]">
                    {offer.num}
                  </span>
                  <span className="font-body text-[11px] font-semibold tracking-wider text-[#6F7652] dark:text-[#A66A3F] uppercase glass-badge px-2.5 py-1 rounded">
                    {lang === 'en' ? `Tier ${offer.num}` : `Skema ${offer.num}`}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-medium text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors">
                    {offer.category}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-8 mt-6">
                <a
                  href={getWhatsAppUrl(offer.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body w-full inline-flex items-center justify-center space-x-2 bg-[#2C241D] hover:bg-[#A66A3F] text-white py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.nav.requestQuote}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Transparency Card */}
        <div className="mt-12 glass-panel p-6 rounded-xl text-center max-w-2xl mx-auto">
          <p className="font-body text-xs text-[#2C241D]/70 dark:text-[#E8DFD1]/70 leading-relaxed font-normal">
            {lang === 'en' ? (
              <>
                <strong>Quotation Terms:</strong> Formal price quotations depend on spice variety, moisture/essential oil specifications, tonnage volume, and required packaging terms.
              </>
            ) : (
              <>
                <strong>Catatan Penawaran:</strong> Penentuan estimasi biaya tergantung pada jenis varietas rempah, tingkat grade/kualitas, volume kuantitas pemesanan, dan spesifikasi khusus yang disepakati.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
