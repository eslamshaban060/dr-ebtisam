import React from "react";

const UserButton = ({ value, color }) => {
  return (
    <div
      className={` w-[100%] font-medium hover:border-[3px] cursor-pointer flex items-center justify-center !mt-3 text-[20px] rounded-[10px]  h-[65px] ${
        color == "lb"
          ? "bg-[var(--lb)] border-[var(--gr)] "
          : "bg-[var(--gr)] border-[var(--lb)] "
      } text-[var(--db)] `}
    >
      {value}
    </div>
  );
};

export default UserButton;
