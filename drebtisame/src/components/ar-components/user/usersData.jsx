"use client";
import React from "react";
import { supabase } from "../../../utils/supabase/supabase";
import { useState, useEffect } from "react";
import LoginForm from "./loginForm";

const UsersData = () => {
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
  return (
    <div>
      <LoginForm users={users} />
    </div>
  );
};

export default UsersData;
