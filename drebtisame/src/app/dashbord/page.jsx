import React from "react";
import Link from "next/link";
import ProtectedRoutes from "../../protected/protectedRoutes";
const Dashbord = () => {
  return (
    <div className=" bg-[var(--gr)] flex  flex-col gap-5 justify-center items-center w-[100vw] h-[100vh] ">
      <h2 className=" text-white font-black overflow-hidden text-4xl">
        انت الان فى صفحه الداش بورد الخاصة بالموقع تم اثبات هويتك بنجاح
      </h2>
      <Link className=" block !px-5 rounded-xl bg-white !py-3" href="/login">
        الذهاب الى تسجيل الدخول
      </Link>
    </div>
  );
};

export default function ProtecedDashbord() {
  return (
    <ProtectedRoutes>
      <Dashbord />
    </ProtectedRoutes>
  );
}
