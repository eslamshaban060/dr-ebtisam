import React from "react";

const Popup = ({ show, setShow, fun, text, id, email, lan }) => {
  return (
    <div>
      <div
        className={`${show ? "transform-[scale(1)]" : "transform-[scale(0)]"} fixed inset-0 z-50  transition  bg-black/40  backdrop-blur-[4px] flex justify-center items-center `}
      >
        <div className="box flex bg-[var(--wh)] lg:w-[clamp(300px,40dvw,100%)] w-[clamp(300px,90dvw,100%)] rounded-3xl h-80 p-9 gap-5 items-center justify-evenly flex-col ">
          <p className=" w-full lg:w-[80%] font-bold text-center text-[var(--nv)] lg:text-4xl text-3xl leading-12">
            {text}
          </p>
          <div className="btns flex gap-5 sm:gap-12">
            <button
              className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px]  hover:bg-[red] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--nv)] text-[var(--wh)] "
              onClick={() => {
                id ? fun(id, email) : fun();

                setShow(false);
              }}
            >
              {lan === "ar" ? "متاكد" : "Sure"}
            </button>
            <button
              className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--wh)] hover:bg-[var(--nv)] hover:text-[var(--wh)] text-[var(--nv)] "
              onClick={() => setShow(false)}
            >
              {lan === "en" ? "Cancel" : "الغاء"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
