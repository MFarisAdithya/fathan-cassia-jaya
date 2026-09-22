import React, { useState } from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">11</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.faq.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.faq.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 font-body">
          {t.faq.items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#A66A3F]/40 dark:border-[#A66A3F]/50 shadow-card-hover' : 'hover:border-[#A66A3F]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between space-x-4 focus:outline-none hover:bg-[#F5F1E8]/40 dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-[#2C241D] dark:text-[#F5F1E8] flex items-center space-x-3">
                    <span className="text-[#A66A3F] text-xs font-semibold glass-badge px-2.5 py-0.5 rounded font-body">
                      Q{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-8 h-8 rounded-full glass-badge flex items-center justify-center text-[#6F7652] dark:text-[#A66A3F] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#A66A3F] text-white dark:bg-[#A66A3F] dark:text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-body border-t border-[#2C241D]/06 dark:border-[#E8DFD1]/10">
                    <p className="pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

