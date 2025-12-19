import React from "react";
import { Plus } from "lucide-react";

export default function Header({ lang, showForm, setShowForm }) {
  const t = {
    ar: {
      title: "لوحة إدارة المدونة",
      subtitle: "إدارة محتوى المقالات الطبية",
      newPost: "مقال جديد",
      cancel: "إلغاء",
    },
    en: {
      title: "Blog Admin Panel",
      subtitle: "Manage Medical Blog Content",
      newPost: "New Post",
      cancel: "Cancel",
    },
  };
  const isAr = lang === "ar";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t[lang].title}
          </h1>
          <p className="text-gray-600">{t[lang].subtitle}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all flex items-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            {showForm ? t[lang].cancel : t[lang].newPost}
          </button>
        </div>
      </div>
    </div>
  );
}
