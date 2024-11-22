import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";

import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import { fragranceProducts } from "@/data/products";
import Testimonials from "@/components/common/Testimonials";
export const metadata = {
  title: "Shop Details || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page({ params }) {
  // const product = allProducts.filter((elm) => elm.id == params.id)[0] || allProducts[0];

  // const product = [
  //   {
  //     id: 1,
  //     imgSrc: "/images/products/fashion-1.svg",
  //     imgHoverSrc: "/images/products/fashion-4.svg",
  //     title: "Ribbed Tank Top",
  //     price: 16.95,
  //     colors: [
  //       {
  //         name: "Orange",
  //         colorClass: "bg_orange-3",
  //         img: ["/images/products/fashion-1.svg","/images/products/fashion-1.svg","/images/products/fashion-1.svg"],
  //         width :713 ,
  //         height : 1152,
  //         price: 11,
  //         oldPrice: 10,
  //       },
  //       {
  //         name: "Black",
  //         colorClass: "bg_dark",
  //         img: ["/images/products/fashion-2.svg","/images/products/fashion-2.svg","/images/products/fashion-2.svg"],
  //         price: 12,
  //         oldPrice: 10,
  //       },
  //       {
  //         name: "White",
  //         colorClass: "bg_white",
  //         img: ["/images/products/fashion-3.svg","/images/products/fashion-3.svg","/images/products/fashion-3.svg"],
  //         price: 18,
  //         oldPrice: 10,
  //       },
  //     ],
  //     sizes: [
  //       { id: "values-s", value: "SS", defaultChecked: true },
  //       { id: "values-m", value: "MM", defaultChecked: false },
  //       { id: "values-l", value: "LL", defaultChecked: false },
  //       { id: "values-xl", value: "L", defaultChecked: false },
  //     ],
  //     filterCategories: ["Best seller", "On Sale"],
  //     brand: "Ecomus",
  //     isAvailable: true,
  //   },
  // ];
  const product = fragranceProducts.filter((elm) => elm.id == params.id);
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
              <i className="icon icon-arrow-right" />
              <Link href={`/fashion`} className="text">
                Fashion
              </Link>
              <i className="icon icon-arrow-right" />
              <span className="text">
                {product ? product[0].title : "product name"}
              </span>
            </div>
            <div className="tf-breadcrumb-prev-next">
              <a href="#" className="tf-breadcrumb-prev hover-tooltip center">
                <i className="icon icon-arrow-left" />
                {/* <span className="tooltip">Cotton jersey top</span> */}
              </a>
              <a href="#" className="tf-breadcrumb-back hover-tooltip center">
                <i className="icon icon-shop" />
                {/* <span className="tooltip">Back to Women</span> */}
              </a>
              <a href="#" className="tf-breadcrumb-next hover-tooltip center">
                <i className="icon icon-arrow-right" />
                {/* <span className="tooltip">Cotton jersey top</span> */}
              </a>
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
