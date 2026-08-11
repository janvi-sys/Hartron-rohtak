import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// 🚀 FIX: Ab yeh STRICTLY sirf 'src/assets/gallery/' folder ke andar ki photos hi uthayega
const imageModules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}', { eager: true });
const galleryImages = Object.values(imageModules).map((mod) => mod.default);

export default function ImageSlider() {
  // Agar folder me photos na milen toh safety fallback
  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="bg-slate-900 py-8 text-center text-slate-400 text-sm font-sans">
        📸 Please put your event photos in <code className="bg-slate-800 px-2 py-1 rounded text-yellow-300">src/assets/gallery/</code> folder
      </div>
    );
  }

  return (
    <div className="bg-slate-900 py-10 my-8 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          📸 Center Gallery & Campus Life
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Glimpses of lab sessions, workshops, and student activities at Hartron
        </p>
      </div>

      {/* CONTINUOUS SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="ease-linear"
      >
        {galleryImages.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-md border border-slate-700 bg-slate-800">
              <img 
                src={imgUrl} 
                alt={`Hartron Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}