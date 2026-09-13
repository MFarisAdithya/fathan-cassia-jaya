import React from 'react';

export default function BrandStorySection() {
  return (
    <section className="bg-[#3A2A20] text-[#F5EFE5] py-20 lg:py-28 relative overflow-hidden grain-overlay-light vignette-dark">
      {/* Background Depth Elements */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#A65F3F]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C9A77A]/06 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-[#C9A77A]/10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Collage Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A77A]/20">
                <img
                  src="./images/brand_story.jpg"
                  alt="Gudang Rempah Komoditas Indonesia UD Fathan Cassia Jaya"
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#C9A77A]/20">
                <img
                  src="./images/kayu_manis.jpg"
                  alt="Kayu Manis Cassia Premium"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#C9A77A]/20">
                <img
                  src="./images/cengkeh.jpg"
                  alt="Cengkeh Aromatic Indonesia"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A77A]/20">
                <img
                  src="./images/pala.jpg"
                  alt="Pala dan Fuli Nusantara"
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Overlay Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3A2A20]/90 backdrop-blur-md px-6 py-2.5 rounded-xl border border-[#C9A77A]/30 text-center shadow-2xl">
              <span className="font-heading text-xs text-[#C9A77A] font-semibold tracking-wider uppercase">
                Komoditas Rempah Nusantara
              </span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="font-heading text-xs uppercase tracking-widest text-[#C9A77A] font-semibold">
              Komitmen Kualitas & Keberagaman
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5EFE5] leading-tight">
              Rempah Indonesia untuk Berbagai Kebutuhan
            </h2>

            <div className="w-12 h-[2px] bg-[#A65F3F]" />

            <p className="font-body text-base sm:text-lg text-[#F5EFE5]/85 leading-relaxed font-normal">
              Beragam komoditas rempah memiliki fungsi dan kebutuhan pasar yang berbeda. Dengan menyediakan beberapa jenis rempah, UD Fathan Cassia Jaya dapat melayani pelanggan dari berbagai sektor dan kebutuhan.
            </p>

            <div className="bg-[#454638]/50 p-6 rounded-2xl border border-[#C9A77A]/20 space-y-2">
              <h4 className="font-heading text-sm font-semibold text-[#C9A77A]">
                Kebutuhan Spesifikasi Pasokan
              </h4>
              <p className="font-body text-xs text-[#F5EFE5]/80 leading-relaxed font-normal">
                Kami memahami pentingnya kontinuitas dan keakuratan spesifikasi bagi industri, mulai dari kayu manis, cengkeh, lada, pala, kapulaga, hingga cabe jawa.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
