import React from 'react';
import { Star, UserCheck, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function TestimonialsSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="testimoni" className="bg-[#E8DFD1]/40 dark:bg-[#140E0A] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 grain-overlay transition-colors duration-300">
      {/* Ambient Warm Spice Glow Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#A66A3F]/22 via-[#D97706]/14 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#E28743]/18 via-[#C47F4E]/12 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-xs font-semibold text-[#A66A3F] tracking-widest">08</span>
            <span className="w-6 h-[1px] bg-[#A66A3F]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.testimonials.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.testimonials.title}
          </h2>

          <div className="w-12 h-[1px] bg-[#A66A3F] mx-auto" />

          <p className="font-body text-base sm:text-lg text-[#2C241D]/75 dark:text-[#E8DFD1]/85 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-xl p-8 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header: Rating & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A66A3F] text-[#A66A3F]" />
                    ))}
                  </div>
                  <span className="glass-badge font-body text-[10px] tracking-wider uppercase px-2.5 py-1 rounded text-[#6F7652] dark:text-[#A66A3F] font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Review Text Content */}
                <div className="py-2">
                  <p className="font-body text-sm sm:text-[15px] font-normal text-[#2C241D]/80 dark:text-[#E8DFD1]/85 leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#2C241D]/06 dark:border-[#E8DFD1]/10 flex items-center space-x-3 text-xs font-body">
                <div className="w-10 h-10 rounded-lg glass-badge flex items-center justify-center text-[#6F7652] dark:text-[#A66A3F]">
                  {item.isAnonymous ? <UserCheck className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-heading font-medium text-base text-[#2C241D] dark:text-[#F5F1E8] flex items-center space-x-1.5">
                    <span>{item.name}</span>
                    {item.isAnonymous && (
                      <span className="text-[9px] bg-[#A66A3F]/15 text-[#A66A3F] px-1.5 py-0.5 rounded font-normal">
                        {lang === 'en' ? 'Anonymous' : 'Anonim'}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#2C241D]/60 dark:text-[#E8DFD1]/60 font-normal leading-tight mt-0.5">
                    {item.company} • {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="font-body mt-12 text-center text-xs text-[#2C241D]/55 dark:text-[#E8DFD1]/50 font-normal">
          {t.testimonials.note || "*Ulasan dikumpulkan dari mitra pengadaan resmi UD Fathan Cassia Jaya. Privasi identitas sebagian mitra dilindungi atas permintaan khusus."}
        </div>

      </div>
    </section>
  );
}

