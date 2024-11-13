"use client";
import { slides12 } from "@/data/heroslides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade position-relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd207" }}
        className="swiper tf-sw-effect"
      >
        {slides12.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-effect wrap-slider">
              <div className="content-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="box-content">
                        <h1 className={`heading fade-item fade-item-1`}>
                          {slide.heading.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < slide.heading.split("<br />").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </h1>
                        <p className="desc fade-item fade-item-2">
                          {slide.description}
                        </p>
                        <Link
                          href={`/shop-collection-list`}
                          className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                        >
                          <span>Shop collection</span>
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
                  width={1000}
                  height={838}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots style-2 sw-pagination-slider spd207" />
        </div>
      </div>
    </section>
  );
}
