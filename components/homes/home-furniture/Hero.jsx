"use client";
import Link from "next/link";
import { sliderData2 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade style-padding position-relative">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd164" }}
        className="swiper tf-sw-effect"
      >
        {sliderData2.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slider-effect wrap-slider `}>
              <div className={`content-left  ${slide.backgroundColor}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="box-content">
                        <h1
                          className={`heading fade-item fade-item-${index + 1}`}
                        >
                          {slide.heading.split("\n")[0]}
                          <br />
                          {slide.heading.split("\n")[1]}
                        </h1>
                        <p className={`desc fade-item fade-item-${index + 2}`}>
                          {slide.description}
                        </p>
                        <Link
                          href={`/shop-collection-list`} // Direct link added here
                          className={`fade-item fade-item-${
                            index + 3
                          } tf-btn btn-light-icon animate-hover-btn btn-xl radius-3`}
                        >
                          <span>Shop collection</span>
                          <i className="icon icon-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-slider">
                <Image
                  className="lazyload"
                  data-src={slide.imgSrc}
                  alt={slide.altText}
                  src={slide.imgSrc}
                  width={1890}
                  height={1580}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider spd164" />
        </div>
      </div>
    </section>
  );
}
