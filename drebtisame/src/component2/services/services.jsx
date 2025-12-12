"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { servicesData } from "./servicesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-teal-500 text-teal-500 hover:text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-teal-500 text-teal-500 hover:text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

export default function ServicesSection({ lang = "ar" }) {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsPerView,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: lang === "ar",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const services = servicesData[lang];

  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* خلفيات ديكورية */}
      <div className="absolute top-0 left-0 w-64 h-6 bg-teal-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-teal-500 text-lg md:text-xl font-semibold mb-4">
            {lang === "ar" ? "الخدمات" : "Services"}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-3xl md:text-4xl">🩺</span>
            <span>
              {lang === "ar"
                ? "ملتزمون بصحة سمعك وتوازنك"
                : "Committed to Your Hearing & Balance"}
            </span>
          </h2>

          <p
            className={`text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed ${lang === "ar" ? "text-center" : "text-left"}`}
          >
            {" "}
            {lang === "ar"
              ? "في عيادة الدكتورة ابتسام، كل خدمة مصممة بدقة وعناية وخبرة عميق لصحة السمع والتوازن. يبدأ من التقييمات الشاملة للسمع وصولاً إلى العلاجات المتقدمة لاضطرابات التوازن، نقدم رعاية شخصية تركز على راحتك ورفاهيتك على المدى الطويل."
              : "At Dr. Ebtisam's clinic, each service is carefully and expertly designed for hearing and balance health. From comprehensive hearing assessments to advanced balance disorder treatments, we provide personalized care focused on your comfort and long-term well-being."}
          </p>
        </div>

        {/* السلايدر */}
        <Slider {...settings} className="relative">
          {services.map((service) => (
            <div key={service.id} className="px-3">
              <div
                className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-full ${lang === "ar" ? "text-right" : "text-left"}`}
              >
                {/* نص الدايرة – مكبرة – وشفافيتها أعلى – وتتغير حسب اللغة */}
                <span
                  className={`absolute w-50 h-50 bg-cyan-100 rounded-full opacity-50
                    ${lang === "ar" ? "top-[-50px] left-[-50px] rounded-full" : "top-[-50px] right-[-50px] rounded-full"}
                  `}
                ></span>

                {/* دوائر صغيرة */}
                <span className="absolute bottom-4 left-4 w-6 h-6 bg-teal-50 rounded-full opacity-40"></span>
                <span className="absolute top-6 left-6 w-3 h-3 bg-cyan-100 rounded-full opacity-60"></span>

                {/* المحتوى */}
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-white rounded-xl text-cyan-500 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-cyan-600 mb-4 font-medium">
                    {service.subtitle}
                  </p>

                  <ul
                    className={`space-y-2 ${lang === "ar" ? "text-right" : "text-left"}`}
                  >
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-sm text-gray-600 ${
                          lang === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span className="text-cyan-500 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* زر الحجز */}
        <div className="text-center mt-12 md:mt-16">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span>
              {lang === "ar" ? "احجز موعد الآن" : "Book Appointment Now"}
            </span>

            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>
    </section>
  );
}
