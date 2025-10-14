import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "100", "200", "800", "900"],
});

// meta dat in english
export const metadata = {
  title: "Dr. Ebtisam Nada | ENT & Audiology Consultant",
  description:
    "Official website of Prof. Dr. Ebtisam Hamed Nada – PhD and Consultant in Hearing and Balance Disorders, Professor at Zagazig University. The clinic provides diagnosis and treatment of ear diseases, hearing loss in children, digital hearing aid programming, balance disorder therapy, cochlear implant tests, and psychological assessments.",
  keywords: [
    "Dr. Ebtisam Nada",
    "ENT clinic Egypt",
    "Audiology Egypt",
    "hearing loss diagnosis",
    "children hearing test",
    "cochlear implant Egypt",
    "hearing aids programming",
    "balance disorder treatment",
    "VNG test",
    "ABR test",
    "QAE test",
    "psychological tests Egypt",
    "autism Egypt",
    "ADHD Egypt",
    "learning difficulties Egypt",
    "Zagazig University",
  ],
  authors: [{ name: "Prof. Dr. Ebtisam Hamed Nada" }],
  openGraph: {
    title: "Dr. Ebtisam Nada | ENT & Audiology Consultant",
    description:
      "Clinic specialized in ENT and audiology services: hearing loss diagnosis, balance disorder treatment, digital hearing aids, cochlear implant preparation, and psychological assessments for children.",
    url: "https://your-website.com/en",
    siteName: "Dr. Ebtisam Nada Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <div lang="en" dir="ltr">
      <div className={poppins.className}>{children}</div>
    </div>
  );
}
