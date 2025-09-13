"use client";
import React from "react";
import { supabase } from "../../../../utils/supabase/supabase";
import { useState, useEffect } from "react";
import ForgetPasswordForm from "./forgetPaswordForm";

const UsersData = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function GetUsers(params) {
      const { data, error } = await supabase.from("user").select("*");
      if (error) {
        throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
      } else {
        setusers(data);
      }
    }
    GetUsers();
  }, []);
  return (
    <div>
      <ForgetPasswordForm users={users} />
    </div>
  );
};

export default UsersData;
