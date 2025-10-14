import { SectionHeader } from "./SectionHeader";
import { ClipboardList } from "lucide-react";
const Services = [
  {
    id: 1,
    icon: <ClipboardList size={30} />,
    title: "Hearing Diagnosis",
    desc: "Comprehensive hearing tests using advanced audiometric technology to evaluate your hearing health.",
  },
  {
    id: 2,
    icon: <ClipboardList size={30} />,
    title: "Children’s Hearing Tests",
    desc: "Specialized assessments for infants and children to detect hearing issues early and support speech development.",
  },
  {
    id: 3,
    icon: <ClipboardList size={30} />,
    title: "Hearing Aid Consultation",
    desc: "Guidance in choosing the most suitable hearing aids and precise fitting for maximum comfort and clarity.",
  },
];
const ServicesSection = () => {
  return (
    <section
      className="section max-w-7xl mx-auto lg:px-20 sm:px-10 px-5  py-5 min-h-screen"
      id="services"
    >
      <SectionHeader
        title={"Services"}
        message={"Dedicated to Your Hearing & Balance Health"}
        info={`At Dr. Ibtissem’s clinic, every service is designed with precision, care, and a deep understanding of hearing and balance health.
            From comprehensive hearing assessments to advanced treatments for balance disorders,
            we offer personalized care that focuses on your comfort and long-term well-being.`}
      />
      <div className="grid mt-20 gap-10 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] ">
        {Services.map((item) => (
          <div className=" min-h-80  card-bg w-full rounded-2xl  group transition-all duration-500  hover:transform-[scaleX(0.95)_translateY(-20px)] shadow-[var(--shadow-1)]  " key={item.id}>
            <div className="w-full min-h-full rounded-2xl bg-[var(--wh)] text-[var(--bl2)] hover:text-[var(--wh)] transition-all duration-500 cursor-pointer  group-hover:bg-[var(--nv)]/64 gap-5 flex flex-col justify-center items-center  p-10">
              <div className="size-12 p-1 border flex justify-center items-center rounded-lg ">{item.icon}</div>
              <h2 className="text-lg ">{item.title}</h2>
              <p className="text-[var(--nv)]/64 group-hover:text-[var(--wh)]/64 text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
