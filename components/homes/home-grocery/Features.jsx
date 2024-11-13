"use client";

import { iconBoxes } from "@/data/categories";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="bg-yellow-10 radius-20 flat-wrap-iconbox">
          <div className="flat-title lg">
            <p className="sub-title fw-6">WHAT IS PLANTBELLY?</p>
            <span className="title fw-6 text-center">
              Plant-based groceries, delivered.
            </span>
          </div>
          <div className="flat-iconbox-v3 lg">
            <div className="wrap-carousel wrap-mobile">
              <Swiper
                className="swiper tf-sw-mobile"
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
                {iconBoxes.map((box, i) => (
                  <SwiperSlide className="swiper-slide" key={i}>
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
        </div>
      </div>
    </section>
  );
}
