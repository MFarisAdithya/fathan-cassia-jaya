import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import WaButton from './WaButton';

export default function VideoShowcaseSection() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;
  const isEn = lang === 'en';

  const videoRef = useRef(null);
  const ambientVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sync mute state to both video elements
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    if (ambientVideoRef.current) {
      ambientVideoRef.current.muted = true; // Ambient background is always silent
    }
  }, [isMuted]);

  const togglePlay = () => {
    const mainVideo = videoRef.current;
    if (!mainVideo) return;

    if (mainVideo.paused) {
      const playPromise = mainVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (ambientVideoRef.current && ambientVideoRef.current.paused) {
              ambientVideoRef.current.play().catch(() => {});
            }
          })
          .catch((err) => {
            console.warn('Video playback requires interaction or codec fallback:', err);
            setIsPlaying(false);
          });
      }
    } else {
      mainVideo.pause();
      setIsPlaying(false);
      if (ambientVideoRef.current && !ambientVideoRef.current.paused) {
        ambientVideoRef.current.pause();
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(current);
    }
  };

  return (
    <section className="bg-[#E8DFD1]/40 dark:bg-[#1E1712] text-[#2C241D] dark:text-[#F5F1E8] py-16 sm:py-20 lg:py-24 relative overflow-hidden grain-overlay border-b border-[#2C241D]/08 dark:border-[#E8DFD1]/10 transition-colors duration-300">
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
                UD Fathan Cassia Jaya · Bandar Lampung
              </span>
            </div>

            {/* Video Card Container */}
            <div className="rounded-2xl overflow-hidden glass-card-primary shadow-2xl bg-[#191410]">
              
              {/* Outer Aspect Box */}
              <div
                onClick={togglePlay}
                className="relative w-full bg-[#191410] flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[520px] cursor-pointer group select-none"
              >
                {/* Background Ambient Video Blur (Desktop only) */}
                <video
                  ref={ambientVideoRef}
                  poster="/images/about_warehouse_processing.webp"
                  preload="metadata"
                  loop
                  muted
                  playsInline
                  className="hidden md:block absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 pointer-events-none scale-110"
                >
                  <source src="/videos/company_video.mp4" type="video/mp4" />
                  <source src="/videos/company_video.mov" type="video/quicktime" />
                </video>

                {/* Main Video */}
                <video
                  ref={videoRef}
                  poster="/images/about_warehouse_processing.webp"
                  preload="metadata"
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={handleTimeUpdate}
                  className="relative z-10 max-h-[500px] lg:max-h-[550px] w-auto max-w-full object-contain mx-auto rounded-lg shadow-xl"
                >
                  <source src="/videos/company_video.mp4" type="video/mp4" />
                  <source src="/videos/company_video.mov" type="video/quicktime" />
                  Your browser does not support HTML5 video playback.
                </video>

                {/* Big Center Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div className="absolute z-20 inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-all duration-300 group-hover:bg-black/20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      aria-label={isEn ? 'Play video' : 'Putar video'}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-live flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer border border-white/30 group/btn"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9A5F36] flex items-center justify-center group-hover/btn:bg-[#86502D] transition-colors shadow-lg">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 text-[#FFF8EE]" />
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Thin Real-time Video Scrub / Progress Bar */}
              <div className="h-[3px] w-full bg-black/40 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#9A5F36] via-[#C47F4E] to-[#E28743] transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dedicated Control Bar BELOW Video */}
              <div className="bg-[#241C16] p-3 sm:p-4 border-t border-[var(--g-hairline)] flex items-center justify-between text-[#F5F1E8]">
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#9A5F36] hover:bg-[#86502D] text-[#FFF8EE] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#191410] hover:bg-[#2C241D] text-[#E8DFD1] border border-[#E8DFD1]/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center space-x-2 pl-1">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    <span className="font-body text-xs text-[#F5F1E8]/90 font-medium">
                      {isPlaying
                        ? (isEn ? 'Playing Warehouse Preview' : 'Memutar Video Operasional')
                        : (isEn ? 'Video Paused' : 'Video Di-pause')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#191410] hover:bg-[#2C241D] text-[#E8DFD1] border border-[#E8DFD1]/20 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
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
                className="glass-card-primary glass-card-hover p-6 rounded-2xl space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9A5F36]/15 border border-[#9A5F36]/30 flex items-center justify-center text-[#9A5F36] dark:text-[#C47F4E]">
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
              <WaButton
                source="video"
                customMessage={
                  lang === 'en'
                    ? "Hello UD Fathan Cassia Jaya, I watched your warehouse video and would like to request spice samples and a quote."
                    : "Halo UD Fathan Cassia Jaya, saya telah melihat video produk Anda dan ingin menanyakan sampel fisik & penawaran komoditas."
                }
                className="font-body w-full inline-flex items-center justify-center space-x-2 glass-btn-primary py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>{isEn ? 'Request Specific Sample Video' : 'Minta Video Sampel Spesifik'}</span>
              </WaButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
