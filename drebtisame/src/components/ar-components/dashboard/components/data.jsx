"use client";

import art from "../../../../../public/user/art.png";
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
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 18, 2023",
  },
  {
    id: 9,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 19, 2023",
  },
  {
    id: 10,
    image: art,
    title: "تقديم خدمات التأهيل السمعي التخاطبي:",
    description:
      "خدمات التأهيل السمعي التخاطبي تلعب دوراً حيويًا في تقديم الدعم والتوجيه لمرتدي المعينات السمعية، سواء كانوا أطفالًا أو كبارًا. تهدف هذه الخدمات إلى تعزيز القدرات السمعية واللغوية وتحسين جودة الحياة.",
    date: "نوفمبر 20, 2023",
  },
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
  },
];
export const messages = [
  {
    id: 1,
    name: "نوال بوشامة",
    date: "30-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
  {
    id: 2,
    name: "ليلى بوشامة",
    date: "29-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
  {
    id: 3,
    name: "كريم منصوري",
    date: "28-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
  {
    id: 4,
    name: "كريم بوشامة",
    date: "27-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
  {
    id: 5,
    name: "سارة يوسف",
    date: "26-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
  {
    id: 6,
    name: "أحمد حسن",
    date: "25-08-2025",
    message: "لديك رسالة جديدة من أحد مرضاك",
  },
];
export const enMessages = [
  {
    id: 1,
    name: "Nawal Bouchama",
    date: "30-08-2025",
    message: "You have a new message from one of your patients",
  },
  {
    id: 2,
    name: "Layla Bouchama",
    date: "29-08-2025",
    message: "You have a new message from one of your patients",
  },
  {
    id: 3,
    name: "Karim Mansouri",
    date: "28-08-2025",
    message: "You have a new message from one of your patients",
  },
  {
    id: 4,
    name: "Karim Bouchama",
    date: "27-08-2025",
    message: "You have a new message from one of your patients",
  },
  {
    id: 5,
    name: "Sara Youssef",
    date: "26-08-2025",
    message: "You have a new message from one of your patients",
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    date: "25-08-2025",
    message: "You have a new message from one of your patients",
  },
];
// reviewsAr.js
export const reviewsAr = [
  {
    id: 1,
    name: "ليلى بن يوسف",
    review: "الدكتورة كانت رائعة جداً، شرحت لي حالتي بكل وضوح وبأسلوب راقي.",
  },
  {
    id: 2,
    name: "نسرين بوعزة",
    review: "أول مرة أزور دكتورة بهذه الدقة في التشخيص، شكراً جزيلاً.",
  },
  {
    id: 3,
    name: "وليد مرزوق",
    review: "تعامل إنساني رائع وتشخيص دقيق. شكراً دكتورة.",
  },
  {
    id: 4,
    name: "سعاد بن أحمد",
    review: "كانت الاستشارة واضحة جداً وأعطتني نصائح عملية للعلاج.",
  },
  {
    id: 5,
    name: "محمد العابد",
    review: "الزيارة كانت مريحة جداً، شعرت بالاهتمام الحقيقي.",
  },
  {
    id: 6,
    name: "حنان بن خليفة",
    review: "شرح ممتاز واهتمام بكل التفاصيل. شكراً جزيلاً.",
  },
  {
    id: 7,
    name: "عماد يوسف",
    review: "خدمة رائعة، والتشخيص كان دقيقاً جداً.",
  },
  {
    id: 8,
    name: "سارة منصور",
    review: "أجمل تجربة طبية مررت بها، شكراً على الاهتمام.",
  },
];
// reviewsEn.js
export const reviewsEn = [
  {
    id: 1,
    name: "Laila Ben Youssef",
    review:
      "The doctor was amazing, she explained my condition very clearly and with great professionalism.",
  },
  {
    id: 2,
    name: "Nesrine Bouazza",
    review:
      "First time visiting such a precise doctor in diagnosis, thank you so much.",
  },
  {
    id: 3,
    name: "Walid Marzouk",
    review: "Very humane approach and accurate diagnosis. Thank you, doctor.",
  },
  {
    id: 4,
    name: "Souad Ben Ahmed",
    review:
      "The consultation was very clear, and she gave me practical treatment advice.",
  },
  {
    id: 5,
    name: "Mohamed Al-Abed",
    review: "The visit was very comfortable, I truly felt cared for.",
  },
  {
    id: 6,
    name: "Hanan Ben Khalifa",
    review: "Excellent explanation and attention to every detail. Many thanks.",
  },
  {
    id: 7,
    name: "Imad Youssef",
    review: "Great service, and the diagnosis was very accurate.",
  },
  {
    id: 8,
    name: "Sarah Mansour",
    review: "The best medical experience I’ve had, thank you for the care.",
  },
];

// import React from "react";
// import { supabase } from "../../../../utils/supabase/supabase";
// import { useState, useEffect } from "react";

// const Arts = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function getarticles(params) {
//       const { data, error } = await supabase.from("article");
//       if (error) {
//         throw new Error("لقد حصلت مشكله فى الداتا بيس الخاصه بالمشرفين  ");
//       } else {
//         console.log(data);

//         setArticles(data);
//       }
//     }
//     getarticles()
//   }, []);
//   return (
//     <div>
//     </div>
//   );
// };

// export default Arts;
