import React from 'react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function BrandStorySection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="tentang" className="bg-gradient-to-b from-[#32231A] via-[#3A2A20] to-[#2D1F17] dark:from-[#150F0B] dark:via-[#1A120E] dark:to-[#130E0A] text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 dark:border-[#C9A77A]/15 grain-overlay-light vignette-dark transition-colors duration-300">
      {/* Background Depth Elements */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#A65F3F]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C9A77A]/06 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#C9A77A]/10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Collage Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A77A]/20">
                <img
                  src="./images/about_warehouse_raw.jpg"
                  alt={lang === 'en' ? 'UD Fathan Cassia Jaya Raw Material Storage' : 'Gudang Bahan Baku UD Fathan Cassia Jaya'}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#C9A77A]/20">
                <img
                  src="./images/about_warehouse_processing.jpg"
                  alt={lang === 'en' ? 'Warehouse Processing Facility' : 'Fasilitas Pengolahan & Sortir Gudang'}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#C9A77A]/20">
                <img
                  src="./images/about_spices_assortment.jpg"
                  alt={lang === 'en' ? 'Indonesian Spice Commodities Assortment' : 'Koleksi Aneka Rempah Unggulan Nusantara'}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A77A]/20">
                <img
                  src="./images/about_warehouse_storage.jpg"
                  alt={lang === 'en' ? 'Finished Spice Stock Ready for Shipment' : 'Stok Karung Rempah Siap Kirim'}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Overlay Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3A2A20]/90 dark:bg-[#1A120D]/95 backdrop-blur-md px-6 py-2.5 rounded-xl border border-[#C9A77A]/30 text-center shadow-2xl">
              <span className="font-heading text-xs text-[#C9A77A] font-semibold tracking-wider uppercase">
                {lang === 'en' ? 'Indonesian Spice Commodities' : 'Komoditas Rempah Nusantara'}
              </span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="font-heading text-xs uppercase tracking-widest text-[#C9A77A] font-semibold">
              {t.brandStory.badge}
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5EFE5] leading-tight">
              {t.brandStory.title}
            </h2>

            <div className="w-12 h-[2px] bg-[#A65F3F]" />

            <p className="font-body text-base sm:text-lg text-[#F5EFE5]/85 leading-relaxed font-normal">
              {t.brandStory.p1}
            </p>

            <div className="bg-[#454638]/50 dark:bg-[#1E1712]/70 p-6 rounded-2xl border border-[#C9A77A]/20 space-y-2">
              <h4 className="font-heading text-sm font-semibold text-[#C9A77A]">
                {t.brandStory.addressLabel}
              </h4>
              <p className="font-body text-xs text-[#F5EFE5]/80 leading-relaxed font-normal">
                {t.brandStory.p2}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
