"use client";

import ProductCard13 from "@/components/shopCards/ProductCard13";
import { products17 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-9 pt_0">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best Seller
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw square nav-next-slider nav-next-product snbp156">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw square nav-prev-slider nav-prev-product snbn156">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            className="swiper tf-sw-product-sell-1 wrap-sw-over"
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp156",
              nextEl: ".snbn156",
            }}
          >
            {products17.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard13 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp156">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn156">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
