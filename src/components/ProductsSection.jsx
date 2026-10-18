import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS, PRODUCT_TO_COMMODITY_MAP } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import OptimizedImage from './OptimizedImage';
import { Plus, Check, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const { lang, toggleRfq, isInRfq } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="produk" className="bg-[#E8DFD1]/40 dark:bg-[#1E1712] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="hidden md:block absolute top-1/3 -left-20 w-[550px] h-[550px] bg-gradient-to-r from-[#A66A3F]/20 via-[#E28743]/15 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="hidden md:block absolute bottom-10 -right-20 w-[600px] h-[600px] bg-gradient-to-l from-[#D97706]/18 via-[#C47F4E]/12 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="hidden md:block absolute top-2/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#A66A3F]/15 via-[#6F7652]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
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
          {t.products.list.map((prod) => {
            const inList = isInRfq(prod.id);
            const commoditySlug = PRODUCT_TO_COMMODITY_MAP[prod.id] || 'kayu-manis';

            return (
              <div
                key={prod.id}
                className="glass-card-primary glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Large Product Studio Image linking to commodity page */}
                  <Link to={`/produk/${commoditySlug}`} className="block relative h-40 sm:h-44 lg:h-48 overflow-hidden bg-[#E8DFD1]/30 dark:bg-[#191410]/50 rounded-t-2xl cursor-pointer">
                    <OptimizedImage
                      src={prod.image}
                      alt={prod.name}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90 group-hover:scale-102"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Subtle Number Badge */}
                    <div className="absolute top-2.5 left-2.5 glass-badge px-2 py-0.5 rounded-full font-body text-[10px] font-mono font-medium">
                      {prod.id}
                    </div>

                    {/* Subtle Category Tag */}
                    {prod.tag && (
                      <div className="absolute top-2.5 right-2.5 glass-badge glass-badge--olive px-2 py-0.5 rounded-full font-body text-[9px] font-medium tracking-wide uppercase truncate max-w-[85px] sm:max-w-[95px]">
                        {prod.tag}
                      </div>
                    )}
                  </Link>

                  {/* Minimal Product Information */}
                  <div className="p-3.5 sm:p-4 space-y-2">
                    <Link to={`/produk/${commoditySlug}`} className="block group/title">
                      <h3 className="font-heading text-sm sm:text-base font-semibold text-[#2C241D] dark:text-[#F5F1E8] group-hover/title:text-[#9A5F36] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                        {prod.name}
                      </h3>
                    </Link>

                    <p className="font-body text-[11px] text-[#2C241D]/70 dark:text-[#E8DFD1]/70 leading-relaxed font-normal line-clamp-2">
                      {prod.description}
                    </p>

                    <Link
                      to={`/produk/${commoditySlug}`}
                      className="inline-flex items-center space-x-1 text-[10px] font-body font-semibold text-[#9A5F36] dark:text-[#E28743] hover:underline pt-0.5"
                    >
                      <span>{lang === 'en' ? 'Specs & Grades' : 'Lihat Spesifikasi'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Single Action Button: Toggle RFQ */}
                <div className="p-3 sm:p-3.5 pt-0">
                  <button
                    type="button"
                    onClick={() => toggleRfq(prod)}
                    aria-label={
                      inList
                        ? (lang === 'en' ? `Remove ${prod.name} from RFQ list` : `Hapus ${prod.name} dari daftar penawaran`)
                        : (lang === 'en' ? `Add ${prod.name} to RFQ list` : `Tambah ${prod.name} ke daftar penawaran`)
                    }
                    className={`font-body w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      inList
                        ? 'bg-[#6F7652] text-white hover:bg-[#5b6243] shadow-xs'
                        : 'glass-btn-ghost text-xs'
                    }`}
                  >
                    {inList ? (
                      <>
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{lang === 'en' ? '✓ In RFQ List' : '✓ Di Daftar'}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{lang === 'en' ? '+ Add to RFQ' : '+ Tambah ke Daftar'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Below Catalog */}
        <div className="font-body mt-14 text-center text-xs text-[#2C241D]/60 dark:text-[#E8DFD1]/60 font-normal">
          {t.products.priceNote}
        </div>

      </div>
    </section>
  );
}
