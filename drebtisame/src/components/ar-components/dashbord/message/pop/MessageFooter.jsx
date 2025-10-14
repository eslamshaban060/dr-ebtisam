import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const MessageFooter = ({ texts, messagecont, setShow, show }) => {
  const [reply, setReply] = useState("");
  return (
    <div>
      <div className="bg-[var(--lg)] flex items-center justify-between gap-3 px-6 py-4">
        <button
          onClick={() => {
            const baseMessage = `هذه الرسالة ردًا على رسالتك التي أرسلتها من خلال موقع دكتورة ابتسام ندا:\n\n"${reply}"`;
            const encoded = encodeURIComponent(baseMessage);
            window.open(
              `https://wa.me/+2${messagecont.whatsapp}?text=${encoded}`,
              "_blank"
            );
            setShow(!show);
          }}
          className="bg-[var(--nv)] hover:bg-[var(--yl)] hover:text-[var(--db)] text-[var(--wh)] rounded-xl p-3 transition-all duration-300 shadow-[var(--shadow-1)]"
        >
          <FaPaperPlane className="text-lg" />
        </button>

        <input
          onChange={(e) => {
            setReply(e.target.value);
          }}
          value={reply}
          type="text"
          placeholder={texts.placeholder}
          className="flex-1 border-0 outline-none rounded-xl px-4 py-3 bg-[var(--wh)] text-[var(--bl)] placeholder-[#bbb]"
        />
      </div>
    </div>
  );
};

export default MessageFooter;
