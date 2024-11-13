"use client";

import ProductCard7 from "@/components/shopCards/ProductCard7";
import { products7 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section>
      <div className="container-full">
        <div className="bg_grey-5 radius-60 flat-spacing-21">
          <div className="flat-title">
            <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
              Our best sellers
            </span>
          </div>
          <div className="container">
            <div className="wrap-carousel wrap-sw-2">
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 15 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                  1204: { slidesPerView: 4, spaceBetween: 30 },
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbp192",
                  nextEl: ".snbn192",
                }}
              >
                {products7.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard7 product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp192">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn192">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
