"use client";
import { useState } from "react";
import WelcomeMessage from "../../../../components/ar-components/dashbord/message/WelcomeMessage";
import NoMessages from "../../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../../components/ar-components/dashbord/message/MessageList";
import { supabase } from "../../../../utils/supabase/supabase";
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
        title="Messages"
        desc=" Hello Doctor, in this section you can view your patients' questions and respond to them easily at any time."
      />
      {myMessages.length === 0 ? (
        <NoMessages
          message1="No Messages at the moment!"
          message2="You have no messages. Updates will appear here"
          sr="message"
        />
      ) : (
        <MessageList
          page="massages"
          messages={myMessages}
          onDelete={handleDelete}
          lan="en"
        />
      )}
    </section>
  );
};

export default MessagePage;
