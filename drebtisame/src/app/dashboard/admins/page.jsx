"use client";
import { useState, useEffect } from "react";
import NoMessages from "../../../components/ar-components/dashbord/message/NoMessages";
import MessageList from "../../../components/ar-components/dashbord/message/MessageList";
import Herro from "../../../components/ar-components/dashbord/admins/herro";

import { supabase } from "../../../utils/supabase/supabase";

const AdminPage = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function GetUsers() {
      const { data, error } = await supabase.from("user").select("*");
      if (error) {
        throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
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
        title="إدارة المشرفين"
        desc="هذا القسم خاص باداره المشرفين حيث يمكن لدكتور ابتسام فقط اضافه وحذف المشرفين ."
        butt="إضافة مشرف"
        lan="ar"
      />
      {users.length === 0 ? (
        <NoMessages
          message1="لا يوجد أي مشرف حالياً"
          message2="ستجدين هنا كل المشرفين فور إضافتهم"
        />
      ) : (
        <MessageList
          messages={users}
          page="admin"
          lan="ar"
          onDelete={handleDelete}
        />
      )}
    </section>
  );
};

export default AdminPage;
