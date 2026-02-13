import React from "react";
import HealthcareLanding from "@/component2/HealthcareLanding";
import Page from "@/component2/testmonials";
import Footer from "@/component2/footer";
import DoctorHeroSection from "@/component2/about/about";
import ServicesSection from "@/component2/services/services";
import ContactSection from "@/component2/contact/contact";
import BookingSection from "@/component2/appointment";
import BlogSection from "@/component2/blog/blogs";
import OnlineConsultation from "@/component2/online";
import HeroSection from "@/component2/HealthcareLanding";
import BooksSection from "@/component2/book";
const page = () => {
  return (
    <div>
      <HeroSection lang="en" />
      <DoctorHeroSection lang="en" />
      <ServicesSection lang="en" />
      <BookingSection lang="en" />
      <BooksSection lang="en" />

      <BlogSection lang="en" />
      <OnlineConsultation lang="en" />

      <Page lang="en" />
      <ContactSection lang="en" />

      <Footer lang="en" />
      {/* <ClinicChatbot lang="en" /> */}
    </div>
  );
};

export default page;
