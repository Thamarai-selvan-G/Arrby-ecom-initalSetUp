"use client";

import { slides19 } from "@/data/heroslides";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-grocery position-relative flat-spacing-25 pb_0">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={false}
          autoplay={false}
          speed={1000}
          pagination={{ clickable: true, el: ".shpd1" }}
          modules={[Pagination]}
          className="radius-20 tf-sw-slideshow"
        >
          {slides19.map((slide, index) => (
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
                    <h2 className="fade-item fade-item-2 fw-6 heading">
                      {slide.heading.split("\n")[0]}
                      <br />
                      {slide.heading.split("\n")[1]}
                    </h2>
                    <p className="fade-item fade-item-1 fw-6 d-block">
                      {slide.description}
                    </p>
                    <div className="fade-item fade-item-3">
                      <Link
                        href={`/shop-default`}
                        className="tf-btn btn-fill animate-hover-btn btn-xl radius-60"
                      >
                        <span>{slide.linkText}</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="wrap-pagination">
            <div className="container">
              <div className="sw-dots sw-pagination-slider justify-content-xl-start justify-content-center shpd1" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
