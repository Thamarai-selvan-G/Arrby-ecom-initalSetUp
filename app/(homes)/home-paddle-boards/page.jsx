import Header12 from "@/components/headers/Header12";

import Topbar2 from "@/components/headers/Topbar2";
import Banner from "@/components/homes/home-paddle-boards/Banner";
import Banner2 from "@/components/homes/home-paddle-boards/Banner2";
import Categories from "@/components/homes/home-paddle-boards/Categories";
import Collections from "@/components/homes/home-paddle-boards/Collections";
import Features2 from "@/components/homes/home-paddle-boards/Features2";
import Features from "@/components/homes/home-paddle-boards/Features";
import Hero from "@/components/homes/home-paddle-boards/Hero";
import Products from "@/components/homes/home-paddle-boards/Products";
import Products2 from "@/components/homes/home-paddle-boards/Products2";
import Testimonials from "@/components/homes/home-paddle-boards/Testimonials";
import React from "react";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Home Paddle Boards || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar2 bgColor="bg_blue-6" />
      <Header12 />
      <Hero /> <Features />
      <Products />
      <Collections />
      <Products2 />
      <Banner />
      <Categories />
      <Banner2 />
      <Testimonials />
      <Features2 bgColor="" />
      <Footer2 bgColor={"background-black bg_green-4"} />
    </>
  );
}
