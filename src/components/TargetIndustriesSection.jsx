import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { Utensils, HeartPulse, Network, Store } from 'lucide-react';

export default function TargetIndustriesSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const icons = [
    <Utensils className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <HeartPulse className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <Network className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
    <Store className="w-5 h-5 text-[#6F7652] dark:text-[#A66A3F] group-hover:text-white transition-colors" />,
  ];

  return (
    <section id="industri" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">07</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.targetIndustries.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.targetIndustries.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.targetIndustries.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {t.targetIndustries.items.map((ind, idx) => (
            <div
              key={ind.title}
              className="glass-panel glass-panel-hover p-8 rounded-xl space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-lg glass-badge flex items-center justify-center group-hover:bg-[#A66A3F] group-hover:border-[#A66A3F] transition-colors">
                  {icons[idx]}
                </div>

                <h3 className="font-heading text-lg font-medium text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors">
                  {ind.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2C241D]/06 dark:border-[#E8DFD1]/10 font-body">
                <span className="text-[11px] text-[#6F7652] dark:text-[#A66A3F] font-semibold tracking-wider uppercase">
                  {lang === 'en' ? 'B2B Supply' : 'Pasokan B2B'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

