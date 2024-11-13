"use client";

import { iconBoxData } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-25 bg_light-green-3">
      <div className="container">
        <Swiper
          className="swiper tf-sw-recent"
          slidesPerView={3} // data-preview
          spaceBetween={15} // default space, data-space
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{
            1024: {
              slidesPerView: 3, // data-tablet
              spaceBetween: 30, // data-space-lg
            },
            768: {
              slidesPerView: 2, // data-mobile
              spaceBetween: 30, // data-space-md
            },
            0: {
              slidesPerView: 1, // Default for smaller screens
              spaceBetween: 15, // data-space
            },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spd137" }}
        >
          {iconBoxData.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="tf-icon-box-v2">
                <span className="icon">
                  <i className={elm.iconClass} />
                </span>
                <div className="title font-young-serif fs-14">
                  {elm.description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd137" />
      </div>
    </section>
  );
}
