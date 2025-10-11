import MessagePopup from "../message/pop/MessagePopup";
import { useState } from "react";

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
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <div className="flex w-full  justify-between overflow-x-hidden cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)] items-center min-h-[85px] py-6 px-5 bg-[var(--lb-2)]/45 rounded-xl">
        <span className=" bg-white p-5 shadow-[var(--shadow-1)] rounded-full w-16 h-16 flex justify-center items-center">
          {notifiy.type === "message" ? (
            <img src="/dashbord/notifiymessage.png" className="  w-14" alt="" />
          ) : (
            <img src="/dashbord/notifiystatic.png" className="w-14" alt="" />
          )}
        </span>
        <span className="md:text-[18px]  min-w-[100px] text-[14px]">
          {lan === "en" ? notifiy.entitle : notifiy.title}
        </span>

        <span className="md:text-[18px]  text-[14px]">
          {notifiy.created_at.slice(0, 10)}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="min-w-[125px] cursor-pointer transition hover:shadow-[var(--shadow-1)] hover:transform-[scale(1.1)] active:transform-[scale(0.95)] bg-[var(--gr)] min-h-[30px] flex-1 md:text-[13px] font-semibold text-[13px] text-white px-3 py-1 rounded-lg"
          >
            {lan === "en" ? "Browse Now" : "  عرض التفاصيل"}
          </button>
          <button
            onClick={() => onDelete(notifiy.id)}
            className="min-w-[105px] border flex-1 min-h-[50px] hover:shadow-[var(--shadow-1)] transition cursor-pointer hover:transform-[scale(1.1)] active:transform-[scale(0.95)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[13px] font-semibold text-[13px] px-3 py-1 rounded-lg"
          >
            {lan === "en" ? "Delete" : " حذف"}
          </button>
        </div>
      </div>
      {show && (
        <div className=" fixed inset-0  bg-white/60 z-[100] flex justify-center items-center">
          <MessagePopup
            texts={lan === "en" ? englishTexts : arabicTexts}
            messagecont={notifiy}
            direction={lan === "en" ? "ltr" : "rtl"}
            show={show}
            setShow={setShow}
            time={notifiy.created_at}
          />
        </div>
      )}
    </div>
  );
};

export default NotifiyItem;
