import { X, CheckCircle, AlertCircle } from "lucide-react";
export const Toast = ({ message, type, onClose }) => {
  const icons = {
    success: <CheckCircle size={20} className="text-white" />,
    error: <AlertCircle size={20} className="text-white" />,
    warning: <AlertCircle size={20} className="text-white" />,
  };

  const bgColors = {
    success: "bg-emerald-600",
    error: "bg-red-600",
    warning: "bg-amber-600",
  };

  return (
    <div
      className={`fixed top-4 right-4 ${bgColors[type]} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-slide-in`}
    >
      {icons[type]}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:bg-white/20 rounded-lg p-1 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};
