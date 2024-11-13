"use client";
import Image from "next/image";
import { slides3 } from "@/data/heroslides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-home-4 slider-effect-fade position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={false}
        delay={2000}
        speed={1000}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd120" }}
        className="tf-sw-slideshow"
      >
        {slides3.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={index === 0 ? 2000 : 1800}
                height={index === 0 ? 1034 : 931}
              />
              <div className="box-content">
                <div className="container">
                  <div className="card-box bg_dark">
                    <p className="fade-item fade-item-1 text-white subheading fw-7">
                      {slide.subheading}
                    </p>
                    <h3 className="fade-item fade-item-2 text-white heading">
                      {slide.heading.split("\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                    <div className="fade-item fade-item-3">
                      <Link
                        href={`/shop-collection-list`}
                        className="tf-btn btn-outline-light btn-xl radius-3"
                      >
                        <span>Shop collection</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 sw-pagination-slider spd120" />
      </div>
    </div>
  );
}
