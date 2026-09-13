import React from 'react';
import { TARGET_INDUSTRIES } from '../config/siteConfig';
import { Utensils, HeartPulse, Network, Store, Building } from 'lucide-react';

export default function TargetIndustriesSection() {
  const icons = [
    <Utensils className="w-5 h-5 text-[#A65F3F]" />,
    <HeartPulse className="w-5 h-5 text-[#A65F3F]" />,
    <Network className="w-5 h-5 text-[#A65F3F]" />,
    <Store className="w-5 h-5 text-[#A65F3F]" />,
  ];

  return (
    <section className="bg-gradient-to-b from-[#EFE5D9] via-[#F5EFE5] to-[#EFE5D9] text-[#3A2A20] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 grain-overlay vignette corner-accent-tr divider-line-top">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C9A77A]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 border border-[#A65F3F]/20 text-[#A65F3F] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>Sektor Pelanggan B2B</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] leading-tight">
            Melengkapi Kebutuhan Berbagai Sektor
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] font-normal">
            Kami siap menjadi mitra pasokan rempah terpercaya untuk beragam bidang usaha.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {TARGET_INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.title}
              className="bg-white p-8 rounded-2xl border border-[#C9A77A]/30 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4 flex flex-col justify-between group hover:border-[#A65F3F] hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE5] flex items-center justify-center border border-[#C9A77A]/20 group-hover:bg-[#A65F3F] transition-colors">
                  {React.cloneElement(icons[idx], {
                    className: "w-5 h-5 text-[#A65F3F] group-hover:text-white transition-colors"
                  })}
                </div>

                <h3 className="font-heading text-base font-semibold text-[#3A2A20] tracking-wide uppercase group-hover:text-[#A65F3F] transition-colors">
                  {ind.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#806653] leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C9A77A]/15 font-heading">
                <span className="text-[10px] text-[#A65F3F] font-semibold tracking-wider uppercase">
                  Pasokan B2B
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

