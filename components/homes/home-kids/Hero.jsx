"use client";
import Image from "next/image";
import { slides18 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-home-5 position-relative">
      <Swiper
        className="swiper tf-sw-slideshow"
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd201" }}
      >
        {slides18.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={2000}
                height={776}
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
                    href={`/shop-collection-list`}
                    className="fade-item fade-item-3 tf-btn btn-primary animate-hover-btn btn-xl radius-60"
                  >
                    <span>{slide.btnText}</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd201" />
      </div>
    </section>
  );
}
