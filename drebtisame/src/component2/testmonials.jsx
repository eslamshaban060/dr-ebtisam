"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsPage({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const testimonials = [
    {
      name: "ياسمين أحمد",
      text: "الدكتورة ابتسام قمة في الذوق والاحترام. سمعتني للآخر وشرحتلي كل حاجة بمنتهى البساطة. بصراحة ريّحتني جداً.",
      bgColor: "bg-white",
    },
    {
      name: "كمال عبدالغفار",
      text: "كنت بعاني من وداني لفترة طويلة، وبصراحة العلاج اللي الدكتورة كتبتهولي فرق معايا جامد. ربنا يبارك فيها.",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-teal-500",
    },
    {
      name: "وفاء عادل",
      text: "تجربة ممتازة بصراحة. الكشف كان سريع والدكتورة شرحتلي النتايج بطريقة بسيطة ومفهومة.",
      bgColor: "bg-white",
    },
    {
      name: "أحمد السيد",
      text: "من أجمد الدكاترة اللي اتعاملت معاهم. شاطرة جداً وبتاخد بالها من كل التفاصيل. أنصح أي حد يروح لها.",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-teal-500",
    },
    {
      name: "سارة محمود",
      text: "الدكتورة ساعدتني جامد في مشكلة السمع اللي كنت بعاني منها. شرحها بسيط ومطمّن. شكراً ليها بجد.",
      bgColor: "bg-white",
    },
    {
      name: "محمد عبدالله",
      text: "العيادة تحفة ونضيفة جداً، والدكتورة استقبالها جميل. حسّيت إن في اهتمام بجد.",
      bgColor: "bg-white",
    },
    {
      name: "ليلى حسن",
      text: "كنت مرعوبة من الكشف، بس الدكتورة ريّحتني جداً وخدت بالي إن الكشف بسيط ومافيهوش أي وجع.",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-teal-500",
    },
    {
      name: "عمر فتحي",
      text: "دكتورة محترفة وشاطرة جداً. التشخيص كان مظبوط والعلاج جاب نتيجة بسرعة.",
      bgColor: "bg-white",
    },
    {
      name: "نورا إبراهيم",
      text: "متابعة ممتازة بعد العلاج. بتسأل وتطمن وبترد على كل الأسئلة مهما كانت بسيطة.",
      bgColor: "bg-white",
    },
    {
      name: "خالد يوسف",
      text: "من أحسن القرارات اللي أخدتها إنّي روحت للدكتورة ابتسام. شطورة وشغلها باين.",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-teal-500",
    },
    {
      name: "محمود علاء",
      text: "الدكتورة فعلاً محترمة جداً وشاطرة. تشخيصها كان دقيق والعلاج فرق معايا بشكل كبير.",
      bgColor: "bg-white",
    },
    {
      name: "بسنت شريف",
      text: "قعدت معايا وقت طويل وسمعت كل شكوتي. ما حسّيتش بأي استعجال خالص. بجد تجربة مريحة جداً.",
      bgColor: "bg-white",
    },
    {
      name: "ريم طه",
      text: "أسلوبها في التعامل بيطمن جداً. حسّيت إن في حد فاهمني وبيسمعني. ربنا يكرمها.",
      bgColor: "bg-teal-500",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-teal-500",
    },
    {
      name: "إياد سامي",
      text: "كشفت عند دكاترة كتير قبل كده، بس بصراحة الدكتورة ابتسام مختلفة تماماً. خدمة ممتازة واحترام.",
      bgColor: "bg-white",
    },
    {
      name: "هند جمال",
      text: "الدكتورة دمها خفيف وبتشرح بطريقة واضحة جداً. حسّيت براحة نفسية طول الزيارة.",
      bgColor: "bg-white",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // Swipe support
  let startX = 0;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 60) prevSlide();
    if (startX - endX > 60) nextSlide();
  };

  // Header texts
  const headerTitle = isAr ? "الآراء" : "Testimonials";
  const headerSubtext = isAr
    ? "نحن نقدر الرأيكم. اطلع على ما يقوله مرضانا أو شارك تجربتك الشخصية"
    : "We value your feedback. See what our patients say or share your own experience";
  const clickHereText = isAr ? "اضغط هنا" : "Click Here";

  return (
    <div
      className="min-h-[70vh] md:min-h-[50vh] bg-gradient-to-b  from-blue-50 to-blue-100 py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isAr ? "" : "text-left"}`}>
          <p className="text-teal-500 text-lg mb-4 text-center font-semibold">
            {headerTitle}
          </p>
          <h1 className="text-4xl flex justify-center md:text-5xl font-bold text-gray-800 mb-6  items-center  gap-3">
            <Sparkles className="w-10 h-10  text-teal-500" />
            {isAr ? "لأن ثقتك تهمنا" : "Because Your Trust Matters"}
          </h1>
          <p className="text-gray-600 text-center text-lg max-w-4xl mx-auto leading-relaxed">
            {headerSubtext} —{" "}
            <a href="#" className="text-teal-500 font-semibold hover:underline">
              {clickHereText}
            </a>
          </p>
        </div>

        {/* Slider */}
        <div
          className={`relative group px-4 md:px-12 ${isAr ? "" : "flex-row-reverse"}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isAr ? "" : "flex-row-reverse"}`}
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {Array.from({
                length: Math.ceil(testimonials.length / cardsPerView),
              }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials
                      .slice(
                        slideIndex * cardsPerView,
                        slideIndex * cardsPerView + cardsPerView
                      )
                      .map((testimonial, index) => (
                        <div
                          key={slideIndex * cardsPerView + index}
                          className={`${testimonial.bgColor} ${testimonial.textColor || "text-gray-800"} rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto`}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">
                              {testimonial.name}
                            </h3>
                            <div
                              className={`${testimonial.iconBg || "bg-teal-500"} ${testimonial.iconColor || "text-white"} rounded-full p-3`}
                            >
                              <Sparkles className="w-6 h-6" />
                            </div>
                          </div>
                          <p className="leading-relaxed text-base">
                            "{testimonial.text}"
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons Below Slider */}
          <div
            className="flex justify-center gap-4 mt-6 
    md:opacity-100 md:static 
    opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-teal-500 text-teal-500 hover:text-white rounded-full p-3 shadow transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-teal-500 text-teal-500 hover:text-white rounded-full p-3 shadow transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
