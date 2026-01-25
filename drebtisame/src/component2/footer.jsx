import React from "react";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer({ lang = "ar" }) {
  const t = {
    ar: {
      doctor: "الدكتورة إبتسام ندا",
      desc: "في عيادات الدكتورة إبتسام ندا، نجمع بين الخبرة الطبية المتقدمة والتقنيات الحديثة لتقديم تشخيص دقيق وعلاج شخصي لمشاكل السمع.",
      discover: "روابط سريعة",
      home: "الصفحة الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      blog: "المدونة",
      reviews: "آراء العملاء",
      appointment: "احجز موعدك",
      chat: "تواصل معنا",
      chatText: "للدردشة على واتساب وحجز موعدك مباشرة",
      rights: "جميع الحقوق محفوظة © 2024 عيادات الدكتورة إبتسام ندا",
      followUs: "تابعنا",
      dir: "rtl",
      align: "text-right",
    },
    en: {
      doctor: "Dr. Ebtessam  Nada",
      desc: "At Dr. Ebtessam  Nada Clinics, we combine advanced medical expertise with modern technology for accurate diagnosis and personalized hearing treatment.",
      discover: "Quick Links",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      blog: "Blog",
      reviews: "Testimonials",
      appointment: "Book Appointment",
      chat: "Contact Us",
      chatText: "Chat on WhatsApp to book your appointment directly",
      rights: "All rights reserved © 2024 Dr. Ebtessam  Nada Clinics",
      followUs: "Follow Us",
      dir: "ltr",
      align: "text-left",
    },
  }[lang];

  const navLinks = [
    { text: t.home, href: "/" },
    { text: t.services, href: "#services" },
    { text: t.blog, href: "/blog" },
    { text: t.reviews, href: "#reviews" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/Prof.Dr.Ebtessam.Nada/",
      label: "Facebook",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/+201128812068",
      label: "WhatsApp",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/watch?v=2LJGzu5QEfI&utm_source=chatgpt.com",
      label: "YouTube",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-cyan-800 via-cyan-700 to-cyan-600 text-white py-12 px-4"
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* About Section */}
          <div className={`text-center md:${t.align}`}>
            <h3 className="text-2xl font-bold mb-4 text-white">{t.doctor}</h3>
            <p className="text-cyan-50 leading-relaxed text-sm md:text-base">
              {t.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`text-center  hidden md:block md:${t.align}`}>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-cyan-400 inline-block">
              {t.discover}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cyan-50 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm md:text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={`text-center md:${t.align}`}>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-cyan-400 inline-block">
              {t.appointment}
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
              <p className="text-cyan-50 text-sm md:text-base mb-3 leading-relaxed">
                {t.chatText}
              </p>
              <a
                href="https://wa.me/+201128812068"
                className="inline-block bg-white text-cyan-700 px-6 py-2 rounded-full font-semibold hover:bg-cyan-50 hover:shadow-lg transition-all duration-300 text-sm"
              >
                {t.chat}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/40 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-cyan-100 text-sm text-center order-2 md:order-1">
            {t.rights}
          </p>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-3 order-1 md:order-2">
            {/* <span className="text-cyan-100 text-sm font-semibold">
              {t.followUs}
            </span> */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white text-cyan-700 p-3 rounded-full hover:bg-cyan-50 hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
