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
import { useState } from "react";

export default function ContactForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");
    const message = `
    <div style="font-family:Arial,sans-serif; background-color:#f2f3f7; padding:24px;">
      <div style="max-width:600px; margin:auto; background-color:#fff; border-radius:12px; box-shadow:0 6px 16px rgba(0,0,0,0.15); overflow:hidden;">
        <div style="text-align:center; padding:20px; background-color:#fff;">
          <img src="https://via.placeholder.com/150x60.png?text=Logo" alt="Logo" style="max-height:64px;" />
        </div>
        <div style="text-align:center; font-weight:bold; font-size:1.25rem; color:#fff; background-color:#103463; padding:20px;">
          إعادة تعيين كلمة المرور
        </div>
        <div style="padding:24px; color:#08294a; font-size:16px; line-height:1.8;">
          <p>مرحباً 👋،</p>
          <p>لقد طلبت إعادة تعيين كلمة المرور الخاصة بك. استخدم الكود التأكيدي أدناه:</p>
          <p style="text-align:center; font-size:2rem; font-weight:bold; background-color:#103463; color:#fff; padding:16px; border-radius:8px; display:inline-block; margin:20px 0;">
            
          </p>
          <p style="text-align:center;">⚠️ هذا الكود صالح لمدة <strong>10 دقائق</strong> فقط.</p>
          <p style="text-align:center;">إذا لم تطلب إعادة تعيين كلمة المرور، يمكنك تجاهل هذا البريد الإلكتروني.</p>
        </div>
        <div style="text-align:center; font-size:12px; color:#08294a; background-color:#f2f3f7; padding:15px;">
          ©  موقع دكتورة ابتسام ندا – جميع الحقوق محفوظة.
        </div>
      </div>
    </div>
  `;

    // const res = await fetch("/api/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ to, subject, message }),
    // });

    // if (res.ok) setStatus("Email sent successfully!");
    // else setStatus("Failed to send email.");
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

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send Email
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
