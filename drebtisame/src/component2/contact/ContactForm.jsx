"use client";

import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function ContactForm({ lang = "ar" }) {
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [errors, setErrors] = useState({});

  const texts = {
    title: isAr ? "تواصل مع الدكتورة مباشرة" : "Contact the Doctor Directly",
    subtitle: isAr
      ? "نسعد بالرد على استفساراتك وحجز موعدك في أي وقت"
      : "We are happy to answer your inquiries and schedule your appointment anytime",
    directContact: isAr
      ? "تواصل مباشر مع الدكتورة"
      : "Direct Contact with Doctor",
    namePlaceholder: isAr ? "اسمك الكامل" : "Your Full Name",
    emailPlaceholder: isAr ? "بريدك الإلكتروني" : "Your Email",
    phonePlaceholder: isAr ? "رقم التليفون" : "Your Phone Number",
    messagePlaceholder: isAr
      ? "اكتب رسالتك أو استفسارك هنا..."
      : "Write your message or inquiry here...",
    submitButton: isAr ? "إرسال الرسالة" : "Send Message",
    contactVia: isAr ? "أو تواصل معنا عبر" : "Or contact us via",
    toastSuccess: isAr
      ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً 🎉"
      : "Your message has been sent successfully! We'll contact you soon 🎉",
    toastError: isAr
      ? "الرجاء تصحيح الأخطاء في النموذج"
      : "Please correct the errors in the form",
    errors: {
      nameRequired: isAr ? "الرجاء إدخال الاسم" : "Please enter your name",
      nameShort: isAr
        ? "الاسم يجب أن يكون 3 أحرف على الأقل"
        : "Name must be at least 3 characters",
      emailRequired: isAr
        ? "الرجاء إدخال البريد الإلكتروني"
        : "Please enter your email",
      emailInvalid: isAr
        ? "البريد الإلكتروني غير صحيح"
        : "Invalid email address",
      phoneRequired: isAr
        ? "الرجاء إدخال رقم التليفون"
        : "Please enter your phone number",
      phoneInvalid: isAr ? "رقم التليفون غير صحيح" : "Invalid phone number",
      messageRequired: isAr
        ? "الرجاء كتابة رسالتك"
        : "Please write your message",
      messageShort: isAr
        ? "الرسالة يجب أن تكون 10 أحرف على الأقل"
        : "Message must be at least 10 characters",
    },
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = texts.errors.nameRequired;
    else if (formData.name.trim().length < 3)
      newErrors.name = texts.errors.nameShort;

    if (!formData.email.trim()) newErrors.email = texts.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = texts.errors.emailInvalid;

    if (!formData.phone.trim()) newErrors.phone = texts.errors.phoneRequired;
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = texts.errors.phoneInvalid;

    if (!formData.message.trim())
      newErrors.message = texts.errors.messageRequired;
    else if (formData.message.trim().length < 10)
      newErrors.message = texts.errors.messageShort;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      showToast(texts.toastSuccess, "success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      showToast(texts.toastError, "error");
    }
  };

  const ToastIcon = () => {
    if (toast.type === "success") return <CheckCircle className="w-5 h-5" />;
    if (toast.type === "error") return <XCircle className="w-5 h-5" />;
    return <AlertCircle className="w-5 h-5" />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {toast.show && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
              toast.type === "success"
                ? "bg-green-500"
                : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
            } text-white min-w-[320px]`}
          >
            <ToastIcon />
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
          <MessageCircle className="w-4 h-4" />
          <span>{texts.directContact}</span>
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${
            errors.name
              ? "border-red-500"
              : "border-transparent focus:border-teal-500"
          } focus:bg-white focus:outline-none transition-all`}
          placeholder={texts.namePlaceholder}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 mr-2">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${
            errors.email
              ? "border-red-500"
              : "border-transparent focus:border-teal-500"
          } focus:bg-white focus:outline-none transition-all`}
          placeholder={texts.emailPlaceholder}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 mr-2">{errors.email}</p>
        )}

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${
            errors.phone
              ? "border-red-500"
              : "border-transparent focus:border-teal-500"
          } focus:bg-white focus:outline-none transition-all`}
          placeholder={texts.phonePlaceholder}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1 mr-2">{errors.phone}</p>
        )}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`w-full px-4 py-3 bg-gray-50 rounded-xl border-2 ${
            errors.message
              ? "border-red-500"
              : "border-transparent focus:border-teal-500"
          } focus:bg-white focus:outline-none transition-all resize-none`}
          placeholder={texts.messagePlaceholder}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 mr-2">{errors.message}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <span>{texts.submitButton}</span>
          <Send className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-center text-sm text-gray-600 mb-3">
          {texts.contactVia}
        </p>
        <SocialLinks lang={lang} />
      </div>
    </div>
  );
}
