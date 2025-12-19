import React from "react";

export default function Stats({ posts, lang }) {
  const t = {
    ar: {
      totalPosts: "إجمالي المقالات",
      featuredPosts: "مقالات مميزة",
      hearingPosts: "مقالات السمع",
      earPosts: "مقالات الأذن",
    },
    en: {
      totalPosts: "Total Posts",
      featuredPosts: "Featured Posts",
      hearingPosts: "Hearing Posts",
      earPosts: "Ear Posts",
    },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl">
        <div className="text-2xl font-bold text-cyan-700">{posts.length}</div>
        <div className="text-sm text-cyan-600">{t[lang].totalPosts}</div>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
        <div className="text-2xl font-bold text-purple-700">
          {posts.filter((p) => p.featured).length}
        </div>
        <div className="text-sm text-purple-600">{t[lang].featuredPosts}</div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
        <div className="text-2xl font-bold text-green-700">
          {posts.filter((p) => p.category === "hearing").length}
        </div>
        <div className="text-sm text-green-600">{t[lang].hearingPosts}</div>
      </div>
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
        <div className="text-2xl font-bold text-orange-700">
          {posts.filter((p) => p.category === "ear").length}
        </div>
        <div className="text-sm text-orange-600">{t[lang].earPosts}</div>
      </div>
    </div>
  );
}
