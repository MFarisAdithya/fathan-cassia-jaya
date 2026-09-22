import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2, RefreshCw, Scale, Camera } from 'lucide-react';

export default function CommitmentSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const icons = [
    <ShieldCheck className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <RefreshCw className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <Scale className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <Camera className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
  ];

  return (
    <section className="bg-[#E8DFD1]/40 dark:bg-[#140E0A] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">10</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.commitment.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.commitment.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal leading-relaxed max-w-2xl mx-auto">
            {t.commitment.subtitle}
          </p>
        </div>

        {/* 4 Guarantees Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16 max-w-5xl mx-auto">
          {t.commitment.items.map((item, idx) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-xl p-8 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg glass-badge flex items-center justify-center group-hover:bg-[#A66A3F] transition-colors">
                  {icons[idx]}
                </div>
                <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#6F7652] dark:text-[#A66A3F] glass-badge px-2.5 py-1 rounded">
                  {item.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-lg font-medium text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2C241D]/06 dark:border-[#E8DFD1]/10 flex items-center space-x-2 text-xs font-body text-[#6F7652] dark:text-[#A66A3F] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#A66A3F]" />
                <span>{lang === 'en' ? '100% Fully Guaranteed' : 'Terjamin 100% Resmi'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-[#2C241D] dark:bg-[#150F0B] text-[#F5F1E8] p-6 rounded-xl border border-[#2C241D]/20 shadow-md">
          <p className="font-body text-xs sm:text-sm text-[#F5F1E8]/90 font-normal leading-relaxed">
            {lang === 'en' ? (
              <>
                *All trade guarantees listed apply officially to all spice commodity procurement transactions at <strong className="font-heading text-[#A66A3F] font-semibold">UD Fathan Cassia Jaya</strong>.
              </>
            ) : (
              <>
                *Semua garansi tercantum berlaku resmi untuk seluruh transaksi pengadaan komoditas rempah di <strong className="font-heading text-[#A66A3F] font-semibold">UD Fathan Cassia Jaya</strong>.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}

