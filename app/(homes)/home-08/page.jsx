import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";
import Announcement from "@/components/common/Announcement";
import Blogs from "@/components/homes/home-8/Blogs";
import Collection from "@/components/homes/home-8/Collection";
import Collection2 from "@/components/homes/home-8/Collection2";
import Hero from "@/components/homes/home-8/Hero";
import Lookbook from "@/components/homes/home-8/Lookbook";
import Marquee from "@/components/homes/home-8/Marquee";
import Products from "@/components/homes/home-8/Products";
import React from "react";

export const metadata = {
  title: "Home 8 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Announcement />
      <Header6 />
      <Hero />
      <Collection />
      <Products />
      <Collection2 />
      <Lookbook />
      <Marquee />
      <Blogs />
      <Footer2 />
    </>
  );
}
