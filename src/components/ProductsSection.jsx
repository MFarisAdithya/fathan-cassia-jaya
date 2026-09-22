import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle, ArrowUpRight, PackageCheck } from 'lucide-react';

export default function ProductsSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="produk" className="bg-[#E8DFD1]/40 dark:bg-[#1E1712] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] bg-gradient-to-r from-[#A66A3F]/20 via-[#E28743]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-l from-[#D97706]/18 via-[#C47F4E]/12 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#A66A3F]/15 via-[#6F7652]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">04</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.products.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.products.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2C241D]/80 dark:text-[#E8DFD1]/80 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid - 6x2 Balanced Layout (6 Atas - 6 Bawah) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 mt-14">
          {t.products.list.map((prod) => (
            <div
              key={prod.id}
              className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Large Product Studio Image */}
                <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden bg-[#E8DFD1]/30 dark:bg-[#191410]/50 rounded-t-xl">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                  />
                  
                  {/* Subtle Number Badge */}
                  <div className="absolute top-2.5 left-2.5 glass-badge px-2 py-0.5 rounded font-body text-[10px] font-mono font-medium text-[#2C241D] dark:text-[#E8DFD1]">
                    {prod.id}
                  </div>

                  {/* Subtle Category Tag */}
                  {prod.tag && (
                    <div className="absolute top-2.5 right-2.5 bg-[#6F7652]/90 text-white px-2 py-0.5 rounded font-body text-[9px] font-medium tracking-wide uppercase truncate max-w-[85px] sm:max-w-[95px]">
                      {prod.tag}
                    </div>
                  )}
                </div>

                {/* Minimal Product Information */}
                <div className="p-3.5 sm:p-4 space-y-2">
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                    {prod.name}
                  </h3>

                  {/* Clean Price Tag */}
                  <div className="flex items-baseline space-x-1 pt-0.5">
                    <span className="font-heading text-sm sm:text-base font-semibold text-[#A66A3F] dark:text-[#C47F4E]">
                      {prod.price}
                    </span>
                    <span className="font-body text-[10px] font-medium text-[#6F7652] dark:text-[#E8DFD1]/70">
                      {prod.unit}
                    </span>
                  </div>

                  <p className="font-body text-[11px] text-[#2C241D]/70 dark:text-[#E8DFD1]/70 leading-relaxed font-normal line-clamp-2">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Minimal Action Button */}
              <div className="p-3.5 sm:p-4 pt-0">
                <a
                  href={getWhatsAppUrl(prod.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body w-full inline-flex items-center justify-center space-x-1.5 bg-[#F5F1E8] hover:bg-[#2C241D] text-[#2C241D] hover:text-[#F5F1E8] dark:bg-[#191410] dark:hover:bg-[#A66A3F] dark:text-[#F5F1E8] dark:hover:text-white border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 py-2 px-2 rounded-lg text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
                >
                  <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span className="truncate">{t.products.askStockBtn}</span>
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Below Catalog */}
        <div className="font-body mt-14 text-center text-xs text-[#2C241D]/60 dark:text-[#E8DFD1]/60 font-normal">
          {t.products.priceNote}
        </div>

      </div>
    </section>
  );
}

