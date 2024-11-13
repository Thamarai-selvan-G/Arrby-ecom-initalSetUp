"use client";
import Image from "next/image";
import { slideshowItems } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-skincare position-relative">
      <Swiper
        className="swiper tf-sw-slideshow"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={false}
        speed={1000}
        delay={2000}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd195" }}
      >
        <div className="swiper-wrapper">
          {slideshowItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="wrap-slider">
                <Image
                  className="lazyload"
                  data-src={item.imgSrc}
                  alt={item.alt}
                  loading="lazy"
                  src={item.imgSrc}
                  width={1800}
                  height={785}
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading font-poppins fw-8">
                      {item.heading}
                    </h1>
                    <div className="fade-item fade-item-2">
                      <Link
                        href={`/shop-collection-list`}
                        className="font-poppins tf-btn btn-outline-light rounded-0 fw-6 fs-14 link justify-content-center letter-spacing-2 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        {item.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd195" />
      </div>
    </div>
  );
}
