"use client";

import { swiperData2 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-12 pb_0">
      <div className="container">
        <div
          className="flat-title flex-row justify-content-between align-items-center px-0 wow fadeInUp"
          data-wow-delay="0s"
        >
          <h3 className="title">Season Collection</h3>
          <Link href={`/shop-collection-sub`} className="tf-btn btn-line">
            View all categories
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            spaceBetween={15}
            loop={false}
            autoplay={false}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 15 },
              320: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 6, spaceBetween: 50 },
              1024: { slidesPerView: 6, spaceBetween: 50 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd150" }}
          >
            {swiperData2.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.imgAlt}
                      src={slide.imgSrc}
                      width={320}
                      height={320}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-5"
                    >
                      {slide.title}
                    </Link>
                    <div className="count">{slide.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd150" />
        </div>
      </div>
    </section>
  );
}
