"use client";
import Image from "next/image";
import { slides14 } from "@/data/heroslides";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative">
      <Swiper
        className="tf-sw-slideshow"
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={1000}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd139" }}
        breakpoints={{
          768: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
        }}
      >
        {slides14.map(
          ({ id, imgSrc, heading, description, buttonText, buttonClass }) => (
            <SwiperSlide key={id}>
              <div className="wrap-slider">
                <Image
                  alt="fashion-slideshow"
                  src={imgSrc}
                  width={2000}
                  height={898}
                />
                <div className="box-content">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 font-young-serif fw-6">
                      {heading.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h1>
                    <p className="fade-item fade-item-2">{description}</p>
                    <div className="fade-item fade-item-3">
                      <Link
                        href={`/shop-default`} // Added directly in JSX
                        className={`tf-btn ${buttonClass} animate-hover-btn btn-xl radius-60`}
                      >
                        <span>{buttonText}</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots line-pagination sw-pagination-slider spd139" />
        </div>
      </div>
    </div>
  );
}
