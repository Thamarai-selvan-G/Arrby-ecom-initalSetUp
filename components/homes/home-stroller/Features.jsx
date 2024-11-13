"use client";

import { slides } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="line">
      <div className="container">
        <div className="wrap-spacing-iconbox">
          <Swiper
            className="swiper tf-sw-recent"
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd281" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`tf-icon-box-v2 ${slide.justifyClass}`}>
                  <span className={`icon ${slide.iconClass}`} />
                  <div className="title">{slide.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd281" />
        </div>
      </div>
    </section>
  );
}
