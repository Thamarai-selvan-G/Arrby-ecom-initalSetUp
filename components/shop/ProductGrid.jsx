import { products1 } from "@/data/products";
import React from "react";
import { ProductCard } from "../shopCards/ProductCard";

export default function ProductGrid({

  // Fashion products datas ...
 
  allproducts = [
    {
      id: 1,
      imgSrc: "/images/products/fashion-1.svg",
      imgHoverSrc: "/images/products/fashion-2.svg",
      title: "Ribbed Tank Top",
      price: 16.95,
      colors: [
        { name: "Orange", colorClass: "bg_orange-3", imgSrc: "/images/products/orange-1.jpg" },
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-1.jpg" },
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-1.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "On Sale"],
      brand: "Ecomus",
      isAvailable: true,
    },
    {
      id: 2,
      imgSrc: "/images/products/fashion-3.svg",
      imgHoverSrc: "/images/products/fashion-4.svg",
      title: "Ribbed Modal T-shirt",
      price: 18.95,
      colors: [
        { name: "Brown", colorClass: "bg_brown", imgSrc: "/images/products/brown.jpg" },
        { name: "Light Purple", colorClass: "bg_purple", imgSrc: "/images/products/purple.jpg" },
        { name: "Light Green", colorClass: "bg_light-green", imgSrc: "/images/products/green.jpg" },
      ],
      sizes: ["M", "L", "XL"],
      countdown: { time: 1007500, labels: "d :,h :,m :,s" },
      filterCategories: ["Best seller", "New arrivals"],
      brand: "M&H",
      isAvailable: false,
    },
    {
      id: 3,
      imgSrc: "/images/products/fashion-5.svg",
      imgHoverSrc: "/images/products/fashion-6.svg",
      title: "Oversized Printed T-shirt",
      price: 10.0,
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "On Sale"],
      brand: "M&H",
      isAvailable: true,
    },
    {
      id: 4,
      imgSrc: "/images/products/fashion-7.svg",
      imgHoverSrc: "/images/products/fashion-8.svg",
      title: "Oversized Printed T-shirt",
      price: 16.95,
      colors: [
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-2.jpg" },
        { name: "Pink", colorClass: "bg_purple", imgSrc: "/images/products/pink-1.jpg" },
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-2.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "On Sale"],
      brand: "M&H",
      isAvailable: true,
    },
    {
      id: 5,
      imgSrc: "/images/products/fashion-9.svg",
      imgHoverSrc: "/images/products/fashion-10.svg",
      title: "V-neck Linen T-shirt",
      price: 14.95,
      colors: [
        { name: "Brown", colorClass: "bg_brown", imgSrc: "/images/products/brown-2.jpg" },
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-5.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "New arrivals"],
      brand: "Ecomus",
      isAvailable: true,
    },
    {
      id: 6,
      imgSrc: "/images/products/fashion-11.svg",
      imgHoverSrc: "/images/products/fashion-12.svg",
      title: "Loose Fit Sweatshirt",
      price: 10.0,
      colors: [
        { name: "Light Green", colorClass: "bg_light-green", imgSrc: "/images/products/light-green-1.jpg" },
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-3.jpg" },
        { name: "Blue", colorClass: "bg_blue-2", imgSrc: "/images/products/blue.jpg" },
        { name: "Dark Blue", colorClass: "bg_dark-blue", imgSrc: "/images/products/dark-blue.jpg" },
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-6.jpg" },
        { name: "Light Grey", colorClass: "bg_light-grey", imgSrc: "/images/products/light-grey.jpg" },
      ],
      filterCategories: ["Best seller", "New arrivals"],
      brand: "Ecomus",
      isAvailable: true,
    },
    {
      id: 7,
      imgSrc: "/images/products/fashion-13.svg",
      imgHoverSrc: "/images/products/fashion-14.svg",
      title: "Regular Fit Oxford Shirt",
      price: 10.0,
      colors: [
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-4.jpg" },
        { name: "Dark Blue", colorClass: "bg_dark-blue", imgSrc: "/images/products/dark-blue-2.jpg" },
        { name: "Beige", colorClass: "bg_beige", imgSrc: "/images/products/beige.jpg" },
        { name: "Light Blue", colorClass: "bg_light-blue", imgSrc: "/images/products/light-blue.jpg" },
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-7.jpg" },
      ],
      sizes: ["S", "M", "L"],
      filterCategories: ["Best seller", "New arrivals", "On Sale"],
      brand: "Ecomus",
      isAvailable: false,
    },
    {
      id: 8,
      imgSrc: "/images/products/fashion-15.svg",
      imgHoverSrc: "/images/products/fashion-16.svg",
      title: "Stylish T-shirt",
      price: 12.0,
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "New arrivals", "On Sale"],
      brand: "Ecomus",
      isAvailable: false,
    },
    {
      id: 9,
      imgSrc: "/images/products/fashion-17.svg",
      imgHoverSrc: "/images/products/fashion-18.svg",
      title: "Ribbed Modal T-shirt",
      price: 18.95,
      colors: [
        { name: "Brown", colorClass: "bg_brown", imgSrc: "/images/products/brown.jpg" },
        { name: "Light Purple", colorClass: "bg_purple", imgSrc: "/images/products/purple.jpg" },
        { name: "Light Green", colorClass: "bg_light-green", imgSrc: "/images/products/green.jpg" },
      ],
      sizes: ["M", "L", "XL"],
      countdown: { time: 1007500, labels: "d :,h :,m :,s" },
      filterCategories: ["Best seller", "New arrivals"],
      brand: "M&H",
      isAvailable: false,
    },
    {
      id: 10,
      imgSrc: "/images/products/fashion-19.svg",
      imgHoverSrc: "/images/products/fashion-20.svg",
      title: "Oversized Printed T-shirt",
      price: 10.0,
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "On Sale"],
      brand: "M&H",
      isAvailable: true,
    },
    {
      id: 11,
      imgSrc: "/images/products/fashion-21.svg",
      imgHoverSrc: "/images/products/fashion-22.svg",
      title: "Oversized Printed T-shirt",
      price: 16.95,
      colors: [
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-2.jpg" },
        { name: "Pink", colorClass: "bg_purple", imgSrc: "/images/products/pink-1.jpg" },
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-2.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
      filterCategories: ["Best seller", "On Sale"],
      brand: "M&H",
      isAvailable: true,
    },
    {
      id: 12,
      imgSrc: "/images/products/fashion-23.svg",
      imgHoverSrc: "/images/products/fashion-24.svg",
      title: "Regular Fit Oxford Shirt",
      price: 10.0,
      colors: [
        { name: "Black", colorClass: "bg_dark", imgSrc: "/images/products/black-4.jpg" },
        { name: "Dark Blue", colorClass: "bg_dark-blue", imgSrc: "/images/products/dark-blue-2.jpg" },
        { name: "Beige", colorClass: "bg_beige", imgSrc: "/images/products/beige.jpg" },
        { name: "Light Blue", colorClass: "bg_light-blue", imgSrc: "/images/products/light-blue.jpg" },
        { name: "White", colorClass: "bg_white", imgSrc: "/images/products/white-7.jpg" },
      ],
      sizes: ["S", "M", "L"],
      filterCategories: ["Best seller", "New arrivals", "On Sale"],
      brand: "Ecomus",
      isAvailable: false,
    }
  ],

  gridItems = 4,

}) {
  return (
    <>
      <div
        style={{
          width: "fit-content",
          margin: "0  auto",
          fontSize: "17px",
          marginBottom: "24px",
        }}
      >
        {allproducts.length} product(s) found
      </div>
      <div className="grid-layout wrapper-shop" data-grid={`grid-${gridItems}`}>
        {/* card product 1 */}
        {allproducts.map((elm, i) => (
          <ProductCard product={elm} key={i} />
        ))}
      </div>{" "}
    </>
  );
}
