import Features from "@/components/common/Features";
import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import Categories from "@/components/homes/home-pod-store/Categories";
import Collections from "@/components/homes/home-pod-store/Collections";
import Collections2 from "@/components/homes/home-pod-store/Collections2";
import Hero from "@/components/homes/home-pod-store/Hero";
import Marquee from "@/components/homes/home-pod-store/Marquee";
import Products from "@/components/homes/home-pod-store/Products";
import Products2 from "@/components/homes/home-pod-store/Products2";
import Testimonials from "@/components/homes/home-pod-store/Testimonials";
import Brands from "@/components/homes/home-pod-store/Brands";
import React from "react";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title: "Home Pod Store || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header2 />
      <Hero />
      <Categories />
      <Collections />
      <Products />
      <Collections2 />
      <div className="mt-5"></div>
      <Features />
      <Products2 />
      <Marquee />
      <Testimonials />
      <Brands />
      <Footer1 />
    </>
  );
}
