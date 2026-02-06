"use client";
import Image from "next/image";
import logo from "../../../../public/home/logo.png";
import { Globe, Contact, Menu } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "services", href: "#services" },
  { name: "blogs", href: "#blogs" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`fixed z-30 capitalize top-0 l-0 w-screen md:grid flex justify-between   grid-cols-12 max-h-36 lg:px-10 px-5 md:py-5 py-2  ${isScrolled?"md:backdrop-blur-md bg-[var(--lb)]/60":""}`}>
        {/* logo */}
        <div className="flex justify-center items-center col-span-1">
          <Image src={logo} className=" md:w-22 w-18 " alt="logo"></Image>
        </div>
        {/* navigation links */}
        <nav className="lg:col-span-8 md:order-2 order-3 col-span-7 md:block flex justify-center items-center ">
          {/* desktop view */}
          <ul className="md:flex hidden justify-evenly items-center h-full g-5 ">
            {links.map((link, key) => (
              <li
                key={key}
                className="text-[var(--nv)] lg:text-xl text-lg leading-[100%]"
              >
                <a href={link.href} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* mobile view */}
          <ul
            className={`"flex md:hidden transition-all duration-500 origin-right  absolute flex-col top-[100%] right-0  w-[clamp(300px,70dvw,90dvw)] bg-[var(--nv)]/20 backdrop-blur-md rounded-b-2xl p-3 g-5 "
          ${isMenuOpen ? "transform-[scaleX(1)] opacity-100 " : "transform-[scaleX(0)] opacity-0"}`}
          >
            {links.map((link, key) => (
              <li
                key={key}
                className="text-[var(--nv)] lg:text-xl w-ful px-2 py-5 text-lg leading-[100%]"
              >
                <a href={link.href} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`"text-center cursor-pointer transition-all duration-300 hover:text-[var(--wh)] hover:bg-[var(--nv)] text-[var(--nv)] size-12 sm:size-14 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]"
            ${isMenuOpen ? "text-[var(--wh)] bg-[var(--nv)]" : ""}`}
            >
              <Menu />
            </button>
          </div>
        </nav>
        {/* action btns */}
        <div className=" lg:col-span-3 col-span-4 flex order-2 md:order-3  gap-5 justify-evenly items-center">
          <a href="#" className="md:flex hidden btn whitespace-nowrap">
            contact us
          </a>
          <a href="#" className="md:hidden px-2 py-2  btn whitespace-nowrap">
            <Contact size={30} />
          </a>
          <button className="text-center cursor-pointer transition-all duration-300 hover:text-[var(--wh)] hover:bg-[var(--nv)] text-[var(--nv)] size-12 sm:size-14 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]">
            <Globe size={32} />
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
