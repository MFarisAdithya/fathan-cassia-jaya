import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2, RefreshCw, Scale, Camera } from 'lucide-react';

export default function CommitmentSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const icons = [
    <ShieldCheck className="w-6 h-6 text-[#A65F3F]" />,
    <RefreshCw className="w-6 h-6 text-[#A65F3F]" />,
    <Scale className="w-6 h-6 text-[#A65F3F]" />,
    <Camera className="w-6 h-6 text-[#A65F3F]" />,
  ];

  return (
    <section className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA]/50 to-[#F5EFE5] dark:from-[#18120E] dark:via-[#1D1611] dark:to-[#18120E] text-[#3A2A20] dark:text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 dark:border-[#C9A77A]/15 grain-overlay vignette corner-accent-tr divider-line-top transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A77A]/12 dark:bg-[#C9A77A]/06 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 border border-[#A65F3F]/20 text-[#A65F3F] dark:text-[#F3C06B] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.commitment.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] dark:text-[#F5EFE5] leading-tight">
            {t.commitment.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] dark:text-[#D1C0B0] font-normal leading-relaxed max-w-2xl mx-auto">
            {t.commitment.subtitle}
          </p>
        </div>

        {/* 4 Guarantees Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {t.commitment.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#231B15] rounded-2xl p-8 border border-[#C9A77A]/35 dark:border-[#C9A77A]/20 shadow-card dark:shadow-dark-card hover:shadow-card-hover transition-all duration-300 space-y-4 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFE5] dark:bg-[#1A130E] border border-[#C9A77A]/30 dark:border-[#C9A77A]/20 flex items-center justify-center group-hover:bg-[#A65F3F] group-hover:text-white transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {icons[idx]}
                  </div>
                </div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#A65F3F] dark:text-[#F3C06B] bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 px-3 py-1 rounded-full border border-[#A65F3F]/20">
                  {item.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-[#3A2A20] dark:text-[#F5EFE5] group-hover:text-[#A65F3F] dark:group-hover:text-[#F3C06B] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#806653] dark:text-[#D1C0B0] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-2 text-xs font-heading text-[#A65F3F] dark:text-[#F3C06B] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B]" />
                <span>{lang === 'en' ? '100% Fully Guaranteed' : 'Terjamin 100% Resmi'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-[#3A2A20] dark:bg-[#150F0B] text-[#F5EFE5] p-6 rounded-2xl border border-[#C9A77A]/30 dark:border-[#C9A77A]/20 shadow-xl">
          <p className="font-body text-xs sm:text-sm text-[#F5EFE5]/90 font-normal leading-relaxed">
            {lang === 'en' ? (
              <>
                *All trade guarantees listed apply officially to all spice commodity procurement transactions at <strong className="font-heading text-[#C9A77A] font-semibold">UD Fathan Cassia Jaya</strong>.
              </>
            ) : (
              <>
                *Semua garansi tercantum berlaku resmi untuk seluruh transaksi pengadaan komoditas rempah di <strong className="font-heading text-[#C9A77A] font-semibold">UD Fathan Cassia Jaya</strong>.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}

