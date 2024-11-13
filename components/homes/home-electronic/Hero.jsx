"use client";
import Image from "next/image";
import { slides9 } from "@/data/heroslides";
import React from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd160" }}
        className="tf-sw-slideshow"
      >
        {slides9.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.imgAlt}
                src={slide.imgSrc}
                width={slide.imgWidth}
                height={slide.imgHeight}
              />
              <div className="box-content">
                <div className="container">
                  <p className="fade-item fade-item-1">{slide.text}</p>
                  <h1 className="fade-item fade-item-2">
                    {slide.heading.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h1>
                  <Link
                    href={`/shop-default`}
                    className="fade-item fade-item-3 rounded-full tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>Shop collection</span>
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
          <div className="sw-dots sw-pagination-slider justify-content-center spd160" />
        </div>
      </div>
    </div>
  );
}
