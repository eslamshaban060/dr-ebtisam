"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/supabase";
import { Calendar, Clock, ArrowLeft, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

// داتا استاتيك كاحتياط

const staticPosts = [
  {
    id: 1,
    titleAr: "كيف تحافظ على سمعك في العصر الرقمي",
    titleEn: "How to Protect Your Hearing in the Digital Age",
    excerptAr:
      "مع انتشار سماعات الأذن والأجهزة الذكية، أصبح من الضروري معرفة كيفية حماية سمعك من التلف...",
    excerptEn:
      "With the spread of headphones and smart devices, it's essential to know how to protect your hearing...",
    contentAr: `
      في العصر الرقمي الحالي، يعتمد الكثيرون على سماعات الأذن بشكل يومي سواء للاستماع للموسيقى، أو المكالمات، أو متابعة المحتوى التعليمي. 
      الاستخدام المستمر والسماع بمستويات صوت عالية قد يؤدي إلى تلف الأذن الداخلية وفقدان السمع تدريجيًا.
      
      نصائح للحفاظ على السمع:
      1. قلل من مدة استخدام السماعات يوميًا.
      2. حافظ على مستوى الصوت أقل من 60% من الحد الأقصى.
      3. خذ فترات راحة منتظمة أثناء استخدام السماعات.
      4. قم بفحص سمعك بشكل دوري عند الطبيب المختص.
      
      اتباع هذه الخطوات يضمن لك سمعًا صحيًا ويقلل من احتمالية التعرض لمشاكل مستقبلية.
    `,
    contentEn: `
      In today's digital age, many people rely on headphones daily for music, calls, or educational content. 
      Continuous use at high volumes can damage the inner ear and lead to gradual hearing loss.
      
      Tips for protecting your hearing:
      1. Limit daily headphone usage.
      2. Keep volume below 60% of the maximum.
      3. Take regular breaks while using headphones.
      4. Schedule periodic hearing check-ups with a specialist.
      
      Following these steps ensures healthy hearing and reduces the risk of future problems.
    `,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    category: "hearing",
    dateAr: "١٥ ديسمبر ٢٠٢٤",
    dateEn: "Dec 15, 2024",
    readTime: "5 دقائق",
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
    contentAr: `
      الأذن عضو حساس للغاية، وبعض المشاكل يمكن اكتشافها مبكرًا قبل أن تتطور. 
      من العلامات التحذيرية الشائعة:
      1. طنين مستمر أو ضوضاء داخل الأذن.
      2. فقدان جزئي للسمع.
      3. إفرازات غير طبيعية أو ألم مستمر.
      4. الدوخة أو فقدان التوازن.
      
      عند ملاحظة أي من هذه العلامات، من المهم استشارة طبيب متخصص لتحديد السبب ووضع خطة علاج مناسبة.
    `,
    contentEn: `
      The ear is a very sensitive organ, and some problems can be detected early before they worsen. 
      Common warning signs include:
      1. Persistent ringing or noise in the ear.
      2. Partial hearing loss.
      3. Unusual discharge or continuous pain.
      4. Dizziness or loss of balance.
      
      If any of these signs appear, it is crucial to consult a specialist to identify the cause and provide an appropriate treatment plan.
    `,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "ear",
    dateAr: "١٠ ديسمبر ٢٠٢٤",
    dateEn: "Dec 10, 2024",
    readTime: "4 دقائق",
    featured: false,
  },
  {
    id: 3,
    titleAr: "نصائح للعناية بالأذن يومياً",
    titleEn: "Daily Ear Care Tips",
    excerptAr:
      "روتين يومي بسيط للحفاظ على صحة أذنيك ووقايتها من المشاكل الشائعة...",
    excerptEn:
      "A simple daily routine to maintain ear health and prevent common problems...",
    contentAr: `
      الاهتمام اليومي بالأذن يحميك من الالتهابات والمشاكل الصوتية. 
      نصائح يومية مهمة:
      1. تجنب إدخال أعواد تنظيف الأذن بعمق.
      2. تنظيف الأذن بلطف باستخدام قطعة قماش نظيفة عند الحاجة.
      3. تجنب التعرض المستمر للضوضاء العالية.
      4. استخدام سدادات أذن عند السباحة لمنع دخول الماء.
      
      بهذه العادات البسيطة، يمكنك الحفاظ على صحة أذنيك وتقليل خطر الالتهابات أو مشاكل السمع.
    `,
    contentEn: `
      Daily ear care protects you from infections and auditory problems. 
      Important daily tips:
      1. Avoid inserting cotton swabs deeply.
      2. Gently clean the ear with a clean cloth when needed.
      3. Avoid prolonged exposure to loud noise.
      4. Use earplugs when swimming to prevent water entry.
      
      With these simple habits, you can maintain ear health and reduce the risk of infections or hearing issues.
    `,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    category: "tips",
    dateAr: "٥ ديسمبر ٢٠٢٤",
    dateEn: "Dec 5, 2024",
    readTime: "3 دقائق",
    featured: false,
  },
  {
    id: 4,
    titleAr: "فهم اختبارات السمع",
    titleEn: "Understanding Hearing Tests",
    excerptAr:
      "دليل شامل لفهم أنواع اختبارات السمع المختلفة وكيفية قراءة نتائجها...",
    excerptEn:
      "A comprehensive guide to understanding different types of hearing tests...",
    contentAr: `
      اختبارات السمع مهمة لتقييم صحة أذنك واكتشاف أي مشاكل مبكرًا. 
      أبرز الاختبارات:
      1. فحص السمع العام (Audiometry).
      2. اختبار الترددات العالية والمنخفضة.
      3. قياس تجاوب طبلة الأذن.
      4. اختبار ABR للأطفال الرضع.
      
      قراءة النتائج بشكل صحيح تساعد الطبيب على وضع خطة علاجية مناسبة لكل حالة.
    `,
    contentEn: `
      Hearing tests are essential to evaluate your ear health and detect problems early. 
      Key tests include:
      1. General audiometry.
      2. High and low frequency testing.
      3. Tympanic response measurement.
      4. ABR testing for infants.
      
      Correct interpretation of results helps the doctor design an appropriate treatment plan for each case.
    `,
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    category: "hearing",
    dateAr: "١ ديسمبر ٢٠٢٤",
    dateEn: "Dec 1, 2024",
    readTime: "6 دقائق",
    featured: false,
  },
  {
    id: 5,
    titleAr: "التهابات الأذن عند الأطفال",
    titleEn: "Ear Infections in Children",
    excerptAr:
      "كل ما تحتاج معرفته عن التهابات الأذن الشائعة عند الأطفال وطرق الوقاية منها...",
    excerptEn:
      "Everything you need to know about common ear infections in children...",
    contentAr: `
      التهابات الأذن شائعة جدًا عند الأطفال بسبب قصر قناة الأذن وضعف المناعة أحيانًا. 
      أعراض شائعة:
      1. ألم شديد في الأذن.
      2. ارتفاع درجة الحرارة.
      3. إفرازات من الأذن.
      4. تهيج الطفل أو صعوبة النوم.
      
      طرق الوقاية:
      - تجنب التعرض للمياه لفترات طويلة.
      - الحفاظ على نظافة الأذن بلطف.
      - متابعة أي أعراض مبكرة مع طبيب الأطفال.
    `,
    contentEn: `
      Ear infections are very common in children due to the short ear canal and sometimes weak immunity. 
      Common symptoms:
      1. Severe ear pain.
      2. Fever.
      3. Ear discharge.
      4. Irritability or difficulty sleeping.
      
      Prevention tips:
      - Avoid prolonged exposure to water.
      - Gently maintain ear hygiene.
      - Monitor any early symptoms with a pediatrician.
    `,
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80",
    category: "ear",
    dateAr: "٢٥ نوفمبر ٢٠٢٤",
    dateEn: "Nov 25, 2024",
    readTime: "5 دقائق",
    featured: false,
  },
  {
    id: 6,
    titleAr: "متى تحتاج لزيارة أخصائي السمع؟",
    titleEn: "When Should You Visit an Audiologist?",
    excerptAr:
      "تعرف على الحالات التي تستدعي زيارة فورية لأخصائي السمع والأذن...",
    excerptEn:
      "Learn about conditions that require immediate consultation with an audiologist...",
    contentAr: `
      في بعض الحالات، يجب زيارة أخصائي السمع فورًا لضمان عدم تفاقم المشكلة:
      1. فقدان السمع المفاجئ.
      2. طنين مستمر أو ضوضاء داخل الأذن.
      3. مشاكل التوازن أو الدوخة المتكررة.
      4. التهابات أذن متكررة.
      
      التقييم المبكر يساعد على العلاج السريع ويقلل من احتمالية حدوث مشاكل طويلة الأمد.
    `,
    contentEn: `
      In some cases, you should visit an audiologist immediately to prevent worsening:
      1. Sudden hearing loss.
      2. Persistent ringing or noise in the ear.
      3. Balance issues or recurrent dizziness.
      4. Recurrent ear infections.
      
      Early evaluation helps provide prompt treatment and reduces the risk of long-term problems.
    `,
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    category: "tips",
    dateAr: "٢٠ نوفمبر ٢٠٢٤",
    dateEn: "Nov 20, 2024",
    readTime: "4 دقائق",
    featured: false,
  },
];

export default function BlogPage({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [posts, setPosts] = useState([]);
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
      resetSearch: "إعادة تعيين البحث",
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
      resetSearch: "Reset Search",
    },
  };

  const categories = [
    { id: "all", name: isAr ? "الكل" : "All" },
    { id: "hearing", name: isAr ? "السمع" : "Hearing" },
    { id: "ear", name: isAr ? "الأذن" : "Ear" },
    { id: "tips", name: isAr ? "نصائح" : "Tips" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await supabase
          .from("blog")
          .select("*")
          .order("createdAt", { ascending: false });
        if (data && data.length > 0) setPosts(data);
        else setPosts(staticPosts); // لو مفيش داتا من السوبربيس استخدم الاستاتيك
      } catch (error) {
        setPosts(staticPosts); // لو فيه خطأ استخدم الاستاتيك
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      (post.titleAr &&
        post.titleAr.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.titleEn &&
        post.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.excerptAr &&
        post.excerptAr.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.excerptEn &&
        post.excerptEn.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-blue-50 py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t[lang].title}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t[lang].subtitle}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search
              className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${
                isAr ? "right-4" : "left-4"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t[lang].search}
              className={`w-full bg-white border-2 border-gray-200 rounded-full ${
                isAr ? "pr-12 pl-6" : "pl-12 pr-6"
              } py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm hover:shadow-md`}
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

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={
                    post.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={isAr ? post.titleAr : post.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {isAr ? "مميز" : "Featured"}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isAr ? post.dateAr : post.dateEn}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {isAr ? post.titleAr : post.titleEn}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {isAr ? post.excerptAr : post.excerptEn}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  {t[lang].readMore}
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
