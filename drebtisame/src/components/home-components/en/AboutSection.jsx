import { SectionHeader } from "./SectionHeader";
import doctorImage from "../../../../public/home/doctor.png";
import Image from "next/image";

const doctorInfo = [
  "Professor & Consultant of Audiology and Balance Medicine – Zagazig University",
  "Member of the Egyptian Board Scientific Council for Audiology and Balance Medicine",
  "Vice President of the Audiology and Balance Physicians Association – Sharqia",
];
const AboutSection = () => {
  return (
    <>
      <section
        className="section max-w-7xl mx-auto lg:px-20 sm:px-10 px-5  py-5 min-h-screen"
        id="about"
      >
        <SectionHeader
          title="About Us"
          message="Welcome to Dr. Ibtissem Nada Clinics"
          info={
            <>
              At <span className="text-[var(--tb)]">Dr. Ibtissem Nada</span>{" "}
              Clinics, we are dedicated to the diagnosis and treatment of
              hearing and balance disorders with care. Our approach combines
              advanced medical technology, deep expertise, and patient-centered
              compassion — ensuring every patient receives a personalized
              treatment plan in a comfortable, professional environment.
            </>
          }
        />
        <div className="flex md:flex-row flex-col justify-between md:px-10 px-4 items-center h-full gap-10 capitalize">
          <aside className="flex-1">
            <div className="relative z-10 group flex justify-center">
              <div className="absolute w-[clamp(120px,45%,100%)] bg-[var(--tb)] bottom-2 aspect-[6/10] transition-all duration-500 transform-[rotate(55deg)] group-hover:transform-[rotate(-55deg)] group-hover:bg-[var(--nv)]/90  rounded-2xl "></div>
              <Image
                src={doctorImage}
                alt="doctor"
                className="relative w-[clamp(250px,70%,100%)]"
              />
            </div>
          </aside>
          <aside className="flex-1 h-full flex items-center justify-center gap-10  flex-col py-10 ">
            <ul className="list-disc text-[var(--nv)] flex-1 text-center items-center justify-center ">
              {doctorInfo.map((info, key) => (
                <li className="py-1 px-2 md:text-xl text-sm font-medium" key={key}>
                  {info}
                </li>
              ))}
            </ul>
            <a href="#" className="btn ">see articles</a>
          </aside>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
