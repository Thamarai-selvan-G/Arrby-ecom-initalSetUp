"use client";
import ProductCard15 from "@/components/shopCards/ProductCard15";
import { products21 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Products() {
  return (
    <section className="flat-price flat-spacing-5 pb_0">
      <div className="container">
        <div className="flat-title">
          <span
            className="title wow fadeInUp fw-6 text_blue-1"
            data-wow-delay="0s"
          >
            Featured Paddle Boards
          </span>
          <p
            className="sub-title text_black-2 wow fadeInUp"
            data-wow-delay="0s"
          >
            We offer 3 series of inflatable paddle boards. Check out our
            comparison chart
            <Link className="line-under" href={`/shop-collection-list`}>
              here
            </Link>{" "}
            or use our
            <Link className="line-under" href={`/shop-collection-list`}>
              board finder quiz.
            </Link>
          </p>
        </div>
        <div className="wrap-carousel wrap-mobile">
          <Swiper
            className="swiper tf-sw-mobile-1"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd225" }}
          >
            {products21.map((elm, i) => (
              <SwiperSlide key={i}>
                <ProductCard15 product={elm} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd225" />
        </div>
      </div>
    </section>
  );
}
