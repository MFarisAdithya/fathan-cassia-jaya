import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { Layers, Building2, ShieldCheck, MessageSquareText } from 'lucide-react';

export default function ValuePropSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const icons = [
    <Layers className="w-5 h-5 text-[#C9A77A]" />,
    <Building2 className="w-5 h-5 text-[#C9A77A]" />,
    <ShieldCheck className="w-5 h-5 text-[#C9A77A]" />,
    <MessageSquareText className="w-5 h-5 text-[#C9A77A]" />,
  ];

  return (
    <section id="keunggulan" className="bg-[#3A2A20] dark:bg-[#140E0A] text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden grain-overlay-light vignette-dark transition-colors duration-300">
      {/* Background Depth Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#A65F3F]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C9A77A]/06 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#C9A77A]/10 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l border-b border-[#C9A77A]/10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading text-xs uppercase tracking-widest text-[#C9A77A] font-semibold">
            {t.valueProp.badge}
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5EFE5] leading-tight">
            {t.valueProp.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#F5EFE5]/80 font-normal max-w-2xl mx-auto">
            {t.valueProp.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {t.valueProp.items.map((item, idx) => (
            <div
              key={item.num}
              className="bg-[#454638]/40 dark:bg-[#1E1712]/70 border border-[#C9A77A]/20 p-8 rounded-2xl hover:border-[#A65F3F] transition-all duration-300 space-y-6 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#3A2A20] dark:bg-[#140E0A] flex items-center justify-center border border-[#C9A77A]/30 group-hover:bg-[#A65F3F] transition-colors">
                  {icons[idx]}
                </div>
                <span className="font-heading text-2xl font-semibold text-[#C9A77A]/40 group-hover:text-[#C9A77A] transition-colors">
                  {item.num}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-base font-semibold text-[#F5EFE5] tracking-wide group-hover:text-[#C9A77A] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#F5EFE5]/75 leading-relaxed font-normal">
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
