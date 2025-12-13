"use client";
import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Header({ lang = "ar" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = {
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      blog: "المدونة",
      contact: "تواصل معنا",
      logo: "الدكتورة إبتسام ندى",
      dir: "rtl",
      align: "text-right",
      flexDir: "flex-row-reverse",
    },
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      blog: "Blog",
      contact: "Contact Us",
      logo: "Dr. Ebtisam Nada",
      dir: "ltr",
      align: "text-left",
      flexDir: "flex-row",
    },
  }[lang];

  const navLinks = [
    { text: t.home, href: "/" },
    { text: t.about, href: "#about" },
    { text: t.services, href: "#services" },
    { text: t.blog, href: "#blog" },
  ];

  return (
    <header
      className="bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 shadow-sm sticky top-0 z-50"
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex ${t.flexDir} justify-between items-center  flex-row-reverse py-2`}
        >
          {" "}
          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Contact Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {t.contact}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cyan-800 hover:text-cyan-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-cyan-800 hover:text-cyan-600 font-medium transition-colors duration-200 relative group"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-20 h-20  rounded-full flex items-center justify-center shadow-lg">
              <img src="/user/logo.png" alt="" />
            </div>
            <div className={t.align}></div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-cyan-200 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cyan-800 hover:text-cyan-600 font-medium py-2 px-4 hover:bg-cyan-50 rounded-lg transition-all duration-200"
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-2"
              >
                <Phone className="w-4 h-4" />
                {t.contact}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
