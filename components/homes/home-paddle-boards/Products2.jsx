"use client";

import ProductCaed16 from "@/components/shopCards/ProductCard16";
import { products22 } from "@/data/products";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-1 flat-iconbox bg_grey-12">
      <div className="container">
        <div className="flat-title">
          <span
            className="title wow fadeInUp fw-6 text_blue-1"
            data-wow-delay="0s"
          >
            Recommendations for you
          </span>
        </div>
        <div
          className="wrap-carousel wrap-mobile wow fadeInUp"
          data-wow-delay="0s"
        >
          <Swiper
            className="swiper tf-sw-mobile"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              1000: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd226" }}
          >
            {products22.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <ProductCaed16 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd226" />
        </div>
      </div>
    </section>
  );
}
