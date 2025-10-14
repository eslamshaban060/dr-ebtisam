import noMessagePic from "../../../../../public/user/no-message.png";
import noNotification from "../../../../../public/dashbord/notification.png";
const NoMessages = ({ message1, message2, sr }) => (
  <div className="content w-full mt-12 flex flex-col px-10 rounded-2xl pt-12 pb-10 gap-10 items-center bg-[var(--lg)]/40">
    <img
      src={sr === "message" ? noMessagePic.src : noNotification.src}
      alt="no messages"
      className="lg:max-w-[375px]"
    />
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <h2 className="font-semibold md:text-3xl sm:text-xl text-lg text-[var(--nv)]">
        {message1}
      </h2>
      <p className="md:text-xl text-sm text-[var(--nv)]">{message2}</p>
    </div>
  </div>
);

export default NoMessages;
