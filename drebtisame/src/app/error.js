"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex overflow-hidden  h-screen flex-col items-center justify-center bg-gray-100 text-center !px-6">
      <div className="bg-white shadow-lg rounded-2xl !p-10 max-w-lg w-full">
        <h1 className="text-6xl overflow-hidden  font-bold text-red-500 !mb-4">
          ⚠️ Oops!
        </h1>
        <h2 className="text-2xl overflow-hidden  font-semibold mb-2 text-gray-800">
          حصل خطأ غير متوقع
        </h2>
        <p className="text-gray-600 overflow-hidden  !mb-6">
          {error?.message || "من فضلك حاول مرة أخرى لاحقًا."}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="!px-6 !py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            إعادة المحاولة
          </button>

          <Link
            href="/"
            className="!px-6 !py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
