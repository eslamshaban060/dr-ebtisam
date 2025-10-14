"use client";
import { useState } from "react";
import WelcomeMessage from "../../../components/ar-components/dashbord/message/WelcomeMessage";
import NoMessages from "../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../components/ar-components/dashbord/message/MessageList";
import { supabase } from "../../../utils/supabase/supabase";
import { useEffect } from "react";

const MessagePage = () => {
  const [myMessages, setMyMessage] = useState([]);

  useEffect(() => {
    async function GetMessages() {
      const { data, error } = await supabase.from("messages").select("*");
      if (error) {
        throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
      } else {
        setMyMessage(data);
      }
    }
    GetMessages();
  }, []);

  async function handleDelete(id, mail) {
    try {
      const { data, error } = await supabase
        .from("messages")
        .delete()
        .match({ id: id, email: mail });

      if (error) {
        throw new Error(error.message);
      } else {
        window.location.reload();
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  return (
    <section className="h-[75dvh] overflow-y-auto bg-[var(--lb)] p-2">
      <WelcomeMessage
        title="الرسائل"
        desc="   مرحباً دكتورة️، من خلال هذا القسم يمكنك الاطّلاع على أسئلة مرضاك والإجابة
      عليها بسهولة وفي أي وقت."
      />
      {myMessages.length === 0 ? (
        <NoMessages
          message1=" لا توجد رسائل في الوقت الحالي!"
          message2="ستجدين هنا كل الرسائل فور وصولها من المرضى"
          sr="message"
        />
      ) : (
        <MessageList
          page="massages"
          messages={myMessages}
          onDelete={handleDelete}
          lan="ar"
        />
      )}
    </section>
  );
};

export default MessagePage;
