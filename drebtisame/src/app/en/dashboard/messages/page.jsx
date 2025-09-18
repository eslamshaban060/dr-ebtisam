"use client";
import { enMessages } from "../../../../components/ar-components/dashboard/components/data";
import { useState } from "react";
import noMessagePic from "../../../../../public/user/no-message.png";
const MessagePage = () => {
  const [myMessages, setMyMessage] = useState(enMessages);
  if (myMessages.length === 0) {
    return (
      <>
        <section className="h-[75dvh] overflow-auto  bg-[var(--lb)] p-2">
          <div className="mwm   w-full shadow-[var(--shadow-1)]  min-h-[134px] flex flex-col  justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl ">
            <h2 className=" md:text-3xl text-xl leading-[24px] text-shadow-lg font-semibold  text-[var(--nv)]">
              الرسائل
            </h2>
            <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%] ">
              مرحباً دكتورة️، من خلال هذا القسم يمكنك الاطّلاع على أسئلة مرضاك
              والإجابة عليها بسهولة وفي أي وقت.
            </p>
          </div>
          <div className="content w-full mt-12 flex flex-col px-10 rounded-2xl pt-12 pb-10 gap-10  items-center bg-[var(--lg)]/40 ">
            <img src={noMessagePic.src} alt="" className="lg:max-w-[375px]" />
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <h2 className="font-semibold md:text-3xl sm:text-xl text-lg text-[var(--nv)] ">
                No Messages at the moment!
              </h2>
              <p className=" md:text-xl text-sm text-[var(--nv)] ">
                You have no messages. Updates will appear here{" "}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <section className="h-[75dvh] overflow-auto  bg-[var(--lb)] p-2">
        {/* welcome message  */}
        <div className="mwm   w-full shadow-[var(--shadow-1)]  min-h-[134px] flex flex-col  justify-center items-center p-10 gap-5 md:py-0 py-4 rounded-2xl ">
          <h2 className=" md:text-3xl text-xl leading-[24px] text-shadow-lg font-semibold  text-[var(--nv)]">
            Messages
          </h2>
          <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%] ">
            Hello Doctor, in this section you can view your patients' questions
            and respond to them easily at any time.{" "}
          </p>
        </div>
        <div className="w-full mt-12 flex flex-col px-10 rounded-3xl pt-12 pb-5 gap-10 justify-center items-center bg-[var(--lg)]/40 ">
          {myMessages.map((message) => (
            <div
              key={message.id}
              className="flex w-full cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)]  justify-between items-center min-h-[85px] py-6 px-5 bg-[var(--lb-2)]/45 rounded-xl"
            >
              <span className="md:text-sm text-[12px]">{message.name}</span>
              <span className="md:text-sm text-[12px]">{message.date}</span>
              <span className="md:text-sm text-[12px]">{message.message}</span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setMyMessage((prev) =>
                      prev.filter((el) => el.id !== message.id)
                    )
                  }
                  className="min-w-[75px] border flex-1 min-h-[30px] hover:shadow-[var(--shadow-1)] transition cursor-pointer hover:transform-[scale(1.1)] active:transform-[scale(0.95)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[8px] font-semibold text-[7px] px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
                <button className="min-w-[75px] cursor-pointer transition hover:shadow-[var(--shadow-1)] hover:transform-[scale(1.1)] active:transform-[scale(0.95)] bg-[var(--gr)] min-h-[30px] flex-1 md:text-[8px] font-semibold text-[7px] text-white px-3 py-1 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default MessagePage;
