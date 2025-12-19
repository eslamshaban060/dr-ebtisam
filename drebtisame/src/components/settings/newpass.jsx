"use client";

import React, { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { supabase } from "@/utils/supabase/supabase";
import { texts } from "./newtaxes";
const PasswordSection = ({ lan, userData, handleInputChange, showToast }) => {
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const currentTexts = texts[lan];

  const validatePasswordForm = () => {
    const newErrors = {};

    if (!userData.currentPassword)
      newErrors.currentPassword = currentTexts.errors.currentPasswordRequired;

    if (!userData.newPassword)
      newErrors.newPassword = currentTexts.errors.newPasswordRequired;
    else if (userData.newPassword.length < 8)
      newErrors.newPassword = currentTexts.errors.newPasswordShort;

    if (!confirmPassword)
      newErrors.confirmPassword = currentTexts.errors.confirmPasswordRequired;
    else if (userData.newPassword !== confirmPassword)
      newErrors.confirmPassword = currentTexts.errors.passwordsNotMatch;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordSubmit = async () => {
    if (!validatePasswordForm()) {
      showToast(
        lan === "ar"
          ? "يرجى تصحيح الأخطاء في النموذج"
          : "Please correct the errors in the form",
        "error"
      );
      return;
    }

    try {
      // 1️⃣ جلب الباسورد الحالي من Supabase
      const { data, error } = await supabase
        .from("user")
        .select("password")
        .eq("id", userData.id)
        .single();

      if (error) throw error;

      // 2️⃣ مقارنة الباسورد الحالي
      if (data.password !== userData.currentPassword) {
        showToast(
          lan === "ar"
            ? "كلمة المرور الحالية غير صحيحة"
            : "Current password is incorrect",
          "error"
        );
        return;
      }

      // 3️⃣ تحديث الباسورد
      const { error: updateError } = await supabase
        .from("user")
        .update({ password: userData.newPassword })
        .eq("id", userData.id);

      if (updateError) throw updateError;

      showToast(
        lan === "ar"
          ? "تم تغيير كلمة المرور بنجاح"
          : "Password updated successfully",
        "success"
      );

      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      showToast(
        lan === "ar"
          ? "حدث خطأ أثناء تغيير كلمة المرور"
          : "Error while updating password",
        "error"
      );
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {currentTexts.title}
      </h2>

      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.currentPassword}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock size={20} className="text-gray-400" />
            </div>
            <input
              type="password"
              name="currentPassword"
              value={userData.currentPassword}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.newPassword}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock size={20} className="text-gray-400" />
            </div>
            <input
              type="password"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {currentTexts.confirmPassword}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock size={20} className="text-gray-400" />
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handlePasswordSubmit}
        className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg"
      >
        <Lock size={20} />
        <span>{currentTexts.save}</span>
      </button>
    </div>
  );
};

export default PasswordSection;
