import Features from "@/components/common/Features";
import ShopGram from "@/components/common/ShopGram";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import AlterFeatures from "@/components/homes/home-1/AlterFeatures";
import AlterHero from "@/components/homes/home-1/AlterHero";
import Brands from "@/components/homes/home-1/Brands";

import Categories from "@/components/homes/home-1/Categories";

// import Hero from "@/components/homes/home-1/Hero";      // Comment unnecessary imports ...
// import Lookbook from "@/components/homes/home-1/Lookbook";
import Marquee from "@/components/homes/home-1/Marquee";
import Products from "@/components/homes/home-1/Products";

export const metadata = {
  title : "Aarby-Ecom",
  // title: "Home 1 || Ecomus - Ultimate Nextjs Ecommerce Template",  // SEO Area ....
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function Home() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      {/* <Hero /> */}  
      <AlterHero />
      <Marquee />
      {/* inside the category component we need to replace (collections) to  client's data ... */}
      <Categories />  
      <AlterFeatures />
      <Products />
      {/* <Lookbook /> */}
      <Testimonials />
      {/* <Brands /> */}
      {/* <ShopGram /> */}
      <Features />  
      <Footer1 />
    </>
  );
}
