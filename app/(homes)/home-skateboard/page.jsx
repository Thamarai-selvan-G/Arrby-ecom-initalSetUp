import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import Brands from "@/components/homes/home-1/Brands";
import Features from "@/components/homes/home-6/Features";
import Banner from "@/components/homes/home-skateboard/Banner";
import Categories from "@/components/homes/home-skateboard/Categories";
import Collections from "@/components/homes/home-skateboard/Collections";
import Hero from "@/components/homes/home-skateboard/Hero";
import Marquee from "@/components/homes/home-skateboard/Marquee";
import Products from "@/components/homes/home-skateboard/Products";
import Products2 from "@/components/homes/home-skateboard/Products2";
import Testimonials from "@/components/homes/home-skateboard/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Skateboard || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header1 />

      <Hero />
      <Marquee />
      <Collections />
      <div className="mt-5"></div>
      <Brands />
      <Categories />
      <Products />
      <Banner />
      <Products2 />
      <Testimonials />
      <Features />
      <Footer4 />
    </>
  );
}
