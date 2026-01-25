import React from "react";
import HealthcareLanding from "@/component2/HealthcareLanding";
import TestimonialsPage from "@/component2/testmonials";
import Footer from "@/component2/footer";
import DoctorHeroSection from "@/component2/about/about";
import ServicesSection from "@/component2/services/services";
import BookingSection from "@/component2/appointment";
import ContactSection from "@/component2/contact/contact";
import BlogSection from "@/component2/blog/blogs";
import ClinicChatbot from "@/component2/chatboot";
import OnlineConsultation from "@/component2/online";
import BooksSection from "@/component2/book";
const page = () => {
  return (
    <div>
      {/* Aa@12345 */}
      {/* drEbtessam --123 */}
      <HealthcareLanding lang="ar" />
      <DoctorHeroSection lang="ar" />
      <ServicesSection lang="ar" />
      <BookingSection lang="ar" />
      <BooksSection lang="ar" />
      <BlogSection lang="ar" />
      <OnlineConsultation lang="ar" />
      <TestimonialsPage lang="ar" />
      <ContactSection lang="ar" />
      <Footer lang="ar" />
      <ClinicChatbot lang="ar" />
    </div>
  );
};

export default page;
