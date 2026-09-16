import React from 'react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle, ArrowUpRight, PackageCheck } from 'lucide-react';

export default function ProductsSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="produk" className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA] to-[#F5EFE5] dark:from-[#18120E] dark:via-[#1F1712] dark:to-[#18120E] text-[#3A2A20] dark:text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 dark:border-[#C9A77A]/15 grain-overlay vignette corner-accent-tr divider-line-top transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#A65F3F]/08 dark:bg-[#A65F3F]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A77A]/12 dark:bg-[#C9A77A]/06 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 border border-[#A65F3F]/20 text-[#A65F3F] dark:text-[#F3C06B] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>{t.products.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] dark:text-[#F5EFE5] leading-tight">
            {t.products.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] dark:text-[#D1C0B0] leading-relaxed max-w-2xl mx-auto font-normal">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid - 6x2 Balanced Layout (6 Atas - 6 Bawah) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-3 xl:gap-4 mt-12">
          {t.products.list.map((prod) => (
            <div
              key={prod.id}
              className="bg-white dark:bg-[#231B15] rounded-xl overflow-hidden border border-[#C9A77A]/30 dark:border-[#C9A77A]/20 shadow-card dark:shadow-dark-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Compact Image Container */}
                <div className="relative h-32 sm:h-36 overflow-hidden bg-[#3A2A20]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A20]/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#3A2A20]/85 backdrop-blur-md text-[#C9A77A] px-2 py-0.5 rounded font-heading text-[10px] font-mono font-semibold border border-[#C9A77A]/30">
                    {prod.id}
                  </div>

                  {/* Category Tag */}
                  {prod.tag && (
                    <div className="absolute top-2.5 right-2.5 bg-[#A65F3F]/90 backdrop-blur-md text-white px-2 py-0.5 rounded font-heading text-[9px] sm:text-[10px] font-medium tracking-wide truncate max-w-[85px] sm:max-w-[95px]">
                      {prod.tag}
                    </div>
                  )}
                </div>

                {/* Compact Content */}
                <div className="p-3 sm:p-3.5 space-y-2">
                  <h3 className="font-heading text-xs sm:text-sm font-semibold text-[#3A2A20] dark:text-[#F5EFE5] group-hover:text-[#A65F3F] dark:group-hover:text-[#F3C06B] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                    {prod.name}
                  </h3>

                  {/* Compact Price Tag */}
                  <div className="inline-flex items-baseline space-x-1 bg-[#F5EFE5] dark:bg-[#1A130E] px-2 py-0.5 rounded-lg border border-[#C9A77A]/30 dark:border-[#C9A77A]/20">
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#A65F3F] dark:text-[#F3C06B]">
                      {prod.price}
                    </span>
                    <span className="font-body text-[10px] font-medium text-[#806653] dark:text-[#C9A77A]">
                      {prod.unit}
                    </span>
                  </div>

                  <p className="font-body text-[11px] text-[#806653] dark:text-[#D1C0B0] leading-relaxed font-normal line-clamp-2 pt-0.5">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3 sm:p-3.5 pt-0">
                <a
                  href={getWhatsAppUrl(prod.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading w-full inline-flex items-center justify-center space-x-1 bg-[#F5EFE5] dark:bg-[#1A130E] hover:bg-[#A65F3F] dark:hover:bg-[#A65F3F] text-[#3A2A20] dark:text-[#F5EFE5] hover:text-white border border-[#C9A77A]/40 dark:border-[#C9A77A]/30 hover:border-[#A65F3F] py-2 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs"
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
        <div className="font-body mt-12 text-center text-xs text-[#806653] dark:text-[#C9A77A] font-normal">
          {t.products.priceNote}
        </div>

      </div>
    </section>
  );
}

