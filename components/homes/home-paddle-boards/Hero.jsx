"use client";
import { slideshowData2 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-home-4 slider-effect-fade position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        className="swiper tf-sw-slideshow"
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd223" }}
      >
        {slideshowData2.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                className="lazyload"
                data-src={slide.imgSrc}
                alt={slide.altText}
                src={slide.imgSrc}
                width={2000}
                height={836}
              />
              <div className="box-content">
                <div className="container">
                  <div className={`card-box ${slide.cardClass}`}>
                    <p className="fade-item fade-item-1 text-white subheading fw-7 fs-14">
                      {slide.subheading}
                    </p>
                    <h3
                      className="fade-item fade-item-2 text-white heading fw-6"
                      dangerouslySetInnerHTML={{ __html: slide.heading }}
                    />
                    <div className="fade-item fade-item-3">
                      <Link
                        href={`/shop-collection-list`} // Directly added link
                        className="tf-btn btn-outline-light btn-xl radius-3"
                      >
                        <span>{slide.buttonText}</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 sw-pagination-slider dots-white spd223" />
      </div>
    </div>
  );
}
