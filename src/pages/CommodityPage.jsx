import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppProvider, useApp } from '../context/AppContext';
import { getCommodity, COMMODITIES, COMMODITY_SLUGS } from '../config/siteConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RfqDrawer from '../components/RfqDrawer';
import WaButton from '../components/WaButton';
import OptimizedImage from '../components/OptimizedImage';
import CommoditySeoHead from '../components/CommoditySeoHead';
import {
  ChevronRight,
  ShieldCheck,
  Calendar,
  Check,
  Plus,
  MessageCircle,
  Layers,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

function CommodityDetail({ slug }) {
  const params = useParams();
  const effectiveSlug = slug || params.slug || 'kayu-manis';
  const commodity = getCommodity(effectiveSlug);

  const { lang, isInRfq, addToRfq, removeFromRfq } = useApp();
  const isEn = lang === 'en';

  // Active Grade State - must be called unconditionally before early return
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(0);

  if (!commodity) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] flex flex-col justify-center items-center p-6 text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Komoditas Tidak Ditemukan</h1>
        <p className="font-body text-sm text-[#2C241D]/70 dark:text-[#F5F1E8]/70 mb-6">
          Halaman komoditas yang Anda tuju tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/id#produk"
          className="inline-flex items-center space-x-2 bg-[#9A5F36] hover:bg-[#844F2C] text-white px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog Produk</span>
        </Link>
      </div>
    );
  }

  const activeGrade = commodity.grades[selectedGradeIndex] || commodity.grades[0];

  // RFQ status for active grade
  const gradeRfqId = `${commodity.slug}-${activeGrade.id}`;
  const inRfq = isInRfq(gradeRfqId);

  const handleToggleRfq = () => {
    if (inRfq) {
      removeFromRfq(gradeRfqId);
    } else {
      addToRfq(
        {
          id: gradeRfqId,
          name: `${commodity.name[lang] || commodity.name.in} (${activeGrade.name[lang] || activeGrade.name.in})`,
          price: activeGrade.price,
          unit: activeGrade.unit,
          image: activeGrade.image || commodity.image,
          grade: activeGrade.name[lang] || activeGrade.name.in,
          tag: commodity.name[lang] || commodity.name.in
        },
        activeGrade.name[lang] || activeGrade.name.in,
        '100 kg'
      );
    }
  };

  // Other commodities for cross-linking
  const otherCommodities = COMMODITY_SLUGS
    .filter((s) => s !== commodity.slug)
    .map((s) => COMMODITIES[s]);

  // Formatted WA message for active grade
  const waCustomMessage = isEn
    ? `Hello UD Fathan Cassia Jaya, I would like to request an official quotation for ${activeGrade.name.en || activeGrade.name.in} (${activeGrade.price}${activeGrade.unit}).`
    : `Halo UD Fathan Cassia Jaya, saya ingin meminta surat penawaran resmi untuk ${activeGrade.name.in} (${activeGrade.price}${activeGrade.unit}).`;

  return (
    <>
      <CommoditySeoHead commodity={commodity} lang={lang} activeGrade={activeGrade} />
      <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#191410] text-[#2C241D] dark:text-[#F5F1E8] font-sans selection:bg-[#A66A3F] selection:text-white transition-colors duration-300">
        <Navbar />

        <main className="pt-24 sm:pt-28 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
              <ol className="flex items-center space-x-2 text-xs font-body text-[#2C241D]/60 dark:text-[#E8DFD1]/60">
                <li>
                  <Link to={isEn ? '/en' : '/id'} className="hover:text-[#9A5F36] dark:hover:text-[#E28743] transition-colors">
                    {isEn ? 'Home' : 'Beranda'}
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5 text-[#2C241D]/40 dark:text-[#E8DFD1]/40" /></li>
                <li>
                  <Link to={isEn ? '/en#produk' : '/id#produk'} className="hover:text-[#9A5F36] dark:hover:text-[#E28743] transition-colors">
                    {isEn ? 'Spices Catalog' : 'Katalog Rempah'}
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5 text-[#2C241D]/40 dark:text-[#E8DFD1]/40" /></li>
                <li className="font-semibold text-[#2C241D] dark:text-[#F5F1E8] truncate max-w-[200px] sm:max-w-none">
                  {commodity.name[lang] || commodity.name.in}
                </li>
              </ol>
            </nav>

            {/* Main Product Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
              
              {/* Left Column: Product Visual & Grade Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#231C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/15 shadow-card aspect-[4/3] flex items-center justify-center">
                  <OptimizedImage
                    src={activeGrade.image || commodity.image}
                    alt={`${activeGrade.name[lang] || activeGrade.name.in} - UD Fathan Cassia Jaya`}
                    width={640}
                    height={480}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute top-3 left-3 glass-badge px-3 py-1 rounded-md text-[11px] font-mono font-semibold text-[#2C241D] dark:text-[#F5F1E8] uppercase tracking-wider">
                    {commodity.slug}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#2C241D]/80 dark:bg-black/75 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-body text-[#F5F1E8] flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C47F4E]" />
                    <span>{isEn ? 'Direct Warehouse Stock' : 'Stok Asli Gudang'}</span>
                  </div>
                </div>

                {/* Grade Mini Thumbnails if more than 1 grade */}
                {commodity.grades.length > 1 && (
                  <div>
                    <span className="text-[11px] font-body font-semibold text-[#6F7652] dark:text-[#A66A3F] uppercase tracking-wider block mb-2">
                      {isEn ? 'Select Grade to Preview:' : 'Pilih Grade untuk Melihat Foto & Spesifikasi:'}
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {commodity.grades.map((grade, idx) => (
                        <button
                          key={grade.id}
                          type="button"
                          onClick={() => setSelectedGradeIndex(idx)}
                          className={`rounded-lg overflow-hidden border-2 p-0.5 transition-all cursor-pointer ${
                            selectedGradeIndex === idx
                              ? 'border-[#9A5F36] shadow-sm scale-102'
                              : 'border-transparent hover:border-[#9A5F36]/40 opacity-75 hover:opacity-100'
                          }`}
                        >
                          <OptimizedImage
                            src={grade.image}
                            alt={grade.name[lang] || grade.name.in}
                            width={100}
                            height={75}
                            loading="lazy"
                            className="w-full h-12 object-cover rounded"
                          />
                          <p className="text-[9px] font-body font-medium truncate text-center mt-1 text-[#2C241D] dark:text-[#F5F1E8]">
                            {grade.name[lang] || grade.name.in}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Title, Grade Selector, Price, CTAs */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Category & Verified Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-body text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6F7652] dark:text-[#A66A3F]">
                    {isEn ? 'B2B Spice Commodity' : 'Komoditas Rempah Nusantara B2B'}
                  </span>
                  <span className="inline-flex items-center space-x-1 bg-[#A66A3F]/15 text-[#9A5F36] dark:text-[#E28743] px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>{isEn ? 'Guaranteed Harvest Origin' : 'Garansi Asli Panen'}</span>
                  </span>
                </div>

                {/* H1 with SEO Target Keywords */}
                <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2C241D] dark:text-[#F5F1E8] leading-[1.25] tracking-tight">
                  {commodity.h1[lang] || commodity.h1.in}
                </h1>

                {/* Subtitle / Description */}
                <p className="font-body text-sm sm:text-base text-[#2C241D]/80 dark:text-[#E8DFD1]/85 leading-relaxed font-normal">
                  {commodity.subtitle[lang] || commodity.subtitle.in}
                </p>

                {/* Indicative Price Card with Update Date */}
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#231C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/15 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-body text-[#6F7652] dark:text-[#A66A3F]">
                    <span className="font-semibold uppercase tracking-wider">
                      {isEn ? 'Indicative Wholesale Price' : 'Harga Indikatif Grosir'}
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[11px] text-[#2C241D]/60 dark:text-[#E8DFD1]/60">
                      <Calendar className="w-3 h-3" />
                      <span>{isEn ? 'Update:' : 'Tanggal Update:'} {commodity.updatedDate[lang] || commodity.updatedDate.in}</span>
                    </span>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-[#9A5F36] dark:text-[#E28743]">
                      {activeGrade.price}
                    </span>
                    <span className="font-body text-sm font-semibold text-[#2C241D]/70 dark:text-[#E8DFD1]/70">
                      {activeGrade.unit}
                    </span>
                    <span className="text-[11px] font-body text-[#2C241D]/50 dark:text-[#E8DFD1]/50 ml-1">
                      ({activeGrade.name[lang] || activeGrade.name.in})
                    </span>
                  </div>

                  <p className="font-body text-[11px] text-[#2C241D]/60 dark:text-[#E8DFD1]/60 leading-normal italic">
                    {isEn
                      ? '*Spot prices fluctuate based on daily agricultural auction and shipment tonnage. Official contract quotation provided via WhatsApp.'
                      : '*Harga bersifat indikatif mengikuti fluktuasi lelang panen petani dan volume tonase pemesanan. Penawaran harga resmi diberikan melalui WhatsApp.'}
                  </p>
                </div>

                {/* Grade Selector (Pemilih Grade) */}
                <div className="space-y-2.5">
                  <label className="block font-body text-xs font-semibold text-[#2C241D] dark:text-[#F5F1E8] uppercase tracking-wider">
                    {isEn ? 'Choose Commodity Grade:' : 'Pilih Grade Komoditas:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {commodity.grades.map((grade, idx) => {
                      const isSelected = selectedGradeIndex === idx;
                      return (
                        <button
                          key={grade.id}
                          type="button"
                          onClick={() => setSelectedGradeIndex(idx)}
                          className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#9A5F36]/10 dark:bg-[#9A5F36]/20 border-[#9A5F36] text-[#2C241D] dark:text-[#F5F1E8] shadow-xs'
                              : 'bg-white/60 dark:bg-[#231C16]/60 border-[#2C241D]/10 dark:border-[#E8DFD1]/10 text-[#2C241D]/80 dark:text-[#F5F1E8]/80 hover:border-[#9A5F36]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-heading text-xs font-semibold truncate">
                              {grade.name[lang] || grade.name.in}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#9A5F36] shrink-0" />}
                          </div>
                          <div className="font-heading text-xs font-bold text-[#9A5F36] dark:text-[#E28743]">
                            {grade.price} <span className="text-[10px] font-normal">{grade.unit}</span>
                          </div>
                          <div className="text-[10px] font-body text-[#6F7652] dark:text-[#A66A3F] truncate mt-0.5">
                            {grade.specsHighlight[lang] || grade.specsHighlight.in}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Grade Description Detail */}
                <div className="p-3.5 rounded-lg bg-[#E8DFD1]/40 dark:bg-[#241C16]/60 border border-[#2C241D]/08 dark:border-[#E8DFD1]/08 text-xs font-body text-[#2C241D]/80 dark:text-[#E8DFD1]/80 leading-relaxed">
                  <span className="font-semibold text-[#2C241D] dark:text-[#F5F1E8] block mb-1">
                    {isEn ? 'Selected Grade Specification:' : 'Karakteristik Grade Terpilih:'}
                  </span>
                  {activeGrade.description[lang] || activeGrade.description.in}
                </div>

                {/* Action CTA Buttons: WhatsApp & RFQ List Toggle */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  
                  {/* Primary WhatsApp Action */}
                  <WaButton
                    source={`produk-${commodity.slug}`}
                    customMessage={waCustomMessage}
                    className="font-body flex-1 inline-flex items-center justify-center space-x-2.5 bg-[#9A5F36] hover:bg-[#844F2C] text-[#F5F1E8] px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{isEn ? 'Inquire on WhatsApp' : 'Minta Penawaran via WhatsApp'}</span>
                  </WaButton>

                  {/* Add to RFQ List Toggle Button */}
                  <button
                    type="button"
                    onClick={handleToggleRfq}
                    className={`font-body inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
                      inRfq
                        ? 'bg-[#6F7652] hover:bg-[#5b6243] text-white border-transparent shadow-xs'
                        : 'bg-white dark:bg-[#231C16] hover:bg-black/5 dark:hover:bg-white/5 text-[#9A5F36] dark:text-[#E28743] border-[#9A5F36]/40 hover:border-[#9A5F36]'
                    }`}
                  >
                    {inRfq ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>{isEn ? '✓ In RFQ List' : '✓ Di Daftar Penawaran'}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>{isEn ? '+ Add to RFQ' : '+ Tambah ke Daftar'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] font-body text-[#2C241D]/70 dark:text-[#E8DFD1]/70 border-t border-[#2C241D]/10 dark:border-[#E8DFD1]/10">
                  <div className="p-2">
                    <span className="font-semibold block text-[#2C241D] dark:text-[#F5F1E8]">Timbangan Digital</span>
                    <span>Akurat per Karung</span>
                  </div>
                  <div className="p-2 border-x border-[#2C241D]/10 dark:border-[#E8DFD1]/10">
                    <span className="font-semibold block text-[#2C241D] dark:text-[#F5F1E8]">Gudang Strategis</span>
                    <span>Bandar Lampung</span>
                  </div>
                  <div className="p-2">
                    <span className="font-semibold block text-[#2C241D] dark:text-[#F5F1E8]">Legalitas Resmi</span>
                    <span>Faktur & Karantina</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Specifications Table Section */}
            <section className="mb-16 lg:mb-20">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center space-x-2 text-xs font-body font-semibold text-[#6F7652] dark:text-[#A66A3F] uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>{isEn ? 'Technical Specifications' : 'Tabel Spesifikasi Komoditas'}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                  {isEn ? `Specification Details: ${commodity.name.en || commodity.name.in}` : `Standar Mutu & Spesifikasi: ${commodity.name.in}`}
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#2C241D]/70 dark:text-[#E8DFD1]/70 max-w-2xl font-normal">
                  {isEn
                    ? 'Standardized physical and chemical quality metrics tested prior to shipment to ensure batch consistency for industrial manufacturing.'
                    : 'Tolok ukur mutu fisik dan kandungan kimia rempah yang diinspeksi teliti di gudang kami untuk menjamin konsistensi standar industri.'}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#2C241D]/10 dark:border-[#E8DFD1]/15 bg-white dark:bg-[#231C16] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#E8DFD1]/60 dark:bg-[#1E1712] border-b border-[#2C241D]/10 dark:border-[#E8DFD1]/15 text-xs font-heading font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                      <th className="py-3.5 px-4 sm:px-6 w-1/3 sm:w-1/4">
                        {isEn ? 'Parameter' : 'Parameter Mutu'}
                      </th>
                      <th className="py-3.5 px-4 sm:px-6">
                        {isEn ? 'Standard Specification' : 'Spesifikasi Standar Gudang UD Fathan Cassia Jaya'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2C241D]/08 dark:divide-[#E8DFD1]/10 text-xs sm:text-sm font-body">
                    {commodity.specs.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-transparent' : 'bg-black/[0.015] dark:bg-white/[0.015]'}
                      >
                        <td className="py-3 px-4 sm:px-6 font-semibold text-[#2C241D] dark:text-[#F5F1E8] align-top">
                          {item.label[lang] || item.label.in}
                        </td>
                        <td className="py-3 px-4 sm:px-6 text-[#2C241D]/80 dark:text-[#E8DFD1]/85">
                          {item.value[lang] || item.value.in}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Commodity Specific FAQ (2-3 Questions) */}
            <section className="mb-16 lg:mb-20">
              <div className="space-y-3 mb-8 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center space-x-2 text-xs font-body font-semibold text-[#6F7652] dark:text-[#A66A3F] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>{isEn ? 'Commodity FAQs' : 'Pertanyaan Seputar Komoditas'}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                  {isEn ? `FAQ: ${commodity.name.en || commodity.name.in}` : `Tanya Jawab: ${commodity.name.in}`}
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#2C241D]/70 dark:text-[#E8DFD1]/70">
                  {isEn
                    ? 'Key operational answers regarding volume requirements, packaging integrity, and quality assurance.'
                    : 'Jawaban praktis seputar volume minimum, prosedur sertifikasi, dan penanganan mutu pengiriman.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {commodity.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#231C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/15 shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#9A5F36]/15 text-[#9A5F36] dark:text-[#E28743] flex items-center justify-center font-heading font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h3 className="font-heading text-base font-semibold text-[#2C241D] dark:text-[#F5F1E8] leading-snug">
                        {item.question[lang] || item.question.in}
                      </h3>
                      <p className="font-body text-xs text-[#2C241D]/75 dark:text-[#E8DFD1]/80 leading-relaxed font-normal">
                        {item.answer[lang] || item.answer.in}
                      </p>
                    </div>
                    <div className="w-8 h-[2px] bg-[#9A5F36]/30 rounded-full pt-1" />
                  </div>
                ))}
              </div>
            </section>

            {/* Cross Navigation: Explore Other Commodities */}
            <section className="mb-12 pt-8 border-t border-[#2C241D]/10 dark:border-[#E8DFD1]/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                    {isEn ? 'Explore Other Spice Commodities' : 'Jelajahi Komoditas Rempah Lainnya'}
                  </h3>
                  <p className="font-body text-xs text-[#2C241D]/60 dark:text-[#E8DFD1]/60">
                    {isEn ? 'Consolidated orders supported for multi-spice freight efficiency.' : 'Dapat digabungkan dalam satu pengiriman kargo terpadu.'}
                  </p>
                </div>
                <Link
                  to={isEn ? '/en#produk' : '/id#produk'}
                  className="font-body inline-flex items-center space-x-1.5 text-xs font-semibold text-[#9A5F36] dark:text-[#E28743] hover:underline"
                >
                  <span>{isEn ? 'View all 12 items' : 'Lihat semua katalog'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {otherCommodities.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/produk/${item.slug}`}
                    className="p-3 rounded-xl bg-white dark:bg-[#231C16] border border-[#2C241D]/10 dark:border-[#E8DFD1]/15 hover:border-[#9A5F36] transition-all group block text-center"
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.name[lang] || item.name.in}
                      width={120}
                      height={90}
                      loading="lazy"
                      className="w-full h-16 object-cover rounded-lg mb-2 group-hover:scale-103 transition-transform"
                    />
                    <h4 className="font-heading text-xs font-semibold text-[#2C241D] dark:text-[#F5F1E8] group-hover:text-[#9A5F36] truncate leading-tight">
                      {item.name[lang] || item.name.in}
                    </h4>
                    <span className="font-body text-[10px] text-[#6F7652] dark:text-[#A66A3F] block mt-0.5">
                      {item.grades[0].price}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </main>

        <Footer />
        <RfqDrawer />
      </div>
    </>
  );
}

export default function CommodityPage({ slug }) {
  return (
    <AppProvider initialLang="in">
      <CommodityDetail slug={slug} />
    </AppProvider>
  );
}
