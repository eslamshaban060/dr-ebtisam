"use client";
import InputField from "./InputField";

export default function AdminForm({
  formData,
  fieldErrors,
  onChange,
  onSubmit,
  texts,
}) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label={texts.fullName}
        name="name"
        value={formData.name}
        onChange={onChange}
        error={fieldErrors.name}
      />

      <InputField
        label={texts.phone}
        name="phone"
        value={formData.phone}
        onChange={onChange}
        error={fieldErrors.phone}
        required
      />

      <div className="md:col-span-2">
        <InputField
          label={texts.email}
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          error={fieldErrors.email}
          required
        />
      </div>

      <InputField
        label={texts.password}
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        error={fieldErrors.password}
        required
      />

      <div className="md:col-span-1 flex items-end">
        <button
          type="submit"
          className="bg-[var(--db)] text-[var(--wh)] font-semibold py-3 w-full rounded-md shadow-[var(--shadow-1)] hover:bg-[var(--bl)] transition-all"
        >
          {texts.submitBtn}
        </button>
      </div>
    </form>
  );
}
