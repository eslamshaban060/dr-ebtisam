"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar({ lang }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAr = lang === "ar";

  return (
    <nav
      className="relative flex flex-row-reverse  items-center justify-between px-4 md:px-8 lg:px-30 pt-6 pb-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Desktop Contact Button */}
      <Link href="#contact">
        <button className="hidden md:block px-6 py-2 border-2 border-gray-400 rounded-full text-gray-700 hover:bg-white transition">
          {isAr ? "تواصل معنا" : "Contact Us"}
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden p-2 text-gray-700 hover:text-teal-500"
      >
        <Menu className="w-10 h-10" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-gray-700 hover:text-teal-500 transition">
          {isAr ? "الرئيسية" : "Home"}
        </Link>
        <Link
          href="#about"
          className="text-gray-700 hover:text-teal-500 transition"
        >
          {isAr ? "من نحن" : "About"}
        </Link>
        <Link
          href="#services"
          className="text-gray-700 hover:text-teal-500 transition"
        >
          {isAr ? "الخدمات" : "Services"}
        </Link>
        <Link
          href={isAr ? "/blog" : "/en/blog"}
          className="text-gray-700 hover:text-teal-500 transition"
        >
          {isAr ? "المدونة" : "Blog"}
        </Link>

        {/* Language Dropdown */}
        <div className="relative group">
          <button className="text-teal-500 font-semibold hover:text-teal-600 transition">
            {isAr ? "اللغة" : "Language"}
          </button>
          <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link
              href="/"
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
            >
              عربية
            </Link>
            <Link
              href="/en"
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
            >
              English
            </Link>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="md:w-24 md:h-24 w-20 h-20  rounded-full flex items-center justify-center">
        <img src="/user/logo.png" alt="" />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {isAr ? "القائمة" : "Menu"}
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-gray-700 hover:text-teal-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg text-gray-700 hover:text-teal-500 transition py-3 border-b border-gray-200"
            >
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <Link
              href="#about"
              className="text-lg text-gray-700 hover:text-teal-500 transition py-3 border-b border-gray-200"
            >
              {isAr ? "من نحن" : "About"}
            </Link>
            <Link
              href="#services"
              className="text-lg text-gray-700 hover:text-teal-500 transition py-3 border-b border-gray-200"
            >
              {isAr ? "الخدمات" : "Services"}
            </Link>
            <Link
              href={isAr ? "/blog" : "/en/blog"}
              className="text-lg text-gray-700 hover:text-teal-500 transition py-3 border-b border-gray-200"
            >
              {isAr ? "المدونة" : "Blog"}
            </Link>

            <div className="py-3 border-b border-gray-200">
              <p className="text-lg font-semibold text-teal-500 mb-2">
                {isAr ? "اللغة" : "Language"}
              </p>
              <div className="flex flex-col mr-4 gap-2">
                <Link
                  href="/"
                  className="text-right text-gray-700 hover:text-teal-500 transition"
                >
                  عربية
                </Link>
                <Link
                  href="/en"
                  className="text-right text-gray-700 hover:text-teal-500 transition"
                >
                  English
                </Link>
              </div>
            </div>

            <Link href="#contact">
              <button className="mt-4 px-6 py-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition">
                {isAr ? "تواصل معنا" : "Contact Us"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
