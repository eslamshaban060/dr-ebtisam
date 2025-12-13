import { MessageSquare } from "lucide-react";

export default function ReviewHeader({ lang }) {
  const content = {
    ar: {
      title: "شاركنا رأيك",
      desc: "رأيك يهمنا! شاركنا تجربتك مع د. ابتسام ندى لمساعدة الآخرين",
    },
    en: {
      title: "Share Your Review",
      desc: "Your opinion matters! Share your experience with Dr. Ibtisam Nada",
    },
  }[lang];

  return (
    <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mb-6 shadow-lg">
        <MessageSquare className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {content.title}
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">{content.desc}</p>
    </div>
  );
}
