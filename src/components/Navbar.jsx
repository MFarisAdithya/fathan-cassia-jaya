import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, SITE_INFO } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Produk', href: '#produk', id: 'produk' },
    { name: 'Keunggulan', href: '#keunggulan', id: 'keunggulan' },
    { name: 'Proses', href: '#proses', id: 'proses' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 120;
      let currentSection = '';

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Permanent Fixed Header Navbar */}
      <header
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999 }}
        className="bg-[#3A2A20] border-b border-[#C9A77A]/30 shadow-2xl py-3 sm:py-3.5 transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center space-x-3 group">
              <img
                src={SITE_INFO.logoUrl}
                alt={SITE_INFO.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-contain bg-white/5 p-1 border border-[#C9A77A]/30 shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-heading text-base sm:text-lg font-semibold tracking-wide text-[#F5EFE5] group-hover:text-[#C9A77A] transition-colors leading-tight">
                  {SITE_INFO.name}
                </span>
                <span className="font-body text-[10px] tracking-[0.18em] text-[#C9A77A] uppercase font-medium">
                  Supplier Rempah B2B
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with ScrollSpy Active Indicator */}
            <nav className="hidden md:flex items-center space-x-1 bg-[#454638]/40 p-1.5 rounded-xl border border-[#C9A77A]/15">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-heading text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#A65F3F] text-white shadow-xs font-medium'
                        : 'text-[#F5EFE5]/80 hover:text-[#C9A77A] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Primary Header CTA - Medium Border Radius */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, saya ingin meminta penawaran ketersediaan rempah untuk kebutuhan bisnis kami.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Minta Penawaran</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
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
          <div className="md:hidden bg-[#3A2A20] border-b border-[#C9A77A]/20 px-4 pt-4 pb-6 space-y-4">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
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
                  href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, saya ingin meminta penawaran ketersediaan rempah untuk kebutuhan bisnis kami.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="font-heading w-full flex items-center justify-center space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Minta Penawaran</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom WhatsApp CTA Bar for Mobile Users */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, saya ingin menanyakan ketersediaan rempah via WhatsApp.")}
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
              <div className="text-xs font-semibold">Minta Penawaran WhatsApp</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-white/90" />
        </a>
      </div>
    </>
  );
}
