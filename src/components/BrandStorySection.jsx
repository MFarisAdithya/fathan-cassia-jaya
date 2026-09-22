import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function BrandStorySection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="tentang" className="bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photo Collage Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-card border border-[#2C241D]/10 dark:border-[#E8DFD1]/15">
                <img
                  src="./images/about_warehouse_raw.jpg"
                  alt={lang === 'en' ? 'UD Fathan Cassia Jaya Raw Material Storage' : 'Gudang Bahan Baku UD Fathan Cassia Jaya'}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-card border border-[#2C241D]/10 dark:border-[#E8DFD1]/15">
                <img
                  src="./images/about_warehouse_processing.jpg"
                  alt={lang === 'en' ? 'Warehouse Processing Facility' : 'Fasilitas Pengolahan & Sortir Gudang'}
                  className="w-full h-44 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden shadow-card border border-[#2C241D]/10 dark:border-[#E8DFD1]/15">
                <img
                  src="./images/about_spices_assortment.jpg"
                  alt={lang === 'en' ? 'Indonesian Spice Commodities Assortment' : 'Koleksi Aneka Rempah Unggulan Nusantara'}
                  className="w-full h-44 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-card border border-[#2C241D]/10 dark:border-[#E8DFD1]/15">
                <img
                  src="./images/about_warehouse_storage.jpg"
                  alt={lang === 'en' ? 'Finished Spice Stock Ready for Shipment' : 'Stok Karung Rempah Siap Kirim'}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Subtle Overlay Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-badge px-5 py-2.5 rounded-lg text-center">
              <span className="font-body text-[10px] text-[#2C241D] dark:text-[#E8DFD1] font-semibold tracking-[0.2em] uppercase">
                {lang === 'en' ? 'Authentic Spice Commodities' : 'Komoditas Rempah Nusantara'}
              </span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-3">
              <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">01</span>
              <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
                {t.brandStory.badge}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
              {t.brandStory.title}
            </h2>

            <div className="w-12 h-[1px] bg-[#A66A3F]" />

            <p className="font-body text-base sm:text-lg text-[#2C241D]/80 dark:text-[#E8DFD1]/85 leading-relaxed font-normal">
              {t.brandStory.p1}
            </p>

            <div className="glass-panel p-6 rounded-xl space-y-2">
              <h4 className="font-body text-xs font-semibold text-[#6F7652] dark:text-[#A66A3F] uppercase tracking-wider">
                {t.brandStory.addressLabel}
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                {t.brandStory.p2}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
