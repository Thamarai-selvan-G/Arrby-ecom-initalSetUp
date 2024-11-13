"use client";

import { sliderData4 } from "@/data/heroslides";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <>
      <section className="tf-slideshow slider-effect-fade slider-accessories">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          centeredSlides={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            1300: { slidesPerView: 1.6 },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbph1",
            nextEl: ".snbnh1",
          }}
        >
          {sliderData4.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="wrap-slider ">
                <Image
                  width={1000}
                  height={649}
                  src={slide.imgSrc}
                  alt={slide.alt}
                />
                <div className="box-content text-center ">
                  <div className="container">
                    <h2 className="fade-item fade-item-1 heading">
                      {slide.heading}
                    </h2>
                    <p className="fade-item fade-item-2">{slide.description}</p>
                    <div className="fade-item fade-item-3">
                      <Link
                        href={`/shop-default`}
                        className="tf-btn btn-outline-dark fw-5 btn-xl radius-60"
                      >
                        <span>{slide.btnText}</span>
                        <i className="icon icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container wrap-navigation">
          <div className="nav-sw style-white nav-next-slider navigation-next-slider box-icon w_46 round snbph1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw style-white nav-prev-slider navigation-prev-slider box-icon w_46 round snbnh1">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </section>
    </>
  );
}
