export default function HeaderSection() {
  return (
    <div className="mb-8">
      <h1 className="text- text-[var(--nv)] 3xl font-bold mb-2 text-right">
        قسم الإعدادات
      </h1>
      <p className="text-sm text-right" style={{ color: "var(--gry)" }}>
        مرحباً بك في قسم الإعدادات. من هنا يمكنك تعديل معلوماتك الشخصية، تغيير
        كلمة السر، وضبط تفضيلات حسابك.
      </p>
    </div>
  );
}
