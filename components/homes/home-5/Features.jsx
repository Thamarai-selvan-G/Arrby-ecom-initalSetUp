"use client";
import { iconBoxes } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-9 flat-iconbox-v2">
      <div className="container">
        <div
          className="wrap-carousel wrap-mobile wow fadeInUp"
          data-wow-delay="0s"
        >
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            className="tf-sw-mobile"
            modules={[Pagination]}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            pagination={{ clickable: true, el: ".spd124" }}
          >
            {iconBoxes.map((box, index) => (
              <SwiperSlide key={index}>
                <div className="tf-icon-box text-center">
                  <div className="icon">
                    <i className={box.iconClass} />
                  </div>
                  <div className="content">
                    <div className="title">{box.title}</div>
                    <p>{box.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd124" />
        </div>
      </div>
    </section>
  );
}
