import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Sun, Moon, Globe } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, isNight } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: t.nav.about, href: '#tentang', id: 'tentang' },
    { name: t.nav.products, href: '#produk', id: 'produk' },
    { name: t.nav.advantages, href: '#keunggulan', id: 'keunggulan' },
    { name: t.nav.process, href: '#proses', id: 'proses' },
    { name: t.nav.industries, href: '#industri', id: 'industri' },
    { name: t.nav.testimonials, href: '#testimoni', id: 'testimoni' },
    { name: t.nav.faq, href: '#faq', id: 'faq' },
    { name: t.nav.contact, href: '#kontak', id: 'kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // If user reaches near bottom of page, activate last link (kontak)
      const isBottom = window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 80);
      if (isBottom) {
        setActiveSection('kontak');
        return;
      }

      // Robust scrollspy by checking viewport position
      let currentSection = '';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            currentSection = link.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  return (
    <>
      {/* Permanent Fixed Header Navbar */}
      <header
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999 }}
        className="bg-[#3A2A20] dark:bg-[#18120E] border-b border-[#C9A77A]/30 dark:border-[#C9A77A]/20 shadow-2xl py-3 sm:py-3.5 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
              <img
                src={SITE_INFO.logoUrl}
                alt={t.siteInfo.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover border border-[#C9A77A]/40 shadow-sm group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col shrink-0">
                <span className="font-heading text-sm sm:text-base xl:text-lg font-semibold tracking-wide text-[#F5EFE5] group-hover:text-[#C9A77A] transition-colors leading-tight whitespace-nowrap">
                  {t.siteInfo.name}
                </span>
                <span className="font-body text-[9px] sm:text-[10px] tracking-[0.16em] text-[#C9A77A] uppercase font-medium whitespace-nowrap">
                  {t.siteInfo.b2bBadge}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with ScrollSpy Active Indicator */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 bg-[#454638]/40 dark:bg-[#231B15] p-1 xl:p-1.5 rounded-xl border border-[#C9A77A]/15 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`font-heading text-[11px] xl:text-xs font-medium px-2 xl:px-2.5 2xl:px-3 py-1 xl:py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#A65F3F] text-white shadow-xs font-semibold'
                        : 'text-[#F5EFE5]/80 hover:text-[#C9A77A] hover:bg-white/5'
                    }`}
                  >
                    {link.id === 'tentang' ? (
                      <>
                        <span className="xl:hidden">{lang === 'en' ? 'About' : 'Tentang'}</span>
                        <span className="hidden xl:inline">{link.name}</span>
                      </>
                    ) : (
                      link.name
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Language Toggle, Theme Toggle & Quote CTA */}
            <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2.5 shrink-0">
              {/* Language Switcher: ID / EN */}
              <div className="flex items-center bg-[#454638]/50 dark:bg-[#231B15] border border-[#C9A77A]/25 rounded-xl p-0.5 xl:p-1 text-xs font-heading font-medium">
                <button
                  type="button"
                  onClick={() => setLang('in')}
                  className={`px-2 xl:px-2.5 py-1 rounded-lg transition-all duration-200 ${
                    lang === 'in'
                      ? 'bg-[#A65F3F] text-white font-semibold shadow-xs'
                      : 'text-[#F5EFE5]/70 hover:text-white'
                  }`}
                  aria-label="Bahasa Indonesia"
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 xl:px-2.5 py-1 rounded-lg transition-all duration-200 ${
                    lang === 'en'
                      ? 'bg-[#A65F3F] text-white font-semibold shadow-xs'
                      : 'text-[#F5EFE5]/70 hover:text-white'
                  }`}
                  aria-label="English Language"
                >
                  EN
                </button>
              </div>

              {/* Theme Toggle: Light / Night */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 xl:p-2 rounded-xl bg-[#454638]/50 dark:bg-[#231B15] border border-[#C9A77A]/25 text-[#C9A77A] hover:text-white hover:bg-[#A65F3F]/30 transition-all flex items-center justify-center cursor-pointer"
                title={isNight ? t.nav.themeLight : t.nav.themeNight}
                aria-label="Toggle Theme"
              >
                {isNight ? (
                  <Sun className="w-4 h-4 text-[#F6C343]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#C9A77A]" />
                )}
              </button>

              {/* Primary Header CTA */}
              <a
                href={getWhatsAppUrl(t.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center space-x-1.5 xl:space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all shadow-sm shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                <span className="hidden xl:inline">{t.nav.requestQuote}</span>
                <span className="inline xl:hidden">{lang === 'en' ? 'Quote' : 'Penawaran'}</span>
              </a>
            </div>

            {/* Mobile Controls (Language, Theme & Hamburger) */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Quick Language Toggle on Mobile */}
              <button
                type="button"
                onClick={() => setLang(lang === 'in' ? 'en' : 'in')}
                className="px-2 py-1 bg-[#454638]/50 dark:bg-[#231B15] border border-[#C9A77A]/25 rounded-lg text-[11px] font-heading font-semibold text-[#C9A77A] flex items-center space-x-1"
                aria-label="Toggle Language"
              >
                <Globe className="w-3 h-3" />
                <span>{lang === 'in' ? 'ID' : 'EN'}</span>
              </button>

              {/* Quick Theme Toggle on Mobile */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 bg-[#454638]/50 dark:bg-[#231B15] border border-[#C9A77A]/25 rounded-lg text-[#C9A77A]"
                aria-label="Toggle Theme"
              >
                {isNight ? (
                  <Sun className="w-3.5 h-3.5 text-[#F6C343]" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-[#C9A77A]" />
                )}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#F5EFE5] hover:text-[#C9A77A] focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#3A2A20] dark:bg-[#18120E] border-b border-[#C9A77A]/20 px-4 pt-4 pb-6 space-y-4">
            {/* Mobile Language & Theme Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#C9A77A]/20">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#F5EFE5]/70 font-body">Bahasa:</span>
                <div className="flex bg-[#231B15] p-0.5 rounded-lg border border-[#C9A77A]/25">
                  <button
                    onClick={() => setLang('in')}
                    className={`px-2 py-0.5 text-xs rounded font-heading font-medium ${
                      lang === 'in' ? 'bg-[#A65F3F] text-white' : 'text-[#F5EFE5]/70'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2 py-0.5 text-xs rounded font-heading font-medium ${
                      lang === 'en' ? 'bg-[#A65F3F] text-white' : 'text-[#F5EFE5]/70'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <button
                onClick={toggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1 bg-[#231B15] border border-[#C9A77A]/25 rounded-lg text-xs text-[#C9A77A]"
              >
                {isNight ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#F6C343]" />
                    <span>{t.nav.themeLight}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#C9A77A]" />
                    <span>{t.nav.themeNight}</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-sm font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#A65F3F] text-white font-medium'
                        : 'text-[#F5EFE5] hover:text-[#C9A77A] hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href={getWhatsAppUrl(t.hero.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="font-heading w-full flex items-center justify-center space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.nav.requestQuote}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom WhatsApp CTA Bar for Mobile Users */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={getWhatsAppUrl(t.hero.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#A65F3F] text-white px-5 py-3.5 rounded-2xl shadow-2xl active:scale-98 transition-transform border border-white/20"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="text-left font-heading">
              <div className="font-body text-[10px] uppercase tracking-wider text-white/80 font-medium">UD Fathan Cassia Jaya</div>
              <div className="text-xs font-semibold">{t.nav.requestQuote}</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-white/90" />
        </a>
      </div>
    </>
  );
}
