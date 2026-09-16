import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { Layers, Building2, ShieldCheck, MessageSquareText } from 'lucide-react';

export default function ValuePropSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const icons = [
    <Layers className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <Building2 className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <ShieldCheck className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <MessageSquareText className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
  ];

  return (
    <section id="keunggulan" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">05</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.valueProp.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.valueProp.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.valueProp.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {t.valueProp.items.map((item, idx) => (
            <div
              key={item.num}
              className="bg-white dark:bg-[#241C16] border border-[#2C241D]/08 dark:border-[#E8DFD1]/12 p-8 rounded-xl hover:border-[#A66A3F]/40 dark:hover:border-[#A66A3F]/60 transition-all duration-300 space-y-6 group hover:-translate-y-1 shadow-sm hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-[#E8DFD1]/40 dark:bg-[#191410] flex items-center justify-center border border-[#2C241D]/08 dark:border-[#E8DFD1]/15 group-hover:bg-[#A66A3F] group-hover:border-[#A66A3F] transition-colors">
                  {icons[idx]}
                </div>
                <span className="font-heading text-2xl font-medium text-[#2C241D]/25 dark:text-[#F5F1E8]/25 group-hover:text-[#A66A3F] transition-colors">
                  {item.num}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-heading text-lg font-medium text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
