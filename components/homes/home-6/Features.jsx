"use client";

import { iconBoxData } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-1 flat-iconbox">
      <div className="container">
        <div
          className="wrap-carousel wrap-mobile wow fadeInUp"
          data-wow-delay="0s"
        >
          <Swiper
            className="tf-sw-mobile"
            slidesPerView={4}
            spaceBetween={15}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd131" }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
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
          >
            {iconBoxData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tf-icon-box style-row">
                  <div className="icon">
                    <i className={item.iconClass} />
                  </div>
                  <div className="content">
                    <div className="title fw-4">{item.title}</div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd131" />
        </div>
      </div>
    </section>
  );
}
