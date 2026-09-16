import React from 'react';
import { SITE_INFO, getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  return (
    <footer className="bg-[#3A2A20] dark:bg-[#120D09] text-[#F5EFE5] pt-16 pb-12 border-t border-[#C9A77A]/20 dark:border-[#C9A77A]/15 font-body relative overflow-hidden grain-overlay-light vignette-dark transition-colors duration-300">
      {/* Subtle Bottom Ambient Light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A65F3F]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-48 h-48 border-l border-t border-[#C9A77A]/08 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10 dark:border-white/5">
          
          {/* Brand Info with Logo Image */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={SITE_INFO.logoUrl}
                alt={t.siteInfo.name}
                className="w-12 h-12 rounded-xl object-cover border border-[#C9A77A]/40 shadow-sm"
              />
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#F5EFE5] tracking-wide leading-tight">
                  {t.siteInfo.name}
                </h3>
                <p className="font-body text-[10px] uppercase tracking-widest text-[#C9A77A] font-semibold">
                  {t.siteInfo.subtitle}
                </p>
              </div>
            </div>

            <p className="font-body text-xs text-[#F5EFE5]/75 leading-relaxed font-normal max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(t.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center space-x-2 text-xs text-[#C9A77A] hover:text-white font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B]" />
                <span>{lang === 'en' ? 'Contact via WhatsApp' : 'Hubungi Kami via WhatsApp'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B]" />
              </a>
            </div>
          </div>

          {/* Product Catalog Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-[#C9A77A] uppercase tracking-wider">
              {t.footer.catalogTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#F5EFE5]/80 font-normal">
              {t.products.list.map((p) => (
                <li key={p.id}>
                  <a
                    href="#produk"
                    className="hover:text-[#C9A77A] transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A65F3F] dark:bg-[#F3C06B]" />
                    <span className="truncate">{p.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-[#C9A77A] uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3.5 text-xs text-[#F5EFE5]/80 font-normal">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading text-[10px] text-[#C9A77A] uppercase font-semibold block">WhatsApp</span>
                  <span className="font-medium text-[#F5EFE5]">{SITE_INFO.placeholders.whatsapp}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading text-[10px] text-[#C9A77A] uppercase font-semibold block">Email</span>
                  <span>{SITE_INFO.placeholders.email}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading text-[10px] text-[#C9A77A] uppercase font-semibold block">{lang === 'en' ? 'Office & Warehouse' : 'Alamat Usaha'}</span>
                  <span>{SITE_INFO.placeholders.address}</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                {/* Facebook Icon SVG */}
                <svg className="w-4 h-4 text-[#A65F3F] dark:text-[#F3C06B] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <span className="font-heading text-[10px] text-[#C9A77A] uppercase font-semibold block">Facebook</span>
                  <span>{SITE_INFO.placeholders.facebook}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5EFE5]/60 space-y-4 sm:space-y-0 font-normal">
          <div>
            © {new Date().getFullYear()} {t.siteInfo.name}. {t.footer.copyright}
          </div>
          <div className="font-heading text-[#C9A77A] font-medium">
            {lang === 'en' ? 'Indonesian Spice Commodity Supplier' : 'Supplier Komoditas Rempah Indonesia'}
          </div>
        </div>

      </div>
    </footer>
  );
}

