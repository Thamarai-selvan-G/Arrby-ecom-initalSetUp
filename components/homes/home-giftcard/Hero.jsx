"use client";
import Image from "next/image";
import { slideshowSlides } from "@/data/heroslides";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-giftcard slider-effect-fade position-relative">
      <Swiper
        className="tf-sw-slideshow"
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd177" }}
        breakpoints={{
          768: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
        }}
      >
        {slideshowSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                src={slide.imgSrc}
                data-src={slide.imgSrc}
                alt={slide.imgAlt}
                width={2000}
                height={735}
              />
              <div className="box-content">
                <div className="container">
                  <h2 className="fade-item fade-item-1 heading text-white">
                    {slide.heading}
                  </h2>
                  <p className="fade-item fade-item-2 text-white">
                    {slide.text}
                  </p>
                  <Link
                    href={`/shop-collection-sub`}
                    className="fade-item fade-item-3 tf-btn btn-primary animate-hover-btn btn-xl radius-3"
                  >
                    <span>{slide.buttonText}</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-2">
        <div className="container">
          <div className="sw-dots style-2 dots-white sw-pagination-slider spd177" />
        </div>
      </div>
    </div>
  );
}
