"use client";
import ProductCard9 from "@/components/shopCards/ProductCard9";
import { products12 } from "@/data/products";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-27 bg_grey-5">
      <div className="container">
        <div className="flat-title title-upper flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            ACCESSORIES
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider snbp260">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider snbn260">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          className="swiper sw-wrapper-right tf-sw-product-sell wrap-sw-over"
          spaceBetween={30}
          slidesPerView={4.5}
          breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 3.5, spaceBetween: 15 },
            768: { slidesPerView: 4.5, spaceBetween: 30 },
            1024: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp260",
            nextEl: ".snbn260",
          }}
        >
          {products12.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard9 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
