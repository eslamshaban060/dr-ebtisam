import React from "react";
import AddAdminModal from "./addAdmin/AddAdminModal";
import { useState } from "react";

const Herro = ({ title, desc, butt, lan }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arabicTexts = {
    title: "إضافة مشرف",
    fullName: "الاسم الكامل",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    submitBtn: "إضافة مشرف",
    validating: "جارٍ التحقق...",
    fixErrors: "يرجى تصحيح الأخطاء المحددة.",
    creating: "جارٍ إنشاء الحساب...",
    authError: "خطأ في المصادقة",
    dbError: "خطأ في قاعدة البيانات",
    success: "تمت إضافة المشرف بنجاح.",
    done: "تم",
  };
  const englishTexts = {
    title: "Add Supervisor",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    password: "Password",
    submitBtn: "Add Supervisor",
    validating: "Validating...",
    fixErrors: "Please correct the highlighted errors.",
    creating: "Creating account...",
    authError: "Authentication error",
    dbError: "Database error",
    success: "Supervisor added successfully.",
    done: "Done",
  };

  return (
    <div>
      <div className=" h-[270px]  rounded-2xl w-[100%] bg-cover relative bg-center  flex justify-center items-center">
        <img
          src="/dashbord/herro.jpg"
          className=" w-[100%] absolute z-0 !rounded-2xl h-[100%]"
          alt=""
        />
        <div className="absolute inset-0 w-[100%]  h-[270px]  bg-[#08294a]/20 backdrop-blur-sm !rounded-2xl "></div>
        <div className=" text-white  relative z-10 flex flex-col gap-3 sm:gap-4 items-center py-5 text-center ">
          <h2 className=" font-bold  text-3xl sm:text-4xl">{title} </h2>
          <p className=" text-lg sm:text-xl max-w-[90%] md:max-w-[70%] sm:max-w-[80%] ">
            {desc}
          </p>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=" bg-[var(--nv)] cursor-pointer hover:bg-[var(--db)] hover:border-white hover:border-2 box-border text-white px-4 py-3 rounded-lg"
          >
            {butt}
          </div>
        </div>
      </div>
      <div>
        <AddAdminModal
          texts={lan === "ar" ? arabicTexts : englishTexts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          lan={lan}
        />
        ;
      </div>
    </div>
  );
};

export default Herro;
