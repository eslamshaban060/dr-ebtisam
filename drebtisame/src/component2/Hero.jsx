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
            ? "في عيادات الدكتورة ابتسام ندى، نجمع بين الخبرة الطبية المتقدمة والتقنيات الحديثة لتقديم تشخيص دقيق وعلاج متخصص لمشاكل السمع والتوازن."
            : "At Dr. Ebtisam Nada’s Clinics, we combine advanced medical expertise with modern technology to provide precise diagnosis and specialized treatment for hearing and balance disorders."}
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
        <div className="relative">
          {/* موجات صوتية متحركة حول الصورة */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border-2 border-teal-300 opacity-30 animate-soundWave1"></div>
            <div className="absolute w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-2 border-teal-400 opacity-20 animate-soundWave2"></div>
            <div className="absolute w-88 h-88 md:w-[550px] md:h-[550px] rounded-full border-2 border-teal-500 opacity-10 animate-soundWave3"></div>
          </div>

          {/* أيقونات مناسبة للسمع */}
          <div className="absolute top-10 hidden md:block right-5 animate-floatIcon1">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <span className="text-teal-400 text-2xl"></span>
            </div>
          </div>

          <div className="absolute bottom-10 hidden md:block left-0 animate-floatIcon2">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <span className="text-blue-500 text-2xl"></span>
            </div>
          </div>

          <div className="absolute top-1/2 hidden md:block left-[-50px] animate-floatIcon3">
            <div className="bg-white rounded-full p-3 shadow-lg"></div>
          </div>

          {/* صورة الدكتورة */}
          <div className="w-64 h-64 md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#103463] to-blue-900 rounded-full shadow-2xl overflow-hidden relative z-10">
            <img
              src="/user/dr-1.png"
              className="absolute w-full top-[-60px] md:top-[-80px] transition-transform duration-700 ease-out hover:scale-105"
              alt="Dr. Entesam Ladi"
            />
          </div>

          {/* نبضات ضوئية لطيفة */}
          <div className="absolute bottom-5 right-5 animate-pulse">
            <div className="w-5 h-5 hidden md:block bg-teal-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-105 right-60 animate-pulse">
            <div className="w-5 h-5 hidden md:block bg-teal-400 rounded-full shadow-lg"></div>
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
