import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function ProblemSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA]/60 to-[#F5EFE5] dark:from-[#18120E] dark:via-[#1D1611] dark:to-[#18120E] text-[#3A2A20] dark:text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 dark:border-[#C9A77A]/15 grain-overlay vignette corner-accent-tr divider-line-top transition-colors duration-300">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A77A]/10 dark:bg-[#C9A77A]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A65F3F]/05 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 border border-[#A65F3F]/20 text-[#A65F3F] dark:text-[#F3C06B] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <span>{t.problem.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] dark:text-[#F5EFE5] leading-tight">
            {t.problem.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] dark:text-[#D1C0B0] leading-relaxed max-w-2xl mx-auto font-normal">
            {t.problem.subtitle}
          </p>
        </div>

        {/* 3 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.problem.items.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 dark:bg-[#231B15]/95 backdrop-blur-xs p-8 rounded-2xl border border-[#C9A77A]/30 dark:border-[#C9A77A]/20 shadow-card dark:shadow-dark-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-mono text-[#A65F3F] dark:text-[#F3C06B] tracking-widest uppercase font-bold bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 px-2.5 py-1 rounded-lg">
                    {lang === 'en' ? `ISSUE ${item.id}` : `MASALAH ${item.id}`}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-[#3A2A20] dark:text-[#F5EFE5] leading-snug group-hover:text-[#A65F3F] dark:group-hover:text-[#F3C06B] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-[#806653] dark:text-[#D1C0B0] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C9A77A]/15 dark:border-[#C9A77A]/10">
                <div className="w-10 h-[3px] bg-[#C9A77A] group-hover:w-full group-hover:bg-[#A65F3F] transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Banner Copy */}
        <div className="mt-14 max-w-2xl mx-auto bg-[#3A2A20] dark:bg-[#150F0B] text-[#F5EFE5] p-6 sm:p-8 rounded-2xl text-center border border-[#C9A77A]/30 dark:border-[#C9A77A]/20 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#A65F3F]/20 rounded-full blur-xl pointer-events-none" />
          <p className="font-body text-sm sm:text-base leading-relaxed text-[#F5EFE5]/90 font-normal relative z-10">
            {lang === 'en' ? (
              <>
                "Therefore, <strong className="font-heading text-[#C9A77A] font-semibold">direct communication with the supplier</strong> is vital to ensure your technical requirements and schedules are met seamlessly."
              </>
            ) : (
              <>
                "Karena itu, <strong className="font-heading text-[#C9A77A] font-semibold">komunikasi langsung dengan pemasok</strong> menjadi penting untuk memastikan kebutuhan bisnis dapat dibicarakan dengan jelas."
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}

