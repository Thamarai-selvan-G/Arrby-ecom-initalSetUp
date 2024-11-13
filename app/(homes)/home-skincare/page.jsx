import Header8 from "@/components/headers/Header8";

import Announcement from "@/components/homes/home-skincare/Announcement";
import Banner from "@/components/homes/home-skincare/Banner";
import Feature from "@/components/homes/home-skincare/Feature";
import Hero from "@/components/homes/home-skincare/Hero";
import Marquee from "@/components/homes/home-skincare/Marquee";
import Products from "@/components/homes/home-skincare/Products";
import Products2 from "@/components/homes/home-skincare/Products2";
import SkinChange from "@/components/homes/home-skincare/SkinChange";
import Testimonials from "@/components/homes/home-skincare/Testimonials";
import Videobox from "@/components/homes/home-skincare/Videobox";
import React from "react";
import ShopGram from "@/components/homes/home-skincare/ShopGram";
import Features from "@/components/homes/home-6/Features";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title: "Home Skincare || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Announcement />
      <Header8 />
      <Hero />
      <Products />
      <Banner />
      <Marquee />
      <Videobox />
      <Features />
      <Products2 />
      <Testimonials />
      <SkinChange />
      <Features />
      <ShopGram />
      <Footer1 />
    </>
  );
}
