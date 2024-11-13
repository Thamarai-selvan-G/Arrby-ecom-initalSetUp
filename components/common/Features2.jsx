"use client";

import { iconBoxes3 } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features({ bgColor = "bg_grey-7", titleFont = "" }) {
  return (
    <section
      className={`flat-spacing-1 flat-iconbox  wow fadeInUp ${bgColor}`}
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="wrap-carousel wrap-mobile">
          <Swiper
            className="swiper tf-sw-mobile"
            breakpoints={{
              1024: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd104" }}
          >
            {iconBoxes3.map((box, index) => (
              <SwiperSlide key={index}>
                <div className="tf-icon-box style-row">
                  <div className="icon bg_white">
                    <i className={box.iconClass} />
                  </div>
                  <div className="content">
                    <div className={`title fw-4 ${titleFont}`}>{box.title}</div>
                    <p>{box.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd104" />
        </div>
      </div>
    </section>
  );
}
