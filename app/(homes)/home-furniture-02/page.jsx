import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import Collections from "@/components/homes/home-furniture-02/Collections";
import Collections2 from "@/components/homes/home-furniture-02/Collections2";
import Features from "@/components/homes/home-furniture-02/Features";
import Hero from "@/components/homes/home-furniture-02/Hero";
import Products from "@/components/homes/home-furniture-02/Products";
import Testimonials from "@/components/homes/home-furniture-02/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Furniture 2 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header2 />
      <Hero />
      <Collections />
      <Features />
      <Products />
      <Collections2 />
      <Testimonials />
      <Footer1 />
    </>
  );
}
