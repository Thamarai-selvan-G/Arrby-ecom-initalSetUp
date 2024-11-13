"use client";

import { products10 } from "@/data/products";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade position-relative slider-skincare slider-skateboard ">
      <Swiper
        slidesPerView={1} // data-preview
        spaceBetween={0} // data-space
        centeredSlides={false} // data-centered
        loop={true} // data-loop
        autoplay
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd253" }}
        className="tf-sw-slideshow"
        // autoplay={{ delay: 0, disableOnInteraction: false }} // data-auto-play
        // speed={1000} // data-speed
      >
        {products10.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                alt="fashion-slideshow"
                src={slide.imgSrc}
                width={1920}
                height={1080}
              />
              <div className="box-content">
                <div className="container">
                  <div className="card-box-2">
                    <div className="fade-item fade-item-1 title">
                      <a href={slide.link} className="link">
                        {slide.title}
                      </a>
                    </div>
                    <span className="fade-item fade-item-2 price">
                      ${slide.price.toFixed(2)}
                    </span>
                    <div className="fade-item fade-item-3">
                      <a
                        href={slide.link}
                        className="tf-btn btn-line collection-other-link fw-6"
                      >
                        <span>Shop now</span>
                        <i className="icon icon-arrow1-top-left" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 sw-pagination-slider justify-content-center spd253" />
      </div>
    </div>
  );
}
