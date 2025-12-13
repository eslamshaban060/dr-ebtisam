"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clinic: "nasr",
    day: "",
    time: "",
    notes: "",
  });

  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clinics = {
    nasr: {
      name: "عيادة مدينة نصر",
      location: "مدينة نصر، القاهرة",
      whatsapp: "201222592471",
      schedule: [{ day: "الأحد", times: ["4pm - 6pm"] }],
    },
    october: {
      name: "عيادة ميت غمر",
      location: "ميت غمر، الدقهلية",
      whatsapp: "201128812068",
      schedule: [
        { day: "السبت", times: ["2pm - 6pm"] },
        { day: "الأربعاء", times: ["2pm - 6pm"] },
      ],
    },
  };

  // دالة عرض التوست
  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  // دالة التحقق من البيانات
  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast("error", "الرجاء إدخال الاسم الكامل");
      return false;
    }

    if (formData.name.trim().length < 3) {
      showToast("error", "الاسم يجب أن يكون 3 أحرف على الأقل");
      return false;
    }

    const phoneRegex = /^(01)[0-9]{9}$/;
    if (!formData.phone.trim()) {
      showToast("error", "الرجاء إدخال رقم الهاتف");
      return false;
    }

    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      showToast(
        "error",
        "رقم الهاتف غير صحيح. يجب أن يبدأ بـ 01 ويتكون من 11 رقم"
      );
      return false;
    }

    if (!formData.clinic) {
      showToast("error", "الرجاء اختيار العيادة");
      return false;
    }

    if (!formData.day) {
      showToast("error", "الرجاء اختيار اليوم");
      return false;
    }

    if (!formData.time) {
      showToast("error", "الرجاء اختيار الوقت");
      return false;
    }

    return true;
  };

  // دالة إرسال الرسالة على واتساب
  const sendWhatsApp = () => {
    const selectedClinic = clinics[formData.clinic];
    const whatsappNumber = selectedClinic.whatsapp;

    const message = `
🏥 *حجز موعد جديد*

👤 *الاسم:* ${formData.name}
📱 *رقم الهاتف:* ${formData.phone}

🏢 *العيادة:* ${selectedClinic.name}
📍 *الموقع:* ${selectedClinic.location}

📅 *اليوم:* ${formData.day}
⏰ *الوقت:* ${formData.time}

${formData.notes ? `📝 *ملاحظات:*\n${formData.notes}` : ""}

---
تم الإرسال من موقع الدكتورة ابتسام
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  // دالة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من البيانات
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    showToast("info", "جاري إرسال طلب الحجز...");

    // محاكاة إرسال البيانات
    setTimeout(() => {
      try {
        // إرسال واتساب
        sendWhatsApp();

        showToast(
          "success",
          "تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً"
        );

        // إعادة تعيين النموذج
        setFormData({
          name: "",
          phone: "",
          clinic: "nasr",
          day: "",
          time: "",
          notes: "",
        });
      } catch (error) {
        showToast("error", "حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى");
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "clinic" && { day: "", time: "" }),
    }));
  };

  const selectedClinic = clinics[formData.clinic];
  const selectedDay = selectedClinic?.schedule.find(
    (s) => s.day === formData.day
  );

  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden"
      dir="rtl"
    >
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border-2 min-w-[320px] ${
              toast.type === "success"
                ? "bg-green-50 border-green-500 text-green-800"
                : toast.type === "error"
                  ? "bg-red-50 border-red-500 text-red-800"
                  : "bg-blue-50 border-blue-500 text-blue-800"
            }`}
          >
            {toast.type === "success" && (
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
            )}
            {toast.type === "error" && (
              <XCircle className="w-6 h-6 flex-shrink-0" />
            )}
            {toast.type === "info" && (
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <p className="font-semibold">{toast.message}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>احجز موعدك</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            املأ البيانات أدناه وسنتواصل معك لتأكيد موعدك في أقرب وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    عيادة مدينة نصر
                  </h3>
                  <p className="text-gray-600 text-sm">مدينة نصر، القاهرة</p>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold">مواعيد العمل:</span>
                </div>
                <div className="pr-8 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">الأحد</span>
                    <span className="text-gray-600">
                      4:00 مساءً - 6:00 مساءً
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    عيادة ميت غمر
                  </h3>
                  <p className="text-gray-600 text-sm">ميت غمر، الدقهلية</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">مواعيد العمل:</span>
                </div>
                <div className="pr-8 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">السبت</span>
                    <span className="text-gray-600">
                      2:00 مساءً - 6:00 مساءً
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">الأربعاء</span>
                    <span className="text-gray-600">
                      2:00 مساءً - 6:00 مساءً
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-300 to-[#00968F] rounded-2xl p-6 text-white shadow-lg">
              <h4 className="text-xl font-bold mb-3">💡 نصيحة مهمة</h4>
              <p className="text-cyan-50 leading-relaxed">
                يُرجى الوصول قبل 10 دقائق من موعدك. في حالة التأخير أو الإلغاء،
                يرجى التواصل معنا قبل 24 ساعة على الأقل.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5 text-cyan-600" />
                  الاسم الكامل
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  رقم الهاتف
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01xxxxxxxxx"
                  maxLength="11"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  اختر العيادة
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                >
                  <option value="nasr">عيادة مدينة نصر</option>
                  <option value="october">عيادة ميت غمر</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                  اختر اليوم
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                >
                  <option value="">اختر اليوم</option>
                  {selectedClinic?.schedule.map((s, idx) => (
                    <option key={idx} value={s.day}>
                      {s.day}
                    </option>
                  ))}
                </select>
              </div>

              {formData.day && (
                <div className="animate-fadeIn">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    اختر الوقت
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">اختر الوقت</option>
                    {selectedDay?.times.map((time, idx) => (
                      <option key={idx} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MessageSquare className="w-5 h-5 text-cyan-600" />
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="أي ملاحظات أو استفسارات..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-[#00968F] hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? "جاري الإرسال..." : "تأكيد الحجز"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
