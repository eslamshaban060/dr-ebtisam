export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className=" flex flex-col justify-center">
      <label className="block text-start text-[var(--gry)] mb-1 text-sm">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 ${
          error
            ? "border-[var(--re)] focus:ring-[var(--re)]"
            : "border-[var(--lb-2)] focus:ring-[var(--bl)]"
        }`}
      />
      {error && <p className="mt-1 text-xs text-[var(--re)]">{error}</p>}
    </div>
  );
}
