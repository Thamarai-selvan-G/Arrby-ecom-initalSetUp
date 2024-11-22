import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";

import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import {allProducts, cosmeticsProducts, fashionProducts, footwearProducts, fragranceProducts } from "@/data/products";
import Testimonials from "@/components/common/Testimonials";
export const metadata = {
  title: "Shop Details || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page({ params }) {

  const product = allProducts.filter((elm) => elm.id == params.id);
  return (
    <>
      <Header2 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Home
              </Link>
              {/* <i className="icon icon-arrow-right" />
              <Link href={`/fashion`} className="text">
                Fashion
              </Link> */}
              <i className="icon icon-arrow-right" />
              <span className="text">
                {product ? product.title : "product name"}
              </span>
            </div>
            
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={product} />
      <ShopDetailsTab />
      <Testimonials />
      <Products />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
