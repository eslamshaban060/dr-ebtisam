"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";

export default function HealthcareLanding({ lang = "ar" }) {
  return (
    <div className="min-h-screen  overflow-hidden relative bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-teal-300 rounded-full opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-[160px] right-[-40px] w-56 h-56 bg-pink-300 rounded-full opacity-20 animate-floatSlow animation-delay-2000"></div>

      <div>
        <Navbar lang={lang} />
        <div className=" mx-auto px-6 md:px-8 lg:px-30 py-16">
          <Hero lang={lang} />
          <Features lang={lang} />
        </div>
      </div>

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
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-gradientBackground {
          background-size: 400% 400%;
          animation: gradientBackground 15s ease infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
