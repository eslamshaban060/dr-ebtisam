"use client";
import { useState } from "react";
import WelcomeMessage from "../../../../components/ar-components/dashbord/message/WelcomeMessage";
import NoMessages from "../../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../../components/ar-components/dashbord/message/MessageList";
import { supabase } from "../../../../utils/supabase/supabase";
import { useEffect } from "react";

const NotificationPage = () => {
  const [notification, setMyNotification] = useState([]);

  useEffect(() => {
    async function GetMessages() {
      const { data, error } = await supabase.from("notification").select("*");
      if (error) {
        throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
      } else {
        setMyNotification(data);
      }
    }
    GetMessages();
  }, []);

  async function handleDelete(id) {
    try {
      const { data, error } = await supabase
        .from("notification")
        .delete()
        .match({ id: id });

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
        title="Notifications"
        desc="Welcome to the Notifications section! Here, you can view your latest alerts."
      />
      {notification.length === 0 ? (
        <NoMessages
          message1="No notifications at the moment!"
          message2="You have no notifications. Updates will appear here"
          sr="notifiy"
        />
      ) : (
        <MessageList
          page="notification"
          messages={notification}
          onDelete={handleDelete}
          lan="en"
        />
      )}
    </section>
  );
};

export default NotificationPage;
