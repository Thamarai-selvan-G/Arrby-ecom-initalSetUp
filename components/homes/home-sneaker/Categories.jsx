"use client";
import { collectionItems4 } from "@/data/categories";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="position-relative">
          <div className="sw-pagination-wrapper">
            <Swiper
              className="swiper tf-sw-collection"
              slidesPerView={4}
              spaceBetween={30}
              loop={false}
              autoplay={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd269" }}
            >
              <div className="swiper-wrapper">
                {collectionItems4.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="collection-item hover-img style-2">
                      <div className="collection-inner">
                        <Link
                          href={`/shop-collection-sub`}
                          className="collection-image img-style radius-10"
                        >
                          <Image
                            className="lazyload"
                            data-src={item.imgSrc}
                            alt={item.alt}
                            loading="lazy"
                            src={item.imgSrc}
                            width={320}
                            height={289}
                          />
                        </Link>
                        <div className="collection-content justify-content-end align-items-center">
                          <div className="bottom">
                            <Link
                              href={`/shop-collection-sub`}
                              className="tf-btn collection-title hover-icon btn-light fs-14 fw-7 rounded-0"
                            >
                              <span>{item.title}</span>
                              <i className="icon icon-arrow1-top-left" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 small sw-pagination-collection justify-content-center spd269" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
