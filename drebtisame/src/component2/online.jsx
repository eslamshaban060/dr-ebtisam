import React from "react";
import { Video, ArrowLeft } from "lucide-react";

export default function OnlineConsultation({ lang = "ar" }) {
  const drappLink = "https://drapp.app.link/TIQ10KgCeZb";

  return (
    <section
      id="online-consultation"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-white"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-[#38bcc1] to-[#00968F] p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {lang === "ar" ? "استشارات أونلاين" : "Online Consultations"}
              </h2>
              <p className="text-cyan-50 text-lg leading-relaxed">
                {lang === "ar"
                  ? "استشر دكتورة السمع والاتزان من منزلك عبر تطبيق DrApp - تشخيص دقيق لمشاكل السمع والدوخة والدوار مع متابعة طبية شاملة"
                  : "Consult the ENT specialist from home via DrApp - Accurate diagnosis of hearing, dizziness and vertigo problems with comprehensive medical follow-up"}
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {lang === "ar"
                  ? "احجز استشارتك الآن"
                  : "Book Your Consultation Now"}
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#38bcc1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {lang === "ar"
                      ? "تشخيص مشاكل السمع والاتزان عن بُعد"
                      : "Remote diagnosis of hearing and balance problems"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#38bcc1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {lang === "ar"
                      ? "استشارة فورية للدوخة والدوار والطنين"
                      : "Instant consultation for dizziness, vertigo and tinnitus"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#38bcc1] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    {lang === "ar"
                      ? "وصفة علاجية وخطة متابعة كاملة"
                      : "Treatment prescription and complete follow-up plan"}
                  </span>
                </li>
              </ul>
              <a
                href={drappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#38bcc1] to-[#00968F] hover:from-[#00968F] hover:to-[#38bcc1] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>
                  {lang === "ar" ? "احجز عبر DrApp" : "Book via DrApp"}
                </span>
                <ArrowLeft
                  className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
