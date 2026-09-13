import React from 'react';
import { OFFERS, getWhatsAppUrl } from '../config/siteConfig';
import { MessageCircle, FileText } from 'lucide-react';

export default function OfferSection() {
  return (
    <section className="bg-gradient-to-b from-[#EBE2D3] via-[#F5EFE5] to-[#EBE2D3] text-[#3A2A20] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 grain-overlay vignette corner-accent-tr divider-line-top">
      {/* Background Ambient Blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#A65F3F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C9A77A]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 border border-[#A65F3F]/20 text-[#A65F3F] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <FileText className="w-4 h-4" />
            <span>Skema Penawaran Transparan</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] leading-tight">
            Harga Menyesuaikan Kebutuhan Bisnis Anda
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] font-normal leading-relaxed max-w-2xl mx-auto">
            Setiap kebutuhan bisnis memiliki spesifikasi dan volume yang berbeda. Hubungi kami untuk mendiskusikan kebutuhan rempah dan mendapatkan penawaran.
          </p>
        </div>

        {/* 3 Offer Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {OFFERS.map((offer) => (
            <div
              key={offer.num}
              className="bg-white p-8 rounded-2xl border border-[#C9A77A]/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#C9A77A]/20 pb-4">
                  <span className="font-heading text-2xl font-bold text-[#A65F3F]">
                    {offer.num}
                  </span>
                  <span className="font-heading text-[10px] font-semibold tracking-widest text-[#3A2A20] uppercase bg-[#F5EFE5] px-3 py-1 rounded-lg border border-[#C9A77A]/20">
                    Skema {offer.num}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-[#3A2A20] tracking-wide group-hover:text-[#A65F3F] transition-colors">
                    {offer.category}
                  </h3>

                  <p className="font-body text-sm text-[#806653] leading-relaxed font-normal">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Direct CTA — Plus Jakarta Sans Weight 600, Medium Border Radius */}
              <div className="pt-8 mt-6">
                <a
                  href={getWhatsAppUrl(offer.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading w-full inline-flex items-center justify-center space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Minta Penawaran</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Transparency Card */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#C9A77A]/30 text-center max-w-2xl mx-auto shadow-card">
          <p className="font-body text-xs text-[#806653] leading-relaxed font-normal">
            <strong>Catatan Penawaran:</strong> Penentuan estimasi biaya tergantung pada jenis varietas rempah, tingkat grade/kualitas, volume kuantitas pemesanan, dan spesifikasi khusus yang disepakati.
          </p>
        </div>

      </div>
    </section>
  );
}
