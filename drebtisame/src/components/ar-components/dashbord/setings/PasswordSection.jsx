"use client";
import { supabase } from "@/utils/supabase/supabase";
import { useState } from "react";
import UserData from "@/app/hocks/userData";

// Toast Component
function Toast({ message, type, isVisible, onClose, isArabic }) {
  if (!isVisible) return null;

  const bgColor =
    type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#f59e0b";

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        [isArabic ? "left" : "right"]: "20px",
        backgroundColor: bgColor,
        color: "white",
        padding: "16px 24px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        zIndex: 9999,
        animation: `slideIn${isArabic ? "Left" : "Right"} 0.3s ease-out`,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        minWidth: "300px",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <span style={{ flex: 1, fontWeight: "500" }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "rgba(255,255,255,0.3)",
          border: "none",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          color: "white",
        }}
      >
        ×
      </button>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function PasswordSection({ lan }) {
  const isArabic = lan === "ar";

  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const { User } = UserData();

  const TEXT = {
    title: isArabic ? "تغيير كلمة المرور" : "Change Password",
    placeholder: isArabic ? "أدخل كلمة المرور الجديدة" : "Enter new password",
    passwordTooShort: isArabic
      ? "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
      : "Password must be at least 8 characters",
    passwordEmpty: isArabic
      ? "الرجاء إدخال كلمة المرور"
      : "Please enter a password",
    noUser: isArabic
      ? "لم يتم العثور على بيانات المستخدم"
      : "User data not found",
    updateError: isArabic
      ? "حدث خطأ أثناء تحديث كلمة المرور"
      : "Error updating password",
    success: isArabic
      ? "✓ تم تحديث كلمة المرور بنجاح"
      : "✓ Password updated successfully",
    save: isArabic ? "حفظ التغييرات" : "Save Changes",
    saving: isArabic ? "جاري الحفظ..." : "Saving...",
    show: isArabic ? "إظهار" : "Show",
    hide: isArabic ? "إخفاء" : "Hide",
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleSubmit = async () => {
    // Validation
    if (!newPassword.trim()) {
      showToast(TEXT.passwordEmpty, "error");
      return;
    }

    if (newPassword.length < 8) {
      showToast(TEXT.passwordTooShort, "error");
      return;
    }

    if (!User || !User.email) {
      showToast(TEXT.noUser, "error");
      return;
    }

    setIsLoading(true);

    try {
      const { error: updateError } = await supabase
        .from("user")
        .update({ password: newPassword })
        .eq("email", User.email);

      if (updateError) {
        console.error("Update error:", updateError);
        showToast(TEXT.updateError, "error");
        return;
      }

      showToast(TEXT.success, "success");
      setNewPassword(""); // Clear password field after success
    } catch (err) {
      console.error("Exception during password update:", err);
      showToast(TEXT.updateError, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        isArabic={isArabic}
        onClose={() => setToast({ show: false, message: "", type: "" })}
      />

      <div
        className="rounded-2xl p-8 mb-6 shadow-sm"
        style={{ backgroundColor: "var(--wh)" }}
      >
        <h2
          className="text-xl text-[var(--nv)] font-bold mb-6"
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          {TEXT.title}
        </h2>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder={TEXT.placeholder}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "var(--lb)",
              borderColor: "var(--lb)",
              color: "var(--nv)",
              textAlign: isArabic ? "right" : "left",
              paddingRight: isArabic ? "20px" : "16px",
              paddingLeft: isArabic ? "16px" : "20px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--nv)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--lb)")}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isLoading) {
                handleSubmit();
              }
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
            className={`absolute ${
              isArabic ? "left-4" : "right-4"
            } top-1/2 transform -translate-y-1/2 text-sm font-medium transition-opacity hover:opacity-70 disabled:opacity-30`}
            style={{ color: "var(--nv)" }}
          >
            {showPassword ? TEXT.hide : TEXT.show}
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full mt-6 px-6 py-3 rounded-lg font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            backgroundColor: "var(--nv)",
            color: "var(--wh)",
          }}
        >
          {isLoading ? TEXT.saving : TEXT.save}
        </button>
      </div>
    </>
  );
}
