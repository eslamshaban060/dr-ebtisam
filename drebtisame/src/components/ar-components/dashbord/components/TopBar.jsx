import { Globe, Bell, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../../../public/user/avatar.png";
const TopBar = ({ lan, user }) => {
  return (
    <header className="w-full  flex gap-5  justify-end h-fit  pb-2 ">
      <div className="w-[60px] lg:hidden"></div>
      <SearchBar lan={lan} />
      <ul className="actions flex flex-1 items-center justify-end lg:justify-end  gap-5 md:gap-10 ">
        <li className=" size-14 bg-[var(--lg)] rounded-full flex justify-center items-center overflow-hidden  shadow-[var(--shadow-1)]">
          <Link
            href={lan === "ar" ? "/dashbord/settings" : "/en/dashbord/settings"}
          >
            <Image
              src={avatar}
              alt="avatar or adming image "
              className=" h-14 object-contain"
            ></Image>
          </Link>
        </li>
        <li className=" size-14 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]">
          <Link
            href={
              lan === "en"
                ? "/dashbord/control-panel"
                : "/en/dashbord/control-panel"
            }
          >
            <Globe size={28} />
          </Link>
        </li>
        <li className=" size-14 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]">
          <Link
            href={
              lan === "ar"
                ? "/dashbord/control-panel"
                : "/en/dashbord/control-panel"
            }
          >
            <Bell size={28} />
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default TopBar;
