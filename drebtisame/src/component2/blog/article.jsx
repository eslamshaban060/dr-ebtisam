"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabase";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

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
export default function BlogPostPage({ lang = "ar" }) {
  const { id } = useParams();
  const router = useRouter();
  const isAr = lang === "ar";
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await supabase
          .from("blog")
          .select("*")
          .eq("id", id)
          .single();
        if (data) setPost(data);
        else setPost(staticPosts.find((p) => p.id === id));
      } catch (error) {
        setPost(staticPosts.find((p) => p.id === id));
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center py-20">Loading...</div>;

  return (
    <div
      className="min-h-screen bg-white py-16 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-4 text-cyan-600 font-semibold hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          {isAr ? "عودة للمدونة" : "Back to Blog"}
        </button>

        <h1 className="text-4xl font-bold mb-4">
          {isAr ? post.titleAr : post.titleEn}
        </h1>

        <div className="flex items-center gap-4 text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{isAr ? post.dateAr : post.dateEn}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <span className="capitalize">{post.category}</span>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt={isAr ? post.titleAr : post.titleEn}
            className="w-full rounded-2xl mb-6"
          />
        )}

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {isAr
            ? post.contentAr || post.excerptAr
            : post.contentEn || post.excerptEn}
        </p>
      </div>
    </div>
  );
}
