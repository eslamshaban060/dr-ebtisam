"use client";
import "./globals.css";
import TopBar from "../../../components/ar-components/dashboard/components/TopBar";
import SideBar from "../../../components/ar-components/dashboard/components/sideBar";
import { EnLinks } from "../../../components/ar-components/dashboard/components/data";

export default function dashbordLayout({ children }) {
  return (
    <div lang="en" dir="ltr">
      <div className={` bg-[var(--lb)] h-dvh  overflow-hidden`}>
        <main className=" bg-[var(--lb)] w-full  grid grid-cols-12 gap-5 md:p-10 md:pb-4 p-5 pb-2 ">
          {/* Sidebar */}
          <aside className="lg:col-span-4  max-h-[100vh] col-span-2 ">
            <div className="  h-[112%] max-w-[300px]">
              <SideBar Links={EnLinks} lan="en" title="Doctor Ibtissam Nada" />
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-8 col-span-10  flex flex-col gap-10">
            <TopBar lan="en" />
            <div className="h-full">{children}</div>
          </section>
        </main>
      </div>
    </div>
  );
}
