// import React from "react";
// import Link from "next/link";

// const page = () => {
//   return (
//     <div className=" bg-amber-800 text-3xl text-white  py-[50px]">
//       السلام عليكم يا شباب عاملين ايه
//       <button className=" block">
//         <Link href="/en">الذهاب للانجليزيه </Link>
//       </button>
//     </div>
//   );
// };

// export default page;
"use client";

// import { useEffect, useState } from "react";
// import { supabase } from "../utils/supabase/supabase";

// export default function TasksPage() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     async function loadTasks() {
//       const { data, error } = await supabase.from("user").select("*");
//       if (error) {
//         console.log("88888888888888888888888888888888888888888");
//         console.error("Error fetching tasks:", error.message);
//       } else {
//         setTasks(data);
//         console.log("ddddddddddddddddddddddddddd");
//         console.log(data);
//       }
//     }

//     loadTasks();
//   }, []);

//   return (
//     <div>
//       <h1>My Tasks</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>{task.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useState } from "react";

export default function ContactForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message }),
    });

    if (res.ok) setStatus("Email sent successfully!");
    else setStatus("Failed to send email.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10"
    >
      <input
        type="email"
        placeholder="Recipient Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 rounded h-32"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send Email
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
