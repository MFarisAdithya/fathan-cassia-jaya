import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function FinalCtaSection() {
  return (
    <section className="relative bg-[#3A2A20] text-[#F5EFE5] py-24 lg:py-32 overflow-hidden border-t border-[#C9A77A]/30 grain-overlay-light vignette-dark">
      
      {/* Background Image & Shading Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero_spices.jpg"
          alt="Indonesian Spices Commodity Background"
          className="w-full h-full object-cover opacity-15 filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A20] via-[#3A2A20]/95 to-[#3A2A20]" />
      </div>

      {/* Ambient Radial Glow Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A65F3F]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Geometric Corner Accents */}
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#C9A77A]/10 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-l border-b border-[#C9A77A]/10 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-8">
        
        {/* Label */}
        <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/20 border border-[#A65F3F]/40 text-[#C9A77A] px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-widest">
          <span>Konsultasi & Penawaran Langsung</span>
        </div>

        {/* Headline — Plus Jakarta Sans */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5EFE5] leading-tight max-w-3xl mx-auto">
          Siap Memenuhi Kebutuhan Rempah Bisnis Anda?
        </h2>

        {/* Subheadline — Manrope */}
        <p className="font-body text-base sm:text-xl text-[#F5EFE5]/85 font-normal leading-relaxed max-w-2xl mx-auto">
          Sampaikan kebutuhan rempah Anda kepada UD Fathan Cassia Jaya dan diskusikan jenis, jumlah, serta spesifikasi yang Anda perlukan.
        </p>

        {/* Focal Point WhatsApp Button */}
        <div className="font-heading pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, kami siap mendiskusikan kebutuhan rempah bisnis kami dan memohon penawaran resmi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-[#A65F3F] hover:bg-[#8e4f33] text-white px-10 py-4.5 rounded-2xl text-sm sm:text-base font-semibold uppercase tracking-wider shadow-2xl hover:shadow-[#A65F3F]/40 transition-all transform hover:-translate-y-0.5 border border-[#C9A77A]/40 group"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Hubungi Kami via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Supporting Text */}
        <p className="font-body text-xs text-[#C9A77A] tracking-wider uppercase font-medium pt-2">
          Diskusikan kebutuhan Anda bersama kami.
        </p>

      </div>
    </section>
  );
}

