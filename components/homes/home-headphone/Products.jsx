"use client";

import ProductCard6 from "@/components/shopCards/ProductCard6";
import { products6 } from "@/data/products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-price">
      <div className="container">
        <div className="wrap-carousel wrap-mobile">
          <Swiper
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd191" }}
            autoplay={{ delay: 3000 }}
            className="tf-sw-mobile-1"
          >
            {products6.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard6 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd191" />
        </div>
      </div>
    </section>
  );
}
