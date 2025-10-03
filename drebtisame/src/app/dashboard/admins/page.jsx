"use client";
import { useState } from "react";
import NoMessages from "../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../components/ar-components/dashbord/message/MessageList";
import { messages } from "../../../components/ar-components/dashboard/components/data";
import Herro from "../../../components/ar-components/dashbord/admins/herro";
import Title from "../../../components/ar-components/dashbord/admins/title";

const MessagePage = () => {
  const [myMessages, setMyMessage] = useState(messages);

  const handleDelete = (id) => {
    setMyMessage((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
      <Herro
        title="إدارة المشرفين"
        desc="هذا القسم خاص باداره المشرفين حيث يمكن لدكتور ابتسام فقط اضافه وحذف المشرفين ."
        butt="إضافة مشرف"
      />

      <div className="mt-10">
        <Title />
      </div>
      {myMessages.length === 0 ? (
        <NoMessages
          message1="لا يوجد أي مشرف حالياً"
          message2="ستجدين هنا كل المشرفين فور إضافتهم"
        />
      ) : (
        <MessageList
          messages={myMessages}
          page="admin"
          onDelete={handleDelete}
        />
      )}
    </section>
  );
};

export default MessagePage;
