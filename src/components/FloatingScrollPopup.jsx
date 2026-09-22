import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, Sparkles, CheckCircle2, ChevronUp } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function FloatingScrollPopup() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage (0 - 100)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Show popup when user has scrolled past Hero section (~320px)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  const defaultWaMessage = lang === 'en'
    ? 'Hello UD Fathan Cassia Jaya, I am interested in your spice commodities and would like to request an official quotation and product specifications.'
    : 'Halo UD Fathan Cassia Jaya, saya tertarik dengan komoditas rempah Anda dan ingin meminta penawaran harga resmi serta spesifikasi produk.';

  return (
    <>
      {/* Subtle Top Scroll Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] z-[100000] bg-gradient-to-r from-[#A66A3F] via-[#C9A77A] to-[#6F7652] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Scroll Popup Container */}
      <aside
        aria-label="Quick Procurement Inquiry"
        className={`fixed z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        } bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm w-auto`}
      >
        {isMinimized ? (
          /* Minimized Eye-Catching Floating Pill / Badge */
          <button
            onClick={handleExpand}
            className="group ml-auto flex items-center space-x-2.5 bg-[#2C241D] hover:bg-[#A66A3F] text-[#F5F1E8] px-4 py-3 rounded-full shadow-2xl border border-[#A66A3F]/30 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer"
            title={lang === 'en' ? 'Open Spice Inquiry' : 'Buka Konsultasi Rempah'}
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5 text-white animate-bounce" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6F7652] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
            </div>
            <div className="text-left font-body">
              <span className="text-xs font-semibold tracking-wide block leading-tight">
                {lang === 'en' ? 'Quick Quote' : 'Tanya Penawaran'}
              </span>
              <span className="text-[10px] text-[#F5F1E8]/70 block leading-tight">
                {lang === 'en' ? 'Online • Fast Response' : 'Online • Respons Cepat'}
              </span>
            </div>
            <ChevronUp className="w-4 h-4 text-[#F5F1E8]/70 group-hover:text-white group-hover:-translate-y-0.5 transition-transform ml-1" />
          </button>
        ) : (
          /* Expanded Eye-Catching Editorial Pop-Up Card */
          <div className="bg-[#2C241D]/95 dark:bg-[#191410]/95 backdrop-blur-md text-[#F5F1E8] rounded-2xl border border-[#A66A3F]/35 dark:border-[#E8DFD1]/20 shadow-2xl overflow-hidden">
            {/* Top Accent Line */}
            <div className="h-1 bg-gradient-to-r from-[#A66A3F] via-[#C9A77A] to-[#6F7652]" />

            {/* Header with Avatar & Online Indicator */}
            <div className="p-4 pb-3 flex items-start justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={SITE_INFO.logoUrl}
                    alt="UD Fathan Cassia Jaya"
                    className="w-10 h-10 rounded-xl object-cover border border-[#A66A3F]/40 shadow-sm"
                  />
                  {/* Pulsing Emerald Online Indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#2C241D]"></span>
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="font-heading text-sm font-semibold text-[#F5F1E8] leading-tight">
                      UD Fathan Cassia Jaya
                    </h4>
                    <span className="inline-block" title="Verified Supplier">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A66A3F]" />
                    </span>
                  </div>
                  <p className="font-body text-[10px] text-[#C9A77A] uppercase tracking-wider font-medium">
                    {lang === 'en' ? 'Sales & Procurement Desk' : 'Layanan Pengadaan Rempah B2B'}
                  </p>
                </div>
              </div>

              {/* Close / Minimize Button */}
              <button
                onClick={handleDismiss}
                className="text-[#F5F1E8]/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                title={lang === 'en' ? 'Minimize' : 'Kecilkan'}
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body Content */}
            <div className="p-4 space-y-3 font-body">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <p className="text-xs text-[#F5F1E8]/90 leading-relaxed">
                  {lang === 'en' ? (
                    <>
                      Looking for <strong>wholesale spice supplies</strong>, moisture specifications, or samples? Connect with our team directly.
                    </>
                  ) : (
                    <>
                      Butuh estimasi <strong>harga partai besar</strong>, spesifikasi kadar air, atau sampel komoditas? Tim kami siap merespons.
                    </>
                  )}
                </p>
                {/* Commodities Micro-tags */}
                <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-white/10">
                  {['Kayu Manis', 'Cengkeh', 'Pala', 'Lada'].map((item) => (
                    <span
                      key={item}
                      className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#A66A3F]/20 text-[#C9A77A] border border-[#A66A3F]/30"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="text-[9px] uppercase tracking-wider text-[#F5F1E8]/60 self-center">
                    +8 lainnya
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={getWhatsAppUrl(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#A66A3F] to-[#8E4F33] hover:from-[#8E4F33] hover:to-[#783F27] text-white py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-[#A66A3F]/30 active:scale-98 transition-all duration-300 border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>{lang === 'en' ? 'Chat on WhatsApp' : 'Konsultasi via WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Bottom Guarantee Micro-note */}
              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#F5F1E8]/60 text-center">
                <Sparkles className="w-3 h-3 text-[#A66A3F]" />
                <span>{lang === 'en' ? 'Direct Source • Official Trade Invoice' : 'Supplier Langsung • Faktur Resmi'}</span>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
