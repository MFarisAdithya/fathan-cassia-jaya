import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO } from '../config/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative bg-[#3A2A20] text-[#F5EFE5] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-overlay-light vignette-dark">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#A65F3F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#C9A77A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Geometric Corner Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#C9A77A]/10 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l border-b border-[#C9A77A]/10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 bg-[#C9A77A]/15 border border-[#C9A77A]/25 rounded-lg px-3.5 py-1.5 font-heading">
              <span className="text-xs font-medium tracking-wide text-[#C9A77A]">
                Supplier Rempah B2B Indonesia
              </span>
            </div>

            {/* Dominant Hero Headline — Plus Jakarta Sans Weight 600 */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.2] text-[#F5EFE5] tracking-tight max-w-2xl">
              {SITE_INFO.tagline}
            </h1>

            {/* Body Text — Manrope Weight 400 */}
            <p className="font-body text-base sm:text-lg text-[#F5EFE5]/85 leading-[1.7] max-w-xl font-normal">
              {SITE_INFO.heroDescription}
            </p>

            {/* CTA Buttons — Plus Jakarta Sans Weight 600, Medium Border Radius */}
            <div className="font-heading flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, saya ingin meminta penawaran ketersediaan rempah untuk kebutuhan bisnis kami.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#A65F3F] hover:bg-[#8e4f33] text-white px-7 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Minta Penawaran</span>
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-[#F5EFE5] border border-[#C9A77A]/30 hover:border-[#C9A77A] px-6 py-4 rounded-xl font-semibold text-xs tracking-wider transition-all"
              >
                <span>Lihat Produk</span>
                <ArrowRight className="w-4 h-4 text-[#C9A77A]" />
              </a>
            </div>

            {/* Trust Pills — Manrope Weight 400 */}
            <div className="font-body pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#C9A77A]">
              {SITE_INFO.trustPills.map((pill, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A65F3F]" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Original PNG Logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={SITE_INFO.logoUrl}
                alt={SITE_INFO.name}
                className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
