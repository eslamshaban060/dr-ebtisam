"use client";
import "./globals.css";
import TopBar from "../../components/ar-components/dashboard/components/TopBar";
import SideBar from "../../components/ar-components/dashboard/components/sideBar";
import { Links } from "../../components/ar-components/dashboard/components/data";
import UserData from "../hocks/userData";
import { redirect } from "next/navigation";

export default function dashboardLayout({ children }) {
  const { User } = UserData();
  if (!User) {
    redirect("/login");
  }
  return (
    <div lang="ar" dir="rtl">
      <div className={` bg-[var(--lb)] h-dvh  overflow-hidden`}>
        <main className=" bg-[var(--lb)] w-full  grid grid-cols-12 gap-5 lg:p-10 lg:pb-4 px-5 py-2 pb-2 ">
          {/* Sidebar */}
          <aside className="lg:col-span-3  max-h-[100vh] col-span-0 ">
            <div className="  h-[112%] max-w-[300px]">
              <SideBar
                Links={Links}
                title="الدكتـــــورة ابـتــســــــام نـــــــدا"
                lan="ar"
                user={User}
              />
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-9 col-span-12  flex flex-col gap-10">
            <TopBar lan="ar" user={User} />
            <div className="h-full w-[100%]">{children}</div>
          </section>
        </main>
      </div>
    </div>
  );
}
