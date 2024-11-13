"use client";

import { swiperData } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <section className="flat-spacing-12 pb_0">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Our most beloved collections
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15, pagination: true },
              320: { slidesPerView: 2, spaceBetween: 30, pagination: true },
              768: { slidesPerView: 2, spaceBetween: 30, pagination: true },
              1024: { slidesPerView: 2, spaceBetween: 30, pagination: true },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd151" }}
          >
            {swiperData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item hover-img">
                  <div className="img-style">
                    <Link href={`/shop-default`}>
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.imgAlt}
                        src={slide.imgSrc}
                        width={800}
                        height={582}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title">
                      <Link href={`/shop-default`} className="link">
                        {slide.title}
                      </Link>
                    </div>
                    <Link href={`/shop-default`} className="tf-btn btn-line">
                      Shop Collection
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd151" />
        </div>
      </div>
    </section>
  );
}
