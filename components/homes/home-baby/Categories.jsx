"use client";
import { collections10 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  const swiperOptions = {
    slidesPerView: 5,
    spaceBetween: 64,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    pagination: {
      clickable: true,
      el: ".spdc2",
    },
  };
  return (
    <section className="flat-spacing-13 pt_0">
      <div className="container">
        <div className="flat-title flex-row justify-content-center">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            Selected Categories
          </span>
        </div>
        <Swiper modules={[Pagination]} {...swiperOptions}>
          {collections10.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-circle circle-line hover-img">
                <Link
                  href={`/shop-default`}
                  className="collection-image img-style"
                >
                  <Image
                    className="lazyload"
                    data-src={collection.imgSrc}
                    alt="collection-img"
                    src={collection.imgSrc}
                    width={320}
                    height={320}
                  />
                </Link>
                <div className="collection-content text-center">
                  <Link href={`/shop-default`} className="link title fw-5">
                    {collection.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots d-md-none style-2 sw-pagination-recent justify-content-center spdc2" />
        </Swiper>
      </div>
    </section>
  );
}
