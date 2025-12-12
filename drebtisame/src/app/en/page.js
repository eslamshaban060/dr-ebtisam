import React from "react";
import HealthcareLanding from "@/component2/HealthcareLanding";
import Page from "@/component2/testmonials";
import Footer from "@/component2/footer";
import DoctorHeroSection from "@/component2/about/about";
import ServicesSection from "@/component2/services/services";
const page = () => {
  return (
    <div>
      <HealthcareLanding lang="en" />
      <DoctorHeroSection lang="en" />
      <ServicesSection lang="en" />

      <Page lang="en" />
      <Footer lang="en" />
    </div>
  );
};

export default page;
