"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Youtube,
  Instagram,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactSection({ lang = "ar" }) {
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = texts.errors.nameRequired;
    else if (formData.name.trim().length < 3)
      newErrors.name = texts.errors.nameShort;

    if (!formData.email.trim()) newErrors.email = texts.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = texts.errors.emailInvalid;

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
      setFormData({ name: "", email: "", message: "" });
    } else {
      showToast(texts.toastError, "error");
    }
  };

  const socialLinks = [
    {
      icon: <MessageCircle className="w-4 h-4" />,
      color: "bg-green-500 hover:bg-green-600",
      link: "https://wa.me/201234567890",
      name: isAr ? "واتساب" : "WhatsApp",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      color: "bg-blue-500 hover:bg-blue-600",
      link: "tel:+201234567890",
      name: isAr ? "هاتف" : "Phone",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      color: "bg-purple-500 hover:bg-purple-600",
      link: "mailto:info@dr-ibtisam.com",
      name: isAr ? "بريد" : "Email",
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      color: "bg-blue-600 hover:bg-blue-700",
      link: "https://facebook.com",
      name: "Facebook",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      color: "bg-red-600 hover:bg-red-700",
      link: "https://youtube.com",
      name: "YouTube",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      color: "bg-pink-600 hover:bg-pink-700",
      link: "https://instagram.com",
      name: "Instagram",
    },
  ];

  const ToastIcon = () => {
    if (toast.type === "success") return <CheckCircle className="w-5 h-5" />;
    if (toast.type === "error") return <XCircle className="w-5 h-5" />;
    return <AlertCircle className="w-5 h-5" />;
  };

  return (
    <section
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      dir={isAr ? "rtl" : "ltr"}
    >
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

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {texts.title}
          </h2>
          <p className="text-gray-600 text-base">{texts.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 hidden lg:block md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <div className="w-full h-[400px] bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="mb-6">
                    <svg
                      className="w-32 h-32 mx-auto opacity-90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    {texts.submitButton}
                  </h3>
                  <p className="text-lg opacity-90 mb-4">{texts.subtitle}</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span>{isAr ? "متاح الآن" : "Available Now"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
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
                  <p className="text-red-500 text-sm mt-1 mr-2">
                    {errors.name}
                  </p>
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
                  <p className="text-red-500 text-sm mt-1 mr-2">
                    {errors.email}
                  </p>
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
                  <p className="text-red-500 text-sm mt-1 mr-2">
                    {errors.message}
                  </p>
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
                <div className="flex items-center justify-center gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`${social.color} text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
