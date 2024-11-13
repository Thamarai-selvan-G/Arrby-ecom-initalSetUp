import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Topbar3 from "@/components/headers/Topbar3";
import BannerCountdown from "@/components/homes/home-5/BannerCountdown";
import Collection from "@/components/homes/home-5/Collection";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import Lookbook from "@/components/homes/home-5/Lookbook";
import Products from "@/components/homes/home-5/Products";
import ShopGram from "@/components/homes/home-5/ShopGram";
import React from "react";

export const metadata = {
  title: "Home 5 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar3 />
      <Header3 />
      <Hero />
      <Collection />
      <Products />
      <BannerCountdown />
      <Lookbook />
      <Features />
      <ShopGram />
      <Footer1 />
    </>
  );
}
