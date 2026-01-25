"use client";
import { useState, useEffect } from "react";
import NoMessages from "../../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../../components/ar-components/dashbord/message/MessageList";
import Herro from "../../../../components/ar-components/dashbord/admins/herro";
import { supabase } from "../../../../utils/supabase/supabase";
const AdminPage = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function GetUsers() {
      const { data, error } = await supabase.from("user").select("*");
      if (error) {
        throw new Error(" ");
      } else {
        setusers(data);
      }
    }
    GetUsers();
  }, []);

  async function handleDelete(id, mail) {
    try {
      const { data, error } = await supabase
        .from("user")
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
    <section className="h-[75dvh] w-[100%]  overflow-x-hidden overflow-y-auto bg-[var(--lb)] p-2">
      <Herro
        title="Admin Management"
        desc="This section is dedicated to supervisor management, where only Dr. Ebtessam  can add or remove supervisors."
        butt="Add Admin"
        lan="en"
      />
      {users.length === 0 ? (
        <NoMessages
          message1="There is no admin at the moment"
          message2="You will find all admins here as soon as they are added"
        />
      ) : (
        <MessageList
          messages={users}
          lan="en"
          page="admin"
          onDelete={handleDelete}
        />
      )}
    </section>
  );
};

export default AdminPage;
