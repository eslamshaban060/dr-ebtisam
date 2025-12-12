"use client";

import { useState } from "react";
import { profileSchema } from "./validationSchema";
import ProfileFields from "./ProfileFields";
import ProfileImageSection from "./ProfileImageSection";

export default function ProfileSection({
  userData,
  handleSubmitData,
  profileImage,
  setProfileImage,
  handleImageUpload,
  lang = "ar", // default Arabic
}) {
  const [formData, setFormData] = useState({
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || "",
  });

  const [errors, setErrors] = useState({});

  const isArabic = lang === "ar";

  const texts = {
    title: isArabic ? "الملف الشخصي" : "Profile",
    name: isArabic ? "الاسم الكامل" : "Full Name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    phone: isArabic ? "رقم الهاتف" : "Phone Number",
    save: isArabic ? "حفظ التغييرات" : "Save Changes",
    delete: isArabic ? "حذف الصورة" : "Delete Photo",
  };

  const validationTexts = {
    name: isArabic ? "الاسم مطلوب" : "Name is required",
    email: isArabic ? "بريد إلكتروني غير صالح" : "Invalid email address",
    phone: isArabic ? "رقم الهاتف غير صالح" : "Invalid phone number",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidationAndSubmit = () => {
    const result = profileSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = validationTexts[field] || err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    handleSubmitData(formData);
  };

  return (
    <div
      className={`p-8 mb-6 h-auto ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <h2 className="text-[var(--nv)] text-xl font-bold mb-6">{texts.title}</h2>

      <div className="grid grid-cols-3 gap-5">
        <ProfileFields
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleValidationAndSubmit={handleValidationAndSubmit}
          texts={texts}
        />

        <ProfileImageSection
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          handleImageUpload={handleImageUpload}
          texts={texts}
        />
      </div>
    </div>
  );
}
