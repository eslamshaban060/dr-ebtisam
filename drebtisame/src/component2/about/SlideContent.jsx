"use client";
import React from "react";
import Link from "next/link";
export default function SlideContent({ slide, lang }) {
  return (
    <div
      className={`animate-slide-in  flex  flex-col justify-center lg:justify-start ${lang === "ar" ? "lg:text-right" : "lg:text-left"} text-center`}
    >
      {/* العنوان الفرعي */}
      <div className="inline-block mb-6">
        <p className="text-teal-500 w-fit mx-auto lg:mx-0 text-base md:text-lg font-semibold bg-teal-50 px-4 py-2 rounded-full">
          {slide.subTitle || "من نحن"}
        </p>
      </div>

      {/* العنوان الرئيسي */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
        {slide.title}
        <span className="text-teal-500 block mt-2">{slide.highlight}</span>
      </h1>

      {/* الوصف */}
      <p className="text-gray-600 md:px-10 lg:px-3 text-base md:text-lg leading-relaxed mb-8">
        {slide.description}
      </p>

      {/* المؤهلات */}
      <div className="space-y-4  mx-auto  lg:mx-0 md:space-y-5 mb-8">
        {slide.credentials.map((credential, index) => (
          <div key={index} className="flex items-start   gap-4 group">
            <div className="mt-1.5 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors duration-300">
              <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:bg-white transition-colors duration-300"></div>
            </div>
            <p className="text-gray-700  text-sm md:text-base leading-relaxed">
              {credential}
            </p>
          </div>
        ))}
      </div>

      {/* زر الحث على اتخاذ إجراء */}
      <div className="pt-4 flex  gap-5">
        <Link href="/blog">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-3.5 md:px-10 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl text-sm md:text-base group">
            <span className="flex items-center gap-2">
              {slide.ctaText || "عرض المقالات"}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>
        </Link>
        <Link href="/en/report">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-3.5 md:px-10 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl text-sm md:text-base group">
            <span className="flex items-center gap-2">
              {slide.ctaText2 || "هدايا "}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
