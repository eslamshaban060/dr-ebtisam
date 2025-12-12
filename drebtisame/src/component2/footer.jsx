import React from "react";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer({ lang = "ar" }) {
  const t = {
    ar: {
      doctor: "الدكتورة إبتسام ندى",
      desc: "في عيادات الدكتورة إبتسام ندى، نجمع بين الخبرة الطبية المتقدمة والتقنيات الحديثة بتشخيص دقيق وعلاج شخصي لمشاكل السمع.",
      discover: "اكتشف المزيد",
      home: "الصفحة الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      blog: "مدونتنا",
      reviews: "الآراء",
      appointment: "حجز موعد",
      chat: "اضغط هنا",
      chatText: "للدردشة مع الدكتورة على واتساب وحجز موعدك.",
      rights: "جميع الحقوق محفوظة © عيادات الدكتورة إبتسام ندى",
      dir: "rtl",
      align: "text-right",
    },
    en: {
      doctor: "Dr. Ebtisam Nada",
      desc: "At Dr. Ebtisam Nada Clinics, we combine advanced medical expertise with modern technology for accurate diagnosis and personalized treatment.",
      discover: "Discover More",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      blog: "Our Blog",
      reviews: "Testimonials",
      appointment: "Book Appointment",
      chat: "Click here",
      chatText: "to chat on WhatsApp and book your appointment.",
      rights: "All rights reserved © Dr. Ebtisam Nada Clinics",
      dir: "ltr",
      align: "text-left",
    },
  }[lang];

  return (
    <footer
      className="bg-gradient-to-r relative from-cyan-700 to-cyan-600 text-white py-10 my-0 px-4"
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {/* Doctor Section */}
          <div className={`text-center md:${t.align}`}>
            <h3 className="text-2xl font-bold mb-6">{t.doctor}</h3>
            <p className="leading-relaxed text-cyan-50">{t.desc}</p>
          </div>

          {/* Discover More */}
          <div className={`text-center hidden md:block md:${t.align}`}>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white inline-block pb-2">
              {t.discover}
            </h3>

            {/* ✔ الروابط كل اتنين جنب بعض في الموبايل */}
            <ul className=" hidden grid-cols-2 gap-3 text-cyan-50 md:block md:space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.reviews}
                </a>
              </li>
            </ul>
          </div>

          {/* Appointment */}
          <div className={`text-center md:${t.align}`}>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-white inline-block pb-2">
              {t.appointment}
            </h3>

            <p className="text-cyan-50 mb-6 leading-relaxed">
              <a href="#" className="underline hover:text-white transition">
                {t.chat}
              </a>{" "}
              {t.chatText}
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-500 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a className="bg-white text-cyan-700 p-3 rounded-full hover:bg-cyan-100 hover:scale-110 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="bg-white text-cyan-700 p-3 rounded-full hover:bg-cyan-100 hover:scale-110 transition">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a className="bg-white text-cyan-700 p-3 rounded-full hover:bg-cyan-100 hover:scale-110 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-cyan-50 text-center">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
