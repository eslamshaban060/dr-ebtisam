"use client";
import useAuth from "../../hocks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/en/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
