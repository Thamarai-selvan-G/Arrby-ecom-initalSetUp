"use client";

import Productcart3 from "@/components/shopCards/Productcart3";
import { products1 } from "@/data/products";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Trending Product
          </span>
          <p
            className="sub-title text_black-2 wow fadeInUp"
            data-wow-delay="0s"
          >
            Check out our trending now section for the latest fashion must-haves
          </p>
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
              prevEl: ".snbp116",
              nextEl: ".snbn116",
            }}
          >
            {products1.map((product, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <Productcart3 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp116">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn116">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
