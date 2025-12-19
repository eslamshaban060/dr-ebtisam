import React, { useState } from "react";
import { Sparkles, Download, Send } from "lucide-react";

export const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  children,
  ...props
}) => (
  <div>
    <label className="block text-gray-700 font-semibold mb-2">{label}</label>
    {type === "textarea" ? (
      <textarea
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all resize-none bg-white shadow-sm hover:shadow-md"
        placeholder={placeholder}
        {...props}
      />
    ) : type === "select" ? (
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all bg-white shadow-sm hover:shadow-md"
        {...props}
      >
        {children}
      </select>
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all bg-white shadow-sm hover:shadow-md"
        placeholder={placeholder}
        {...props}
      />
    )}
  </div>
);

export const GiftCardForm = ({ onGenerate, showToast }) => {
  const [patientName, setPatientName] = useState("");
  const [serviceType, setServiceType] = useState("Comprehensive Hearing Test");
  const [discount, setDiscount] = useState("10");
  const [validUntil, setValidUntil] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const services = [
    "Comprehensive Hearing Test",
    "Hearing and Balance Assessment",
    "Medical Ear Cleaning",
    "Ear Infection Treatment",
    "Specialized Consultation",
    "Hearing Aids",
    "Balance Testing",
    "Follow-up Appointment",
  ];

  const validateEnglishOnly = (text) => {
    const englishPattern = /^[a-zA-Z0-9\s.,!?'-]+$/;
    return englishPattern.test(text) || text === "";
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (validateEnglishOnly(value)) {
      setter(value);
    }
  };

  const handleSubmit = () => {
    if (!patientName || !validUntil) {
      showToast("Please complete all required fields", "error");
      return;
    }

    if (
      !validateEnglishOnly(patientName) ||
      !validateEnglishOnly(customMessage)
    ) {
      showToast("Please write in English only", "error");
      return;
    }

    onGenerate({
      patientName,
      serviceType,
      discount,
      validUntil,
      customMessage,
      createdAt: new Date().toLocaleString("en-US"),
    });

    setPatientName("");
    setServiceType("Comprehensive Hearing Test");
    setDiscount("10");
    setValidUntil("");
    setCustomMessage("");
  };

  return (
    <div className="space-y-5">
      <FormInput
        label="Patient Name *"
        value={patientName}
        onChange={handleInputChange(setPatientName)}
        placeholder="Enter patient name"
      />

      <FormInput
        label="Service Type"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        type="select"
      >
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </FormInput>

      <FormInput
        label="Discount (%)"
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        min="0"
        max="100"
      />

      <FormInput
        label="Valid Until *"
        type="date"
        value={validUntil}
        onChange={(e) => setValidUntil(e.target.value)}
      />

      <FormInput
        label="Custom Message (Optional)"
        type="textarea"
        value={customMessage}
        onChange={handleInputChange(setCustomMessage)}
        placeholder="Add a special message..."
        rows="3"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:scale-[1.02]"
      >
        <Sparkles className="w-6 h-6" />
        Create Gift Card
      </button>

      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border-l-4 border-blue-500">
        <p className="text-sm text-blue-900 font-semibold">📝 Important Note</p>
        <p className="text-sm text-blue-700 mt-1">
          Please write in English only
        </p>
      </div>
    </div>
  );
};
