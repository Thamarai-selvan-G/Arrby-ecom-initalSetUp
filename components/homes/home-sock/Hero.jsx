"use client";

import { slidesData3 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative slider-sock">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        centeredSlides={false}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd273" }}
        className="tf-sw-slideshow "
      >
        {slidesData3.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload img-dk"
                data-src={slide.imgSrcDk}
                alt={slide.alt}
                loading="lazy"
                src={slide.imgSrcDk}
                width={1800}
                height={766}
              />
              <Image
                className="lazyload img-mb"
                data-src={slide.imgSrcMb}
                alt={slide.alt}
                loading="lazy"
                src={slide.imgSrcMb}
                width={600}
                height={600}
              />
              <div className="box-content">
                <div className="container">
                  <h2 className="fade-item fade-item-1 heading">
                    {slide.heading}
                  </h2>
                  <p className="fade-item fade-item-2 d-block">{slide.text}</p>
                  <div className="fade-item fade-item-3">
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn btn-color-1 rounded-0 fw-6 animate-hover-btn letter-2"
                    >
                      <span>SHOP NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider justify-content-xl-start justify-content-center spd273" />
        </div>
      </div>
    </div>
  );
}
