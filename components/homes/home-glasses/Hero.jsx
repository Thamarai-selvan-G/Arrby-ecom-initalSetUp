"use client";
import { slides13 } from "@/data/heroslides";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd182" }}
        className="tf-sw-slideshow"
      >
        {slides13.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={1800}
                height={878}
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1 font-gloock text_white">
                    {slide.title.split("\n").map((word, i) => (
                      <React.Fragment key={i}>
                        {word} <br />
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="fade-item fade-item-2 text_white">
                    {slide.description}
                  </p>
                  <div className="fade-item fade-item-3">
                    <Link
                      href={`/shop-default`}
                      className="tf-btn btn-outline-light btn-xl radius-60"
                    >
                      <span>SHOP COLLECTION</span>
                      <i className="icon icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-2">
        <div className="container">
          <div className="sw-dots dots-fill-white justify-content-center sw-pagination-slider spd182" />
        </div>
      </div>
    </div>
  );
}
