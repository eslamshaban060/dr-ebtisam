"use client";
import React from "react";

export default function SlideImage({ slide, currentSlide }) {
  return (
    <div className="relative flex justify-center items-center order-1 lg:order-2 min-h-[450px] md:min-h-[550px] lg:min-h-[650px]">
      {/* الشكل الهندسي الخلفي */}
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-teal-400 via-teal-500 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* عناصر ديكورية */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-teal-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-purple-200 rounded-full opacity-40"></div>

      {/* حاوية الصورة */}
      <div className="relative z-10 w-72 sm:w-[550px] lg:w-[420px]">
        <div key={`slide-${currentSlide}`} className="animate-zoom-fade">
          <div
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.imagePlaceholder}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* شارة */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-xl flex items-center gap-2 backdrop-blur-sm bg-opacity-90">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {slide.badge}
            </div>

            {/* عداد الصور */}
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
              {currentSlide + 1} / {3}
            </div>
          </div>
        </div>

        {/* عناصر ديكورية حول الصورة */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 blur-xl"></div>
      </div>
    </div>
  );
}
