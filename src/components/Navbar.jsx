import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, ArrowUp, Sun, Moon, Globe } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, isNight } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const yOffset = -72;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? Math.min(100, Math.max(0, (scrollY / totalScroll) * 100)) : 0;
      setScrollProgress(progress);
      setScrolled(scrollY > 20);
      setShowBackToTop(scrollY > 350);

      // If user reaches near bottom of page, activate last link (kontak)
      const isBottom = window.innerHeight + scrollY >= (document.documentElement.scrollHeight - 80);
      if (isBottom) {
        setActiveSection((prev) => (prev !== 'kontak' ? 'kontak' : prev));
        ticking = false;
        return;
      }

      // Fast scrollspy check
      const sectionIds = ['tentang', 'produk', 'keunggulan', 'proses', 'industri', 'testimoni', 'faq', 'kontak'];
      let currentSection = '';
      const triggerPoint = 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= triggerPoint) {
            currentSection = sectionIds[i];
            break;
          }
        }
      }

      setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Permanent Fixed Header Navbar */}
      <header
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999 }}
        className={`transition-colors duration-150 py-3 sm:py-3.5 border-b backdrop-blur-md ${
          scrolled
            ? 'bg-[#F5F1E8]/95 dark:bg-[#191410]/95 border-[#2C241D]/10 dark:border-[#E8DFD1]/10 shadow-xs'
            : 'bg-[#F5F1E8]/85 dark:bg-[#191410]/85 border-[#2C241D]/08 dark:border-[#E8DFD1]/08'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
              <img
                src={SITE_INFO.logoUrl}
                alt={t.siteInfo.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover border border-[#2C241D]/15 dark:border-[#E8DFD1]/20 shadow-xs shrink-0"
              />
              <div className="flex flex-col shrink-0">
                <span className="font-heading text-sm sm:text-base xl:text-lg font-semibold tracking-wide text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#A66A3F] transition-colors leading-tight whitespace-nowrap">
                  {t.siteInfo.name}
                </span>
                <span className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] text-[#6F7652] dark:text-[#A66A3F] uppercase font-semibold whitespace-nowrap">
                  {t.siteInfo.b2bBadge}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with ScrollSpy Active Indicator */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 bg-[#E8DFD1]/60 dark:bg-[#241C16] p-1 xl:p-1.5 rounded-xl border border-[#2C241D]/08 dark:border-[#E8DFD1]/10 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-body text-[11px] xl:text-xs font-medium px-2.5 xl:px-3 py-1.5 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white shadow-xs font-semibold'
                        : 'text-[#2C241D]/75 dark:text-[#F5F1E8]/75 hover:text-[#2C241D] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
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
              <div className="flex items-center bg-[#E8DFD1]/60 dark:bg-[#241C16] border border-[#2C241D]/08 dark:border-[#E8DFD1]/10 rounded-xl p-0.5 xl:p-1 text-xs font-body font-medium">
                <button
                  type="button"
                  onClick={() => setLang('in')}
                  className={`px-2 xl:px-2.5 py-1 rounded-lg transition-all duration-200 ${
                    lang === 'in'
                      ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white font-semibold shadow-xs'
                      : 'text-[#2C241D]/70 dark:text-[#F5F1E8]/70 hover:text-[#2C241D] dark:hover:text-white'
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
                      ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white font-semibold shadow-xs'
                      : 'text-[#2C241D]/70 dark:text-[#F5F1E8]/70 hover:text-[#2C241D] dark:hover:text-white'
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
                className="p-1.5 xl:p-2 rounded-xl bg-[#E8DFD1]/60 dark:bg-[#241C16] border border-[#2C241D]/08 dark:border-[#E8DFD1]/10 text-[#2C241D] dark:text-[#F5F1E8] hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
                title={isNight ? t.nav.themeLight : t.nav.themeNight}
                aria-label="Toggle Theme"
              >
                {isNight ? (
                  <Sun className="w-4 h-4 text-[#C47F4E]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#2C241D]" />
                )}
              </button>

              {/* Primary Header CTA */}
              <a
                href={getWhatsAppUrl(t.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center space-x-1.5 xl:space-x-2 bg-[#2C241D] hover:bg-[#A66A3F] text-[#F5F1E8] dark:bg-[#A66A3F] dark:hover:bg-[#8e5831] px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all shadow-xs shrink-0"
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
                className="px-2 py-1 bg-[#E8DFD1]/70 dark:bg-[#241C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/10 rounded-lg text-[11px] font-body font-semibold text-[#2C241D] dark:text-[#F5F1E8] flex items-center space-x-1"
                aria-label="Toggle Language"
              >
                <Globe className="w-3 h-3 text-[#6F7652] dark:text-[#A66A3F]" />
                <span>{lang === 'in' ? 'ID' : 'EN'}</span>
              </button>

              {/* Quick Theme Toggle on Mobile */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 bg-[#E8DFD1]/70 dark:bg-[#241C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/10 rounded-lg text-[#2C241D] dark:text-[#F5F1E8]"
                aria-label="Toggle Theme"
              >
                {isNight ? (
                  <Sun className="w-3.5 h-3.5 text-[#C47F4E]" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-[#2C241D]" />
                )}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#2C241D] dark:text-[#F5F1E8] hover:text-[#A66A3F] focus:outline-none p-2 rounded-lg"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#F5F1E8]/98 dark:bg-[#191410]/98 backdrop-blur-md border-b border-[#2C241D]/10 dark:border-[#E8DFD1]/10 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            {/* Mobile Language & Theme Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2C241D]/10 dark:border-[#E8DFD1]/10">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#2C241D]/70 dark:text-[#F5F1E8]/70 font-body">Bahasa:</span>
                <div className="flex bg-[#E8DFD1]/70 dark:bg-[#241C16] p-0.5 rounded-lg border border-[#2C241D]/10 dark:border-[#E8DFD1]/10">
                  <button
                    onClick={() => setLang('in')}
                    className={`px-2 py-0.5 text-xs rounded font-body font-medium ${
                      lang === 'in' ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white' : 'text-[#2C241D]/70 dark:text-[#F5F1E8]/70'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-2 py-0.5 text-xs rounded font-body font-medium ${
                      lang === 'en' ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white' : 'text-[#2C241D]/70 dark:text-[#F5F1E8]/70'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <button
                onClick={toggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1 bg-[#E8DFD1]/70 dark:bg-[#241C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/10 rounded-lg text-xs text-[#2C241D] dark:text-[#F5F1E8]"
              >
                {isNight ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#C47F4E]" />
                    <span>{t.nav.themeLight}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#2C241D]" />
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-body text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#2C241D] text-[#F5F1E8] dark:bg-[#A66A3F] dark:text-white font-medium'
                        : 'text-[#2C241D] dark:text-[#F5F1E8] hover:text-[#A66A3F] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A66A3F]" />}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href={getWhatsAppUrl(t.hero.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="font-body w-full flex items-center justify-center space-x-2 bg-[#2C241D] hover:bg-[#A66A3F] text-[#F5F1E8] dark:bg-[#A66A3F] py-3 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.nav.requestQuote}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Real-time Scroll & Reading Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black/5 dark:bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#A66A3F] via-[#E28743] to-[#C47F4E] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Floating Back to Top Button with Progress Percentage */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex items-center space-x-2 bg-[#2C241D]/92 dark:bg-[#A66A3F]/92 hover:bg-[#A66A3F] dark:hover:bg-[#8e5831] text-[#F5F1E8] px-3.5 py-2 rounded-full shadow-xl backdrop-blur-md border border-white/15 transition-all duration-300 hover:scale-105 cursor-pointer text-xs font-body font-semibold group"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[11px] font-mono tracking-tight">{Math.round(scrollProgress)}%</span>
        </button>
      )}

      {/* Floating Bottom WhatsApp CTA Bar for Mobile Users */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={getWhatsAppUrl(t.hero.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#2C241D] dark:bg-[#A66A3F] text-[#F5F1E8] px-5 py-3.5 rounded-xl shadow-xl active:scale-98 transition-transform border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <MessageCircle className="w-4 h-4 text-[#F5F1E8]" />
            </div>
            <div className="text-left font-body">
              <div className="text-[10px] uppercase tracking-wider text-[#F5F1E8]/70 font-medium">UD Fathan Cassia Jaya</div>
              <div className="text-xs font-semibold text-[#F5F1E8]">{t.nav.requestQuote}</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#F5F1E8]/90" />
        </a>
      </div>
    </>
  );
}
