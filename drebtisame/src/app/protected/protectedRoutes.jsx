"use client";
import useAuth from "../hocks/useAuth";
import { useRouter } from "next/navigation";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    router.push("/login");
  }
  if (!isAuthenticated) {
    return null;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
