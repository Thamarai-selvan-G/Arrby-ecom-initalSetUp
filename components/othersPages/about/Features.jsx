"use client";

import { iconBoxes4 } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="bg_grey-2 radius-10 flat-wrap-iconbox">
          <div className="flat-title lg">
            <span className="title fw-5">Quality is our priority</span>
            <div>
              <p className="sub-title text_black-2">
                Our talented stylists have put together outfits that are perfect
                for the season.
              </p>
              <p className="sub-title text_black-2">
                They've variety of ways to inspire your next fashion-forward
                look.
              </p>
            </div>
          </div>
          <div className="flat-iconbox-v3 lg">
            <div className="wrap-carousel wrap-mobile">
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 15 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  0: { slidesPerView: 1, spaceBetween: 15 },
                }}
                className="swiper tf-sw-mobile"
                modules={[Pagination]}
                pagination={{ clickable: true, el: ".spd303" }}
              >
                {iconBoxes4.map((box, index) => (
                  <SwiperSlide key={index}>
                    <div className="tf-icon-box text-center">
                      <div className="icon">
                        <i className={box.iconClass} />
                      </div>
                      <div className="content">
                        <div className="title">{box.title}</div>
                        <p className="text_black-2">{box.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd303" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
