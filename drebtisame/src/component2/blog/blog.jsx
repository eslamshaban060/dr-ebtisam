"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  Search,
} from "lucide-react";

export default function BlogPage({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const t = {
    ar: {
      title: "المدونة الطبية",
      subtitle: "اكتشف أحدث المقالات والنصائح الطبية",
      all: "الكل",
      readMore: "اقرأ المزيد",
      min: "دقيقة",
      search: "ابحث في المقالات...",
      noResults: "لم نعثر على أي مقالات مطابقة لبحثك",
      tryAgain: "جرب كلمات بحث أخرى",
    },
    en: {
      title: "Medical Blog",
      subtitle: "Discover the latest articles and medical tips",
      all: "All",
      readMore: "Read More",
      min: "min",
      search: "Search articles...",
      noResults: "No articles found matching your search",
      tryAgain: "Try different keywords",
    },
  };

  const categories = [
    { id: "all", name: isAr ? "الكل" : "All" },
    { id: "hearing", name: isAr ? "السمع" : "Hearing" },
    { id: "ear", name: isAr ? "الأذن" : "Ear" },
    { id: "tips", name: isAr ? "نصائح" : "Tips" },
  ];

  const posts = [
    {
      id: 1,
      title: isAr
        ? "كيف تحافظ على سمعك في العصر الرقمي"
        : "How to Protect Your Hearing in the Digital Age",
      excerpt: isAr
        ? "مع انتشار سماعات الأذن والأجهزة الذكية، أصبح من الضروري معرفة كيفية حماية سمعك من التلف..."
        : "With the spread of headphones and smart devices, it's essential to know how to protect your hearing...",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      category: "hearing",
      date: isAr ? "١٥ ديسمبر ٢٠٢٤" : "Dec 15, 2024",
      readTime: isAr ? "٥ دقائق" : "5 min",
      featured: true,
    },
    {
      id: 2,
      title: isAr
        ? "علامات تحذيرية لمشاكل الأذن"
        : "Warning Signs of Ear Problems",
      excerpt: isAr
        ? "تعرف على العلامات المبكرة التي تشير إلى وجود مشاكل في الأذن وكيفية التعامل معها..."
        : "Learn about early signs indicating ear problems and how to deal with them...",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "ear",
      date: isAr ? "١٠ ديسمبر ٢٠٢٤" : "Dec 10, 2024",
      readTime: isAr ? "٤ دقائق" : "4 min",
      featured: false,
    },
    {
      id: 3,
      title: isAr ? "نصائح للعناية بالأذن يومياً" : "Daily Ear Care Tips",
      excerpt: isAr
        ? "روتين يومي بسيط للحفاظ على صحة أذنيك ووقايتها من المشاكل الشائعة..."
        : "A simple daily routine to maintain ear health and prevent common problems...",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      category: "tips",
      date: isAr ? "٥ ديسمبر ٢٠٢٤" : "Dec 5, 2024",
      readTime: isAr ? "٣ دقائق" : "3 min",
      featured: false,
    },
    {
      id: 4,
      title: isAr ? "فهم اختبارات السمع" : "Understanding Hearing Tests",
      excerpt: isAr
        ? "دليل شامل لفهم أنواع اختبارات السمع المختلفة وكيفية قراءة نتائجها..."
        : "A comprehensive guide to understanding different types of hearing tests...",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
      category: "hearing",
      date: isAr ? "١ ديسمبر ٢٠٢٤" : "Dec 1, 2024",
      readTime: isAr ? "٦ دقائق" : "6 min",
      featured: false,
    },
    {
      id: 5,
      title: isAr ? "التهابات الأذن عند الأطفال" : "Ear Infections in Children",
      excerpt: isAr
        ? "كل ما تحتاج معرفته عن التهابات الأذن الشائعة عند الأطفال وطرق الوقاية منها..."
        : "Everything you need to know about common ear infections in children...",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80",
      category: "ear",
      date: isAr ? "٢٥ نوفمبر ٢٠٢٤" : "Nov 25, 2024",
      readTime: isAr ? "٥ دقائق" : "5 min",
      featured: false,
    },
    {
      id: 6,
      title: isAr
        ? "متى تحتاج لزيارة أخصائي السمع؟"
        : "When Should You Visit an Audiologist?",
      excerpt: isAr
        ? "تعرف على الحالات التي تستدعي زيارة فورية لأخصائي السمع والأذن..."
        : "Learn about conditions that require immediate consultation with an audiologist...",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
      category: "tips",
      date: isAr ? "٢٠ نوفمبر ٢٠٢٤" : "Nov 20, 2024",
      readTime: isAr ? "٤ دقائق" : "4 min",
      featured: false,
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-blue-50 py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t[isAr ? "ar" : "en"].title}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t[isAr ? "ar" : "en"].subtitle}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search
              className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isAr ? "right-4" : "left-4"}`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t[isAr ? "ar" : "en"].search}
              className={`w-full bg-white border-2 border-gray-200 rounded-full ${isAr ? "pr-12 pl-6" : "pl-12 pr-6"} py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm hover:shadow-md`}
              dir={isAr ? "rtl" : "ltr"}
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-cyan-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === "all" && featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {isAr ? "مميز" : "Featured"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all"
                  >
                    {t[isAr ? "ar" : "en"].readMore}
                    {isAr ? (
                      <ArrowLeft className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  {t[isAr ? "ar" : "en"].readMore}
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {t[isAr ? "ar" : "en"].noResults}
            </h3>
            <p className="text-gray-500 text-lg mb-6">
              {t[isAr ? "ar" : "en"].tryAgain}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 transition-colors"
            >
              {isAr ? "إعادة تعيين البحث" : "Reset Search"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
