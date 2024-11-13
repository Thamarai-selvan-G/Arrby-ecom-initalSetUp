import Features from "@/components/common/Features2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import Categories from "@/components/homes/home-setup-gear/Categories";
import Collections from "@/components/homes/home-setup-gear/Collections";
import Hero from "@/components/homes/home-setup-gear/Hero";
import Lookbook from "@/components/homes/home-setup-gear/Lookbook";
import Maequee from "@/components/homes/home-setup-gear/Maequee";
import Products from "@/components/homes/home-setup-gear/Products";
import Products2 from "@/components/homes/home-setup-gear/Products2";
import Testimonials from "@/components/homes/home-setup-gear/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Setup Gear || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar2 />
      <Header2 bgColor={"bg_dark"} />
      <Hero />
      <Categories />
      <Collections />
      <Products />
      <Lookbook />
      <Products2 />
      <Maequee />
      <Testimonials />
      <Features bgColor="" />
      <Footer2 />
    </>
  );
}
