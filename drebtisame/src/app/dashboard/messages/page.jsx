"use client";
import { useState } from "react";
import WelcomeMessage from "../../../components/ar-components/dashbord/message/WelcomeMessage";
import NoMessages from "../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../components/ar-components/dashbord/message/MessageList";
import { messages } from "../../../components/ar-components/dashboard/components/data";

const MessagePage = () => {
  const [myMessages, setMyMessage] = useState(messages);

  const handleDelete = (id) => {
    setMyMessage((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
      <WelcomeMessage />
      {myMessages.length === 0 ? (
        <NoMessages
          message1=" لا توجد رسائل في الوقت الحالي!"
          message2="ستجدين هنا كل الرسائل فور وصولها من المرضى"
        />
      ) : (
        <MessageList messages={myMessages} onDelete={handleDelete} />
      )}
    </section>
  );
};

export default MessagePage;
