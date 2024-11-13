"use client";
import Image from "next/image";
import { slides5 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-skincare position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={false}
        delay={2000}
        speed={1000}
        className="tf-sw-slideshow"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd264" }}
      >
        {slides5.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.imgAlt}
                loading="lazy"
                src={slide.imgSrc}
                width={1800}
                height={1013}
              />
              <div className="box-content text-center">
                <div className="container">
                  <h1 className="fade-item fade-item-1 text-white heading">
                    {slide.heading}
                  </h1>
                  <p className="fade-item fade-item-2 text-white">
                    {slide.description}
                  </p>
                  <Link
                    href={`/shop-collection-sub`}
                    className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
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
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd264" />
      </div>
    </div>
  );
}
