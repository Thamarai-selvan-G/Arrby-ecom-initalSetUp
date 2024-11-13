"use client";

import { collectionItems2 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-21 pb_0">
      <div className="container">
        <div
          className="flat-title flex-row justify-content-between align-items-center px-0 wow fadeInUp"
          data-wow-delay="0s"
        >
          <h3 className="title fw-5">Shop by categories</h3>
          <Link href={`/shop-collection-sub`} className="tf-btn btn-line">
            View all categories
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            breakpoints={{
              1024: { slidesPerView: 6, spaceBetween: 50 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              576: { slidesPerView: 2, spaceBetween: 30 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            loop={false}
            autoplay={false}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd237" }}
          >
            {collectionItems2.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      src={item.imgSrc}
                      alt="collection-img"
                      width={320}
                      height={321}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-5"
                    >
                      {item.title}
                    </Link>
                    <div className="count">{item.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd237" />
        </div>
      </div>
    </section>
  );
}
