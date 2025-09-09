import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" bg-amber-800 text-3xl text-white  py-[50px]">
      hello with you ya shabab and are you ok ?{" "}
      <Link href="/" className=" block">
        {" "}
        go to arabic{" "}
      </Link>
    </div>
  );
};

export default page;
