"use client";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "../../../../../utils/supabase/supabase";
import Toast from "./Toast";
import AdminForm from "./AdminForm";

const adminSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?\d{7,16}$/, "Phone must be 7-16 digits, optional + prefix"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function AddAdminModal({ texts, setIsOpen, isOpen, lan }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [status, setStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now() + Math.random();
    setToasts((s) => [...s, { id, type, message }]);
  };
  const removeToast = (id) => setToasts((s) => s.filter((t) => t.id !== id));
  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(texts.validating);

    const parse = adminSchema.safeParse(formData);
    if (!parse.success) {
      const errs = {};
      for (const issue of parse.error.issues) {
        const k = issue.path[0] || "form";
        errs[k] = issue.message;
      }
      setFieldErrors(errs);
      setStatus("");
      addToast("error", texts.fixErrors);
      return;
    }

    setStatus(texts.creating);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      { email: formData.email, password: formData.password }
    );

    if (signUpError) {
      setStatus("");
      addToast("error", signUpError.message || texts.authError);
      return;
    }

    const { error: insertError } = await supabase.from("user").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: "admin",
        created_at: new Date().toISOString(),
        password: formData.password,
      },
    ]);

    if (insertError) {
      setStatus("");
      addToast("error", insertError.message || texts.dbError);
      return;
    }

    addToast("success", texts.success);
    setStatus(texts.done);
    setFormData({ name: "", email: "", phone: "", password: "" });
    setTimeout(() => setIsOpen(false), 900);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0  bg-black/60 bg-opacity-40 flex items-center justify-center z-50">
        <div className="relative bg-[var(--wh)] rounded-3xl  w-[90%] max-w-2xl p-8 text-right border border-[var(--lb-2)]">
          <button
            onClick={handleClose}
            className="absolute top-5 left-5 text-[var(--gry)] hover:text-[var(--bl)] text-2xl"
            aria-label="close modal"
          >
            ✕
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-[var(--db)] mb-6 text-center">
            {texts.title}
          </h2>

          <AdminForm
            formData={formData}
            fieldErrors={fieldErrors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            texts={texts}
          />

          {status && (
            <p className="text-center text-[var(--gry)] text-sm mt-6">
              {status}
            </p>
          )}
        </div>
      </div>

      <div className="fixed top-6 right-6 z-[100] flex flex-col gap-3">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            id={t.id}
            type={t.type}
            message={t.message}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </>
  );
}
