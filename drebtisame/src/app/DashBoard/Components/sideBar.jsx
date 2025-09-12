"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import logo from "../../../../public/user/image.png";
import {
  LayoutGrid,
  File,
  MessageCircleMore,
  Pencil,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [show,setShow]=useState(false)
  const Links = [
    {
      id: 1,
      name: "لوحة التحكم",
      logo: <LayoutGrid />,
      path: "/DashBoard/ControlPanel",
    },
    { id: 2, name: "المقالات", logo: <File />, path: "/DashBoard/articles" },
    {
      id: 3,
      name: "الرسائل",
      logo: <MessageCircleMore />,
      path: "/DashBoard/messages",
    },
    { id: 4, name: "التقييمات", logo: <Pencil />, path: "/DashBoard/reviews" },
    {
      id: 5,
      name: "الإعدادات",
      logo: <Settings />,
      path: "/DashBoard/settings",
    },
    {
      id: 6,
      name: "تسجيل الخروج",
      logo: <LogOut />,
      func: () => alert("Logged out!"),
    },
  ];

  return (
    <>
    {/* logout popup  */}
    {show && (<div className={`${show? "transform-[scale(1)]":"transform-[scale(0)]"}  fixed transition   inset-0 bg-black/40 z-50 backdrop-blur-[4px] flex justify-center items-center `}>
    <div className="box flex bg-[var(--wh)] lg:w-[clamp(300px,40dvw,100%)] w-[clamp(300px,80dvw,100%)] rounded-3xl h-80 p-10 gap-10 items-center justify-evenly flex-col ">
      <p className=" w-full md:w-[80%] text-shadow-lg text-center text-[var(--nv)] font-semibold lg:text-3xl text-2xl leading-6">  هل أنت متأكد أنك تريد تسجيل الخروج</p>
      <div className="btns flex gap-5 sm:gap-12">
        <button className="rounded-xl md:text-xl border-2 text-lg  leading-[24px] md:py-5 md:px-10 px-8 py-3 bg-[var(--nv)] text-[var(--wh)] "onClick={()=> {alert() 
          setShow(false)
        }}>متأكد</button>
        <button className="rounded-xl md:text-xl border-2 text-lg  leading-[24px] md:py-5 md:px-10 px-8 py-3 bg-[var(--wh)] text-[var(--nv)] " onClick={()=> setShow(false)} >الغاء</button>
      </div>
    </div>
    </div>)}
          {/* Toggle Button (mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-10 right-5 z-30 bg-[var(--nv)] text-[var(--wh)] p-2 rounded-lg shadow-lg"
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-5 right-0 h-full w-[clamp(280px,60dvw,100%)] bg-[var(--lg)] rounded-l-2xl shadow-xl transform transition-transform duration-300 z-20
        ${open ? "translate-x-0" : "translate-x-full"} 
        md:static md:translate-x-0 md:w-sm md:max-w-full`}
      >
        {/* Logo Section */}
        <div className="logo flex p-5 flex-col items-center gap-5 justify-center">
          <img src={logo.src} alt="Logo" className="w-[88px] h-[88px]" />
          <h2 className="w-[70%] text-shadow-lg text-center text-[var(--nv)] font-semibold text-xl leading-6">
            الدكتـــــورة ابـتــســــــام نـــــــدا
          </h2>
        </div>

        <hr className="text-[var(--gr)]" />

        {/* Links */}
        <ul className="flex flex-col gap-5 p-5 h-full">
          {Links.map((link) => (
            <li
              key={link.id}
              className="w-full h-14 shadow-[var(--shadow-1)] rounded-2xl"
              onClick={() => setOpen(false)} 
            >
              {link.func ? (
                <button
                  onClick={()=>setShow(true)}
                  className="p-2.5 rounded-2xl transition w-full flex gap-4 items-center border text-lg leading-[24px] text-[var(--bl)]/50 h-full hover:bg-[var(--gr)]/50 hover:text-[var(--re)]"
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
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default SideBar;
