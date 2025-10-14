"use client";
import "./globals.css";
import TopBar from "../../../components/ar-components/dashboard/components/TopBar";
import SideBar from "../../../components/ar-components/dashboard/components/sideBar";
import { EnLinks } from "../../../components/ar-components/dashboard/components/data";
import UserData from "../../hocks/userData";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }) {
  const { User, loading } = UserData();
  const router = useRouter();

  useEffect(() => {
    if (!loading && User === null) {
      router.push("/en/login");
    }
  }, [loading, User, router]);
  if (loading || User === null || !User) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#103463]/70 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <Loader2 className="w-12 h-12  text-white animate-spin" />
          <p className="text-white mt-4 overflow-hidden text-lg">Loading...</p>
        </motion.div>
      </div>
    );
  }
  return (
    <div lang="en" dir="ltr">
      <div className={` bg-[var(--lb)] h-dvh  overflow-hidden`}>
        <main className=" bg-[var(--lb)] w-full  grid grid-cols-12 gap-5 md:p-10 md:pb-4 p-5 pb-2 ">
          {/* Sidebar */}
          <aside className="lg:col-span-3 max-h-[100vh] col-span-0 ">
            <div className="  h-[112%] max-w-[300px]">
              <SideBar
                Links={EnLinks}
                lan="en"
                title="Doctor Ibtissam Nada"
                user={User}
              />
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-9 col-span-12 flex flex-col gap-10">
            <TopBar lan="en" user={User} />
            <div className="h-full">{children}</div>
          </section>
        </main>
      </div>
    </div>
  );
}
