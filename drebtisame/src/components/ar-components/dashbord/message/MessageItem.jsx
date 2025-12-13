import MessagePopup from "./pop/MessagePopup";
import { useState } from "react";

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
    <div className="w-full">
      <div className="flex w-full  justify-between overflow-x-hidden cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)] items-center min-h-[85px] py-6 px-5 bg-[var(--lb-2)]/45 rounded-xl">
        <span className="md:text-[18px] md:block hidden xl:hidden min-w-[100px] text-[14px]">
          {message.name.slice(0, 12) + "..."}
        </span>
        <span className="md:text-[18px] hidden xl:block min-w-[100px] text-[14px]">
          {message.name.slice(0, 25) + "..."}
        </span>
        <span className="md:text-[18px]  text-[14px]">
          {message.created_at.slice(0, 10)}
        </span>
        <span className="md:text-[18px] md:block hidden xl:hidden text-[14px]">
          {message.messagecontent.slice(0, 12) + "..."}
        </span>
        <span className="md:text-[18px] hidden xl:block text-[14px]">
          {message.messagecontent.slice(0, 25) + "..."}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="min-w-[125px] cursor-pointer transition hover:shadow-[var(--shadow-1)] hover:transform-[scale(1.1)] active:transform-[scale(0.95)] bg-[var(--gr)] min-h-[30px] flex-1 md:text-[13px] font-semibold text-[13px] text-white px-3 py-1 rounded-lg"
          >
            عرض التفاصيل
          </button>
          <button
            onClick={() => onDelete(message.id, message.email)}
            className="min-w-[105px] border flex-1 min-h-[50px] hover:shadow-[var(--shadow-1)] transition cursor-pointer hover:transform-[scale(1.1)] active:transform-[scale(0.95)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[13px] font-semibold text-[13px] px-3 py-1 rounded-lg"
          >
            حذف
          </button>
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
