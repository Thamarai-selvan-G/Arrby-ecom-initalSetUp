"use client";
import { slides16 } from "@/data/heroslides";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative slideshow-tee">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        className="tf-sw-slideshow"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd291" }}
      >
        {slides16.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                loading="lazy"
                src={slide.imgSrc}
                width={2000}
                height={872}
              />
              <div className="box-content text-center">
                <div className="container ">
                  <h1
                    className={`fade-item fade-item-1 text-stroke-white heading font-caprasimo`}
                  >
                    {slide.heading}
                  </h1>
                  <p className="fade-item fade-item-2 text_white d-block font-caprasimo">
                    {slide.description}
                  </p>
                  <div className="fade-item fade-item-3">
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn btn-light-icon font-caprasimo fw-4 animate-hover-btn letter-2"
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
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots dots-fill-white sw-pagination-slider justify-content-center spd291" />
        </div>
      </div>
    </div>
  );
}
