import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" bg-[var(--gr)] flex justify-center items-center w-[100vw] h-[100vh] ">
      <Link className=" block !px-5 rounded-xl bg-white !py-3" href="/login">
        الذهاب الى تسجيل الدخول
      </Link>
      <Link className=" block !px-5 rounded-xl bg-white !py-3" href="/dashboard">
      dashboard      </Link>
    </div>
  );
};

export default page;
