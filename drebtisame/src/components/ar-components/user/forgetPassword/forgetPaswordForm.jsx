"use client";
import { React } from "react";
import { useState } from "react";
import UserButton from "../button";
import { useRouter } from "next/navigation";
import { poppins } from "../../../../app/layout";
import Link from "next/link";
import LoadingOverlay from "../loading";

const ForgetPasswordForm = ({ users }) => {
  const [to, setto] = useState("");
  const [valedEmail, setvaledEmail] = useState(true);
  const [status, setStatus] = useState(false);

  const router = useRouter();

  // generat rondom otp
  function generateOTP(length = 5) {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }

  const OTP_CODE = generateOTP();

  const message = `<div style="min-height:100vh; display:flex; align-items:center; justify-content:center; background-color:#f4f4f4; padding:24px;margin:auto">
  <div style="width:100%; max-width:600px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.15); overflow:hidden; background-color:#ffffff; margin:0; padding:0; font-family:Arial, sans-serif;">

    <!-- Logo -->
    <div style="text-align:center; padding:16px; background:#ffffff;">
      <img src="https://revmylydbwczsujiexea.supabase.co/storage/v1/object/sign/users/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNTkwMDdhOC04ZTdiLTRhY2ItYTM0My05Mzc1ZWI3Y2I3ZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2Vycy9sb2dvLnBuZyIsImlhdCI6MTc1NzU4NTA4OCwiZXhwIjozMzM0Mzg1MDg4fQ.SriNuxzIvcXpbj1ZGZybajn3ZHB9Cs5sWC_rLSIgIps" alt="Clinic Logo" width="100" height="100" style="display:block; margin:0 auto;" />
    </div>

    <!-- Header -->
    <div style="text-align:center; font-weight:bold; color:#ffffff; padding:20px; font-size:20px; background-color:#004080;">
      إعادة تعيين كلمة المرور
    </div>

    <!-- Body -->
    <div style="padding:24px; color:#333333; font-size:16px; line-height:1.6;">
      <p style="margin-bottom:16px;text-align:center">مرحباً 👋،</p>
      <p style="margin-bottom:16px;text-align:center">
        لقد طلبت إعادة تعيين كلمة المرور الخاصة بك. من فضلك استخدم الكود التأكيدي أدناه لإتمام العملية:
      </p>

      <div style="text-align:center; margin:24px 0;">
        <span style="display:inline-block; background-color:#1f8a70; color:#ffffff; font-size:22px; font-weight:bold; letter-spacing:3px; padding:16px 40px; border-radius:8px; box-shadow:0 3px 6px rgba(0,0,0,0.2);">
          ${OTP_CODE}
        </span>
      </div>

      <p style="text-align:center; margin-bottom:8px;">
        ⚠️ هذا الكود صالح لمدة <strong>10 دقائق</strong> فقط.
      </p>
      <p style="text-align:center;">
        إذا لم تطلب إعادة تعيين كلمة المرور، يمكنك تجاهل هذا البريد الإلكتروني.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align:center; font-size:12px; color:#333333; padding:16px;">
      © 2025 موقع دكتورة ابتسام ندا – جميع الحقوق محفوظة.
    </div>
  </div>
</div>
`;
  const subject = "🔑 كود تأكيد إعادة تعيين كلمة المرور";

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus(true);
    if (users.length >= 1) {
      const user = users.filter((person) => person.email === to.trim());
      if (user.length >= 1) {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to, subject, message }),
        });

        if (res.ok) {
          setStatus(false);
          router.push("/forget-password/verification");
          localStorage.setItem("otp", OTP_CODE);
          localStorage.setItem("userMail", to);
        } else {
          setStatus(false);
          throw new Error(
            "حدث خطأ أثناء إرسال الرمز التأكيدي، الرجاء المحاولة مرة أخرى"
          );
        }
      } else {
        setStatus(false);
        setvaledEmail(false);
      }
    } else {
      throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
    }
  };

  return (
    <div className="w-[100%]   relative text-[var(--wh)]">
      <form action="" className=" m-5 flex flex-col gap-5">
        {/* to handel email  */}
        <div className=" flex flex-col gap-2">
          <label
            className={`font-[400] text-[20px] overflow-hidden `}
            htmlFor=""
          >
            البريد الإلكتروني
          </label>
          <input
            className={` outline-0 focus:border-[3px] focus:text-[17px] w-[100%] border-[1px]  rounded-[10px] h-[65px] !px-[40px] ${
              valedEmail ? " border-[var(--wh)]" : "border-[var(--re)]"
            }`}
            value={to}
            onChange={(e) => {
              setto(e.target.value);
            }}
            type="email"
            placeholder=" الرجاء إدخال بريدك الإلكتروني"
          />
          <div
            className={`${valedEmail ? " hidden" : "block"} text-[var(--re)] `}
          >
            <p className={poppins.className}> الايميل غير مسجل فى الموقع </p>
          </div>
        </div>

        <div className=" flex gap-2 md:gap-5 w-[100%]">
          <div
            onClick={(e) => {
              submitForm(e);
            }}
            className="transform w-[100%] hover:!p-0  !p-1"
          >
            <UserButton color="gr" value="متابعة" />
          </div>
          <Link href="/login" className=" transform w-[100%] hover:!p-0  !p-1">
            <UserButton color="lb" value="تراجع" />
          </Link>
        </div>
      </form>
      <div
        className={`fixed w-[100vw] h-[100vh] left-0 top-0 z-40 ${
          status ? "block" : "hidden"
        }`}
      >
        <LoadingOverlay />
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
