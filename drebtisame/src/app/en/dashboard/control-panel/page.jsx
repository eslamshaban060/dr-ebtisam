import React from "react";
import { Activity, Calendar, Users, Clock } from "lucide-react";

export default function MedicalDashboard() {
  const stats = [
    {
      title: "Published Appointments",
      value: "74",
      bgColor: "bg-[#103463]",
      textColor: "text-white",
    },
    {
      title: "Published Interviews",
      value: "20",
      bgColor: "bg-teal-400",
      textColor: "text-white",
    },
    {
      title: "Number of Patients",
      value: "234",
      bgColor: "bg-teal-400",
      textColor: "text-white",
    },
    {
      title: "Upcoming Appointments",
      value: "09",
      bgColor: "bg-[#103463]",
      textColor: "text-white",
    },
  ];

  const chartData = [
    { month: "January", value: 15 },
    { month: "February", value: 25 },
    { month: "March", value: 18 },
    { month: "April", value: 28 },
    { month: "May", value: 22 },
    { month: "June", value: 30 },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div
      className="h-[75dvh] overflow-y-auto bg-gradient-to-br overflow-scroll from-slate-100 to-blue-50 p-4 md:p-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#103463] to-slate-700 rounded-2xl shadow-xl mb-8 ">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12 relative">
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 opacity-20 rounded-tl-full"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400 opacity-10 rounded-br-full"></div>

            {/* Doctor Image */}
            <div className="relative z-10 mb-6 md:mb-0 md:ml-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-700 flex items-center justify-center">
                  <Users className="w-16 h-16 text-teal-400" />
                </div>
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center md:text-left relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Welcome Back <span className="text-teal-400">Doctor</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg">
                Your dashboard is ready to manage everything easily and
                efficiently!
              </p>
            </div>

            {/* Decorative Heart Beat Line */}
            <div className="absolute inset-0 opacity-5">
              <Activity className="w-full h-full" strokeWidth={0.5} />
            </div>
          </div>
        </div>

        {/* Statistics Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#103463] inline-block relative">
            Some Statistics
            <div className="absolute -bottom-2 left-0  h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </h2>
        </div>

        {/* Stats and Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards - 2x2 Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} ${stat.textColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="text-sm md:text-base font-medium mb-3 opacity-90">
                  {stat.title}
                </div>
                <div className="text-4xl md:text-5xl font-bold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Chart Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#103463] mb-6">
              Visit Rate
            </h3>

            {/* Chart */}
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-sm text-slate-500">
                <span>30k</span>
                <span>20k</span>
                <span>10k</span>
                <span>0k</span>
              </div>

              {/* Chart area */}
              <div className="absolute left-12 left-0 top-0 bottom-8">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 200"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <line
                    x1="0"
                    y1="50"
                    x2="600"
                    y2="50"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="100"
                    x2="600"
                    y2="100"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="150"
                    x2="600"
                    y2="150"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />

                  {/* Line chart */}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {chartData.map((d, i) => (
                    <circle
                      key={i}
                      cx={i * 100 + 50}
                      cy={200 - (d.value / maxValue) * 150}
                      r="5"
                      fill="#14b8a6"
                      className="hover:r-7 transition-all"
                    />
                  ))}
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute left-12 left-0 bottom-0 flex justify-between text-sm text-slate-500">
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
