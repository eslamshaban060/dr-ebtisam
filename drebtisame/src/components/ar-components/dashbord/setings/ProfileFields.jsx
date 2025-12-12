"use client";

export default function ProfileFields({
  formData,
  errors,
  handleChange,
  handleValidationAndSubmit,
  texts,
}) {
  return (
    <div className="col-span-2 flex flex-col gap-8 w-full mb-4">
      {/* Form Fields */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Name */}
          <div className="w-full">
            <label className="block text-sm text-[var(--nv)] font-medium mb-2">
              {texts.name}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[var(--nv)] focus:outline-none transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2 text-[var(--nv)]">
              {texts.phone}
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="block text-sm font-medium mb-2 text-[var(--nv)]">
            {texts.email}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Save Button */}
      <button
        type="button"
        onClick={handleValidationAndSubmit}
        className="w-full mt-4 px-6 py-3 rounded-lg font-bold text-base transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
        style={{
          backgroundColor: "var(--nv)",
          color: "var(--wh)",
        }}
      >
        {texts.save}
      </button>
    </div>
  );
}
