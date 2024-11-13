"use client";

import { slides7 } from "@/data/heroslides";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow slider-effect-fade slider-skincare position-relative">
      <Swiper
        slidesPerView={1} // data-preview
        spaceBetween={0} // data-space
        centeredSlides={false} // data-centered
        loop={true} // data-loop
        autoplay={false} // data-auto-play
        delay={0} // data-delay
        speed={1000} // data-speed
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, el: ".spd169" }}
      >
        {slides7.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                alt="fashion-slideshow"
                src={slide.src}
                width={1920}
                height={817}
              />
              <div className="box-content">
                <div className="container">
                  <h1
                    className={`fade-item fade-item-1 text-white`}
                    style={{ animationDelay: `${slide.delay}s` }}
                  >
                    {slide.title.split("\n")[0]}
                    <br />
                    {slide.title.split("\n")[1]}
                  </h1>
                  <p
                    className={`fade-item fade-item-2 text-white`}
                    style={{ animationDelay: `${slide.delay + 0.1}s` }}
                  >
                    {slide.description}
                  </p>
                  <Link
                    href={`/shop-default`}
                    className={`fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3`}
                    style={{ animationDelay: `${slide.delay + 0.2}s` }}
                  >
                    <span>Shop collection</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd169" />
      </div>
    </div>
  );
}
