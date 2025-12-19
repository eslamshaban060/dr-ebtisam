"use client";
import React, { useState, useEffect } from "react";
import {
  Gift,
  Award,
  Lock,
  Eye,
  EyeOff,
  X,
  Download,
  Send,
} from "lucide-react";
import { GiftCardForm } from "./Forms";

// الباسورد الصحيح
const CORRECT_PASSWORD = "drebtisam--123";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-emerald-500"
      : type === "error"
        ? "bg-red-500"
        : "bg-blue-500";

  return (
    <div
      className={`fixed top-6 right-6 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in z-50`}
    >
      <span className="font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="hover:bg-white/20 p-1 rounded-lg transition-all"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        onLogin();
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Lock className="w-12 h-12 text-emerald-600" />
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Dr. Ebtessam Clinic Portal</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all"
                placeholder="Enter password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-red-700 text-sm font-semibold">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !password}
            className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                Login
              </>
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">🔒 Secure authentication</p>
        </div>
      </div>
    </div>
  );
};

const ClinicLogo = () => (
  <div className="w-20 h-20 rounded-full bg-white shadow-xl p-3 flex items-center justify-center border-4 border-emerald-400 relative">
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
    <div className="text-center">
      <div className="text-4xl">🏥</div>
      <div className="text-blue-900 font-bold text-xs mt-1">Dr.E.N</div>
    </div>
  </div>
);

const Header = () => (
  <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="relative z-10 flex items-center gap-5">
      <ClinicLogo />
      <div>
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
          Dr. Ebtessam Hamed Nada
        </h1>
        <p className="text-emerald-100 text-lg flex items-center gap-2">
          <Award className="w-5 h-5" />
          ENT Specialist - Hearing & Balance Clinic
        </p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [giftCards, setGiftCards] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleGenerateGiftCard = (data) => {
    setGiftCards([{ id: Date.now(), ...data }, ...giftCards]);
    showToast("Gift card created successfully! 🎉", "success");
  };

  const downloadPDF = (data) => {
    showToast("Generating PDF...", "info");

    // التأكد من وجود مكتبة jsPDF
    if (!window.jspdf) {
      showToast("PDF library not loaded. Please refresh the page.", "error");
      return;
    }

    try {
      const { jsPDF } = window.jspdf;

      // أبعاد البطاقة
      const CARD_W = 100;
      const CARD_H = 65;
      const M = 3;

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [CARD_W, CARD_H],
      });

      // الألوان
      const navy = [24, 44, 68];
      const navySoft = [32, 58, 88];
      const green = [16, 185, 129];
      const grayLight = [243, 246, 249];

      // الخلفية الرئيسية
      doc.setFillColor(...navy);
      doc.roundedRect(M, M, CARD_W - M * 2, CARD_H - M * 2, 5, 5, "F");

      // الشريط الجانبي
      doc.setFillColor(...navySoft);
      doc.roundedRect(M, M, 30, CARD_H - M * 2, 5, 5, "F");

      // الخصم الكبير
      doc.setTextColor(255, 255, 255);
      doc.setFont(undefined, "bold");
      doc.setFontSize(40);
      doc.text(`${data.discount}%`, M + 4, 30);

      doc.setFontSize(13);
      doc.setFont(undefined, "normal");
      doc.text("Discount", M + 4, 38);

      doc.setFontSize(9);
      doc.setTextColor(220, 230, 240);
      doc.text("Gift Card", M + 4, 44);

      // بيانات العيادة
      const rightX = CARD_W - M - 3;

      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text("Dr. Ebtessam H. Nada", rightX, 18, { align: "right" });

      doc.setFontSize(8);
      doc.setTextColor(...green);
      doc.text("ENT Consultant", rightX, 24, { align: "right" });

      doc.setDrawColor(...green);
      doc.setLineWidth(0.5);
      doc.line(50, 28, rightX, 28);

      doc.setFontSize(8);
      doc.setTextColor(230, 230, 230);
      doc.text(data.serviceType, rightX, 34, { align: "right" });
      doc.text("Hearing & Balance", rightX, 40, { align: "right" });

      // اللوجو
      const logoSize = 13;
      const logoX = CARD_W / 2 - logoSize / 2;
      const logoY = 38;

      doc.setFillColor(255, 255, 255);
      doc.circle(CARD_W / 2, logoY + logoSize / 2, 8.5, "F");

      doc.setDrawColor(...green);
      doc.setLineWidth(1);
      doc.circle(CARD_W / 2, logoY + logoSize / 2, 8.5, "S");

      // رسم أيقونة بسيطة للعيادة
      doc.setFontSize(14);
      doc.setTextColor(...navy);
      doc.text("🏥", CARD_W / 2, logoY + logoSize / 2 + 2, { align: "center" });

      // الشريط السفلي
      doc.setFillColor(...grayLight);
      doc.roundedRect(
        M + 1.5,
        CARD_H - M - 7,
        CARD_W - (M + 1.5) * 2,
        6,
        2.5,
        2.5,
        "F"
      );

      doc.setFontSize(7);
      doc.setTextColor(...navy);
      doc.text(data.patientName, M + 4, CARD_H - M - 3);

      doc.setTextColor(120, 120, 120);
      doc.text(
        `Valid until: ${data.validUntil}`,
        CARD_W - M - 4,
        CARD_H - M - 3,
        { align: "right" }
      );

      // حفظ الملف
      doc.save(`GiftCard_${data.patientName}_${Date.now()}.pdf`);

      showToast("PDF downloaded successfully! 📄", "success");
    } catch (error) {
      console.error("PDF generation error:", error);
      showToast("Failed to generate PDF. Please try again.", "error");
    }
  };

  const deleteCard = (id) => {
    setGiftCards(giftCards.filter((c) => c.id !== id));
    showToast("Gift card deleted", "error");
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 p-6">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Gift className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Create Gift Card
              </h2>
            </div>

            <GiftCardForm
              onGenerate={handleGenerateGiftCard}
              showToast={showToast}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 max-h-[850px] overflow-y-auto">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white pb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Saved Gift Cards
              </h2>
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold">
                {giftCards.length}
              </span>
            </div>

            <div className="space-y-5">
              {giftCards.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <div className="w-24 h-24 mx-auto mb-5 bg-gray-100 rounded-full flex items-center justify-center">
                    <Gift className="w-12 h-12 opacity-30" />
                  </div>
                  <p className="text-lg font-semibold">No gift cards yet</p>
                  <p className="text-sm mt-2">
                    Create your first gift card to get started!
                  </p>
                </div>
              ) : (
                giftCards.map((card) => (
                  <GiftCardItem
                    key={card.id}
                    data={card}
                    onDownload={() => downloadPDF(card)}
                    onDelete={() => deleteCard(card.id)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

const GiftCardItem = ({ data, onDownload, onDelete }) => (
  <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
    <div className="flex justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Gift className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-xl text-gray-800">
            {data.patientName}
          </h3>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <span>📅</span> {data.createdAt}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:bg-red-100 p-2 rounded-xl h-fit transition-all"
      >
        <X className="w-5 h-5" />
      </button>
    </div>

    <div className="space-y-3 mb-5 bg-white rounded-xl p-4 border border-emerald-100">
      <div className="flex items-start gap-2">
        <span className="text-emerald-600 font-bold min-w-[80px]">
          Service:
        </span>
        <span className="text-gray-700">{data.serviceType}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-emerald-600 font-bold min-w-[80px]">
          Discount:
        </span>
        <span className="text-gray-700 font-bold text-lg">
          {data.discount}% OFF
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-emerald-600 font-bold min-w-[80px]">
          Valid Until:
        </span>
        <span className="text-gray-700">{data.validUntil}</span>
      </div>
      {data.customMessage && (
        <div className="pt-3 border-t border-emerald-100">
          <p className="text-gray-600 italic">💬 {data.customMessage}</p>
        </div>
      )}
    </div>

    <div className="flex gap-3">
      <button
        onClick={onDownload}
        className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 flex items-center justify-center gap-2 font-semibold transition-all shadow-md hover:shadow-lg"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </button>
    </div>
  </div>
);
