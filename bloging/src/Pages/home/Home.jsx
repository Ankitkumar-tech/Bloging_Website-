import React from "react";
import Layout from "../../Components/layout/Layout";
import HeroSection from "../../Components//heroSection/HeroSection";
import BlogPostCard from "../../Components/blogPostcard/BlogPostCard";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    </Layout>
  );
}

export default Home;
