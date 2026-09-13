import React, { useState } from 'react';
import { FAQS } from '../config/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA] to-[#F5EFE5] text-[#3A2A20] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 grain-overlay vignette corner-accent-tr divider-line-top">
      {/* Background Ambient Glows & Shading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A77A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#A65F3F]/05 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 border border-[#A65F3F]/20 text-[#A65F3F] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Informasi & Jawaban</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A2A20] leading-tight">
            FAQ
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] font-normal max-w-2xl mx-auto">
            Informasi lengkap seputar ketersediaan produk, pengadaan B2B, dan tata cara meminta penawaran.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 font-body">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-[#C9A77A]/30 overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-card-hover border-[#A65F3F]/40' : 'shadow-card hover:shadow-md hover:border-[#C9A77A]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none hover:bg-[#F5EFE5]/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-semibold text-[#3A2A20] flex items-center space-x-3">
                    <span className="text-[#A65F3F] text-xs font-mono font-bold bg-[#A65F3F]/10 px-2 py-0.5 rounded-md">Q{idx + 1}</span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-[#F5EFE5] flex items-center justify-center text-[#A65F3F] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#A65F3F] text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#806653] leading-relaxed border-t border-[#C9A77A]/15 font-body">
                    <div className="bg-[#F5EFE5]/70 p-4 rounded-xl border border-[#C9A77A]/20 text-[#3A2A20]/90">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

