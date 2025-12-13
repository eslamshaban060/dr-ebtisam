"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  User,
  Tag,
  CheckCircle,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

export default function BlogArticle({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const t = {
    ar: {
      share: "مشاركة",
      save: "حفظ",
      saved: "محفوظ",
      readTime: "وقت القراءة",
      author: "الكاتب",
      category: "التصنيف",
      relatedArticles: "مقالات ذات صلة",
      backToBlog: "العودة للمدونة",
      tableOfContents: "محتويات المقال",
      keyPoints: "النقاط الأساسية",
      conclusion: "الخلاصة",
      likeArticle: "هل أعجبك المقال؟",
      readMore: "اقرأ المزيد",
    },
    en: {
      share: "Share",
      save: "Save",
      saved: "Saved",
      readTime: "Read Time",
      author: "Author",
      category: "Category",
      relatedArticles: "Related Articles",
      backToBlog: "Back to Blog",
      tableOfContents: "Table of Contents",
      keyPoints: "Key Points",
      conclusion: "Conclusion",
      likeArticle: "Did you like the article?",
      readMore: "Read More",
    },
  };

  const article = {
    title: isAr
      ? "كيف تحافظ على سمعك في العصر الرقمي"
      : "How to Protect Your Hearing in the Digital Age",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80",
    date: isAr ? "١٥ ديسمبر ٢٠٢٤" : "December 15, 2024",
    readTime: isAr ? "٥ دقائق" : "5 minutes",
    author: isAr ? "د. إبتسام ندى" : "Dr. Ebtisam Nada",
    category: isAr ? "السمع" : "Hearing",
    intro: isAr
      ? "في عصرنا الحالي، أصبحت الأجهزة الإلكترونية جزءاً لا يتجزأ من حياتنا اليومية. سواء كنا نعمل أو نستمع للموسيقى أو نتابع الفيديوهات، فإن آذاننا معرضة باستمرار للأصوات المختلفة."
      : "In our current era, electronic devices have become an integral part of our daily lives. Whether we're working, listening to music, or watching videos, our ears are constantly exposed to various sounds.",
    keyPoints: [
      isAr
        ? "الأصوات فوق 85 ديسيبل تسبب ضرراً دائماً"
        : "Sounds above 85 decibels cause permanent damage",
      isAr
        ? "اتبع قاعدة 60/60 للحماية"
        : "Follow the 60/60 rule for protection",
      isAr ? "اختر سماعات مانعة للضوضاء" : "Choose noise-cancelling headphones",
      isAr ? "انتبه للعلامات التحذيرية" : "Watch for warning signs",
    ],
    sections: [
      {
        id: 1,
        title: isAr ? "فهم مخاطر الضوضاء" : "Understanding Noise Hazards",
        content: isAr
          ? "الأصوات التي تتجاوز 85 ديسيبل يمكن أن تسبب ضرراً دائماً للسمع، خاصة عند التعرض لها لفترات طويلة. سماعات الأذن الحديثة قادرة على إنتاج أصوات تصل إلى 120 ديسيبل - وهو ما يعادل صوت طائرة نفاثة!"
          : "Sounds exceeding 85 decibels can cause permanent hearing damage, especially with prolonged exposure. Modern earphones can produce sounds up to 120 decibels - equivalent to a jet engine!",
      },
      {
        id: 2,
        title: isAr ? "قاعدة 60/60" : "The 60/60 Rule",
        content: isAr
          ? "إحدى أبسط الطرق لحماية سمعك هي اتباع قاعدة 60/60. هذا يعني الاستماع بحد أقصى 60% من مستوى الصوت الأعلى، ولمدة لا تزيد عن 60 دقيقة في المرة الواحدة. بعد ذلك، امنح أذنيك راحة لمدة 5-10 دقائق على الأقل."
          : "One of the simplest ways to protect your hearing is following the 60/60 rule. This means listening at a maximum of 60% of the highest volume level, for no more than 60 minutes at a time.",
      },
      {
        id: 3,
        title: isAr
          ? "اختيار السماعات المناسبة"
          : "Choosing the Right Headphones",
        content: isAr
          ? "ليست كل السماعات متساوية في تأثيرها على السمع. السماعات المانعة للضوضاء تعتبر خياراً ممتازاً لأنها تقلل من الحاجة لرفع الصوت في البيئات الصاخبة."
          : "Not all headphones are equal in their impact on hearing. Noise-cancelling headphones are an excellent choice because they reduce the need to increase volume in noisy environments.",
      },
      {
        id: 4,
        title: isAr
          ? "علامات تحذيرية يجب الانتباه لها"
          : "Warning Signs to Watch For",
        content: isAr
          ? "انتبه لهذه العلامات: طنين الأذن المستمر، صعوبة في فهم الكلام في الأماكن الصاخبة، الحاجة لرفع صوت التلفاز أكثر من المعتاد، أو الشعور بامتلاء في الأذن."
          : "Pay attention to these signs: persistent ear ringing, difficulty understanding speech in noisy places, needing to increase TV volume more than usual, or feeling fullness in the ear.",
      },
    ],
    conclusion: isAr
      ? "الحفاظ على صحة السمع في العصر الرقمي ليس أمراً صعباً، لكنه يتطلب وعياً وانتباهاً. من خلال اتباع النصائح المذكورة أعلاه، يمكنك الاستمتاع بالتكنولوجيا الحديثة دون التضحية بصحة سمعك."
      : "Maintaining hearing health in the digital age isn't difficult, but it requires awareness and attention. By following the tips mentioned above, you can enjoy modern technology without sacrificing your hearing health.",
  };

  const relatedArticles = [
    {
      id: 1,
      title: isAr
        ? "علامات تحذيرية لمشاكل الأذن"
        : "Warning Signs of Ear Problems",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
      readTime: isAr ? "٤ دقائق" : "4 min",
      category: isAr ? "الأذن" : "Ear",
    },
    {
      id: 2,
      title: isAr ? "نصائح للعناية بالأذن يومياً" : "Daily Ear Care Tips",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
      readTime: isAr ? "٣ دقائق" : "3 min",
      category: isAr ? "نصائح" : "Tips",
    },
    {
      id: 3,
      title: isAr ? "فهم اختبارات السمع" : "Understanding Hearing Tests",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80",
      readTime: isAr ? "٦ دقائق" : "6 min",
      category: isAr ? "السمع" : "Hearing",
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir={isAr ? "rtl" : "ltr"}>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 font-medium transition-colors">
              {isAr ? (
                <ArrowRight className="w-5 h-5" />
              ) : (
                <ArrowLeft className="w-5 h-5" />
              )}
              {t[isAr ? "ar" : "en"].backToBlog}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-full transition-all ${
                  isSaved
                    ? "bg-cyan-100 text-cyan-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${isSaved ? "fill-cyan-600" : ""}`}
                />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                {showShareMenu && (
                  <div className="absolute top-12 left-0 bg-white rounded-xl shadow-lg border border-gray-200 p-3 flex gap-2 z-10">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-sky-50 text-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
          {article.category}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
              {article.author.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          {article.intro}
        </p>

        {/* Key Points */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100">
          <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-cyan-600" />
            {t[isAr ? "ar" : "en"].keyPoints}
          </h3>
          <ul className="space-y-3">
            {article.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-gray-700 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="prose prose-lg max-w-none">
          {article.sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-12 border-l-4 border-cyan-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t[isAr ? "ar" : "en"].conclusion}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {article.conclusion}
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
              {article.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {article.author}
              </h4>
              <p className="text-cyan-600 text-sm font-semibold mb-3">
                {isAr ? "استشاري أنف وأذن وحنجرة" : "ENT Specialist"}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isAr
                  ? "خبرة أكثر من 15 عاماً في مجال طب الأنف والأذن والحنجرة، متخصصة في علاج مشاكل السمع والتوازن."
                  : "Over 15 years of experience in ENT medicine, specialized in hearing and balance problems treatment."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            {t[isAr ? "ar" : "en"].relatedArticles}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <a
                key={related.id}
                href="#"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {related.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{related.readTime}</span>
                    </div>
                    <span className="text-cyan-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      {t[isAr ? "ar" : "en"].readMore}
                      {isAr ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
