"use client";
import { slides17 } from "@/data/heroslides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={false}
        speed={1000}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd271" }}
        className="tf-sw-slideshow"
      >
        {slides17.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="wrap-slider">
              <Image
                alt={slide.alt}
                src={slide.imgSrc}
                width={1800}
                height={785}
              />
              <div className="box-content">
                <div className="container">
                  <p className="fade-item fade-item-1 fw-8 mb_15">
                    {slide.subtitle}
                  </p>
                  <h1 className="fade-item fade-item-2 fw-8">{slide.title}</h1>
                  <Link
                    href={`/shop-default`} // Link added directly in JSX
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>{slide.buttonText} </span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider rectangle-pagination spd271" />
        </div>
      </div>
    </div>
  );
}
