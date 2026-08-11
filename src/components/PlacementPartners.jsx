import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// 🚀 'src/assets/companies/' folder se saare logos strictly fetch karega
const logoModules = import.meta.glob('/src/assets/companies/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}', { eager: true });
const companyLogos = Object.values(logoModules).map((mod) => mod.default || mod);

export default function PlacementPartners() {
  return (
    <div className="bg-[#0b1329] py-14 px-4 font-sans border-t border-slate-800">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
          Our Placement Network
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Join our program and get placed in your dream company
        </p>
      </div>

      {/* CLEAR & CRISP LOGO SLIDER */}
      {companyLogos.length > 0 ? (
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={15}
          loop={true}
          speed={800} // Dynamic & smooth transition speed
          autoplay={{
            delay: 2000, // 2 Seconds tak logo stay karega taaki sabko dikhe
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 15 },
            640: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 25 },
          }}
          className="max-w-7xl mx-auto py-2"
        >
          {companyLogos.map((logoUrl, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white hover:bg-slate-50 transition-all duration-300 h-16 sm:h-20 rounded-xl sm:rounded-2xl shadow-md flex items-center justify-center p-3 border border-slate-200 group">
                <img 
                  src={logoUrl} 
                  alt={`Partner ${index + 1}`} 
                  className="max-h-8 sm:max-h-11 max-w-[85%] object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-slate-400 text-sm bg-slate-900/50 py-6 max-w-lg mx-auto rounded-xl border border-slate-800">
          📸 Please ensure logos exist in <code className="text-yellow-400">src/assets/companies/</code> folder
        </div>
      )}

    </div>
  );
}