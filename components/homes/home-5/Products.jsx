"use client";

import { ProductCard5 } from "@/components/shopCards/ProductCard5";

import { products1 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Products() {
  return (
    <section className="flat-spacing-6 pt_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Editor's Picks</span>
          <div className="d-flex gap-16 align-items-center box-pagi-arr">
            <div className="nav-sw-arrow nav-next-slider nav-next-product snbn127">
              <span className="icon icon-arrow1-left"></span>
            </div>
            <Link
              href={`/product-style-05`}
              className="tf-btn btn-line fs-12 fw-6"
            >
              VIEW ALL
            </Link>
            <div className="nav-sw-arrow nav-prev-slider nav-prev-product snbp127">
              <span className="icon icon-arrow1-right"></span>
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            className="swiper tf-sw-product-sell wrap-sw-over"
            slidesPerView={4} // Equivalent to data-preview={4}
            spaceBetween={30} // Equivalent to data-space-lg={30}
            breakpoints={{
              1024: {
                slidesPerView: 4, // Equivalent to data-tablet={3}
              },
              640: {
                slidesPerView: 3, // Equivalent to data-tablet={3}
              },
              0: {
                slidesPerView: 2, // Equivalent to data-mobile={2}
                spaceBetween: 15, // Equivalent to data-space-md={15}
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp127",
              nextEl: ".snbn127",
            }}
          >
            {products1.map((product, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <ProductCard5 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp127">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn127">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
