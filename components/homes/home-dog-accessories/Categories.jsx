"use client";

import { slides2 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="flat-title flex-row justify-content-center px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Shop by categories
          </span>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            className="swiper tf-sw-product-sell-1 wrap-sw-over"
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 4 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp154",
              nextEl: ".snbn154",
            }}
          >
            {slides2.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item hover-img style-2">
                  <div className="collection-inner">
                    <Link
                      href={`/shop-collection-sub`}
                      className="collection-image img-style radius-10"
                    >
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.altText}
                        src={slide.imgSrc}
                        width={320}
                        height={384}
                      />
                    </Link>
                    <div className="collection-content justify-content-end align-items-center">
                      <div className="bottom">
                        <Link
                          href={`/shop-collection-sub`}
                          className="tf-btn collection-title hover-icon btn-light radius-3"
                        >
                          <span>{slide.title}</span>
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-sell-1 box-icon w_46 round snbp154">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-sell-1 box-icon w_46 round snbn154">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
