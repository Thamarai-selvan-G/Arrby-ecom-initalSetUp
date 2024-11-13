import Announcmentbar from "@/components/common/Announcmentbar";
import Features from "@/components/common/Features2";

import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Banner from "@/components/homes/home-kitchen-wear/Banner";
import Categories from "@/components/homes/home-kitchen-wear/Categories";
import CollectionBanner from "@/components/homes/home-kitchen-wear/CollectionBanner";
import Collections from "@/components/homes/home-kitchen-wear/Collections";
import Hero from "@/components/homes/home-kitchen-wear/Hero";
import Lookbook from "@/components/homes/home-kitchen-wear/Lookbook";
import Products from "@/components/homes/home-kitchen-wear/Products";
import Testimonials from "@/components/homes/home-kitchen-wear/Testimonials";
import React from "react";

export const metadata = {
  title: "Home Kitchen Wear || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div className="color-primary-4">
        <Announcmentbar bgColor="bg_primary" />
        <Header4 />
        <Hero /> <Collections />
        <Products />
        <Banner />
        <Categories />
        <Lookbook />
        <Testimonials />
        <CollectionBanner />
        <Features bgColor="" />
        <Footer1 bgColor="background-gray" />
      </div>
    </>
  );
}
