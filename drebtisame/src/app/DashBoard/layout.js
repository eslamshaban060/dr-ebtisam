"use client";

import { Poppins, Changa } from "next/font/google";
import "../globals.css";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/sideBar";
const changa = Changa({
  variable: "--font-Changa",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata = {
  title: "د. ابتسام ندا | استشاري السمع والاتزان",
  description:
    "الموقع الرسمي للأستاذة الدكتورة ابتسام حامد ندا – دكتوراه واستشاري أمراض السمع والاتزان، أستاذ بكلية الطب جامعة الزقازيق. خدمات العيادة تشمل تشخيص أمراض الأذن، ضعف السمع عند الأطفال، برمجة وصيانة السماعات، تشخيص الدوار والاتزان، الفحوصات اللازمة لزراعة القوقعة، والاختبارات النفسية (فرط الحركة، التوحد، صعوبة التعلم).",
  keywords: [
    "د. ابتسام ندا",
    "عيادة سمع واتزان",
    "ضعف السمع",
    "تشخيص الدوار",
    "زراعة القوقعة",
    "اختبارات نفسية",
    "فرط الحركة",
    "التوحد",
    "صعوبة التعلم",
    "جامعة الزقازيق",
    "ENT Egypt",
    "audiology Egypt",
    "hearing loss children",
    "cochlear implant Egypt",
  ],
  authors: [{ name: "د. ابتسام حامد ندا" }],
  openGraph: {
    title: "د. ابتسام ندا | استشاري السمع والاتزان",
    description:
      "خدمات طبية متكاملة تشمل تشخيص أمراض السمع والاتزان، علاج الدوار، برمجة السماعات، فحوصات زراعة القوقعة، والاختبارات النفسية للأطفال.",
    url: "https://your-website.com",
    siteName: "عيادة د. ابتسام ندا",
    locale: "ar_EG",
    type: "website",
  },
};


export default function DashboardLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.className} bg-[var(--lb)] min-h-dvh `}>
        <main className=" bg-[var(--lb)] w-full  grid md:grid-cols-12 gap-5 md:p-10 md:pb-4 p-5 pb-2 ">
          {/* Sidebar */}
          <aside className="lg:col-span-4 col-span-6 md:order-1 order-2">
            <SideBar />
          </aside>

          {/* Main content */}
          <section className="lg:col-span-8 col-span-6 md:order-2 order-1 flex flex-col gap-10">
            <TopBar />
            <div className="h-full">
            {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
