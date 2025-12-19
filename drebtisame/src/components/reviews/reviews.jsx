"use client";

import { useState, useEffect } from "react";
import { Sparkles, Trash2, Star } from "lucide-react";
import { supabase } from "@/utils/supabase/supabase";

/* ===============================
   Static Arabic Reviews (Fallback)
================================ */
const reviewsAr = [
  {
    id: 1,
    name: "ياسمين أحمد",
    text: "الدكتورة ابتسام قمة في الذوق والاحترام. سمعتني للآخر وشرحتلي كل حاجة بمنتهى البساطة. بصراحة ريّحتني جداً.",
    rating: 5,
  },
  {
    id: 2,
    name: "كمال عبدالغفار",
    text: "كنت بعاني من وداني لفترة طويلة، وبصراحة العلاج اللي الدكتورة كتبتهولي فرق معايا جامد. ربنا يبارك فيها.",
    rating: 5,
  },
  {
    id: 3,
    name: "وفاء عادل",
    text: "تجربة ممتازة بصراحة. الكشف كان سريع والدكتورة شرحتلي النتايج بطريقة بسيطة ومفهومة.",
    rating: 4,
  },
  {
    id: 4,
    name: "أحمد السيد",
    text: "من أجمد الدكاترة اللي اتعاملت معاهم. شاطرة جداً وبتاخد بالها من كل التفاصيل. أنصح أي حد يروح لها.",
    rating: 5,
  },
  {
    id: 5,
    name: "سارة محمود",
    text: "الدكتورة ساعدتني جامد في مشكلة السمع اللي كنت بعاني منها. شرحها بسيط ومطمّن. شكراً ليها بجد.",
    rating: 5,
  },
  {
    id: 6,
    name: "محمد عبدالله",
    text: "العيادة تحفة ونضيفة جداً، والدكتورة استقبالها جميل. حسّيت إن في اهتمام بجد.",
    rating: 4,
  },
];

/* ===============================
   Review Card (UNCHANGED DESIGN)
================================ */
const ReviewCard = ({ review, onDelete, lan }) => {
  return (
    <div className="w-full px-4 mb-6">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--nv)] flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <Sparkles size={28} strokeWidth={2} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 truncate mb-2">
                {review.name}
              </h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onDelete(review.id)}
            className="flex-shrink-0 px-4 py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-xl transition-all duration-200 active:scale-95"
          >
            <Trash2 size={20} className="sm:hidden" />
            <span className="hidden sm:inline text-sm">
              {lan === "en" ? "Delete" : "حذف"}
            </span>
          </button>
        </div>

        {/* Review Text */}
        <div className="p-6 bg-blue-50/30">
          <p className="text-gray-700 text-base leading-relaxed">
            {review.text}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ===============================
   Reviews Page
================================ */
export const Reviewss = ({ lan = "ar" }) => {
  const [reviews, setReviews] = useState(reviewsAr);
  const [loading, setLoading] = useState(true);

  const texts = {
    ar: {
      title: "التقييمات",
      description:
        "مرحباً دكتورة، من خلال هذا القسم ستتمكنين من متابعة آراء وتقييمات مرضاك والاطّلاع على ملاحظاتهم لتحسين تجربتهم معك.",
      noReviews: "لا توجد تقييمات في الوقت الحالي!",
      noReviewsDesc: "You have no FeedBacks. Updates will appear here",
    },
    en: {
      title: "Reviews",
      description:
        "Welcome Doctor, through this section you can follow your patients' opinions and reviews and see their feedback to improve their experience with you.",
      noReviews: "No reviews available at the moment!",
      noReviewsDesc: "You have no FeedBacks. Updates will appear here",
    },
  };

  const currentTexts = texts[lan];

  /* ===============================
     Fetch from Supabase
  ================================ */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("id, name, review, rate")
          .order("created_at", { ascending: false });

        if (error || !data?.length) return;

        const formatted = data.map((r) => ({
          id: r.id,
          name: r.name,
          text: r.review,
          rating: r.rate,
        }));

        setReviews(formatted);
      } catch (err) {
        console.warn("Supabase failed, using static data");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  /* ===============================
     Delete Review
  ================================ */
  const handleDelete = async (id) => {
    // Optimistic UI
    setReviews((prev) => prev.filter((review) => review.id !== id));

    const { error } = await supabase.from("reviews").delete().eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
    }
  };

  /* ===============================
     Loading
  ================================ */
  if (loading) {
    return (
      <section className="h-[75dvh] flex items-center justify-center bg-[var(--lb)]">
        <Sparkles className="animate-spin text-gray-400" />
      </section>
    );
  }

  /* ===============================
     Empty State (UNCHANGED)
  ================================ */
  if (reviews.length === 0) {
    return (
      <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
        <style jsx>{`
          :root {
            --lb: #f8fafc;
            --nv: #1e293b;
            --wh: #ffffff;
            --shadow-1: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          }
        `}</style>

        <div className="mwm w-full min-h-[134px] flex flex-col justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl">
          <h2 className="md:text-3xl text-xl font-semibold text-[var(--nv)]">
            {currentTexts.title}
          </h2>
          <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%]">
            {currentTexts.description}
          </p>
        </div>

        <div className="content w-full mt-12 flex flex-col px-10 rounded-2xl pt-12 pb-10 gap-10 items-center bg-white/80">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
            <Sparkles size={80} className="text-gray-400" />
          </div>
          <div className="w-full flex flex-col gap-5 justify-center items-center">
            <h2 className="font-semibold md:text-3xl text-lg text-gray-900">
              {currentTexts.noReviews}
            </h2>
            <p className="md:text-xl text-sm text-gray-600">
              {currentTexts.noReviewsDesc}
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ===============================
     Render Reviews
  ================================ */
  return (
    <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
      <div className="max-w-full mx-auto px-4 mb-8">
        <div className="mwm w-full shadow-[var(--shadow-1)] min-h-[134px] flex flex-col justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl">
          <h2 className="md:text-3xl text-xl font-semibold text-[var(--nv)]">
            {currentTexts.title}
          </h2>
          <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%]">
            {currentTexts.description}
          </p>
        </div>
      </div>

      <div className="max-w-full mx-auto">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onDelete={handleDelete}
            lan={lan}
          />
        ))}
      </div>
    </section>
  );
};
