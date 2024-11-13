"use client";
import Image from "next/image";
import { slides11 } from "@/data/heroslides";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative">
      <Swiper
        className="swiper tf-sw-slideshow"
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 0 }}
        speed={1000}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd155" }}
      >
        {slides11.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                alt={slide.altText}
                src={slide.imgSrc}
                width={1800}
                height={785}
              />
              <div className="box-content">
                <div className="container">
                  <p className="fade-item fade-item-1 fw-8 mb_15">
                    {slide.subheading}
                  </p>
                  <h1 className="fade-item fade-item-2">
                    {" "}
                    {slide.heading.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {slide.heading.split(" ").slice(2).join(" ")}
                  </h1>
                  <Link
                    href={`/shop-default`}
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>SHOP NOW</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider rectangle-pagination justify-content-center spd155" />
        </div>
      </div>
    </div>
  );
}
