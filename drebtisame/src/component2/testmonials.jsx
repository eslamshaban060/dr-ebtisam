"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/utils/supabase/supabase";

export default function TestimonialsPage({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const staticTestimonials = [
    {
      name: "ياسمين أحمد",
      text: "الدكتورة ابتسام قمة في الذوق والاحترام. سمعتني للآخر وشرحتلي كل حاجة بمنتهى البساطة. بصراحة ريّحتني جداً.",
      rating: 5,
    },
    {
      name: "كمال عبدالغفار",
      text: "كنت بعاني من وداني لفترة طويلة، وبصراحة العلاج اللي الدكتورة كتبتهولي فرق معايا جامد. ربنا يبارك فيها.",
      rating: 5,
    },
    {
      name: "وفاء عادل",
      text: "تجربة ممتازة بصراحة. الكشف كان سريع والدكتورة شرحتلي النتايج بطريقة بسيطة ومفهومة.",
      rating: 5,
    },
    {
      name: "أحمد السيد",
      text: "من أجمد الدكاترة اللي اتعاملت معاهم. شاطرة جداً وبتاخد بالها من كل التفاصيل. أنصح أي حد يروح لها.",
      rating: 5,
    },
    {
      name: "سارة محمود",
      text: "الدكتورة ساعدتني جامد في مشكلة السمع اللي كنت بعاني منها. شرحها بسيط ومطمّن. شكراً ليها بجد.",
      rating: 5,
    },
    {
      name: "محمد عبدالله",
      text: "العيادة تحفة ونضيفة جداً، والدكتورة استقبالها جميل. حسّيت إن في اهتمام بجد.",
      rating: 5,
    },
    {
      name: "ليلى حسن",
      text: "كنت مرعوبة من الكشف، بس الدكتورة ريّحتني جداً وخدت بالي إن الكشف بسيط ومافيهوش أي وجع.",
      rating: 5,
    },
    {
      name: "عمر فتحي",
      text: "دكتورة محترفة وشاطرة جداً. التشخيص كان مظبوط والعلاج جاب نتيجة بسرعة.",
      rating: 5,
    },
    {
      name: "نورا إبراهيم",
      text: "متابعة ممتازة بعد العلاج. بتسأل وتطمن وبترد على كل الأسئلة مهما كانت بسيطة.",
      rating: 5,
    },
    {
      name: "هشام عبدالعزيز",
      text: "خدمة ممتازة من الاستقبال لحد الكشف. الدكتورة شرحتلي كل التفاصيل بصبر واهتمام كبير.",
      rating: 5,
    },
  ];

  /* ===============================
     2️⃣ States
  =============================== */
  const [testimonials, setTestimonials] = useState(staticTestimonials);

  /* ===============================
     3️⃣ Fetch من Supabase
  =============================== */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("name, review, rate")
          .order("id", { ascending: false });

        if (error || !data || data.length === 0) {
          throw new Error("Failed to fetch");
        }

        const formattedData = data.map((item) => ({
          name: item.name,
          text: item.review,
          rating: item.rate,
        }));

        setTestimonials(formattedData);
      } catch (err) {
        console.warn("Using static testimonials as fallback");
        setTestimonials(staticTestimonials);
      }
    };

    fetchTestimonials();
  }, []);

  /* ===============================
     4️⃣ السلايدر + الريسبونسف
  =============================== */
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

  let startX = 0;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (isAr) {
      if (startX - endX > 60) prevSlide();
      if (endX - startX > 60) nextSlide();
    } else {
      if (endX - startX > 60) prevSlide();
      if (startX - endX > 60) nextSlide();
    }
  };

  const headerTitle = isAr ? "آراء عملائنا" : "Client Testimonials";
  const headerSubtext = isAr
    ? "استمع لتجارب مرضانا واكتشف لماذا يثقون بنا"
    : "Listen to our patients' experiences and discover why they trust us";
  const shareText = isAr ? "شارك تجربتك" : "Share Your Experience";
  const shareLink = isAr ? "/add-review" : "/en/add-review";

  return (
    <div
      id="reviews"
      className="min-h-[40vh] bg-gradient-to-b from-cyan-50 via-blue-50 to-white pb-8 pt-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {headerTitle}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {isAr ? "لأن ثقتك تهمنا" : "Because Your Trust Matters"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            {headerSubtext}
          </p>
          <a
            href={shareLink}
            className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {shareText}
          </a>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${
                  isAr ? currentIndex * 100 : -currentIndex * 100
                }%)`,
              }}
            >
              {Array.from({
                length: Math.ceil(testimonials.length / cardsPerView),
              }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {testimonials
                      .slice(
                        slideIndex * cardsPerView,
                        slideIndex * cardsPerView + cardsPerView
                      )
                      .map((testimonial, index) => (
                        <div
                          key={slideIndex * cardsPerView + index}
                          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
                        >
                          <div className="relative">
                            <Quote className="w-8 h-8 text-cyan-500 mb-4 opacity-60" />
                            <p className="text-gray-700 leading-relaxed mb-6 text-base">
                              {testimonial.text}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm">
                                  {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-800 text-base">
                                    {testimonial.name}
                                  </h3>
                                </div>
                              </div>
                              <div className="flex gap-0.5">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-amber-400 text-amber-400"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-cyan-600 text-cyan-600 hover:text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-cyan-200 hover:border-cyan-600"
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
              className="bg-white hover:bg-cyan-600 text-cyan-600 hover:text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-cyan-200 hover:border-cyan-600"
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
