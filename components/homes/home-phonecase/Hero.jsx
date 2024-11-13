"use client";

import { slidesData2 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-home-5 position-relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd232" }}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {slidesData2.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.alt}
                src={slide.imgSrc}
                width={slide.width}
                height={slide.height}
              />
              <div className="box-content text-center">
                <div className="container">
                  <p className="fade-item fade-item-1 sale_off mb_15 text-white radius-60 fw-7">
                    {slide.saleText}
                  </p>
                  <h1 className="fade-item fade-item-2 mb_38 text-white heading">
                    {slide.heading.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {slide.heading.split(" ").slice(2).join(" ")}
                  </h1>
                  <div className="fade-item fade-item-3 d-flex gap-20 justify-content-center">
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    >
                      <span>{slide.buttons[0]}</span>
                      <i className="icon icon-arrow-right" />
                    </Link>
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    >
                      <span>{slide.buttons[1]}</span>
                      <i className="icon icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd232" />
      </div>
    </section>
  );
}
