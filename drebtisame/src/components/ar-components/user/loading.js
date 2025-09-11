"use client";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <Loader2 className="w-12 h-12 text-white animate-spin" />
        <p className="text-white mt-4 text-lg">جاري الإرسال...</p>
      </motion.div>
    </div>
  );
}
