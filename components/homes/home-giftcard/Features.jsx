"use client";
import { swiperSlides } from "@/data/categories";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section>
      <div className="container-full">
        <div className="bg_green-1  radius-10 rounded-bottom-0 flat-spacing-21">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <span className="title fw-6">Why choose us?</span>
          </div>
          <div className="container flat-iconbox-v3">
            <div
              className="wrap-carousel wrap-mobile wow fadeInUp"
              data-wow-delay="0s"
            >
              <Swiper
                spaceBetween={15}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 3 },
                  480: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
                className="tf-sw-mobile"
                modules={[Pagination]}
                pagination={{ clickable: true, el: ".spd175" }}
              >
                {swiperSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="tf-icon-box text-center">
                      <div className="icon">
                        <i className={slide.iconClass} />
                      </div>
                      <div className="content">
                        <div className="title fw-6">{slide.title}</div>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd175" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
