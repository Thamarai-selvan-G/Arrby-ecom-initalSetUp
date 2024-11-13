"use client";

import ProductCard12 from "@/components/shopCards/ProductCard12";
import { products16 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Sale Pics</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            className="tf-sw-product-sell wrap-sw-over"
            slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp249",
              nextEl: ".snbn249",
            }}
          >
            {products16.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard12 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product lg snbp249">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product lg snbn249">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
