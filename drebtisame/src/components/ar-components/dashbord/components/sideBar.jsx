"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import logo from "../../../../../public/user/image.png";
import { Menu, X } from "lucide-react";

const SideBar = ({ Links, title, lan, user }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      {/* logout popup  */}
      {show && (
        <div
          className={`${show ? "transform-[scale(1)]" : "transform-[scale(0)]"}  fixed transition   inset-0 bg-black/40 z-50 backdrop-blur-[4px] flex justify-center items-center `}
        >
          <div className="box flex bg-[var(--wh)] lg:w-[clamp(300px,40dvw,100%)] w-[clamp(300px,80dvw,100%)] rounded-3xl h-80 p-10 gap-10 items-center justify-evenly flex-col ">
            <p className=" w-full lg:w-[80%] text-shadow-lg text-center text-[var(--nv)] font-semibold lg:text-3xl text-2xl leading-6">
              هل أنت متأكد أنك تريد تسجيل الخروج
            </p>
            <div className="btns flex gap-5 sm:gap-12">
              <button
                className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--nv)] text-[var(--wh)] "
                onClick={() => {
                  alert();
                  setShow(false);
                }}
              >
                متأكد
              </button>
              <button
                className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--wh)] text-[var(--nv)] "
                onClick={() => setShow(false)}
              >
                الغاء
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toggle Button (mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className={`lg:hidden  ${open ? "hidden" : "block"} mt-3 absolute z-30  bg-[var(--nv)]  top-5  right-5 text-[var(--wh)] p-2 md:p-3 rounded-lg shadow-lg`}
      >
        {open ? <X size={32} className=" hidden" /> : <Menu size={32} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed  top-0  lg:top-5 pb-[20px] ${lan === "ar" ? "right-[-5px]" : "left-[-5px]"}  h-[100%] 
          lg:h-[80%] w-[clamp(280px,350px,100%)]  bg-[var(--lg)] lg:rounded-2xl  flex flex-col gap-3 shadow-xl transform transition-transform duration-300 z-20
        ${open ? "translate-x-0" : lan === "en" ? "translate-x-[-100%]" : "translate-x-full"} 
        lg:static lg:translate-x-0 lg:w-sm lg:max-w-full`}
      >
        <div
          className={`bg-[var(--nv)] w-[50px] text-white ${lan === "ar" ? "left-[10px]" : "right-[10px]"}  top-[10px]  justify-center flex lg:hidden items-center h-[50px] z-50 rounded-full absolute`}
          onClick={() => setOpen(!open)}
        >
          <X />
        </div>
        {/* Logo Section */}
        <div className="logo flex p-3 pb-5 flex-col  items-center gap-3 justify-center">
          <img src={logo.src} alt="Logo" className="w-[88px] h-[88px]" />
          <h2 className="w-[70%] text-shadow-lg text-center text-[var(--nv)] font-semibold text-xl leading-6">
            {title}
          </h2>
        </div>

        <hr className="text-[var(--gr)]" />

        {/* Links */}

        <ul className="flex flex-col h-[100%]   overflow-y-scroll gap-5 p-5">
          {Links.map((link) => (
            <li
              key={link.id}
              className={`w-full h-16 shadow-sm rounded-xl ${link.id === 6 ? (user.role === "owner" ? "block" : "hidden") : "block"}`}
              onClick={() => setOpen(false)}
            >
              {link.func ? (
                <button
                  onClick={() => setShow(true)}
                  className="p-3.5 rounded-xl transition w-full flex gap-4 items-center border text-lg leading-[24px] text-[var(--bl)]/50 h-full hover:bg-[var(--re)] hover:text-[var(--wh)]"
                >
                  {link.logo} <span>{link.name}</span>
                </button>
              ) : (
                <NavLink href={link.path}>
                  {link.logo} <span>{link.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (when sidebar is open on mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-10 lg:hidden"
        />
      )}
    </>
  );
};

export default SideBar;
