import React from "react";
import Image from "next/image";
import Logo from "../../../../public/user/logo.png";
import { poppins } from "./../../../../src/app/layout";

const Header = ({ title, describtion }) => {
  return (
    <div className=" w-[100%]">
      {/* logo */}
      <div className=" flex justify-center items-center w-[100%]">
        <Image
          src={Logo}
          alt="logo"
          className=" block  mx-auto w-[120px] h-[120px]"
        />
      </div>
      <div className=" text-center !overflow-hidden text-[var(--wh)]">
        <h2 className="text-[28px] sm:text-[33px] !overflow-hidden md:text-[38px] font-semibold ">
          {title}
        </h2>
        <p
          className={`text-[18px] md:text-[26px] !pt-1 font-[200] opacity-60 ${poppins.className} `}
        >
          {describtion}
        </p>
      </div>
    </div>
  );
};

export default Header;
