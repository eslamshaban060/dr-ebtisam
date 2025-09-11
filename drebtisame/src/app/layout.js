import { Poppins, Changa } from "next/font/google";
import "./globals.css";

const changa = Changa({
  variable: "--font-Changa",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "100", "200", "800", "900"],
});

// app/metadata.ts

const metadata = {
  title: "د. ابتسام ندا | استشاري السمع والاتزان",
  description:
    "الموقع الرسمي للأستاذة الدكتورة ابتسام حامد ندا – دكتوراه واستشاري أمراض السمع والاتزان، أستاذ بكلية الطب جامعة الزقازيق. خدمات العيادة تشمل تشخيص أمراض الأذن، ضعف السمع عند الأطفال، برمجة وصيانة السماعات، تشخيص الدوار والاتزان، الفحوصات اللازمة لزراعة القوقعة، والاختبارات النفسية (فرط الحركة، التوحد، صعوبة التعلم).",
  keywords: [
    "د. ابتسام ندا",
    "عيادة سمع واتزان",
    "ضعف السمع",
    "تشخيص الدوار",
    "زراعة القوقعة",
    "اختبارات نفسية",
    "فرط الحركة",
    "التوحد",
    "صعوبة التعلم",
    "جامعة الزقازيق",
    "ENT Egypt",
    "audiology Egypt",
    "hearing loss children",
    "cochlear implant Egypt",
  ],
  authors: [{ name: "د. ابتسام حامد ندا" }],
  openGraph: {
    title: "د. ابتسام ندا | استشاري السمع والاتزان",
    description:
      "خدمات طبية متكاملة تشمل تشخيص أمراض السمع والاتزان، علاج الدوار، برمجة السماعات، فحوصات زراعة القوقعة، والاختبارات النفسية للأطفال.",
    url: "https://your-website.com",
    siteName: "عيادة د. ابتسام ندا",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={changa.className}>{children}</body>
    </html>
  );
}
