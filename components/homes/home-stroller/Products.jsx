"use client";

import ProductCard10 from "@/components/shopCards/ProductCard10";
import { products13 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-15">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best selling strollers
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider snbp284">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider snbn284">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
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
            prevEl: ".snbp284",
            nextEl: ".snbn284",
          }}
        >
          {products13.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard10 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
