import React from "react";
import Header from "@/component2/Header";
import Footer from "@/component2/footer";
import BlogPage from "@/component2/blog/blog";
const page = () => {
  return (
    <div>
      <Header lang="en" />
      <BlogPage lang="en" />
      <Footer lang="en" />
    </div>
  );
};

export default page;
