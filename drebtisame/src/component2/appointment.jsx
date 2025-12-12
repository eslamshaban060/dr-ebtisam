"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  MessageSquare,
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

  const clinics = {
    nasr: {
      name: "عيادة مدينة نصر",
      location: "مدينة نصر، القاهرة",
      schedule: [{ day: "الأحد", times: ["4pm - 6pm"] }],
    },
    october: {
      name: "عيادة ميت غمر",
      location: "ميت غمر، الدقهلية",
      schedule: [
        { day: "السبت", times: ["2pm - 6pm"] },
        { day: "الأربعاء", times: ["2pm - 6pm"] },
      ],
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    alert("تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً.");
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

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="text-xl font-bold mb-3">💡 نصيحة مهمة</h4>
              <p className="text-cyan-50 leading-relaxed">
                يُرجى الوصول قبل 10 دقائق من موعدك. في حالة التأخير أو الإلغاء،
                يرجى التواصل معنا قبل 24 ساعة على الأقل.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5 text-cyan-600" />
                  الاسم الكامل
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
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم هاتفك"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  اختر العيادة
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
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    اختر الوقت
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
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>تأكيد الحجز</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
