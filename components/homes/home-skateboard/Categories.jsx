"use client";

import { slides } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-17 pt_0">
      <div className="container">
        <div className="flat-title title-upper flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            SHOP BY CATEGORIES
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-collection nav-next-slider snbp251">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-collection nav-prev-slider snbn251">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          slidesPerView={4.6} // data-preview
          spaceBetween={15} // data-space
          loop={false} // data-loop
          autoplay={false} // data-auto-play
          breakpoints={{
            768: { slidesPerView: 4.6, spaceBetween: 30 }, // data-tablet, data-space-md
            576: { slidesPerView: 3.6, spaceBetween: 30 }, // data-mobile, data-space-lg
            0: { slidesPerView: 1.6, spaceBetween: 30 }, // data-mobile, data-space-lg
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp251",
            nextEl: ".snbn251",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v3 hover-img">
                <Link
                  href={`/shop-collection-sub`}
                  className="collection-image img-style rounded-0"
                >
                  <Image
                    className="lazyload"
                    data-src={slide.imgSrc}
                    alt={slide.alt}
                    src={slide.imgSrc}
                    width={400}
                    height={555}
                  />
                  <span className="box-icon">
                    <i className="icon-icon icon-arrow1-top-left" />
                  </span>
                </Link>
                <div className="collection-content">
                  <Link
                    href={`/shop-collection-sub`}
                    className="link title fw-8 fs-16 text-uppercase"
                  >
                    {slide.title}
                  </Link>
                  <div className="count">{slide.count}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
