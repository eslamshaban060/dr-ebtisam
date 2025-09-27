import React from "react";
import Herro from "../../../components/ar-components/dashbord/admins/herro";

const page = () => {
  return (
    <div className="w-[100%] flex flex-col gap-5 items-center justify-center ">
      <section className="w-[100%] rounded-2xl">
        <Herro
          title="إدارة المشرفين"
          desc="هذا القسم خاص باداره المشرفين حيث يمكن لدكتور ابتسام فقط اضافه وحذف المشرفين ."
          butt="إضافة مشرف"
        />
      </section>
    </div>
  );
};

export default page;
