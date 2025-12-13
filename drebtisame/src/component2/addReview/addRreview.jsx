"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { supabase } from "@/utils/supabase/supabase";
import ReviewHeader from "./ReviewHeader";
import ReviewForm from "./ReviewForm";
import BackgroundBlobs from "./BackgroundBlobs";

export default function AddReviewPage({ lang = "ar" }) {
  const t = {
    ar: {
      toastError: "الرجاء تصحيح الأخطاء في النموذج",
      sendError: "حصل خطأ أثناء الإرسال",
      sendSuccess: "شكراً لك! تم إرسال رأيك بنجاح وسيتم مراجعته قريباً 🎉",
      dir: "rtl",
    },
    en: {
      toastError: "Please fix the form errors",
      sendError: "Something went wrong while sending",
      sendSuccess: "Thank you! Your review has been submitted successfully 🎉",
      dir: "ltr",
    },
  }[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (formData.rating === 0) newErrors.rating = true;
    if (!formData.review.trim()) newErrors.review = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showToast(t.toastError, "error");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert([
      {
        name: formData.name,
        email: formData.email,
        review: formData.review,
        rate: formData.rating,
      },
    ]);

    setLoading(false);

    if (error) {
      showToast(t.sendError, "error");
      return;
    }

    showToast(t.sendSuccess, "success");
    setFormData({ name: "", email: "", rating: 0, review: "" });
  };

  const ToastIcon = () =>
    toast.type === "success" ? (
      <CheckCircle className="w-5 h-5" />
    ) : (
      <XCircle className="w-5 h-5" />
    );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 px-4 relative overflow-hidden"
      dir={t.dir}
    >
      {/* الخلفية فقط */}
      <BackgroundBlobs />

      {toast.show && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
              toast.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white min-w-[320px]`}
          >
            <ToastIcon />
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      <ReviewHeader lang={lang} />

      <ReviewForm
        lang={lang}
        formData={formData}
        setFormData={setFormData}
        hoveredRating={hoveredRating}
        setHoveredRating={setHoveredRating}
        errors={errors}
        setErrors={setErrors}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
}
