import React from "react";
import { Gift, FileText, Award, Download, Send, X } from "lucide-react";

export const ClinicLogo = ({ size = "w-16 h-16" }) => (
  <div
    className={`${size} rounded-full bg-white shadow-xl p-2 flex items-center justify-center border-4 border-emerald-400 relative`}
  >
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-blue-900 font-bold text-lg">🏥</div>
        <div className="text-blue-900 font-bold text-xs mt-1">Dr.E.N</div>
      </div>
    </div>
  </div>
);

export const Header = () => (
  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 rounded-3xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>

    <div className="relative z-10 flex items-center gap-6">
      <ClinicLogo size="w-24 h-24" />
      <div>
        <h1 className="text-5xl font-bold mb-2">Dr. Ebtessam Hamed Nada</h1>
        <p className="text-emerald-300 text-lg font-semibold flex items-center gap-2">
          <Award className="w-5 h-5" />
          ENT Specialist - Hearing & Balance Clinic
        </p>
      </div>
    </div>
  </div>
);

export const TabButton = ({ active, onClick, icon: Icon, label, count }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-5 px-8 rounded-2xl font-bold text-lg transition-all transform ${
      active
        ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-2xl scale-105"
        : "bg-white text-gray-700 shadow-lg hover:shadow-xl"
    }`}
  >
    <Icon className="inline mr-2 w-6 h-6" />
    {label} ({count})
  </button>
);

export const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  colorDot = "blue-600",
  children,
  ...props
}) => (
  <div>
    <label className="block text-gray-800 font-bold mb-2 text-sm flex items-center gap-2">
      <span className={`w-2 h-2 bg-${colorDot} rounded-full`}></span>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-${colorDot} focus:ring-4 focus:ring-${colorDot.split("-")[0]}-100 focus:outline-none transition-all resize-none bg-white shadow-sm`}
        placeholder={placeholder}
        {...props}
      />
    ) : type === "select" ? (
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-${colorDot} focus:ring-4 focus:ring-${colorDot.split("-")[0]}-100 focus:outline-none transition-all bg-white shadow-sm`}
        {...props}
      >
        {children}
      </select>
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-${colorDot} focus:ring-4 focus:ring-${colorDot.split("-")[0]}-100 focus:outline-none transition-all bg-white shadow-sm`}
        placeholder={placeholder}
        {...props}
      />
    )}
  </div>
);

export const ItemCard = ({ type, data, onDownload, onShare, onDelete }) => {
  const isGift = type === "gift";
  const bgGradient = isGift
    ? "from-blue-50 to-emerald-50"
    : "from-emerald-50 to-blue-50";
  const borderColor = isGift ? "border-blue-200" : "border-emerald-200";
  const buttonColor = isGift
    ? "bg-blue-600 hover:bg-blue-700"
    : "bg-emerald-600 hover:bg-emerald-700";

  return (
    <div
      className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-6 border-2 ${borderColor} hover:shadow-xl transition-all`}
    >
      <div className="flex justify-between mb-4">
        <div>
          {!isGift && (
            <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
              {data.noteType}
            </span>
          )}
          <h3 className="font-bold text-lg text-gray-800">
            {isGift ? data.patientName : data.noteTitle}
          </h3>
          <p className="text-sm text-gray-600">{data.createdAt}</p>
        </div>
        <button
          onClick={onDelete}
          className="text-red-500 hover:bg-red-50 p-2 rounded-lg h-fit"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {isGift ? (
        <div className="space-y-2 mb-4 text-sm">
          <p>
            <span className="font-semibold">Service:</span> {data.serviceType}
          </p>
          <p>
            <span className="font-semibold">Discount:</span> {data.discount}%
          </p>
          <p>
            <span className="font-semibold">Valid:</span> {data.validUntil}
          </p>
          {data.customMessage && (
            <p className="text-gray-600 italic">"{data.customMessage}"</p>
          )}
        </div>
      ) : (
        <p className="text-sm mb-4 text-gray-700 line-clamp-3">
          {data.noteContent}
        </p>
      )}

      <div className="flex gap-2">
        <button
          onClick={onDownload}
          className={`flex-1 ${buttonColor} text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold`}
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={onShare}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 font-semibold"
        >
          <Send className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
};

export const EmptyState = ({ type }) => {
  const Icon = type === "gift" ? Gift : FileText;
  const message =
    type === "gift" ? "No gift cards yet" : "No medical notes yet";

  return (
    <div className="text-center py-16 text-gray-400">
      <Icon className="w-20 h-20 mx-auto mb-4 opacity-30" />
      <p>{message}</p>
    </div>
  );
};
