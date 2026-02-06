import React from "react";
import Link from "next/link";
import NavBar from "../../components/home-components/en/Navbar";
import HeroSection from "../../components/home-components/en/HeroSection";
import AboutSection from "../../components/home-components/en/AboutSection";
import ServicesSection from "../../components/home-components/en/ServicesSection";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] min-h-[100vh]  bg-[var(--lb)] ">
      {/* nav */}
      <NavBar/>
      {/* HeroSection */}
      <HeroSection />
      {/* about  section */}
      <AboutSection />
      {/* services  section */}
      <ServicesSection />
    </div>
  );
};

export default page;
