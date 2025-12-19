// "use client";
// import { usePathname } from "next/navigation";
// import { Globe, Bell, User } from "lucide-react";
// import SearchBar from "./SearchBar";
// import Link from "next/link";
// import Image from "next/image";
// import avatar from "../../../../../public/user/avatar.png";
// const TopBar = ({ lan, user }) => {
//   const path = usePathname();

//   return (
//     <header className="w-full  flex gap-5  justify-end h-fit  pb-2 ">
//       <div className="w-[60px] lg:hidden"></div>
//       <SearchBar lan={lan} />
//       <ul
//         className={`actions flex ${lan === "en" ? "mt-[-10px] " : "mt-0"}flex-1 items-center justify-end lg:justify-end  gap-5 md:gap-10`}
//       >
//         <li className=" size-14 bg-[var(--lg)] rounded-full flex justify-center items-center overflow-hidden  shadow-[var(--shadow-1)]">
//           <Link
//             href={
//               lan === "ar" ? "/dashboard/settings" : "/en/dashboard/settings"
//             }
//           >
//             <Image
//               src={avatar}
//               alt="avatar or adming image "
//               className=" sm:h-14  h-12 object-contain"
//             ></Image>
//           </Link>
//         </li>
//         <li className=" size-14 sm:size-16 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]">
//           <Link href={lan === "en" ? `/${path.slice(4)}` : `/en/${path}`}>
//             <Globe size={33} />
//           </Link>
//         </li>
//         <li
//           className={`size-14 sm:size-16  rounded-full  flex justify-center items-center shadow-[var(--shadow-1)] ${path === "/dashboard/notification" || path === "/en/dashboard/notification" ? "bg-[var(--nv)] text-white" : "  bg-white text-black"} `}
//         >
//           <Link
//             href={
//               lan === "ar"
//                 ? `/dashboard/notification`
//                 : `/en/dashboard/notification`
//             }
//           >
//             <Bell size={33} />
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// };
// export default TopBar;
"use client";

import { usePathname } from "next/navigation";
import { Globe, Bell } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../../../public/user/avatar.png";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/supabase";

const TopBar = ({ lan, user }) => {
  const path = usePathname();
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotificationsCount = async () => {
      const { count, error } = await supabase
        .from("notification")
        .select("*", { count: "exact", head: true });

      if (!error) {
        setNotificationCount(count || 0);
      }
    };

    fetchNotificationsCount();
  }, []);

  return (
    <header className="w-full flex gap-5 justify-end h-fit pb-2">
      <div className="w-[60px] lg:hidden"></div>

      <SearchBar lan={lan} />

      <ul
        className={`actions flex ${
          lan === "en" ? "mt-[-10px]" : "mt-0"
        } flex-1 items-center justify-end gap-5 md:gap-10`}
      >
        {/* Avatar */}
        <li className="size-14 bg-[var(--lg)] rounded-full flex justify-center items-center overflow-hidden shadow-[var(--shadow-1)]">
          <Link
            href={
              lan === "ar" ? "/dashboard/settings" : "/en/dashboard/settings"
            }
          >
            <Image
              src={avatar}
              alt="avatar"
              className="sm:h-14 h-12 object-contain"
            />
          </Link>
        </li>

        {/* Language */}
        <li className="size-14 sm:size-16 bg-[var(--lg)] rounded-full flex justify-center items-center shadow-[var(--shadow-1)]">
          <Link href={lan === "en" ? `/${path.slice(4)}` : `/en/${path}`}>
            <Globe size={33} />
          </Link>
        </li>

        {/* Notification */}
        <li
          className={`relative size-14 sm:size-16 rounded-full flex justify-center items-center shadow-[var(--shadow-1)]
          ${
            path === "/dashboard/notification" ||
            path === "/en/dashboard/notification"
              ? "bg-[var(--nv)] text-white"
              : "bg-white text-black"
          }`}
        >
          <Link
            href={
              lan === "ar"
                ? `/dashboard/notification`
                : `/en/dashboard/notification`
            }
            className="relative"
          >
            <Bell size={33} />

            {/* Badge */}
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[20px] h-[20px] px-1 rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
