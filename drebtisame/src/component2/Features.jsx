import React from "react";
import { Users, Stethoscope, Heart } from "lucide-react";

export default function Features({ lang }) {
  const isAr = lang === "ar";

  return (
    <div className="mt-16 bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Feature 1 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {isAr ? "رعاية موثوقة" : "Trusted Care"}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {isAr
              ? "نهتم بمتابعة المرضى وتقديم أفضل رعاية طبية."
              : "We provide continuous care and medical support."}
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center lg:border-x-2 border-gray-200">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Stethoscope className="w-7 h-7 md:w-8 md:h-8 text-teal-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {isAr ? "تشخيص متخصص" : "Expert Diagnosis"}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {isAr
              ? "نقدم تقييمات دقيقة باستخدام أحدث التكنولوجيا."
              : "We offer precise assessments using modern technology."}
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 md:w-8 md:h-8 text-pink-600" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {isAr ? "راحة المريض أولاً" : "Patient Comfort First"}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {isAr
              ? "نوفر بيئة هادئة لضمان راحة المريض."
              : "We provide a calm comfortable environment."}
          </p>
        </div>
      </div>
    </div>
  );
}
