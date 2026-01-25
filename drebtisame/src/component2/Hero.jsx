import React from "react";
import Link from "next/link";
export default function Hero({ lang = "ar" }) {
  const isAr = lang === "ar";

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:gap-25 gap-12 lg:gap-12 px-4 py-8">
      {/* Text Content */}
      <div
        className={`flex-1 transition-all duration-1000 ease-out transform opacity-0 translate-y-10 animate-fadeInUp`}
        dir={isAr ? "rtl" : "ltr"}
      >
        <h1
          className={`text-3xl md:text-5xl  lg:text-6xl   font-bold text-gray-800 mb-4 ${
            isAr ? "text-right" : "text-left"
          } transition-transform duration-700 ease-out hover:scale-105`}
        >
          {isAr ? (
            <>
              لأن سمعك يستحق
              <span className="block  text-teal-400 mt-4 lg:my-6">
                {" "}
                أفضل رعاية
              </span>
            </>
          ) : (
            <>
              Because Your Hearing Deserves
              <span className="block text-teal-400 mt-2">The Best Care</span>
            </>
          )}
        </h1>
        <p
          className={`text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl ${
            isAr ? "text-right" : "text-left"
          } transition-opacity duration-1000 delay-200 animate-fadeIn`}
        >
          {isAr
            ? "في عيادات الدكتورة ابتسام ندا، نجمع بين الخبرة الطبية المتقدمة والتقنيات الحديثة لتقديم تشخيص دقيق وعلاج متخصص لمشاكل السمع والتوازن."
            : "At Dr. Ebtessam  Nada’s Clinics, we combine advanced medical expertise with modern technology to provide precise diagnosis and specialized treatment for hearing and balance disorders."}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="#contact">
            <button className="px-6 md:px-8 py-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition shadow-lg hover:scale-105 transform duration-300">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </button>
          </Link>
          <Link href={isAr ? "/login" : "/en/login"}>
            <button className="px-6 md:px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-white transition hover:scale-105 transform duration-300">
              {isAr ? " تسجيل دخول " : " Login Now"}
            </button>
          </Link>
        </div>
      </div>

      {/* Doctor Image with Sound Wave Animation */}
      <div className="flex-1 flex justify-center transition-all duration-1000 ease-out transform opacity-0 animate-fadeInRight relative">
        <div className="relative flex items-center justify-center">
          {/* Glow Effect */}
          <div className="absolute w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-br from-[#007FA1]/30 to-accent/30 blur-3xl animate-pulse-glow" />

          {/* Main Visual Container */}
          <div className="relative animate-scale-in animation-delay-200">
            {/* Outer Decorative Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-[#007FA1]/20 animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-full border border-[#007FA1]/10" />

            {/* Image Container */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#007FA1]/20 animate-float">
              <img
                src="https://i.ytimg.com/vi/kOz6WDZgelE/hqdefault.jpg"
                alt="طفل سعيد يرتدي سماعة أذن طبية"
                className="w-full h-[115%] object-cover mt-[-25px]"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#007FA1]/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes soundWave1 {
          0% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.3;
          }
        }
        @keyframes soundWave2 {
          0% {
            transform: scale(0.95);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.2;
          }
        }
        @keyframes soundWave3 {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.05;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }
        @keyframes floatIcon1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes floatIcon2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
          }
        }
        @keyframes floatIcon3 {
          0%,
          100% {
            transform: translateX(0px) scale(1);
          }
          50% {
            transform: translateX(10px) scale(1.1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s forwards;
        }
        .animate-soundWave1 {
          animation: soundWave1 3s ease-in-out infinite;
        }
        .animate-soundWave2 {
          animation: soundWave2 3s ease-in-out infinite 0.5s;
        }
        .animate-soundWave3 {
          animation: soundWave3 3s ease-in-out infinite 1s;
        }
        .animate-floatIcon1 {
          animation: floatIcon1 4s ease-in-out infinite;
        }
        .animate-floatIcon2 {
          animation: floatIcon2 5s ease-in-out infinite 0.5s;
        }
        .animate-floatIcon3 {
          animation: floatIcon3 3.5s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}
