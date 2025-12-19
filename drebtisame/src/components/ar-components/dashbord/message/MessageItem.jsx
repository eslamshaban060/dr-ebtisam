import MessagePopup from "./pop/MessagePopup";
import { useState } from "react";
import { Mail, Calendar, Eye, Trash2, MessageSquare } from "lucide-react";

// pope content
const arabicTexts = {
  title: "تفاصيل الرسالة",
  doctorName: "دكتورة ابتسام ندا",
  placeholder: "اكتب ردك هنا...",
};

const englishTexts = {
  title: "Message Details",
  name: "Name:",
  email: "Email:",
  message: "Message:",
  whatsappBtn: "Contact via WhatsApp",
};

// the component
const MessageItem = ({ message, onDelete, lan }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full px-4">
      <div className="group relative bg-[var(--wh)] rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-[var(--shadow-2)] transition-all duration-300 border border-[var(--lb-2)] hover:border-[var(--db)]/20 overflow-hidden hover:-translate-y-1">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--lb-2)]/30 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>

        <div className="flex flex-col gap-6 relative z-10">
          {/* Header: Icon & Name & Date */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--db)] flex items-center justify-center text-[var(--wh)] shadow-xl shadow-[var(--db)]/20 group-hover:scale-105 transition-transform duration-300">
                  <MessageSquare
                    size={32}
                    strokeWidth={2.5}
                    className="sm:w-10 sm:h-10"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-[var(--wh)]"></div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xl sm:text-2xl text-[var(--db)] truncate mb-1">
                  {message.name}
                </h3>
                <p className="text-sm text-[var(--db)]/60 font-medium">
                  {lan === "en" ? "User Message" : "رسالة مستخدم"}
                </p>
              </div>
            </div>

            {/* Date Badge - Desktop */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[var(--lb-2)]/50 rounded-xl">
              <Calendar size={18} className="text-[var(--db)]/60" />
              <span className="text-sm font-semibold text-[var(--db)]">
                {message.created_at.slice(0, 10)}
              </span>
            </div>
          </div>

          {/* Info Grid - 2 Rows */}
          <div className=" gap-4">
            {/* Email Card */}
            <div className="flex w-full items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail size={22} className="text-[var(--wh)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                  {lan === "en" ? "Email Address" : "البريد الإلكتروني"}
                </p>
                <p
                  className="text-sm font-semibold text-[var(--db)] truncate"
                  title={message.email}
                >
                  {message.email}
                </p>
              </div>
            </div>

            {/* Date Card - Mobile Only */}
            <div className="flex sm:hidden mt-3 items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Calendar size={22} className="text-[var(--wh)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                  {lan === "en" ? "Date" : "التاريخ"}
                </p>
                <p className="text-sm font-semibold text-[var(--db)]">
                  {message.created_at.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* View Details Button */}
            <button
              onClick={() => setShow(!show)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--gr)] hover:opacity-90 text-[var(--wh)] font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95"
            >
              <Eye size={20} />
              <span>{lan === "en" ? "View Details" : "عرض التفاصيل"}</span>
            </button>

            {/* Delete Button */}
            <button
              onClick={() => onDelete(message.id, message.email)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[var(--re)] text-[var(--re)] hover:bg-[var(--re)] hover:text-[var(--wh)] font-bold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-1)] active:scale-95"
            >
              <Trash2 size={20} />
              <span>{lan === "en" ? "Delete" : "حذف"}</span>
            </button>
          </div>
        </div>
      </div>
      {show && (
        <div className=" fixed inset-0  bg-white/60 z-[100] flex justify-center items-center">
          <MessagePopup
            texts={lan === "en" ? englishTexts : arabicTexts}
            messagecont={message}
            direction={lan === "en" ? "ltr" : "rtl"}
            show={show}
            setShow={setShow}
            time={message.created_at}
          />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
