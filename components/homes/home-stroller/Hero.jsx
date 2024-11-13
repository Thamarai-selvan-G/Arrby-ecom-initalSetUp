"use client";

import { slides8 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade style-padding position-relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd282" }}
        slidesPerView={1}
        loop={false}
      >
        {slides8.map((slide, index) => (
          <SwiperSlide key={index} className="height-auto">
            <div className="slider-effect wrap-slider h-100">
              <div className="content-left bg-dark-green-2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="box-content">
                        <h2 className="heading fade-item fade-item-1 text_white">
                          {slide.heading}
                        </h2>
                        <p className="desc fade-item fade-item-2 fw-5 text_white">
                          {slide.description}
                        </p>
                        <div className="fade-item fade-item-3">
                          <Link
                            href={`/shop-collection-list`}
                            className="tf-btn btn-outline-light btn-xl radius-60"
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
                  width={slide.imgWidth}
                  height={slide.imgHeight}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots dots-fill-white large sw-pagination-slider spd282" />
        </div>
      </div>
    </section>
  );
}
