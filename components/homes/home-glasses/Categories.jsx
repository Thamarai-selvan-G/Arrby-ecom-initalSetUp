"use client";
import Image from "next/image";
import { slides7 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function Categories() {
  return (
    <section className="flat-spacing-1 flat-iconbox bg_grey-13">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp font-gloock" data-wow-delay="0s">
            Shop by categories
          </span>
        </div>
        <div
          className="wrap-carousel wrap-mobile wow fadeInUp"
          data-wow-delay="0s"
        >
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd180" }}
          >
            {slides7.map((slide, index) => (
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
                      width={360}
                      height={229}
                    />
                  </Link>
                  <div className="collection-content ">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title font-gloock"
                    >
                      {slide.title}
                    </Link>
                    <div className="count">{slide.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd180" />
        </div>
      </div>
    </section>
  );
}
