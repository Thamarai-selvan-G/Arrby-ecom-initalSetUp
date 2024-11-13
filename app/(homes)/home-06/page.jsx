import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Brands from "@/components/homes/home-1/Brands";

import Banner from "@/components/homes/home-6/Banner";
import Categories from "@/components/homes/home-6/Categories";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-6/Hero";
import Products from "@/components/homes/home-6/Products";
import Location from "@/components/homes/home-6/Location";
import React from "react";
import Announcmentbar from "@/components/common/Announcmentbar";

export const metadata = {
  title: "Home 6 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Announcmentbar />
      <Header4 />
      <Hero />
      <Categories />
      <Products />
      <Banner />
      <div className="mt-5"></div>
      <Features />
      <Location />
      <div className="mt-5"></div>
      <Brands />
      <Footer1 bgColor="background-gray" />
    </>
  );
}
