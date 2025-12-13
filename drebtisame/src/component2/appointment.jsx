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

export default function BookingSection({ lang = "ar" }) {
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

  // ترجمة الأيام
  const days = {
    ar: {
      sun: "الأحد",
      mon: "الإثنين",
      tue: "الثلاثاء",
      wed: "الأربعاء",
      thu: "الخميس",
      fri: "الجمعة",
      sat: "السبت",
    },
    en: {
      sun: "Sunday",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
    },
  };

  const clinics = {
    nasr: {
      name: { ar: "عيادة مدينة نصر", en: "Nasr City Clinic" },
      location: { ar: "مدينة نصر، القاهرة", en: "Nasr City, Cairo" },
      whatsapp: "201222592471",
      schedule: [{ day: "sun", times: ["4pm - 6pm"] }],
    },
    october: {
      name: { ar: "عيادة ميت غمر", en: "Mit Ghamr Clinic" },
      location: { ar: "ميت غمر، الدقهلية", en: "Mit Ghamr, Dakahlia" },
      whatsapp: "201128812068",
      schedule: [
        { day: "sat", times: ["2pm - 6pm"] },
        { day: "wed", times: ["2pm - 6pm"] },
      ],
    },
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 5000);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast(
        "error",
        lang === "ar"
          ? "الرجاء إدخال الاسم الكامل"
          : "Please enter your full name"
      );
      return false;
    }

    if (formData.name.trim().length < 3) {
      showToast(
        "error",
        lang === "ar"
          ? "الاسم يجب أن يكون 3 أحرف على الأقل"
          : "Name must be at least 3 characters"
      );
      return false;
    }

    const phoneRegex = /^(01)[0-9]{9}$/;
    if (!formData.phone.trim()) {
      showToast(
        "error",
        lang === "ar"
          ? "الرجاء إدخال رقم الهاتف"
          : "Please enter your phone number"
      );
      return false;
    }

    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      showToast(
        "error",
        lang === "ar"
          ? "رقم الهاتف غير صحيح. يجب أن يبدأ بـ 01 ويتكون من 11 رقم"
          : "Invalid phone number. Must start with 01 and be 11 digits"
      );
      return false;
    }

    if (!formData.clinic) {
      showToast(
        "error",
        lang === "ar" ? "الرجاء اختيار العيادة" : "Please select a clinic"
      );
      return false;
    }

    if (!formData.day) {
      showToast(
        "error",
        lang === "ar" ? "الرجاء اختيار اليوم" : "Please select a day"
      );
      return false;
    }

    if (!formData.time) {
      showToast(
        "error",
        lang === "ar" ? "الرجاء اختيار الوقت" : "Please select a time"
      );
      return false;
    }

    return true;
  };

  const sendWhatsApp = () => {
    const selectedClinic = clinics[formData.clinic];
    const whatsappNumber = selectedClinic.whatsapp;

    const message = `
🏥 *${lang === "ar" ? "حجز موعد جديد" : "New Booking"}*

👤 *${lang === "ar" ? "الاسم" : "Name"}:* ${formData.name}
📱 *${lang === "ar" ? "رقم الهاتف" : "Phone"}:* ${formData.phone}

🏢 *${lang === "ar" ? "العيادة" : "Clinic"}:* ${selectedClinic.name[lang]}
📍 *${lang === "ar" ? "الموقع" : "Location"}:* ${selectedClinic.location[lang]}

📅 *${lang === "ar" ? "اليوم" : "Day"}:* ${days[lang][formData.day]}
⏰ *${lang === "ar" ? "الوقت" : "Time"}:* ${formData.time}

${formData.notes ? `📝 *${lang === "ar" ? "ملاحظات" : "Notes"}:*\n${formData.notes}` : ""}

---
${lang === "ar" ? "تم الإرسال من موقع الدكتورة ابتسام" : "Sent from Dr. Ebtisam's website"}
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    showToast(
      "info",
      lang === "ar" ? "جاري إرسال طلب الحجز..." : "Sending booking request..."
    );

    setTimeout(() => {
      try {
        sendWhatsApp();
        showToast(
          "success",
          lang === "ar"
            ? "تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً"
            : "Booking request sent successfully! You will be contacted soon."
        );
        setFormData({
          name: "",
          phone: "",
          clinic: "nasr",
          day: "",
          time: "",
          notes: "",
        });
      } catch (error) {
        showToast(
          "error",
          lang === "ar"
            ? "حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى"
            : "An error occurred. Please try again."
        );
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
      id="appoint"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
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
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* عنوان */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            <span>
              {lang === "ar" ? "احجز موعدك" : "Book Your Appointment"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === "ar" ? "احجز موعدك الآن" : "Book Your Appointment Now"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {lang === "ar"
              ? "املأ البيانات أدناه وسنتواصل معك لتأكيد موعدك في أقرب وقت"
              : "Fill in the form below and we will contact you to confirm your appointment."}
          </p>
        </div>

        {/* العيادات + النموذج */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* معلومات العيادات */}
          <div className="space-y-6">
            {Object.keys(clinics).map((key, idx) => {
              const clinic = clinics[key];
              const colors =
                key === "nasr"
                  ? [
                      "from-cyan-500",
                      "to-blue-500",
                      "bg-cyan-50",
                      "text-cyan-600",
                    ]
                  : [
                      "from-blue-500",
                      "to-purple-500",
                      "bg-blue-50",
                      "text-blue-600",
                    ];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${colors[0]} ${colors[1]} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {clinic.name[lang]}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {clinic.location[lang]}
                      </p>
                    </div>
                  </div>

                  <div className={`rounded-xl p-4 space-y-3 ${colors[2]}`}>
                    <div className={`flex items-center gap-3 text-gray-700`}>
                      <Clock className={`w-5 h-5 ${colors[3]}`} />
                      <span className="font-semibold">
                        {lang === "ar" ? "مواعيد العمل:" : "Working Hours:"}
                      </span>
                    </div>
                    <div className="pr-8 space-y-2">
                      {clinic.schedule.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="font-medium">
                            {days[lang][s.day]}
                          </span>
                          <span className="text-gray-600">
                            {s.times.join(", ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-br from-cyan-300 to-[#00968F] rounded-2xl p-6 text-white shadow-md">
              <h4 className="text-xl font-bold mb-3">
                💡 {lang === "ar" ? "نصيحة مهمة" : "Important Tip"}
              </h4>
              <p className="text-cyan-50 leading-relaxed">
                {lang === "ar"
                  ? "يُرجى الوصول قبل 10 دقائق من موعدك. في حالة التأخير أو الإلغاء، يرجى التواصل معنا قبل 24 ساعة على الأقل."
                  : "Please arrive 10 minutes before your appointment. In case of delay or cancellation, please contact us at least 24 hours in advance."}
              </p>
            </div>
          </div>

          {/* نموذج الحجز */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="space-y-6">
              {/* الاسم */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5 text-cyan-600" />
                  {lang === "ar" ? "الاسم الكامل" : "Full Name"}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    lang === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
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

              {/* اختيار العيادة */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  {lang === "ar" ? "اختر العيادة" : "Select Clinic"}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                >
                  {Object.keys(clinics).map((key, idx) => (
                    <option key={idx} value={key}>
                      {clinics[key].name[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* اختيار اليوم */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                  {lang === "ar" ? "اختر اليوم" : "Select Day"}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                >
                  <option value="">
                    {lang === "ar" ? "اختر اليوم" : "Select Day"}
                  </option>
                  {selectedClinic?.schedule.map((s, idx) => (
                    <option key={idx} value={s.day}>
                      {days[lang][s.day]}
                    </option>
                  ))}
                </select>
              </div>

              {/* اختيار الوقت */}
              {formData.day && (
                <div className="animate-fadeIn">
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    {lang === "ar" ? "اختر الوقت" : "Select Time"}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">
                      {lang === "ar" ? "اختر الوقت" : "Select Time"}
                    </option>
                    {selectedDay?.times.map((time, idx) => (
                      <option key={idx} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* الملاحظات */}
              <div>
                <label
                  className="flex items-center gap-2 text-gray-700
                font-semibold mb-2"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-600" />
                  {lang === "ar"
                    ? "ملاحظات إضافية (اختياري)"
                    : "Additional Notes (Optional)"}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder={
                    lang === "ar"
                      ? "أي ملاحظات أو استفسارات..."
                      : "Any notes or inquiries..."
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {/* زر الإرسال */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-[#00968F] hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>
                  {isSubmitting
                    ? lang === "ar"
                      ? "جاري الإرسال..."
                      : "Sending..."
                    : lang === "ar"
                      ? "تأكيد الحجز"
                      : "Confirm Booking"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
