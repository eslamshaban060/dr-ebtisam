import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Toast({ toast, lang }) {
  const isAr = lang === "ar";

  if (!toast) return null;

  return (
    <div
      className={`fixed top-6 ${isAr ? "left-6" : "right-6"} z-50 animate-slide-in`}
    >
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
          toast.type === "success"
            ? "bg-gradient-to-r from-green-500 to-green-600"
            : "bg-gradient-to-r from-red-500 to-red-600"
        } text-white`}
      >
        {toast.type === "success" ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <AlertCircle className="w-6 h-6" />
        )}
        <span className="font-semibold">{toast.message}</span>
      </div>
    </div>
  );
}
