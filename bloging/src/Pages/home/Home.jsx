import React from "react";
import Layout from "../../Components/layout/Layout";
import HeroSection from "../../Components//heroSection/HeroSection";
import BlogPostCard from "../../Components/blogPostcard/BlogPostCard";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    </Layout>
  );
}

export default Home;
