"use client";

import { useState } from "react";
import { User, Mail, Settings, AlertCircle, Phone } from "lucide-react";
import { Toast } from "@/components/settings/Toast";
import { texts } from "@/components/settings/texts";
import UserData from "@/app/hocks/userData";
import PasswordSection from "@/components/ar-components/dashbord/setings/PasswordSection";
// Header Section Component
const HeaderSection = ({ lan }) => {
  const texts = {
    ar: {
      title: "الإعدادات",
      description: "قم بإدارة حسابك وتغيير كلمة المرور الخاصة بك",
    },
    en: {
      title: "Settings",
      description: "Manage your account and change your password",
    },
  };

  const currentTexts = texts[lan];

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 mb-8 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-[var(--nv)] flex items-center justify-center">
          <Settings size={28} className="text-white" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {currentTexts.title}
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            {currentTexts.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Profile Section Component
const ProfileSection = ({ lan, userData, handleSubmitData, showToast }) => {
  const [formData, setFormData] = useState({
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    email: userData.email || "",
  });

  const currentTexts = texts[lan];

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 mb-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {currentTexts.title}
      </h2>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.firstName}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <User size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="firstName"
              value={userData.name}
              className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${"border-gray-200"} rounded-xl focus:outline-none focus:ring-2 ${"focus:ring-blue-500"} focus:border-transparent transition-all`}
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.lastName}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Phone size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="lastName"
              value={userData.phone}
              className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${"border-gray-200"} rounded-xl focus:outline-none focus:ring-2 ${"focus:ring-blue-500"} focus:border-transparent transition-all`}
            />
          </div>
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.email}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail size={20} className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`w-full pl-12 pr-4 py-3 bg-gray-50 border ${"border-gray-200"} rounded-xl focus:outline-none focus:ring-2 ${"focus:ring-blue-500"} focus:border-transparent transition-all`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Settings Page Component
export default function SettingsPage2({ language }) {
  const [toast, setToast] = useState(null);
  const [userData, setUserData] = useState({
    firstName: "محمد",
    lastName: "أحمد",
    email: "mohamed.ahmed@example.com",
    currentPassword: "",
    newPassword: "",
  });
  const { User } = UserData();

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (updatedData) => {
    console.log("Updated data:", updatedData || userData);

    showToast(
      language === "ar"
        ? "تم حفظ التغييرات بنجاح"
        : "Changes saved successfully",
      "success"
    );

    // Update userData state
    if (updatedData) {
      setUserData(updatedData);
    }

    // Clear password fields after successful password change
    if (updatedData?.newPassword) {
      setUserData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
      }));
    }
  };

  return (
    <div className="overflow-x-hidden h-[75dvh] w-[100%] overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full mx-auto px-4 py-8">
        <HeaderSection lan={language} />
        <ProfileSection
          lan={language}
          userData={User}
          handleSubmitData={handleSubmit}
          showToast={showToast}
        />
        <PasswordSection lan={language} />
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
