"use client";
import { useEffect } from "react";

export default function Toast({ id, type, message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      role="alert"
      className={`max-w-sm w-full shadow-[var(--shadow-1)] rounded-md p-4 flex items-start gap-3 border
        ${
          type === "success"
            ? "bg-[var(--wh)] border-[var(--gr)]"
            : "bg-[var(--wh)] border-[var(--re)]"
        }`}
    >
      <div className="pt-0.5">
        {type === "success" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="var(--gr)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="var(--re)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-[var(--nv)]">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-[var(--gry)] hover:text-[var(--bl)] p-1"
        aria-label="close toast"
      >
        ✕
      </button>
    </div>
  );
}
