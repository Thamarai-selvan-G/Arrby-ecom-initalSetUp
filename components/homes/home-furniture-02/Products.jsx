"use client";

import ProductCard8 from "@/components/shopCards/ProductCard8";
import { products9 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-27">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best Seller
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw square nav-next-slider nav-next-product snbp170">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw square nav-prev-slider nav-prev-product snbn170">
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
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp170",
              nextEl: ".snbn170",
            }}
          >
            {products9.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <ProductCard8 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp170">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn170">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
