"use client";
import ProtectedRoutes from "../protected/protectedRoutes";
import { redirect } from "next/navigation";
const DashboardPage = () => {
  redirect("/en/dashboard/control-panel");
};

export default function protectedNewPassword() {
  return (
    <ProtectedRoutes>
      <DashboardPage />
    </ProtectedRoutes>
  );
}
