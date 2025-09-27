import React from "react";

const Herro = ({ title, desc, butt }) => {
  return (
    <div className="bg-[url('/dashbord/herro.jpg')] h-[250px] sm:h-[220px] rounded-2xl w-[100%] bg-cover relative bg-center  flex justify-center items-center">
      <div className="absolute inset-0 w-[100%]  h-[250px] sm:h-[220px] bg-[#08294a]/50 backdrop-blur-sm !rounded-2xl ">
        <div className=" text-white  flex flex-col gap-3 sm:gap-4 items-center py-5 text-center ">
          <h2 className=" font-bold  text-3xl sm:text-4xl">{title} </h2>
          <p className=" text-lg sm:text-xl max-w-[90%] md:max-w-[60%] sm:max-w-[80%] ">
            {desc}
          </p>
          <div className=" bg-[var(--nv)] cursor-pointer hover:bg-[var(--db)] text-white px-4 py-3 rounded-lg">
            {butt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herro;
