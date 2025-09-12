"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--lg)] text-center px-6">
      <h1 className="text-6xl font-bold text-[var(--re)]">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        عذراً، الصفحة التي تبحث عنها غير موجودة
      </p>

      <Link
        href="/DashBoard/ControlPanel"
        className="mt-6 inline-flex items-center gap-2 bg-[var(--nv)] text-white px-5 py-3 rounded-xl shadow hover:bg-[var(--nv)]/90 transition"
      >
        <Home size={20} />
        العودة إلى لوحة التحكم
      </Link>
    </div>
  );
}
