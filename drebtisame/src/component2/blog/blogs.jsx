"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ear,
  Stethoscope,
  Activity,
  Users,
} from "lucide-react";

export default function BlogSection({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = {
    ar: {
      title: "الخدمات",
      subtitle: "تعرف أكثر على صحة سمعك",
      description:
        "مرحبا بكم في عيادة الدكتورة ابتسام، مساحة مخصصة لصحة السمع والتوازن. هنا، ستجدون معلقات موثوقة، نصائح خبراء، وإرشادات عملية تساعدكم على فهم أجسامكم بشكل أفضل.",
      readMore: "اكتشف المزيد",
      specialist: "قسم تخصص الأنف والأذن والحنجرة",
    },
    en: {
      title: "Services",
      subtitle: "Learn More About Your Hearing Health",
      description:
        "Welcome to Dr. Ebtisam's clinic, a dedicated space for hearing and balance health. Here, you'll find reliable information, expert advice, and practical guidance to help you understand your body better.",
      readMore: "Discover More",
      specialist: "ENT Specialist Department",
    },
  };

  const services = [
    {
      id: 1,
      title: isAr
        ? "الصلع وإعادة التأهيل لمرضى الدوخة"
        : "Vertigo Rehabilitation Treatment",
      description: isAr
        ? "يتضمن للدوخة أن يكون على الحياة اليومية، ويمكن أن يؤثر على العمل، السفر والحركات اليومية. العلاج في هذا المجال، ستستفيد أكثر التقنيات تمارسية."
        : "Vertigo can significantly impact daily life, affecting work, travel, and daily movements. Treatment in this field utilizes the most advanced practical techniques.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      icon: Activity,
      date: "11-11-2023",
    },
    {
      id: 2,
      title: isAr
        ? "فحص وتقييم السمع الشامل"
        : "Comprehensive Hearing Assessment",
      description: isAr
        ? "نقدم فحوصات سمعية دقيقة باستخدام أحدث الأجهزة والتقنيات. نساعدك على فهم حالة سمعك ونقدم خطة علاجية مخصصة."
        : "We provide accurate hearing examinations using the latest equipment and techniques. We help you understand your hearing condition and offer a customized treatment plan.",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80",
      icon: Stethoscope,
      date: "11-11-2023",
    },
    {
      id: 3,
      title: isAr ? "علاج التهابات الأذن" : "Ear Infection Treatment",
      description: isAr
        ? "علاج متخصص لجميع أنواع التهابات الأذن للكبار والأطفال مع متابعة دقيقة حتى الشفاء التام."
        : "Specialized treatment for all types of ear infections for adults and children with precise follow-up until complete recovery.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      icon: Ear,
      date: "11-11-2023",
    },
    {
      id: 4,
      title: isAr
        ? "استشارات طبية متخصصة"
        : "Specialized Medical Consultations",
      description: isAr
        ? "احصل على استشارة طبية شاملة من الدكتورة إبتسام ندى لتشخيص وعلاج جميع مشاكل الأنف والأذن والحنجرة."
        : "Get comprehensive medical consultation from Dr. Ebtisam Nada for diagnosis and treatment of all ENT problems.",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
      icon: Users,
      date: "11-11-2023",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(services[(currentIndex + i) % services.length]);
    }
    return cards;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-600 text-lg font-semibold mb-4">
            <Ear className="w-6 h-6" />
            {t[isAr ? "ar" : "en"].title}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t[isAr ? "ar" : "en"].subtitle}
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            {t[isAr ? "ar" : "en"].description}
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleCards().map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      📅 {service.date}
                    </span>
                    <span className="text-cyan-600 font-semibold">
                      {t[isAr ? "ar" : "en"].specialist}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="w-full bg-cyan-500 text-white py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
                    {t[isAr ? "ar" : "en"].readMore}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 hover:scale-110 transition-all duration-300"
              aria-label="Previous"
            >
              {isAr ? (
                <ChevronRight className="w-6 h-6" />
              ) : (
                <ChevronLeft className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 hover:scale-110 transition-all duration-300"
              aria-label="Next"
            >
              {isAr ? (
                <ChevronLeft className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
