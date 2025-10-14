"use client";
import { useState } from "react";
import { reviewsAr } from "../../../components/ar-components/dashboard/components/data";
import noFeedBackPic from "../../../../public/user/no-message.png";
import { Sparkles, Ellipsis } from "lucide-react";

const ReviewsPage = () => {
  const [articles, setArticles] = useState(reviewsAr);
  const [activeId, setActiveId] = useState(null); // 👈 which review's menu is open

  if (articles.length === 0) {
    return (
      <section className="h-[75dvh] overflow-y-auto  bg-[var(--lb)] p-2">
        <div className="mwm w-full shadow-[var(--shadow-1)] min-h-[134px] flex flex-col justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl">
          <h2 className="md:text-3xl text-xl leading-[24px] text-shadow-lg font-semibold text-[var(--nv)]">
            التقييمات
          </h2>
          <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%]">
            مرحباً دكتورة، من خلال هذا القسم ستتمكنين من متابعة آراء وتقييمات
            مرضاك والاطّلاع على ملاحظاتهم لتحسين تجربتهم معك.
          </p>
        </div>
        <div className="content w-full mt-12 flex flex-col px-10 rounded-2xl pt-12 pb-10 gap-10 items-center bg-[var(--lg)]/40">
          <img src={noFeedBackPic.src} alt="" className="lg:max-w-[375px]" />
          <div className="w-full flex flex-col gap-5 justify-center items-center">
            <h2 className="font-semibold md:text-3xl sm:text-xl text-lg text-[var(--nv)]">
              لا توجد تقييمات في الوقت الحالي!
            </h2>
            <p className="md:text-xl text-sm text-[var(--nv)]">
              You have no FeedBacks. Updates will appear here{" "}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
      {/* welcome message */}
          <div className="mwm w-full shadow-[var(--shadow-1)] min-h-[134px] flex flex-col justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl">
          <h2 className="md:text-3xl text-xl leading-[24px] text-shadow-lg font-semibold text-[var(--nv)]">
            التقييمات
          </h2>
          <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%]">
            مرحباً دكتورة، من خلال هذا القسم ستتمكنين من متابعة آراء وتقييمات
            مرضاك والاطّلاع على ملاحظاتهم لتحسين تجربتهم معك.
          </p>
        </div>

      <div className="w-full mt-12 lg:gap-14 md:gap-10 gap-5 sm:grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {articles.map((review) => (
          <div
            key={review.id}
            className="review-card relative sm:mb-0 mb-5 rounded-xl sm:h-[200px]  transition duration-300 hover:-translate-y-3 cursor-pointer"
          >
            <div className="review-layer rounded-xl  relative h-full px-5 py-6">
              {/* ellipsis + delete button */}
              <div className="absolute left-4 top-1">
                <Ellipsis
                  onClick={() =>
                    setActiveId((prev) => (prev === review.id ? null : review.id))
                  }
                  className="text-[var(--wh)] size-8 cursor-pointer"
                />
                <button
                  className={`${
                    activeId === review.id ? "scale-100" : "scale-0"
                  } absolute top-8 left-0 bg-[var(--pink)] whitespace-nowrap rounded-xl text-[var(--brown)] px-4 py-2 z-50 font-semibold text-[10px] transform transition-transform duration-200`}
                  onClick={() => {
                    setArticles((prev) =>
                      prev.filter((el) => el.id !== review.id)
                    );
                    setActiveId(null); // close after delete
                  }}
                >
                  حذف التقييم
                </button>
              </div>

              {/* review content */}
              <div className="content flex-1 justify-center sm:items-start items-center sm:flex-row flex-col gap-4 flex py-2">
                <div className="icon md:size-20 size-16 rounded-full bg-[var(--wh)] flex justify-center items-center">
                  <Sparkles className="text-[var(--currnet-color)] size-9" />
                </div>
                <div className="flex-1 text py-4">
                  <h2 className="text-[var(--wh)] font-medium text-lg">
                    {review.name}
                  </h2>
                  <p className="text-[var(--wh)] text-sm">{review.review}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsPage;
