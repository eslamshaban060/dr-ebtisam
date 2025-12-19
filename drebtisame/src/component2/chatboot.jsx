"use client";
import {
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Loader, Share2 } from "lucide-react";

export default function ClinicChatbot({ lang = "ar" }) {
  const isAr = lang === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const t = {
    ar: {
      title: "مساعد العيادة الذكي",
      subtitle: "د. ابتسام ندا",
      placeholder: "اكتب سؤالك هنا...",
      send: "إرسال",
      welcome:
        "مرحباً بك 👋\n\nأنا المساعد الافتراضي لعيادات الدكتورة ابتسام ندا (السمع والاتزان).\n\nأقدر أساعدك في:\n✓ مواعيد العيادات\n✓ الحجز والاستفسار\n✓ العنوان والموقع\n✓ الخدمات المتاحة\n✓ التواصل والسوشيال ميديا\n\nتحب أساعدك في إيه؟",
      suggestions: [
        "مواعيد العمل",
        "حجز موعد",
        "الخدمات",
        "العنوان",
        "التواصل",
        "السوشيال ميديا",
        "أرقام التليفونات",
        "نصائح صحية",
        "متابعة",
        "جراحات",
        "عمليات",
        "أطباء",
      ],
      notFound:
        "عذراً، مش فهمت قصدك 😅\n\nممكن تختار من الاقتراحات:\n• مواعيد العمل\n• حجز موعد\n• الخدمات\n• العنوان\n• التواصل\n• السوشيال ميديا\n• نصائح صحية\n• جراحات",
      suggestionsLabel: "اقتراحات:",
    },
    en: {
      title: "Smart Clinic Assistant",
      subtitle: "Dr. Ebtisam Nada",
      placeholder: "Type your question...",
      send: "Send",
      welcome:
        "Welcome 👋\n\nI'm the virtual assistant for Dr. Ebtisam Nada (Hearing & Balance Clinics).\n\nI can help you with:\n✓ Clinic schedules\n✓ Appointments\n✓ Location\n✓ Available services\n✓ Contact & Social Media\n\nHow can I help you?",
      suggestions: [
        "Working hours",
        "Book appointment",
        "Services",
        "Location",
        "Contact",
        "Social media",
        "Phone numbers",
        "Health tips",
        "Follow-up",
        "Surgeries",
        "Operations",
        "Doctors",
      ],
      notFound:
        "Sorry, I didn’t understand 😅\n\nYou can try one of these:\n• Working hours\n• Book appointment\n• Services\n• Location\n• Contact\n• Social media\n• Health tips\n• Surgeries",
      suggestionsLabel: "Suggestions:",
    },
  };

  // =================== قاعدة المعرفة ===================
  const knowledgeBase = {
    ar: [
      // ------------------- مواعيد -------------------
      {
        keywords: [
          "امتى",
          "مواعيد",
          "دوام",
          "ساعات",
          "وقت",
          "العياده فاتحه امتى",
          "انا عايز اعرف الساعة",
          "متى",
          "الساعة",
          "فتح",
          "اغلاق",
          "مفتوح",
          "اغلق",
          "فتح امتى",
          "اغلاق امتى",
          "الدوام",
          "العنوان",
          "الموصلات",
          "فين",
          " المكان فين",
          "مواعيد شغل",
          "متى العياده",
          "العياده في امتى",
          "العياده امتى",
          "العياده الساعة كام",
          "الدوام امتى",
          "متى العياده فاتحه",
          "متى العياده مقفولة",
          "ساعات العمل",
          "العياده مفتوحة امتى",
          "العياده بتفتح امتى",
          "العياده بتقفل امتى",
          "العياده فين الساعة",
          "مواعيد اليوم",
          "مواعيد بكرة",
          "اليوم الساعة كام",
          "الدوام بتاعكم",
          "ايه مواعيد العياده",
          "امتى العياده هتفتح",
          "مواعيدكم",
          "الدوام اليوم",
          "وقت الدوام",
          "امتى الشغل",
        ],
        answer:
          "📅 مواعيد العيادات:\n\n🏥 عيادة مدينة نصر – القاهرة:\n• الأحد: 5:00 م – 7:00 م\n• الخميس: 2:00 م – 4:30 م\n\n🏥 عيادة ميت غمر – الدقهلية:\n• السبت: 2:00 م – 6:00 م\n• الأربعاء: 2:00 م – 6:00 م\n\n⚠️ يُفضل التأكيد قبل الحضور.",
      },
      // ------------------- حجز -------------------
      {
        keywords: [
          "حجز",
          "احجز",
          "موعد",
          "عايز احجز",
          "ممكن احجز",
          "اريد",
          "اريد موعد",
          "ممكن موعد",
          "احجزلي",
          "امتى اقدر احجز",
          "ازاي احجز",
          "عايز اعمل حجز",
          "حجز اونلاين",
          "حجز واتساب",
          "حجز موبايل",
          "حجز سريع",
          "حجز عاجل",
          "اعمل حجز",
          "الخطوات لحجز",
          "ازاي احجز موعد",
          "كيفية الحجز",
          "حجز مع دكتوره",
          "حجز دكتوره",
          "حجز دكتور",
          "book",
          "appointment",
          "reserve",
          "احجز دلوقتي",
          "عايز اطلع موعد",
          "موعد متاح",
          "حجز متاح",
          "موعد شاغر",
          "احجز مكان",
          "حجز سريع",
          "حجز أونلاين",
          "booking",
          "online booking",
        ],
        answer:
          "📞 طرق الحجز:\n\n1️⃣ واتساب: 01128812068\n2️⃣ الهاتف: 01222592471\n3️⃣ زيارة مباشرة للعيادة\n\n⚠️ يُفضل الحجز قبل 24 ساعة لضمان وجود موعد مناسب.",
      },
      // ------------------- خدمات -------------------
      {
        keywords: [
          "بتعمل ايه",
          "خدمات",
          "فحص",
          "علاج",
          "سمع",
          "دوخة",
          "بتعالج ايه",
          "بتعمل ايه في العياده",
          "فحص سمع",
          "قياس سمع",
          "جراحات",
          "عمليات",
          "لوز",
          "لحمية",
          "انف",
          "اذن",
          "فحص أطفال",
          "علاج الكبار",
          "توازن",
          "Vertigo",
          "Balance",
          "ENT",
          "طبلة",
          "أذن",
          "جيوب أنفية",
          "عملية",
          "سورياج",
          "استئصال",
          "ترقيع",
          "تشخيص",
          "تقييم",
          "كشف",
          "جلسة",
          "علاج دوخة",
          "سماعات",
          "سماعة",
          "تأهيل",
          "فحص توازن",
          "علاج التهاب",
          "cleaning",
          "hearing aid",
          "hearing test",
          "assessment",
          "examination",
          "children",
          "kids",
          "adult",
          "ear",
          "nose",
          "throat",
          "surgery",
          "ENT surgery",
          "operation",
        ],
        answer:
          "🏥 خدمات العيادة:\n\n✓ فحص السمع للكبار والأطفال\n✓ تشخيص وعلاج ضعف السمع\n✓ اضطرابات الاتزان والدوخة\n✓ تأهيل سمعي\n✓ تقييم حالات تأخر السمع والكلام\n✓ جراحات الأنف والأذن والحنجرة\n\n📌 التخصص الأساسي: السمعيات والاتزان.",
      },
      // ------------------- تليفون/تواصل -------------------
      {
        keywords: [
          "رقم",
          "تليفون",
          "موبايل",
          "اتصل",
          "تواصل",
          "واتساب",
          "كلمكم",
          "ارسللي",
          "هاتف",
          "اتصال",
          "رقم دكتوره",
          "رقم العياده",
          "رقم للطوارئ",
          "رقم سريع",
          "كول",
          "call",
          "call me",
          "رقم واتساب",
          "رقم عاجل",
          "phone",
          "mobile",
          "contact",
        ],
        answer:
          "📞 أرقام التواصل:\n\n• 01222592471\n• 01128812068 (واتساب متاح)\n• 01006308106\n\n💬 يمكن التواصل عبر واتساب أو فيسبوك للرد السريع.",
      },
      // ------------------- سوشيال ميديا -------------------
      {
        keywords: [
          "فيسبوك",
          "انستجرام",
          "يوتيوب",
          "سوشيال",
          "لينك",
          "صفحة",
          "متابعين",
          "حساب",
          "عايز اشوفكم",
          "اريد حسابكم",
          "متابع",
          "متابعة",
          "social",
          "social media",
          "follow",
          "follow me",
          "facebook",
          "instagram",
          "youtube",
          "fb",
          "ig",
          "yt",
          "link",
        ],
        answer: "🌐 يمكن التواصل معنا على السوشيال ميديا التالية: ",
        type: "social", // نوع الإجابة علشان نعرف نطلع الآيكونات
      },
      // ------------------- نصائح صحية -------------------
      {
        keywords: [
          "نصائح",
          "صحي",
          "صحة",
          "ايه اعمل",
          "ازاي",
          "عايز اعرف",
          "advice",
          "tips",
          "نصايح",
          "اشياء صحية",
          "care",
          "فحص",
          "تنظيف",
          "حماية",
          "precautions",
          "recommendations",
          "guidelines",
          "instructions",
          "نصايح سمع",
          "نصايح دوخة",
          "نصائح أطفال",
          "نصايح كبار",
          "نصائح علاج",
        ],
        answer:
          "💡 نصائح صحية للسمع:\n\n✅ نظف الأذن برفق\n✅ جفف بعد الاستحمام\n✅ استخدم سدادات للسباحة\n❌ لا تستخدم أعواد قطنية\n❌ لا تدخل أي شيء في الأذن\n\n📅 فحص دوري كل 6 أشهر.",
      },
      // ------------------- دكتور/خبرة -------------------
      {
        keywords: [
          "مين",
          "دكتور",
          "خبيرة",
          "خبرة",
          "بتشتغل في ايه",
          "بتعمل ايه",
          "بتعرف ايه",
          "ابتسام",
          "استاذة",
          "استشاريه",
          "دكتوره",
          "استشاري",
          "specialist",
          "consultant",
          "professor",
          "teacher",
          "doctor",
          "expert",
          "expertise",
          "professional",
          "experience",
        ],
        answer:
          "👩‍⚕️ د. ابتسام حامد ندا\n\n• أستاذة واستشارية السمع والاتزان\n• متخصصة في تشخيص وعلاج مشاكل السمع والتوازن\n• خبرة أكاديمية وعملية لأكثر من 15 سنة\n• تهتم بحالات الكبار والأطفال",
      },
      // ------------------- متابعة -------------------
      {
        keywords: [
          "متابعة",
          "كنترول",
          "فحص",
          "مراجعة",
          "followup",
          "control",
          "checkup",
          "next visit",
          "visit",
          "next appointment",
          "review",
          "follow up",
        ],
        answer:
          "📋 خدمة متابعة شاملة:\n\n• كشف متابعة: 150 جنيه\n• واتساب مجاني\n• تذكير بالمواعيد\n📅 جدول متابعة: بعد أسبوع، بعد شهر، بعد 3 أشهر\n\n✅ نهتم بك حتى الشفاء.",
      },
      // ------------------- Fallback -------------------
      {
        keywords: [
          "fallback",
          "مش مفهوم",
          "لا اعرف",
          "مفهومش",
          "مش عارف اكتب",
          "unknown",
          "undefined",
          "not clear",
          "dont know",
          "unsure",
        ],
        answer:
          "عذراً، مش فهمت قصدك 😅\n\nممكن تختار من الاقتراحات:\n• مواعيد العمل\n• حجز موعد\n• الخدمات\n• العنوان\n• التواصل\n• السوشيال ميديا\n• نصائح صحية\n• جراحات",
      },
    ],
  };

  // =================== روابط السوشيال مع آيكونات ===================
  const socialLinks = (isAr = true) => [
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/+201128812068",
      name: isAr ? "واتساب" : "WhatsApp",
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      color: "bg-blue-500 hover:bg-blue-600",
      link: "tel:+201128812068",
      name: isAr ? "هاتف" : "Phone",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      color: "bg-purple-500 hover:bg-purple-600",
      link: "mailto:e_hossam1999@yahoo.com",
      name: isAr ? "بريد" : "Email",
    },
    {
      icon: <Facebook className="w-6 h-6 text-white" />,
      color: "bg-blue-600 hover:bg-blue-700",
      link: "https://www.facebook.com/Prof.Dr.Ebtessam.Nada/",
      name: "Facebook",
    },
    {
      icon: <Instagram className="w-6 h-6 text-white" />,
      color: "bg-pink-600 hover:bg-pink-700",
      link: "https://www.instagram.com/dr_ebtessam/",
      name: "Instagram",
    },
    {
      icon: <Youtube className="w-6 h-6 text-white" />,
      color: "bg-red-600 hover:bg-red-700",
      link: "https://www.youtube.com/watch?v=2LJGzu5QEfI",
      name: "YouTube",
    },
  ];

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([
        {
          id: 1,
          text: t[isAr ? "ar" : "en"].welcome,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //   const findAnswer = (question) => {
  //     const q = question.toLowerCase();
  //     const kb = knowledgeBase[isAr ? "ar" : "en"];

  //     for (let item of kb) {
  //       for (let keyword of item.keywords) {
  //         if (q.includes(keyword.toLowerCase())) {
  //           return item.answer;
  //         }
  //       }
  //     }
  //     return t[isAr ? "ar" : "en"].notFound;
  //   };

  const findAnswer = (question) => {
    const q = question.toLowerCase();
    const kb = knowledgeBase[isAr ? "ar" : "en"];

    for (let item of kb) {
      for (let keyword of item.keywords) {
        if (q.includes(keyword.toLowerCase())) {
          return item; // ارجع الـ item كامل
        }
      }
    }
    return { answer: t[isAr ? "ar" : "en"].notFound }; // رجع object بدل نص
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // setTimeout(() => {
    //   const answer = findAnswer(inputMessage);
    //   const botMessage = {
    //     id: Date.now(),
    //     text: answer,
    //     sender: "bot",
    //     timestamp: new Date(),
    //   };
    //   setMessages((prev) => [...prev, botMessage]);
    //   setIsLoading(false);
    // }, 800);
    setTimeout(() => {
      const item = findAnswer(inputMessage);
      const botMessage = {
        id: Date.now(),
        text: item.answer,
        type: item.type || null, // لو فيه type ضيفه
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const shareToWhatsApp = (text) => {
    const message = encodeURIComponent(
      `من عيادات د. إبتسام ندى 🏥\n\n${text}\n\nللحجز: 01234567890`
    );
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 ${isAr ? "left-6" : "right-6"} w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          dir={isAr ? "rtl" : "ltr"}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-[90vh] max-h-[800px] flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    {t[isAr ? "ar" : "en"].title}
                  </h3>
                  <p className="text-cyan-100 text-sm">
                    {t[isAr ? "ar" : "en"].subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "bot" ? "bg-gradient-to-br from-cyan-500 to-cyan-600" : "bg-gradient-to-br from-gray-500 to-gray-600"}`}
                  >
                    {message.sender === "bot" ? (
                      <Bot className="w-6 h-6 text-white" />
                    ) : (
                      <User className="w-6 h-6 text-white" />
                    )}
                  </div>
                  {/* <div className="flex-1 max-w-[75%]">
                    <div
                      className={`rounded-2xl p-4 ${message.sender === "bot" ? "bg-white shadow-sm" : "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white"}`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">
                        {message.text}
                      </p>
                    </div>
                    {message.sender === "bot" && message.id !== 1 && (
                      <button
                        onClick={() => shareToWhatsApp(message.text)}
                        className="mt-2 flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>
                          {isAr ? "شارك على واتساب" : "Share on WhatsApp"}
                        </span>
                      </button>
                    )}
                  </div> */}
                  <div className="flex-1 max-w-[75%]">
                    <div
                      className={`rounded-2xl p-4 ${message.sender === "bot" ? "bg-white shadow-sm" : "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white"}`}
                    >
                      {message.type === "social" ? (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {socialLinks(isAr).map((link, idx) => (
                            <a
                              key={idx}
                              href={link.link}
                              target="_blank"
                              className={`${link.color} p-4 rounded-xl flex items-center justify-center hover:scale-110 transition-transform`}
                            >
                              {link.icon}
                              <span className="sr-only">
                                {link.name} اسلام شعبان جمعة
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="leading-relaxed whitespace-pre-wrap">
                          {message.text}
                        </p>
                      )}
                    </div>

                    {message.sender === "bot" &&
                      message.id !== 1 &&
                      message.type !== "social" && (
                        <button
                          onClick={() => shareToWhatsApp(message.text)}
                          className="mt-2 flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>
                            {isAr ? "شارك على واتساب" : "Share on WhatsApp"}
                          </span>
                        </button>
                      )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-white shadow-sm rounded-2xl p-4">
                    <Loader className="w-5 h-5 text-cyan-600 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-6 py-3 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3 font-semibold">
                  {t[isAr ? "ar" : "en"].suggestionsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t[isAr ? "ar" : "en"].suggestions.map(
                    (suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors"
                      >
                        {suggestion}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            <div className="bg-white p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t[isAr ? "ar" : "en"].placeholder}
                  className="flex-1 bg-gray-100 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
