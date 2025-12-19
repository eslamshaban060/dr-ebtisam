"use client";

import { Mail, Calendar, Trash2, Star } from "lucide-react";
import { useRouter } from "next/navigation";

// pope content
const arabicTexts = {
  title: "تفاصيل الاشعار",
  placeholder: "اكتب ردك هنا...",
  page: "notificition",
};

const englishTexts = {
  title: "Notification Details",
  placeholder: "Write your reply here...",
  page: "notificition",
};

// the component
const NotifiyItem = ({ notifiy, onDelete, lan }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (notifiy.type === "message") {
      router.push(notifiy.link);
    } else if (notifiy.type === "review") {
      router.push(notifiy.link);
    }
  };
  return (
    <div
      onClick={handleCardClick}
      className="group w-full relative bg-[var(--wh)] rounded-3xl p-6 sm:p-8  hover:shadow-[var(--shadow-2)] transition-all duration-300 border border-[var(--lb-2)] hover:border-[var(--db)]/20 overflow-hidden hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex flex-col gap-6 relative z-10">
        {/* Header: Icon & Title & Date */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 ">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--db)] flex items-center justify-center text-[var(--wh)] shadow-xl shadow-[var(--db)]/20 group-hover:scale-105 transition-transform duration-300">
                {notifiy.type === "message" ? (
                  <Mail
                    size={32}
                    strokeWidth={2.5}
                    className="sm:w-10 sm:h-10"
                  />
                ) : (
                  <Star
                    size={32}
                    strokeWidth={2.5}
                    className="sm:w-10 sm:h-10"
                  />
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-[var(--wh)] animate-pulse"></div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-xl sm:text-2xl text-[var(--db)] truncate mb-1">
                {lan === "en" ? notifiy.entitle : notifiy.title}
              </h3>
              <p className="text-sm text-[var(--db)]/60 font-medium">
                {notifiy.type === "message"
                  ? lan === "en"
                    ? "New Message Received"
                    : "تم استلام رسالة جديدة"
                  : lan === "en"
                    ? "New Review Posted"
                    : "تم كتابة تقييم جديد"}
              </p>
            </div>
          </div>

          {/* Delete Button - Desktop */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(notifiy.id);
            }}
            className="hidden sm:flex items-center gap-2 px-6 py-3 border-2 border-[var(--re)] text-[var(--re)] hover:bg-[var(--re)] hover:text-[var(--wh)] font-bold rounded-2xl transition-all duration-300  hover:shadow-[var(--shadow-1)] active:scale-95 flex-shrink-0"
          >
            <Trash2 size={20} />
            <span>{lan === "en" ? "Delete" : "حذف"}</span>
          </button>
        </div>

        {/* Info Grid - 2 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Type Card */}
          <div className="flex items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 ">
              {notifiy.type === "message" ? (
                <Mail size={22} className="text-[var(--wh)]" />
              ) : (
                <Star size={22} className="text-[var(--wh)]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                {lan === "en" ? "Type" : "النوع"}
              </p>
              <p className="text-sm font-semibold text-[var(--db)]">
                {notifiy.type === "message"
                  ? lan === "en"
                    ? "Message"
                    : "رسالة"
                  : lan === "en"
                    ? "Review"
                    : "تقييم"}
              </p>
            </div>
          </div>

          {/* Date Card */}
          <div className="flex items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
            <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 ">
              <Calendar size={22} className="text-[var(--wh)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                {lan === "en" ? "Date" : "التاريخ"}
              </p>
              <p className="text-sm font-semibold text-[var(--db)]">
                {notifiy.created_at.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>

        {/* Delete Button - Mobile */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when deleting
            onDelete(notifiy.id);
          }}
          className="sm:hidden flex items-center justify-center gap-2 w-full px-6 py-3.5 border-2 border-[var(--re)] text-[var(--re)] hover:bg-[var(--re)] hover:text-[var(--wh)] font-bold rounded-2xl transition-all duration-300 hover:shadow-[var(--shadow-1)] active:scale-95"
        >
          <Trash2 size={20} />
          <span>{lan === "en" ? "Delete Notification" : "حذف الإشعار"}</span>
        </button>

        {/* Click Hint */}
        <div className="text-center text-xs text-[var(--db)]/40 font-medium">
          {lan === "en" ? "Click to view details" : "اضغط للعرض التفاصيل"}
        </div>
      </div>
    </div>
  );
};

export default NotifiyItem;
