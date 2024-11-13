"use client";

import { slides4 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-women slider-effect-fade position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        className="tf-sw-slideshow"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd300" }}
      >
        {slides4.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.imgAlt}
                src={slide.imgSrc}
                width={2000}
                height={732}
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1">{slide.heading}</h1>
                  <p className="fade-item fade-item-2">{slide.description}</p>
                  <Link
                    href={`/shop-default`} // Directly added href here
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-60"
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
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider justify-content-center spd300" />
        </div>
      </div>
    </div>
  );
}
