"use client";
import React from "react";
import { useEffect, useState } from "react";
import Header from "../../../../components/ar-components/user/Header";
import VerficationForm from "../../../../../src/components/ar-components/user/verification/veriticationForm";
const page = () => {
  const [savedOtp, setSavedOtp] = useState(null);

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    setSavedOtp(otp);
  }, []);
  return (
    <div className=" w-[100vw] h-[110vh] md:h-[100vh] bg-[url('/user/userbg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 h-[110vh] md:h-[100vh] bg-[#08294a]/10 backdrop-blur-sm"></div>
      <div className=" relative  flex items-center justify-center z-10 w-full h-[100%]">
        <div className=" max-w-[650px]  flex flex-col gap-5 w-[90%] h-auto min-h-[430px] bg-transparent">
          {/* top part in the login page  */}
          <div>
            <Header
              describtion="الرجاء إدخال الكود المكوّن من 5 أرقام لتأكيد هويتك."
              title="استعادة كلمة المرور"
            />
          </div>
          <div>
            <VerficationForm otp={savedOtp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
