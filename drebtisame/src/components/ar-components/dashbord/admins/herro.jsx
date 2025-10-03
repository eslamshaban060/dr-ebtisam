import React from "react";

const Herro = ({ title, desc, butt }) => {
  return (
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
        <div className=" bg-[var(--nv)] cursor-pointer hover:bg-[var(--db)] hover:border-white hover:border-2 box-border text-white px-4 py-3 rounded-lg">
          {butt}
        </div>
      </div>
    </div>
  );
};

export default Herro;
