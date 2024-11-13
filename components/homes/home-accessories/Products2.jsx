"use client";

import Shopcard28 from "@/components/shopCards/ProductCard28";
import { products46 } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-25 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best Seller
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            className="swiper tf-sw-product-sell-1"
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbpe2",
              nextEl: ".snbne2",
            }}
            pagination={{
              el: ".spe2",
            }}
          >
            {products46.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Shopcard28 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw disable-line nav-next-slider nav-next-sell-1 box-icon w_46 round snbpe2">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line nav-prev-slider nav-prev-sell-1 box-icon w_46 round snbne2">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spe2" />
        </div>
      </div>
    </section>
  );
}
