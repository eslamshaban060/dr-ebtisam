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
//     path: "/dashboard/control-panel",
//   },
//   { id: 2, name: "المقالات", logo: <File />, path: "/dashboard/articles" },

//   {
//     id: 3,
//     name: "الرسائل",
//     logo: <MessageCircleMore />,
//     path: "/dashboard/messages",
//   },
//   { id: 4, name: "التقييمات", logo: <Pencil />, path: "/dashboard/reviews" },

//   {
//     id: 5,
//     name: "الإعدادات",
//     logo: <Settings />,
//     path: "/dashboard/settings",
//   },

//   {
//     id: 6,
//     name: "تسجيل الخروج",
//     logo: <LogOut />,
//     func: () => alert("Logged out!"),
//   },
// ];
import art from "../../../../../public/user/art.png"
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
    path: "/dashboard/control-panel",
  },
  { id: 2, name: "المقالات", logo: <File />, path: "/dashboard/articles" },
  {
    id: 3,
    name: "الرسائل",
    logo: <MessageCircleMore />,
    path: "/dashboard/messages",
  },
  { id: 4, name: "التقييمات", logo: <Pencil />, path: "/dashboard/reviews" },
  { id: 5, name: "الإعدادات", logo: <Settings />, path: "/dashboard/settings" },
  { id: 6, name: "إدارة المشرفين", logo: <User />, path: "/dashboard/admins" },
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
    path: "/en/dashboard/control-panel",
  },
  { id: 2, name: "Articles", logo: <File />, path: "/en/dashboard/articles" },
  {
    id: 3,
    name: "Messages",
    logo: <MessageCircleMore />,
    path: "/en/dashboard/messages",
  },
  { id: 4, name: "Feedback", logo: <Pencil />, path: "/en/dashboard/reviews" },
  {
    id: 5,
    name: "Settings",
    logo: <Settings />,
    path: "/en/dashboard/settings",
  },
  {
    id: 6,
    name: "Administrator",
    logo: <User />,
    path: "/en/dashboard/admins",
  },
  {
    id: 7,
    name: "Log Out",
    logo: <LogOut />,
    func: () => alert("Logged out!"),
  },
];
export const articles = [
  {
    id: 1,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 11, 2023",
  },
  {
    id: 2,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 21, 2023",
  },
  {
    id: 3,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 13, 2023",
  },
  {
    id: 4,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 14, 2023",
  },
  {
    id: 5,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 15, 2023",
  },
  {
    id: 6,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 16, 2023",
  },
  {
    id: 7,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 17, 2023",
  },
  {
    id: 8,
    image:art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 18, 2023",
  },
  {
    id:9,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 19, 2023",
  },
  {
    id:10,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 20, 2023",
  }
];
export const enArticles = [
  {
    id: 1,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 11, 2023",
  },
  {
    id: 2,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 21, 2023",
  },
  {
    id: 3,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 13, 2023",
  },
  {
    id: 4,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 14, 2023",
  },
  {
    id: 5,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 15, 2023",
  },
  {
    id: 6,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 16, 2023",
  },
  {
    id: 7,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 17, 2023",
  },
  {
    id: 8,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 18, 2023",
  },
  {
    id: 9,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 19, 2023",
  },
  {
    id: 10,
    image: art,
    title: "Providing Auditory-Verbal Therapy Services:",
    description:
      "Auditory-verbal therapy services play a vital role in supporting and guiding hearing aid users, whether children or adults. These services aim to enhance auditory and language abilities and improve quality of life.",
    date: "November 20, 2023",
  }
];