"use client";

import { iconBoxes2 } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-27 bg_beige-2">
      <div className="container">
        <div className="flat-title">
          <span
            className="title wow fadeInUp text-white text-center"
            data-wow-delay="0s"
          >
            We’re solving the biggest problems in furniture
          </span>
        </div>
        <div
          className="wrap-carousel wrap-mobile flat-iconbox-v2 style-2 wow fadeInUp"
          data-wow-delay="0s"
        >
          <Swiper
            slidesPerView={1} // data-preview
            spaceBetween={15} // data-space
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd168" }}
          >
            {iconBoxes2.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tf-icon-box text-center">
                  <div className="icon">
                    <i className={`${item.iconClass} text-white`} />
                  </div>
                  <div className="content">
                    <div className="title text-white">{item.title}</div>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd168" />
        </div>
      </div>
    </section>
  );
}
