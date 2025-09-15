import { Globe, Bell, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../../../public/user/avatar.png";
const TopBar = ({ lan }) => {
  return (
    <header className="w-full justify-center gap-3 items-center h-fit flex pb-5 ">
      <SearchBar lan={lan} />
      <ul className="actions flex flex-1 items-center justify-center lg:justify-end p-2 gap-5 md:gap-10 ">
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
