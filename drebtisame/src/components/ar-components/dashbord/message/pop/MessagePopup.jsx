"use client";
import { FaTimes } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import MessageFooter from "./MessageFooter";
import MessageBody from "./MessageBody";

const MessagePopup = ({
  texts,
  messagecont,
  direction = "rtl",
  show,
  setShow,
  time,
}) => {
  return (
    <div
      className={`w-[600px] max-w-[95%] bg-[var(--wh)] rounded-2xl shadow-[var(--shadow-1)] overflow-hidden ${
        direction === "rtl" ? "text-right" : "text-left"
      }`}
      dir={direction}
    >
      {/* Header */}
      <div
        className={`bg-[var(--nv)] relative flex justify-center w-full text-[var(--wh)] py-6 px-6  items-center `}
      >
        <div
          className={`flex  w-full justify-center items-center ${
            direction === "rtl" ? "flex-row-reverse gap-5" : "gap-5"
          }`}
        >
          <FaPaperPlane className="text-3xl" />
          <h3 className="text-2xl font-semibold">{texts.title}</h3>
          <FaPaperPlane className="text-3xl transform scale-x-[-1]" />
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            setShow(!show);
          }}
          className={`text-[var(--nv)] hover:bg-[var(--yl)] hover:text-[var(--db)] bg-[var(--wh)] rounded-xl p-3 transition-all duration-300  top-[50%] transform translate-y-[-50%]  absolute w-10 h-10 flex items-center justify-center   ${direction === "rtl" ? " left-[8px] sm:left-[20px]" : " right-[8px] sm:right-[20px]"}`}
        >
          <FaTimes className="text-sm" />
        </button>
      </div>

      {/* Body */}
      <div>
        <MessageBody messagecont={messagecont} time={time} page={texts.page} />
      </div>

      {/* Footer */}

      <div>
        {texts.page === "notificition" ? (
          ""
        ) : (
          <MessageFooter
            texts={texts}
            messagecont={messagecont}
            setShow={setShow}
            show={show}
          />
        )}
      </div>
    </div>
  );
};

export default MessagePopup;
