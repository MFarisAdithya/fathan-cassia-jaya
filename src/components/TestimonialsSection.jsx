import React from 'react';
import { Quote, Star, Award, UserCheck, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function TestimonialsSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <section id="testimoni" className="bg-gradient-to-b from-[#F5EFE5] via-[#EFE7DA]/50 to-[#F5EFE5] dark:from-[#18120E] dark:via-[#1D1611] dark:to-[#18120E] text-[#3A2A20] dark:text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden border-b border-[#C9A77A]/25 dark:border-[#C9A77A]/15 grain-overlay vignette corner-accent-tr divider-line-top transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A77A]/10 dark:bg-[#C9A77A]/05 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-[#C9A77A]/15 rounded-tl-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#C9A77A]/15 rounded-br-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F]/10 dark:bg-[#A65F3F]/20 border border-[#A65F3F]/20 text-[#A65F3F] dark:text-[#F3C06B] px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3A2A20] dark:text-[#F5EFE5] leading-tight">
            {t.testimonials.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#806653] dark:text-[#D1C0B0] font-normal max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.testimonials.items.map((item) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-[#231B15] rounded-2xl p-8 border ${
                item.isAnonymous ? 'border-[#A65F3F]/40 dark:border-[#A65F3F]/30' : 'border-[#C9A77A]/30 dark:border-[#C9A77A]/20'
              } shadow-card dark:shadow-dark-card hover:shadow-card-hover flex flex-col justify-between space-y-6 relative hover:border-[#A65F3F] transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="space-y-4">
                {/* Header: Rating & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A65F3F] dark:fill-[#F3C06B] text-[#A65F3F] dark:text-[#F3C06B]" />
                    ))}
                  </div>
                  <span className={`font-heading text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-lg font-semibold border ${
                    item.isAnonymous 
                      ? 'bg-[#3A2A20] dark:bg-[#1A120D] text-[#C9A77A] border-[#3A2A20]' 
                      : 'bg-[#F5EFE5] dark:bg-[#1A130E] text-[#806653] dark:text-[#C9A77A] border-[#C9A77A]/20'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Review Text Content */}
                <div className="py-2">
                  <p className="font-body text-sm font-normal text-[#3A2A20] dark:text-[#E8DDD2] leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#C9A77A]/15 dark:border-[#C9A77A]/10 flex items-center space-x-3 text-xs text-[#806653] dark:text-[#D1C0B0] font-body">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold border ${
                  item.isAnonymous
                    ? 'bg-[#3A2A20] dark:bg-[#1A120D] text-[#C9A77A] border-[#C9A77A]/30'
                    : 'bg-[#F5EFE5] dark:bg-[#1A130E] text-[#A65F3F] dark:text-[#F3C06B] border-[#C9A77A]/30'
                }`}>
                  {item.isAnonymous ? <UserCheck className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-heading font-semibold text-[#3A2A20] dark:text-[#F5EFE5] flex items-center space-x-1.5">
                    <span>{item.name}</span>
                    {item.isAnonymous && (
                      <span className="text-[9px] bg-[#A65F3F]/15 text-[#A65F3F] dark:text-[#F3C06B] px-1.5 py-0.5 rounded font-normal">
                        {lang === 'en' ? 'Anonymous' : 'Anonim'}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#806653] dark:text-[#C9A77A] font-normal leading-tight">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="font-body mt-10 text-center text-xs text-[#806653] dark:text-[#D1C0B0]/70 font-normal">
          {t.testimonials.note || "*Ulasan dikumpulkan dari mitra pengadaan resmi UD Fathan Cassia Jaya. Privasi identitas sebagian mitra dilindungi atas permintaan khusus."}
        </div>

      </div>
    </section>
  );
}

