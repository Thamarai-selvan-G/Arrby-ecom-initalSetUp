"use client";
import { collections12 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section>
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Shop by category
          </span>
        </div>
        <div className="flat-categories-bg wrap-carousel">
          <Swiper
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              1024: { slidesPerView: 6, spaceBetween: 70 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".scnbp1",
              nextEl: ".scnbn1",
            }}
            className="swiper tf-sw-recent wow fadeInUp"
          >
            {collections12.map((collection, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      width="149"
                      height="149"
                      className="lazyloaded"
                      data-src={collection.imgSrc}
                      alt={collection.alt}
                      src={collection.imgSrc}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-5 text-line-clamp-1"
                    >
                      {collection.title}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round scnbn1">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round scnbp1">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
