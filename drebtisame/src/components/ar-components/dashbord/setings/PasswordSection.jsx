export default function PasswordSection({
  userData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div
      className="rounded-2xl p-8 mb-6 shadow-sm"
      style={{ backgroundColor: "var(--wh)" }}
    >
      <h2 className="text- text-[var(--nv)] xl font-bold mb-6 text-right">
        كلمة المرور
      </h2>

      <div className="mb-4">
        <label className="block text-[var(--nv)] text-sm font-medium mb-2 text-right">
          كلمة المرور الحالية
        </label>
        <input
          type="password"
          name="currentPassword"
          value={userData.currentPassword}
          onChange={handleInputChange}
          placeholder="نسيت كلمة المرور"
          className="w-full px-4 py-3 rounded-lg border-2 text-right transition-all focus:outline-none"
          style={{
            backgroundColor: "var(--lb)",
            borderColor: "var(--lb)",
            color: "var(--nv)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--nv)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--lb)")}
        />
      </div>

      <div>
        <label className="block text-[var(--nv)] text-sm font-medium mb-2 text-right">
          كلمة المرور الجديدة
        </label>
        <input
          type="password"
          name="newPassword"
          value={userData.newPassword}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border-2 text-right transition-all focus:outline-none"
          style={{
            backgroundColor: "var(--lb)",
            borderColor: "var(--lb)",
            color: "var(--nv)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--nv)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--lb)")}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full mt-6 px-6 py-3 rounded-lg font-bold text-base transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
        style={{
          backgroundColor: "var(--nv)",
          color: "var(--wh)",
        }}
      >
        حفظ التغييرات
      </button>
    </div>
  );
}
