"use client";

import { products1 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shopCards/ProductCard";
import { Navigation, Pagination } from "swiper/modules";

export default function RecentProducts() {
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title">Recently Viewed</span>
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
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp308",
              nextEl: ".snbn308",
            }}
            pagination={{ clickable: true, el: ".spd308" }}
          >
            {products1.slice(4, 12).map((product, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp308">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn308">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd308" />
        </div>
      </div>
    </section>
  );
}
