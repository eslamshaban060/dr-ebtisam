"use client";
import React from "react";

export default function ContactCard({ lang = "ar" }) {
  const isAr = lang === "ar";

  return (
    <div className="order-2 hidden lg:block md:order-1">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <div className="w-full h-[400px] bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="mb-6">
              <svg
                className="w-32 h-32 mx-auto opacity-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">
              {isAr ? "إرسال الرسالة" : "Send Message"}
            </h3>
            <p className="text-lg opacity-90 mb-4">
              {isAr
                ? "نسعد بالرد على استفساراتك وحجز موعدك في أي وقت"
                : "We are happy to answer your inquiries and schedule your appointment anytime"}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>{isAr ? "متاح الآن" : "Available Now"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
