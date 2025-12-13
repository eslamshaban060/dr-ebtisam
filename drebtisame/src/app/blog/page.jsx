import React from "react";
import Header from "@/component2/Header";
import Footer from "@/component2/footer";
import BlogPage from "@/component2/blog/blog";
const page = () => {
  return (
    <div>
      <Header lang="ar" />
      <BlogPage lang="ar" />
      <Footer lang="ar" />
    </div>
  );
};

export default page;
