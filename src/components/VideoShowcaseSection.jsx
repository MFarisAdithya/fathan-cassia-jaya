import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function VideoShowcaseSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <section className="bg-[#1F1712] text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden grain-overlay-light vignette-dark border-y border-[#C9A77A]/25">
      {/* OFI Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#A65F3F]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#C9A77A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Geometric Line Accents ala OFI */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-[#C9A77A]/15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-[#C9A77A]/15 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header ala OFI */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="font-heading inline-flex items-center space-x-2 bg-[#C9A77A]/15 border border-[#C9A77A]/30 text-[#C9A77A] px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#A65F3F] animate-pulse" />
            <span>Showcase Operasional Real</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5EFE5] leading-tight">
            Kualitas Rempah Real & Pasokan B2B
          </h2>

          <p className="font-body text-base sm:text-lg text-[#F5EFE5]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Dokumentasi fisik rempah dan operasional UD Fathan Cassia Jaya dalam menjamin mutu pasokan industri & distributor.
          </p>
        </div>

        {/* Video Player & Highlights Grid ala OFI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Section (8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* Top Status Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="inline-flex items-center space-x-2 text-xs font-heading font-medium text-[#C9A77A]">
                <span className="w-2 h-2 rounded-full bg-[#A65F3F] animate-ping" />
                <span>Dokumentasi Fisik Komoditas Real</span>
              </div>
              <span className="text-[11px] font-heading text-[#F5EFE5]/60">
                UD Fathan Cassia Jaya
              </span>
            </div>

            {/* Video Card Container - Clean 100% Unobscured View */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C9A77A]/30 shadow-2xl bg-[#140D08]">
              
              {/* Outer Aspect Box with Ambient Blur to Fill Any Letterbox */}
              <div className="relative w-full bg-[#140D08] flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[520px]">
                
                {/* Background Ambient Video Blur */}
                <video
                  src="./videos/company_video.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 pointer-events-none scale-110"
                />

                {/* Main Video — Completely 100% Uncovered & Clean */}
                <video
                  ref={videoRef}
                  src="./videos/company_video.mov"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="relative z-10 max-h-[500px] lg:max-h-[550px] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Dedicated Control Bar BELOW Video (Does NOT overlap video) */}
              <div className="bg-[#1F1712] p-3 sm:p-4 border-t border-[#C9A77A]/25 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#A65F3F] hover:bg-[#8e4f33] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2A1D15] hover:bg-[#3A2A20] text-[#C9A77A] border border-[#C9A77A]/30 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title={isMuted ? 'Unmute Suara' : 'Mute Suara'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center space-x-2 pl-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-heading text-xs text-[#F5EFE5]/90 font-medium">
                      {isPlaying ? 'Memutar Video Operasional' : 'Video Di-pause'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleFullscreen}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2A1D15] hover:bg-[#3A2A20] text-[#C9A77A] border border-[#C9A77A]/30 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Highlights Panel ala OFI (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-[#2A1D15]/80 backdrop-blur-md p-6 rounded-2xl border border-[#C9A77A]/25 space-y-3 hover:border-[#A65F3F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#A65F3F]/20 border border-[#A65F3F]/40 flex items-center justify-center text-[#C9A77A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-[#F5EFE5]">
                Pemeriksaan Fisik & Kadar Air
              </h3>
              <p className="font-body text-xs text-[#F5EFE5]/75 leading-relaxed font-normal">
                Setiap barang disortir dan diperiksa kebersihan fisiknya sebelum dimasukkan ke kemasan karung/kontainer pengiriman.
              </p>
            </div>

            <div className="bg-[#2A1D15]/80 backdrop-blur-md p-6 rounded-2xl border border-[#C9A77A]/25 space-y-3 hover:border-[#A65F3F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#A65F3F]/20 border border-[#A65F3F]/40 flex items-center justify-center text-[#C9A77A]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-[#F5EFE5]">
                Pasokan Kontinu untuk B2B
              </h3>
              <p className="font-body text-xs text-[#F5EFE5]/75 leading-relaxed font-normal">
                Ketersediaan stok komoditas utama terkontrol untuk pemesanan berkala pabrik, distributor, dan eksportir.
              </p>
            </div>

            <div className="bg-[#2A1D15]/80 backdrop-blur-md p-6 rounded-2xl border border-[#C9A77A]/25 space-y-3 hover:border-[#A65F3F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#A65F3F]/20 border border-[#A65F3F]/40 flex items-center justify-center text-[#C9A77A]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-[#F5EFE5]">
                Transparansi Sebelum Transaksi
              </h3>
              <p className="font-body text-xs text-[#F5EFE5]/75 leading-relaxed font-normal">
                Calon pembeli dapat meminta video/foto sampel fisik terkini via WhatsApp sebelum melakukan pembayaran.
              </p>
            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Halo UD Fathan Cassia Jaya, saya telah melihat video produk Anda dan ingin menanyakan sampel fisik & penawaran komoditas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading w-full inline-flex items-center justify-center space-x-2 bg-[#A65F3F] hover:bg-[#8e4f33] text-white py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Minta Video Sampel Spesifik</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
