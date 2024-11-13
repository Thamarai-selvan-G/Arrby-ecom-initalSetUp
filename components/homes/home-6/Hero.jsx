"use client";

import { sliderData } from "@/data/heroslides";
import React from "react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade position-relative">
      <Swiper
        modules={[Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true, el: ".sph6" }}
        className="tf-sw-effect"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-effect wrap-slider">
              <div className="content-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="box-content">
                        <h1
                          className={`heading fade-item fade-item-${index + 1}`}
                        >
                          {slide.heading.split(" ").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h1>
                        <p className={`desc fade-item fade-item-${index + 2}`}>
                          {slide.description}
                        </p>
                        <Link
                          href={`/shop-collection-list`}
                          className={`fade-item fade-item-${
                            index + 3
                          } tf-btn btn-light-icon animate-hover-btn btn-xl radius-3`}
                        >
                          <span>{slide.btnText}</span>
                          <i className="icon icon-arrow-right" />
                        </Link>
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
          <div className="sw-dots sph6 line-pagination sw-pagination-slider" />
        </div>
      </div>
    </section>
  );
}
