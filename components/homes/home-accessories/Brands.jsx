"use client";

import { brandSlides } from "@/data/brands";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
  return (
    <section className="flat-spacing-27 wow fadeIn" data-wow-delay="0s">
      <div className="container">
        <div className="wrap-carousel wrap-brand wrap-brand-v2">
          <Swiper
            loop={false} // Matches data-loop="false"
            autoplay={false} // Matches data-play="false"
            slidesPerView={6} // Matches data-preview={6}
            spaceBetween={30} // Matches data-space-lg={30}
            breakpoints={{
              1000: {
                slidesPerView: 6, // Matches data-tablet={3}
                spaceBetween: 15, // Matches data-space-md={15}
              },
              768: {
                slidesPerView: 4, // Matches data-tablet={3}
                spaceBetween: 15, // Matches data-space-md={15}
              },
              480: {
                slidesPerView: 3, // Matches data-mobile={2}
                spaceBetween: 15, // Matches data-space-md={15}
              },
              0: {
                slidesPerView: 2, // Matches data-mobile={2}
                spaceBetween: 15, // Matches data-space-md={15}
              },
            }}
          >
            {brandSlides.map((slide, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="brand-item-v2">
                  <Image
                    className="lazyload"
                    data-src={slide.imgSrc}
                    src={slide.imgSrc}
                    alt={slide.imgAlt}
                    width={slide.width}
                    height={slide.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-brand justify-content-center" />
        </div>
      </div>
    </section>
  );
}
