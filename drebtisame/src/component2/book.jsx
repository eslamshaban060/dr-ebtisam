import React from "react";
import { BookOpen } from "lucide-react";

export default function BooksSection({ lang = "ar" }) {
  return (
    <section
      id="books"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#38bcc1] to-[#00968F] rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {lang === "ar" ? "مؤلفات الدكتورة" : "Dr.'s Publications"}
                </h2>
              </div>
              <h3 className="text-2xl font-bold text-[#38bcc1] mb-4">
                Audiology Step by Step
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {lang === "ar"
                  ? "سلسلة علمية متخصصة في السمع والاتزان - مرجع أساسي للطلاب والمتخصصين في المجال"
                  : "Specialized scientific series in audiology - Essential reference for students and professionals"}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-50 text-[#38bcc1] rounded-lg text-sm font-semibold">
                  {lang === "ar" ? "علم السمع" : "Audiology"}
                </span>
                <span className="px-4 py-2 bg-cyan-50 text-[#38bcc1] rounded-lg text-sm font-semibold">
                  {lang === "ar" ? "التأهيل السمعي" : "Rehabilitation"}
                </span>
                <span className="px-4 py-2 bg-cyan-50 text-[#38bcc1] rounded-lg text-sm font-semibold">
                  {lang === "ar" ? "زراعة القوقعة" : "Cochlear Implant"}
                </span>
              </div>
            </div>

            <div className="md:col-span-3 relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
              <img
                src="/user/book.jpeg"
                alt="Audiology Step by Step Books"
                className="w-full h-auto object-contain max-h-[500px] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
