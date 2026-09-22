import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export default function VideoShowcaseSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;

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
    <section className="bg-[#E8DFD1]/40 dark:bg-[#1E1712] text-[#2C241D] dark:text-[#F5F1E8] py-24 lg:py-32 relative overflow-hidden grain-overlay border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#6F7652] dark:text-[#A66A3F] font-semibold">
              {t.videoShowcase.badge}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C241D] dark:text-[#F5F1E8] leading-[1.2]">
            {t.videoShowcase.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-[#2C241D]/80 dark:text-[#E8DFD1]/80 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.videoShowcase.description}
          </p>
        </div>

        {/* Video Player & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Section (8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* Top Status Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="inline-flex items-center space-x-2 text-xs font-body font-medium text-[#6F7652] dark:text-[#A66A3F]">
                <span className="w-2 h-2 rounded-full bg-[#A66A3F] animate-ping" />
                <span className="uppercase tracking-wider">{t.videoShowcase.badge}</span>
              </div>
              <span className="text-[11px] font-body text-[#2C241D]/60 dark:text-[#F5F1E8]/60">
                UD Fathan Cassia Jaya
              </span>
            </div>

            {/* Video Card Container */}
            <div className="rounded-xl overflow-hidden border border-[#2C241D]/15 dark:border-[#E8DFD1]/15 shadow-card bg-[#191410]">
              
              {/* Outer Aspect Box */}
              <div className="relative w-full bg-[#191410] flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[520px]">
                
                {/* Background Ambient Video Blur */}
                <video
                  src="./videos/company_video.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 pointer-events-none scale-110"
                />

                {/* Main Video */}
                <video
                  ref={videoRef}
                  src="./videos/company_video.mov"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="relative z-10 max-h-[500px] lg:max-h-[550px] w-auto max-w-full object-contain mx-auto rounded shadow-xl"
                />
              </div>

              {/* Dedicated Control Bar BELOW Video */}
              <div className="bg-[#241C16] p-3 sm:p-4 border-t border-[#E8DFD1]/10 flex items-center justify-between text-[#F5F1E8]">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#A66A3F] hover:bg-[#8e5831] text-white flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#191410] hover:bg-[#2C241D] text-[#E8DFD1] border border-[#E8DFD1]/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center space-x-2 pl-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-body text-xs text-[#F5F1E8]/90 font-medium">
                      {isPlaying ? (lang === 'en' ? 'Playing Warehouse Preview' : 'Memutar Video Operasional') : (lang === 'en' ? 'Video Paused' : 'Video Di-pause')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleFullscreen}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#191410] hover:bg-[#2C241D] text-[#E8DFD1] border border-[#E8DFD1]/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Highlights Panel (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {t.videoShowcase.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-xl space-y-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#A66A3F]/15 border border-[#A66A3F]/30 flex items-center justify-center text-[#A66A3F]">
                  {idx === 0 ? <ShieldCheck className="w-5 h-5" /> : idx === 1 ? <Truck className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                </div>
                <h3 className="font-heading text-base font-semibold text-[#2C241D] dark:text-[#F5F1E8]">
                  {feat.title}
                </h3>
                <p className="font-body text-xs text-[#2C241D]/75 dark:text-[#E8DFD1]/75 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}

            {/* Quick Action Link */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(lang === 'en' ? "Hello UD Fathan Cassia Jaya, I watched your warehouse video and would like to request spice samples and a quote." : "Halo UD Fathan Cassia Jaya, saya telah melihat video produk Anda dan ingin menanyakan sampel fisik & penawaran komoditas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body w-full inline-flex items-center justify-center space-x-2 bg-[#2C241D] hover:bg-[#A66A3F] text-[#F5F1E8] dark:bg-[#A66A3F] dark:hover:bg-[#8e5831] py-3.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
              >
                <span>{lang === 'en' ? 'Request Specific Sample Video' : 'Minta Video Sampel Spesifik'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
