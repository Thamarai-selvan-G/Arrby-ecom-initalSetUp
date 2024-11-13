import Topbar4 from "@/components/headers/Topbar4";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-grocery/Hero";

import Header18 from "@/components/headers/Header18";
import Categories from "@/components/homes/home-grocery/Categories";
import Collections from "@/components/homes/home-grocery/Collections";
import Products from "@/components/homes/home-grocery/Products";
import Products2 from "@/components/homes/home-grocery/Products2";
import Features from "@/components/homes/home-grocery/Features";
import Banner from "@/components/homes/home-grocery/Banner";

export const metadata = {
  title: "Home Grocery || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div className="color-primary-8 color-main-text-2">
        <Topbar4 />
        <Header18 />
        <Hero />
        <Categories />
        <Collections />
        <Products />
        <Products2 />
        <Features />
        <Banner />
        <Footer1 />
      </div>
    </>
  );
}
