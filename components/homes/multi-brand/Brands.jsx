"use client";
import { brandData } from "@/data/brands";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
export default function Brands() {
  return (
    <section className="flat-spacing-1 wow fadeIn">
      <div className="container-full">
        <div className="wrap-carousel wrap-brand wrap-brand-v2">
          <Swiper
            className="swiper tf-sw-brand border-0"
            loop={false} // Equivalent to data-loop="false"
            autoplay={true} // Equivalent to data-play="false"
            spaceBetween={0} // Equivalent to data-space-lg
            slidesPerView={6} // Equivalent to data-preview
            breakpoints={{
              1024: {
                slidesPerView: 6, // Equivalent to data-tablet
                spaceBetween: 0, // Equivalent to data-space-md
              },
              640: {
                slidesPerView: 3, // Equivalent to data-tablet
                spaceBetween: 0, // Equivalent to data-space-md
              },
              0: {
                slidesPerView: 2, // Equivalent to data-mobile
                spaceBetween: 0, // Equivalent to data-space-md
              },
            }}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".spd298" }}
          >
            {brandData.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="brand-item-v2">
                  <Image
                    className="lazyload"
                    data-src={brand.src}
                    alt={brand.alt}
                    src={brand.src}
                    width={brand.width}
                    height={brand.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-brand justify-content-center spd298" />
        </div>
      </div>
    </section>
  );
}
