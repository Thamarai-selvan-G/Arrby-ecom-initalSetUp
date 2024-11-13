"use client";

import ProductCard8 from "@/components/shopCards/ProductCard8";
import { products9 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Products() {
  return (
    <section className="flat-spacing-12 has-line-bottom">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Trending now</span>
          <div className="d-flex gap-16 align-items-center box-pagi-arr">
            <div className="nav-sw-arrow nav-next-slider nav-next-product snbp166">
              <span className="icon icon-arrow1-left" />
            </div>
            <Link
              href={`/product-style-05`}
              className="tf-btn btn-line fs-12 fw-6"
            >
              VIEW ALL
            </Link>
            <div className="nav-sw-arrow nav-prev-slider nav-prev-product snbn166">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper tf-sw-product-sell wrap-sw-over"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp166",
              nextEl: ".snbn166",
            }}
            pagination={{ clickable: true, el: ".spd166" }}
          >
            {products9.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <ProductCard8 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp166">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn166">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
