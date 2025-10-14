import Image from "next/image";
import doctorImage from "../../../../public/home/doctor.png";
import { HandHeart, Stethoscope, User } from "lucide-react";
const abouts = [
  {
    id: 1,
    icon: <User size={32} />,
    title: "Patient Comfort First",
    desc: "A calm, reassuring environment designed to ensure an excellent medical experience.",
  },
  {
    id: 2,
    icon: <Stethoscope size={32} />,
    title: "Expert Diagnosis",
    desc: "Comprehensive hearing and balance assessments using advanced technologies.",
  },
  {
    id: 3,
    icon: <HandHeart size={32}/>,
    title: "Trusted Care",
    desc: "Ethical practice, transparency, and continuous follow-up for lasting results.",
  },
];
const HeroSection = () => {
  return (
    <section
      className="section max-w-7xl mx-auto lg:px-20 sm:px-10 px-5 md:py-20 py-5 mt-20  min-h-screen"
      id="home"
    >
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-4  gap-10 capitalize">
        <aside className="flex-1 h-full flex justify-center items-center flex-col gap-10 py-10 ">
          <h1 className="lg:text-5xl md:text-4xl text-3xl md:font-bold font-semibold leading-[150%] text-[var(--nv)]  ">
            Because Your Hearing Deserves the Best{" "}
            <span className="text-[var(--tb)]  ">care</span>
          </h1>
          <p className="text-[var(--nv)]/62 font-medium md:text-lg text-sm">
            At Dr. Ibtissem Nada Clinics, we combine advanced medical expertise
            with modern technology to provide accurate diagnosis and
            personalized treatment for hearing and balance disorders.
          </p>
          <div className="flex gap-5 lg:flex-row flex-col">
            <a
              href="#"
              className=" whitespace-nowrap active:transform-[scale(0.95)] bg-[var(--lb)] border-2 text-[var(--nv)] shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)]  text-lg font-semibold sm:py-2.5 sm:px-8  py-2 px-6 rounded-2xl transition duration-300 hover:bg-[var(--nv)] cursor-pointer  hover:text-[var(--lb)]"
            >
              discover more
            </a>
            <a href="#" className="btn whitespace-nowrap border-2 py-2 px-6 border-[var(--tb)]">
              Contact Us{" "}
            </a>
          </div>
        </aside>
        <aside className="flex-1 md:block hidden">
          <div className="relative z-10  flex justify-center">
            <div className="absolute min-w-60 w-[90%] bg-[var(--nv)] bottom-0 aspect-[10/9] rounded-full "></div>
            <Image
              src={doctorImage}
              alt="doctor"
              className="relative   w-[clamp(250px,90%,100%)]"
            />
          </div>
        </aside>
      </div>
      <div className="max-w-6xl p-5 rounded-2xl bg-[var(--gry2)] mx-auto flex justify-between md:flex-row flex-col">
        {abouts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 text-[var(--bl2)] border-[var(--bl2)]/50 items-center py-4 pl-4 md:pr-10 md:not-last:border-r md:not-last:border-b-0 not-last:border-b  "
          >
            <div className="">{item.icon}</div>
            <h2 className="lg:text-xl md:text-lg text-md font-medium">{item.title}</h2>
            <p className="text-[var(--nv)]/64 md:text-[15px] text-xs text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
