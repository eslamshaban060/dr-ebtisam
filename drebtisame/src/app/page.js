import React from "react";
import HealthcareLanding from "@/component2/HealthcareLanding";
import TestimonialsPage from "@/component2/testmonials";
import Footer from "@/component2/footer";
import DoctorHeroSection from "@/component2/about/about";
import ServicesSection from "@/component2/services/services";
import BookingSection from "@/component2/appointment";
const page = () => {
  return (
    <div>
      {/* Aa@12345 */}
      <HealthcareLanding lang="ar" />
      <DoctorHeroSection lang="ar" />
      <ServicesSection lang="ar" />
      <BookingSection />
      <TestimonialsPage lang="ar" />
      <Footer lang="ar" />
    </div>
  );
};

export default page;
