"use client";

import React, { useEffect, useState } from "react";
import { Activity, Users } from "lucide-react";
import { supabase } from "@/utils/supabase/supabase";

export default function MedicalDashboard({ lang = "ar" }) {
  const isAr = lang === "ar";

  const texts = {
    ar: {
      welcome: "مرحباً بعودتك",
      doctor: "دكتورة",
      subtitle: "لوحتك في انتظارك لإدارة كل شيء بسهولة وفعالية!",
      statsTitle: "بعض الإحصائيات",
      chartTitle: "معدل الزيارات",
      months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
      stats: {
        messages: "عدد الرسائل",
        reviews: "عدد التقييمات",
        blogs: "عدد المقالات",
        users: "عدد المستخدمين",
      },
    },
    en: {
      welcome: "Welcome Back",
      doctor: "Doctor",
      subtitle: "Your dashboard is ready to manage everything easily!",
      statsTitle: "Statistics Overview",
      chartTitle: "Visits Rate",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      stats: {
        messages: "Messages",
        reviews: "Reviews",
        blogs: "Blogs",
        users: "Users",
      },
    },
  };

  const t = texts[lang];

  const [stats, setStats] = useState({
    messages: 0,
    reviews: 0,
    blogs: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [messagesRes, reviewsRes, blogsRes, usersRes] = await Promise.all([
        supabase.from("messages").select("*", { count: "exact", head: true }),
        supabase.from("reviews").select("*", { count: "exact", head: true }),
        supabase.from("blog").select("*", { count: "exact", head: true }),
        supabase.from("user").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        messages: messagesRes.count || 0,
        reviews: reviewsRes.count || 0,
        blogs: blogsRes.count || 0,
        users: usersRes.count || 0,
      });
    };

    fetchStats();
  }, []);

  const statsCards = [
    {
      title: t.stats.messages,
      value: stats.messages,
      bgColor: "bg-[#103463]",
    },
    {
      title: t.stats.reviews,
      value: stats.reviews,
      bgColor: "bg-teal-400",
    },
    {
      title: t.stats.blogs,
      value: stats.blogs,
      bgColor: "bg-teal-400",
    },
    {
      title: t.stats.users,
      value: stats.users,
      bgColor: "bg-[#103463]",
    },
  ];

  const chartData = t.months.map((month, i) => ({
    month,
    value: [15, 25, 18, 28, 22, 30][i],
  }));

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div
      className="h-[75dvh] overflow-y-auto bg-gradient-to-br from-slate-100 to-blue-50 p-4 md:p-8"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#103463] to-slate-700 rounded-2xl shadow-xl mb-8">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12 relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 opacity-20 rounded-tl-full"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400 opacity-10 rounded-br-full"></div>

            <div className="relative z-10 mb-6 md:mb-0 md:ml-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-700 flex items-center justify-center">
                  <Users className="w-16 h-16 text-teal-400" />
                </div>
              </div>
            </div>

            <div className="text-center px-3 relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t.welcome} <span className="text-teal-400">{t.doctor}</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg">
                {t.subtitle}
              </p>
            </div>

            <div className="absolute inset-0 opacity-5">
              <Activity className="w-full h-full" strokeWidth={0.5} />
            </div>
          </div>
        </div>

        {/* Stats Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#103463] inline-block relative">
            {t.statsTitle}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} text-white rounded-2xl p-6 shadow-lg`}
              >
                <div className="text-sm mb-3 opacity-90">{stat.title}</div>
                <div className="text-4xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#103463] mb-6">
              {t.chartTitle}
            </h3>

            <div className="relative h-64">
              <div className="absolute right-12 left-0 top-0 bottom-8">
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  <polyline
                    points={chartData
                      .map(
                        (d, i) =>
                          `${i * 100 + 50},${200 - (d.value / maxValue) * 150}`
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="absolute right-12 left-0 bottom-0 flex justify-between text-sm text-slate-500">
                {chartData.map((d, i) => (
                  <span key={i}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
