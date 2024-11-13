"use client";

import { slides12 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section className="flat-spacing-30 flat-control-sw">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            Featured Categories
          </span>
          <div className="box-sw-navigation">
            <div className="sw-dots style-2 medium sw-pagination-recent justify-content-center scpd1" />
          </div>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          breakpoints={{
            1024: { slidesPerView: 6, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            0: { slidesPerView: 2, spaceBetween: 15 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".scpd1" }}
        >
          {slides12.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-circle has-bg has-bg-2 hover-img">
                <Link
                  href={`/shop-default`}
                  className="collection-image img-style"
                >
                  <Image
                    className="lazyload"
                    data-src={slide.imgSrc}
                    alt={slide.imgAlt}
                    src={slide.imgSrc}
                    width={124}
                    height={124}
                  />
                </Link>
                <div className="collection-content text-center">
                  <Link
                    href={`/shop-collection-sub`}
                    className="link title fw-5"
                  >
                    {slide.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
