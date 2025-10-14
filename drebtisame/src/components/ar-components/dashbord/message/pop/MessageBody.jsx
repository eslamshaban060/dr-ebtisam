import React from "react";

const MessageBody = ({ messagecont, time, page }) => {
  return (
    <div>
      <div className="p-10 space-y-8 text-[var(--gry)]">
        <div>
          <p className="text-[20px] font-medium text-[var(--db)] mb-3">
            {messagecont.name}
          </p>
          <div className="bg-[var(--lb)] text-[18px] text-[var(--db)] rounded-lg p-4 text-base leading-relaxed w-fit max-w-[90%]">
            {messagecont.messagecontent}
          </div>
        </div>

        <div>
          <div className="bg-[var(--tb)]/20  text-[13px] text-center text-[var(--db)] rounded-lg p-3 text-base leading-relaxed w-fit max-w-full">
            {page === "notificition"
              ? time
              : "ملحوظه سوف يتم ارسال ردك على هذه الرساله الى وتساب من خلال رقم تلفون العياده الى المريض"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBody;
