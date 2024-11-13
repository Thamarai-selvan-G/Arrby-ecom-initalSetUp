"use client";

import { slides10 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { EffectFade, Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
      <Swiper
        className="swiper tf-sw-slideshow slider-setup-gear"
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Pagination, EffectFade]}
        pagination={{ clickable: true, el: ".spd246" }}
        effect="fade"
      >
        {slides10.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider text-in-right">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.imgAlt}
                src={slide.imgSrc}
                width={1800}
                height={753}
              />
              <div className="box-content">
                <div className="container">
                  <h2 className="fade-item fade-item-2 heading">
                    {slide.heading}
                  </h2>
                  <p className="fade-item fade-item-1 subheading">
                    Designed for the minimalist, the Rushfaster Desk Mat is free{" "}
                    <br />
                    from unnecessary complications.
                  </p>
                  <Link
                    href={`/shop-default`} // Added directly in JSX
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl"
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
          <div className="sw-dots sw-pagination-slider justify-content-center spd246" />
        </div>
      </div>
    </div>
  );
}
