// "use client";
// import React from "react";
// import { supabase } from "../../../utils/supabase/supabase";
// import { useState, useEffect } from "react";
// import LoginForm from "./loginForm";

// const UsersData = () => {
//   const [users, setusers] = useState([]);

//   useEffect(() => {
//     async function GetUsers() {
//       const { data, error } = await supabase.from("user").select("*");
//       if (error) {
//         throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
//       } else {
//         setusers(data);
//       }
//     }
//     GetUsers();
//   }, []);
//   return (
//     <div>
//       <LoginForm users={users} />
//     </div>
//   );
// };

// export default UsersData;
"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase/supabase";
import LoginForm from "./loginForm";

export default function UsersData() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function GetUsers() {
      const { data, error } = await supabase.from("user").select("*");

      if (error) {
        setErrorMsg("حدثت مشكلة أثناء جلب بيانات المشرفين.");
        return;
      }

      setUsers(data || []);
    }

    GetUsers();
  }, []);

  return (
    <div>
      {errorMsg && <p className="text-red-600 text-center mb-3">{errorMsg}</p>}
      <LoginForm users={users} />
    </div>
  );
}
