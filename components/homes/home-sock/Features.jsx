"use client";

import { iconBoxSlides } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="bg-yellow-8 flat-wrap-iconbox-v2">
          <div className="flat-iconbox-v3">
            <div className="wrap-carousel wrap-mobile">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
                pagination={{ clickable: true, el: ".spd272" }}
              >
                <div className="swiper-wrapper wrap-iconbox lg">
                  {iconBoxSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="tf-icon-box-v3 text-center">
                        <div className="title">{slide.title}</div>
                        <p className="desc">{slide.desc}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd272" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
