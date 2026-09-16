import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function ProblemSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">03</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
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

        {/* 3 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.problem.items.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 dark:bg-[#241C16] p-8 rounded-xl border border-[#2C241D]/08 dark:border-[#E8DFD1]/10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-[#A66A3F] tracking-widest uppercase font-semibold bg-[#A66A3F]/10 px-3 py-1 rounded-md">
                    {lang === 'en' ? `CHALLENGE ${item.id}` : `TANTANGAN ${item.id}`}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-snug group-hover:text-[#A66A3F] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2C241D]/08 dark:border-[#E8DFD1]/10">
                <div className="w-8 h-[2px] bg-[#2C241D]/20 dark:bg-[#E8DFD1]/20 group-hover:w-16 group-hover:bg-[#A66A3F] transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Banner Copy */}
        <div className="mt-14 max-w-2xl mx-auto bg-[#2C241D] dark:bg-[#140E0A] text-[#F5F1E8] p-6 sm:p-8 rounded-xl text-center border border-[#E8DFD1]/15 shadow-card relative overflow-hidden">
          <p className="font-body text-sm sm:text-base leading-relaxed text-[#E8DFD1]/90 font-normal relative z-10">
            {lang === 'en' ? (
              <>
                "Therefore, <strong className="font-heading text-[#F5F1E8] font-semibold">direct communication with the supplier</strong> is vital to ensure your technical requirements and schedules are met seamlessly."
              </>
            ) : (
              <>
                "Karena itu, <strong className="font-heading text-[#F5F1E8] font-semibold">komunikasi langsung dengan pemasok</strong> menjadi penting untuk memastikan kebutuhan bisnis dapat dibicarakan dengan jelas."
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}

