import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { buildWaLink } from '../lib/whatsapp';
import { trackEvent } from '../lib/analytics';
import {
  ClipboardList,
  X,
  Trash2,
  Send,
  MessageCircle,
  Building2,
  MapPin,
  Package,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function RfqDrawer() {
  const {
    lang,
    rfqList,
    rfqCount,
    removeFromRfq,
    updateRfqItem,
    clearRfq,
    isRfqDrawerOpen,
    openRfqDrawer,
    closeRfqDrawer,
    rfqAnnouncement,
  } = useApp();

  const isEn = lang === 'en';

  // Form states for delivery details
  const [destinationCity, setDestinationCity] = useState('');
  const [company, setCompany] = useState('');

  // Accessibility refs
  const drawerRef = useRef(null);
  const openTriggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isRfqDrawerOpen) return;

    // Save previous active element before opening
    const previouslyFocusedElement = document.activeElement;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button or first interactive element
    const timer = setTimeout(() => {
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeRfqDrawer();
        return;
      }

      if (e.key === 'Tab') {
        if (!drawerRef.current) return;
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const triggerEl = openTriggerRef.current;

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);

      // Return focus to previous element or trigger button
      if (triggerEl) {
        triggerEl.focus();
      } else if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
        previouslyFocusedElement.focus();
      }
    };
  }, [isRfqDrawerOpen, closeRfqDrawer]);

  const handleSendWa = () => {
    trackEvent('wa_click', {
      source: 'rfq-drawer',
      itemsCount: rfqList.length,
      destinationCity: destinationCity.trim() || undefined,
      company: company.trim() || undefined,
      lang,
    });

    const waUrl = buildWaLink({
      items: rfqList,
      source: 'rfq-drawer',
      lang,
      destinationCity: destinationCity.trim(),
      company: company.trim(),
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Accessible live announcer for screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {rfqAnnouncement}
      </div>

      {/* Floating RFQ Chip: Positioned safely above mobile floating WA bar (bottom-20) and bottom-6 on desktop */}
      {rfqCount > 0 && (
        <div className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40">
          <button
            ref={openTriggerRef}
            type="button"
            onClick={openRfqDrawer}
            aria-haspopup="dialog"
            aria-expanded={isRfqDrawerOpen}
            aria-controls="rfq-drawer"
            aria-label={
              isEn
                ? `Open Spice RFQ list, ${rfqCount} items selected`
                : `Buka Daftar Penawaran Rempah, ${rfqCount} produk terpilih`
            }
            className="group font-body flex items-center space-x-2.5 bg-[#2C241D]/95 dark:bg-[#A66A3F]/95 hover:bg-[#A66A3F] dark:hover:bg-[#8e5831] text-[#F5F1E8] px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <ClipboardList className="w-4 h-4 text-[#E28743] dark:text-[#F5F1E8]" />
              <span className="absolute -top-1.5 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#E28743] text-[9px] font-bold text-[#2C241D] animate-pulse">
                {rfqCount}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              {isEn ? `RFQ List (${rfqCount})` : `Daftar Penawaran (${rfqCount})`}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F5F1E8]/70 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Backdrop & Drawer Modal */}
      {isRfqDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={closeRfqDrawer}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            ref={drawerRef}
            id="rfq-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rfq-title"
            aria-describedby="rfq-desc"
            className="relative w-full max-w-md bg-[#F5F1E8] dark:bg-[#1C1612] text-[#2C241D] dark:text-[#F5F1E8] shadow-2xl z-50 flex flex-col h-full border-l border-[#2C241D]/15 dark:border-[#E8DFD1]/15 overflow-hidden animate-in slide-in-from-right duration-300"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#2C241D]/10 dark:border-[#E8DFD1]/10 bg-[#E8DFD1]/30 dark:bg-[#16110D] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#A66A3F]/15 text-[#A66A3F] dark:text-[#E28743]">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h2
                    id="rfq-title"
                    className="font-heading text-lg sm:text-xl font-semibold leading-tight text-[#2C241D] dark:text-[#F5F1E8]"
                  >
                    {isEn ? 'Spice RFQ List' : 'Daftar Penawaran'}
                  </h2>
                  <p id="rfq-desc" className="font-body text-xs text-[#2C241D]/70 dark:text-[#E8DFD1]/70">
                    {rfqCount} {isEn ? 'items ready for quotation' : 'komoditas siap diajukan'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {rfqCount > 0 && (
                  <button
                    type="button"
                    onClick={clearRfq}
                    className="font-body text-[11px] text-[#A66A3F] hover:text-[#8e5831] px-2 py-1 rounded hover:bg-[#A66A3F]/10 transition-colors font-medium"
                    title={isEn ? 'Clear all items' : 'Kosongkan daftar'}
                  >
                    {isEn ? 'Clear' : 'Kosongkan'}
                  </button>
                )}
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeRfqDrawer}
                  aria-label={isEn ? 'Close RFQ drawer' : 'Tutup daftar penawaran'}
                  className="p-2 rounded-lg text-[#2C241D]/70 hover:text-[#2C241D] dark:text-[#E8DFD1]/70 dark:hover:text-white hover:bg-[#2C241D]/08 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
              {rfqList.length === 0 ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#A66A3F]/10 flex items-center justify-center text-[#A66A3F]">
                    <Package className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-base font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                      {isEn ? 'Your inquiry list is empty' : 'Daftar penawaran masih kosong'}
                    </h3>
                    <p className="font-body text-xs text-[#2C241D]/70 dark:text-[#E8DFD1]/70 max-w-xs mx-auto leading-relaxed">
                      {isEn
                        ? 'Browse our spice catalog and click "+ Add to RFQ" on any item to build your custom wholesale quotation.'
                        : 'Pilih komoditas rempah di katalog kami dan klik "+ Tambah ke daftar" untuk membuat penawaran terpadu.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      closeRfqDrawer();
                      const el = document.getElementById('produk');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body inline-flex items-center space-x-2 bg-[#A66A3F] hover:bg-[#8e5831] text-white px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>{isEn ? 'Explore Catalog' : 'Jelajahi Katalog'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Selected Items List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-[11px] uppercase tracking-wider font-semibold text-[#6F7652] dark:text-[#A66A3F]">
                        {isEn ? 'Selected Commodities' : 'Komoditas Terpilih'}
                      </span>
                      <span className="font-mono text-xs text-[#2C241D]/60 dark:text-[#E8DFD1]/60">
                        {rfqList.length} items
                      </span>
                    </div>

                    {rfqList.map((item, index) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-white/60 dark:bg-[#251E18]/60 border border-[#2C241D]/10 dark:border-[#E8DFD1]/10 space-y-2.5 transition-all hover:border-[#A66A3F]/40"
                      >
                        <div className="flex items-start justify-between space-x-3">
                          <div className="flex items-center space-x-3 min-w-0">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-cover bg-[#E8DFD1]/50 shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-[#A66A3F]/15 flex items-center justify-center text-[#A66A3F] shrink-0">
                                <Package className="w-6 h-6" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h4 className="font-heading text-sm font-semibold text-[#2C241D] dark:text-[#F5F1E8] truncate">
                                {index + 1}. {item.name}
                              </h4>
                              {item.price && (
                                <p className="font-body text-xs font-medium text-[#A66A3F] dark:text-[#E28743]">
                                  {item.price} {item.unit}
                                </p>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromRfq(item.id)}
                            aria-label={
                              isEn ? `Remove ${item.name} from RFQ list` : `Hapus ${item.name} dari daftar`
                            }
                            className="p-1.5 rounded-md text-red-500 hover:text-red-700 hover:bg-red-500/10 transition-colors shrink-0 cursor-pointer"
                            title={isEn ? 'Remove' : 'Hapus'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Optional Inputs: Grade & Volume/Qty */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div>
                            <label className="block font-body text-[10px] uppercase tracking-wider text-[#2C241D]/70 dark:text-[#E8DFD1]/70 mb-1">
                              <span className="flex items-center space-x-1">
                                <Layers className="w-3 h-3 text-[#A66A3F]" />
                                <span>{isEn ? 'Grade / Spec' : 'Grade / Spek'}</span>
                              </span>
                            </label>
                            <input
                              type="text"
                              value={item.grade || ''}
                              onChange={(e) => updateRfqItem(item.id, { grade: e.target.value })}
                              placeholder={isEn ? 'e.g. KA VO 2.5' : 'Contoh: KA VO 2.5'}
                              className="font-body w-full px-2.5 py-1.5 text-xs rounded-lg bg-[#F5F1E8] dark:bg-[#191410] border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 text-[#2C241D] dark:text-[#F5F1E8] placeholder-[#2C241D]/40 dark:placeholder-[#E8DFD1]/40 focus:outline-none focus:ring-1 focus:ring-[#A66A3F]"
                            />
                          </div>

                          <div>
                            <label className="block font-body text-[10px] uppercase tracking-wider text-[#2C241D]/70 dark:text-[#E8DFD1]/70 mb-1">
                              <span className="flex items-center space-x-1">
                                <Package className="w-3 h-3 text-[#A66A3F]" />
                                <span>{isEn ? 'Volume / Qty' : 'Volume / Qty'}</span>
                              </span>
                            </label>
                            <input
                              type="text"
                              value={item.qty || ''}
                              onChange={(e) => updateRfqItem(item.id, { qty: e.target.value })}
                              placeholder={isEn ? 'e.g. 500 kg / 2 Ton' : 'Contoh: 500 kg'}
                              className="font-body w-full px-2.5 py-1.5 text-xs rounded-lg bg-[#F5F1E8] dark:bg-[#191410] border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 text-[#2C241D] dark:text-[#F5F1E8] placeholder-[#2C241D]/40 dark:placeholder-[#E8DFD1]/40 focus:outline-none focus:ring-1 focus:ring-[#A66A3F]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer / Logistics Details (Optional) */}
                  <div className="p-4 rounded-xl bg-[#E8DFD1]/40 dark:bg-[#191410]/70 border border-[#2C241D]/10 dark:border-[#E8DFD1]/10 space-y-3">
                    <span className="font-body text-[11px] uppercase tracking-wider font-semibold text-[#6F7652] dark:text-[#A66A3F] block">
                      {isEn ? 'Delivery & Business Info (Optional)' : 'Detail Pengiriman & Usaha (Opsional)'}
                    </span>

                    <div className="space-y-2.5">
                      <div>
                        <label className="block font-body text-xs font-medium text-[#2C241D] dark:text-[#F5F1E8] mb-1">
                          <span className="flex items-center space-x-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#A66A3F]" />
                            <span>{isEn ? 'Destination City / Port' : 'Kota Tujuan Pengiriman'}</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          value={destinationCity}
                          onChange={(e) => setDestinationCity(e.target.value)}
                          placeholder={isEn ? 'e.g. Surabaya, Jakarta, Medan...' : 'Contoh: Surabaya, Semarang, Jakarta...'}
                          className="font-body w-full px-3 py-2 text-xs rounded-lg bg-white dark:bg-[#251E18] border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 text-[#2C241D] dark:text-[#F5F1E8] placeholder-[#2C241D]/40 dark:placeholder-[#E8DFD1]/40 focus:outline-none focus:ring-1.5 focus:ring-[#A66A3F]"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-xs font-medium text-[#2C241D] dark:text-[#F5F1E8] mb-1">
                          <span className="flex items-center space-x-1.5">
                            <Building2 className="w-3.5 h-3.5 text-[#A66A3F]" />
                            <span>{isEn ? 'Company / Business Name' : 'Nama Perusahaan / Usaha'}</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder={isEn ? 'e.g. PT Spice Industries...' : 'Contoh: PT Rempah Sejahtera / Toko Bumbu Jaya...'}
                          className="font-body w-full px-3 py-2 text-xs rounded-lg bg-white dark:bg-[#251E18] border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 text-[#2C241D] dark:text-[#F5F1E8] placeholder-[#2C241D]/40 dark:placeholder-[#E8DFD1]/40 focus:outline-none focus:ring-1.5 focus:ring-[#A66A3F]"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer with WhatsApp CTA */}
            {rfqList.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-[#2C241D]/10 dark:border-[#E8DFD1]/10 bg-[#E8DFD1]/30 dark:bg-[#16110D] space-y-2">
                <button
                  type="button"
                  onClick={handleSendWa}
                  className="font-body w-full inline-flex items-center justify-center space-x-2.5 bg-[#A66A3F] hover:bg-[#8e5831] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg active:scale-98 transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{isEn ? 'Send Inquiry via WhatsApp' : 'Kirim via WhatsApp'}</span>
                  <Send className="w-3.5 h-3.5 shrink-0 opacity-80" />
                </button>
                <p className="font-body text-[11px] text-center text-[#2C241D]/60 dark:text-[#E8DFD1]/60">
                  {isEn
                    ? 'Structured text with all items will open directly in WhatsApp.'
                    : 'Format pesan terstruktur dengan semua item akan langsung terbuka di WhatsApp.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
