"use client";
import { slides15 } from "@/data/heroslides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative">
      <div className="swiper tf-sw-slideshow">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={false}
          speed={1000}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spd185" }}
        >
          {slides15.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="wrap-slider">
                <Image
                  className="lazyload"
                  data-src={slide.imgSrc}
                  alt={slide.alt}
                  loading="lazy"
                  src={slide.imgSrc}
                  width={2000}
                  height={1034}
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className={`fade-item fade-item-1 text-white heading`}>
                      {slide.heading}
                    </h1>
                    <p className={`fade-item fade-item-2 text-white d-block`}>
                      {slide.description}
                    </p>
                    <div className={`fade-item fade-item-3`}>
                      <Link
                        href={`/shop-collection-sub`}
                        className="tf-btn btn-fill fw-4 animate-hover-btn rounded-0 letter-2"
                      >
                        <span>SHOP NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots dots-fill-white sw-pagination-slider justify-content-center spd185" />
        </div>
      </div>
    </div>
  );
}
