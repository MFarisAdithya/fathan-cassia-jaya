import React from 'react';
import { PRODUCTS, getWhatsAppUrl } from '../config/siteConfig';
import { MessageCircle, ArrowUpRight, PackageCheck } from 'lucide-react';

export default function ProductsSection() {
  return (
    <section id="produk" className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA] to-[#F5EFE5] text-[#3A2A20] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 grain-overlay vignette corner-accent-tr divider-line-top">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#A65F3F]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A77A]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 border border-[#A65F3F]/20 text-[#A65F3F] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Katalog Komoditas Rempah</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] leading-tight">
            Beragam Rempah untuk Berbagai Kebutuhan
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] leading-relaxed max-w-2xl mx-auto font-normal">
            Dari satu pemasok, temukan berbagai komoditas rempah untuk kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Products Grid - Compact 5x2 Balanced Layout (5-5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mt-12">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl overflow-hidden border border-[#C9A77A]/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Compact Image Container */}
                <div className="relative h-36 sm:h-40 overflow-hidden bg-[#3A2A20]">
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
                    <div className="absolute top-2.5 right-2.5 bg-[#A65F3F]/90 backdrop-blur-md text-white px-2 py-0.5 rounded font-heading text-[10px] font-medium tracking-wide truncate max-w-[100px]">
                      {prod.tag}
                    </div>
                  )}
                </div>

                {/* Compact Content */}
                <div className="p-3.5 sm:p-4 space-y-2">
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-[#3A2A20] group-hover:text-[#A65F3F] transition-colors leading-snug min-h-[2.5rem] flex items-center">
                    {prod.name}
                  </h3>

                  {/* Compact Price Tag */}
                  <div className="inline-flex items-baseline space-x-1 bg-[#F5EFE5] px-2.5 py-1 rounded-lg border border-[#C9A77A]/30">
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#A65F3F]">
                      {prod.price}
                    </span>
                    <span className="font-body text-[10px] font-medium text-[#806653]">
                      {prod.unit}
                    </span>
                  </div>

                  <p className="font-body text-[11px] sm:text-xs text-[#806653] leading-relaxed font-normal line-clamp-2 pt-0.5">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3.5 sm:p-4 pt-0">
                <a
                  href={getWhatsAppUrl(prod.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading w-full inline-flex items-center justify-center space-x-1 bg-[#F5EFE5] hover:bg-[#A65F3F] text-[#3A2A20] hover:text-white border border-[#C9A77A]/40 hover:border-[#A65F3F] py-2 sm:py-2.5 px-2 rounded-lg text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs"
                >
                  <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span className="truncate">Tanya Stok</span>
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Below Catalog */}
        <div className="font-body mt-12 text-center text-xs text-[#806653] font-normal">
          *Harga tertera merupakan acuan per kg. Spesifikasi grade, jumlah pemesanan grosir/industri, serta pengemasan dapat didiskusikan langsung via WhatsApp.
        </div>

      </div>
    </section>
  );
}

