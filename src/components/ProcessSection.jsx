import React from 'react';
import { HOW_IT_WORKS } from '../config/siteConfig';
import { ArrowRight, CheckCircle, GitCommit } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="proses" className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA]/60 to-[#F5EFE5] text-[#3A2A20] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 grain-overlay vignette corner-accent-tr divider-line-top">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#C9A77A]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 border border-[#A65F3F]/20 text-[#A65F3F] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Alur Kerjasama B2B</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] leading-tight">
            Mulai dari Kebutuhan, Kami Siapkan Penawarannya
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] leading-relaxed max-w-2xl mx-auto font-normal">
            Proses transaksi yang fleksibel, transparan, dan mengutamakan kesepakatan bersama.
          </p>
        </div>

        {/* Desktop Horizontal Process / Mobile Vertical Process */}
        <div className="mt-16 relative">
          
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#C9A77A]/40 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white p-8 rounded-2xl border border-[#C9A77A]/30 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4 relative flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-[#A65F3F]">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F5EFE5] flex items-center justify-center text-[#A65F3F] border border-[#C9A77A]/30 group-hover:bg-[#A65F3F] group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-[#3A2A20] pt-4 group-hover:text-[#A65F3F] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm text-[#806653] leading-relaxed pt-2 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="font-heading pt-4 border-t border-[#C9A77A]/15 flex items-center justify-between text-xs text-[#A65F3F] font-semibold">
                  <span>Langkah {idx + 1} dari 4</span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-[#C9A77A] hidden lg:block group-hover:translate-x-1 transition-transform" />}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

