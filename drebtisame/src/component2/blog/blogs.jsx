"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/supabase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
export default function BlogSection({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultPosts = [
    {
      id: 1,
      titleAr: "كيف تحافظ على سمعك في العصر الرقمي",
      titleEn: "How to Protect Your Hearing in the Digital Age",
      excerptAr:
        "مع انتشار سماعات الأذن والأجهزة الذكية، أصبح من الضروري معرفة كيفية حماية سمعك من التلف...",
      excerptEn:
        "With the spread of headphones and smart devices, it's essential to know how to protect your hearing...",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      dateAr: "١٥ ديسمبر ٢٠٢٤",
      dateEn: "Dec 15, 2024",
      readTime: isAr ? "٥ دقائق" : "5 min",
      featured: true,
    },
    {
      id: 2,
      titleAr: "علامات تحذيرية لمشاكل الأذن",
      titleEn: "Warning Signs of Ear Problems",
      excerptAr:
        "تعرف على العلامات المبكرة التي تشير إلى وجود مشاكل في الأذن وكيفية التعامل معها...",
      excerptEn:
        "Learn about early signs indicating ear problems and how to deal with them...",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      dateAr: "١٠ ديسمبر ٢٠٢٤",
      dateEn: "Dec 10, 2024",
      readTime: isAr ? "٤ دقائق" : "4 min",
      featured: false,
    },
    // أضف باقي المقالات الافتراضية...
  ];

  // Fetch posts from Supabase
  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .order("createdAt", { ascending: false });
      if (error || !data) throw new Error("Supabase fetch failed");
      setPosts(data);
    } catch (err) {
      setPosts(defaultPosts);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      if (posts.length === 0) break;
      visible.push(posts[(currentIndex + i) % posts.length]);
    }
    return visible;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {isAr ? "المدونة الطبية" : "Medical Blog"}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            {isAr
              ? "اكتشف أحدث المقالات والنصائح الطبية لتعرف أكثر عن صحة سمعك."
              : "Discover the latest articles and medical tips to learn more about your hearing health."}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {getVisiblePosts().map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={isAr ? post.titleAr : post.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {isAr ? post.titleAr : post.titleEn}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {isAr ? post.excerptAr : post.excerptEn}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{isAr ? post.dateAr : post.dateEn}</span>
                    <span className="text-cyan-600 font-semibold">
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="w-full block text-center bg-cyan-500 text-white py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    {isAr ? "اقرأ المزيد" : "Read More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 hover:scale-110 transition-all duration-300"
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
