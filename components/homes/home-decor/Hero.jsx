"use client";

import { sliderData3 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-home-decor slideshow-effect slider-effect-fade position-relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".sp152" }}
        spaceBetween={30}
        loop={true}
        autoPlay={false}
      >
        {sliderData3.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-effect h-100 wrap-slider reverse">
              <div className={`content-left ${slide.bgClass}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="box-content">
                        <h1 className="heading fade-item fade-item-1 text_white">
                          {slide.heading}
                        </h1>
                        <p className="desc fade-item fade-item-2 text_white">
                          {slide.description}
                        </p>
                        <div className="fade-item fade-item-3">
                          <Link
                            href={`/shop-collection-list`}
                            className="tf-btn btn-outline-light btn-xl radius-3"
                          >
                            <span>Shop collection</span>
                            <i className="icon icon-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-slider">
                <Image
                  className="lazyload"
                  data-src={slide.imgSrc}
                  alt={slide.imgAlt}
                  src={slide.imgSrc}
                  width={1000}
                  height={745}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container-full">
          <div className="sw-dots dots-fill-white sw-pagination-slider justify-content-end sp152"></div>
        </div>
      </div>
    </section>
  );
}
