// import {
//   LayoutGrid,
//   File,
//   MessageCircleMore,
//   Pencil,
//   Settings,
//   LogOut,
// } from "lucide-react";
// export const Links = [
//   {
//     id: 1,
//     name: "لوحة التحكم",
//     logo: <LayoutGrid />,
//     path: "/dashbord/control-panel",
//   },
//   { id: 2, name: "المقالات", logo: <File />, path: "/dashbord/articles" },

//   {
//     id: 3,
//     name: "الرسائل",
//     logo: <MessageCircleMore />,
//     path: "/dashbord/messages",
//   },
//   { id: 4, name: "التقييمات", logo: <Pencil />, path: "/dashbord/reviews" },

//   {
//     id: 5,
//     name: "الإعدادات",
//     logo: <Settings />,
//     path: "/dashbord/settings",
//   },

//   {
//     id: 6,
//     name: "تسجيل الخروج",
//     logo: <LogOut />,
//     func: () => alert("Logged out!"),
//   },
// ];

import {
  LayoutGrid,
  File,
  MessageCircleMore,
  Pencil,
  Settings,
  LogOut,
  User,
} from "lucide-react";

export const Links = [
  {
    id: 1,
    name: "لوحة التحكم",
    logo: <LayoutGrid />,
    path: "/dashbord/control-panel",
  },
  { id: 2, name: "المقالات", logo: <File />, path: "/dashbord/articles" },
  {
    id: 3,
    name: "الرسائل",
    logo: <MessageCircleMore />,
    path: "/dashbord/messages",
  },
  { id: 4, name: "التقييمات", logo: <Pencil />, path: "/dashbord/reviews" },
  { id: 5, name: "الإعدادات", logo: <Settings />, path: "/dashbord/settings" },
  { id: 6, name: "إدارة المشرفين", logo: <User />, path: "/dashbord/admins" },
  {
    id: 7,
    name: "تسجيل الخروج",
    logo: <LogOut />,
    func: () => alert("Logged out!"),
  },
];
export const EnLinks = [
  {
    id: 1,
    name: "Dashboard",
    logo: <LayoutGrid />,
    path: "/en/dashbord/control-panel",
  },
  { id: 2, name: "Articles", logo: <File />, path: "/en/dashbord/articles" },
  {
    id: 3,
    name: "Messages",
    logo: <MessageCircleMore />,
    path: "/en/dashbord/messages",
  },
  { id: 4, name: "Feedback", logo: <Pencil />, path: "/en/dashbord/reviews" },
  {
    id: 5,
    name: "Settings",
    logo: <Settings />,
    path: "/en/dashbord/settings",
  },
  { id: 6, name: "Administrator", logo: <User />, path: "/en/dashbord/admins" },
  {
    id: 7,
    name: "Log Out",
    logo: <LogOut />,
    func: () => alert("Logged out!"),
  },
];
