"use client";
import { iconBoxes } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-27">
      <div className="container">
        <div className="flat-iconbox-v3">
          <div className="wrap-carousel wrap-mobile">
            <Swiper
              className="swiper tf-sw-mobile"
              spaceBetween={30}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 30 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                0: { slidesPerView: 1, spaceBetween: 15 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd270" }}
            >
              <div className="swiper-wrapper wrap-iconbox">
                {iconBoxes.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="tf-icon-box small text-center">
                      <div className="icon w-50 no-border ">
                        <i
                          style={{ fontSize: "40px", fontWeight: "550" }}
                          className={elm.iconClass}
                        />
                      </div>
                      <div className="content">
                        <div
                          className="title fs-14 fw-7"
                          style={{ textTransform: "uppercase" }}
                        >
                          {elm.title}
                        </div>
                        <p>{elm.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd270" />
          </div>
        </div>
      </div>
    </section>
  );
}
