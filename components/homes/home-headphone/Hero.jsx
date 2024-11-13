"use client";

import { slides6 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-radius slider-effect-fade position-relative">
      <Swiper
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        effect="fade"
        className="tf-sw-slideshow"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd190" }}
      >
        {slides6.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`wrap-slider ${index == 1 ? "row-end" : ""} `}>
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={1800}
                height={786}
              />
              <div className="box-content">
                <div className="container">
                  <p className="fade-item fade-item-1 subheading fw-7 text_white">
                    {slide.subheading}
                  </p>
                  <h2 className="fade-item fade-item-2 fw-6 text_white heading">
                    <span dangerouslySetInnerHTML={{ __html: slide.heading }} />
                  </h2>
                  <Link
                    href={`/shop-default`}
                    className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-60"
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
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots line-white-pagination sw-pagination-slider justify-content-center spd190" />
        </div>
      </div>
    </div>
  );
}
