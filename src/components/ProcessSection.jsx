import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="proses" className="bg-[#E8DFD1]/40 dark:bg-[#140E0A] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.process.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.process.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {t.process.items.map((step, idx) => (
              <div
                key={step.step}
                className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl sm:text-4xl font-medium text-[#A66A3F]">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-full glass-badge glass-badge-interactive flex items-center justify-center text-[#6F7652] dark:text-[#A66A3F]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-medium text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="font-body pt-4 border-t border-[#2C241D]/06 dark:border-[#E8DFD1]/10 flex items-center justify-between text-xs text-[#6F7652] dark:text-[#A66A3F] font-medium">
                  <span>{lang === 'en' ? `Step ${idx + 1} of 4` : `Langkah ${idx + 1} dari 4`}</span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-[#A66A3F]/60 group-hover:text-[#A66A3F] hidden lg:block group-hover:translate-x-1 transition-transform" />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

