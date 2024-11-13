"use client";

import { collectionData3 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-12 bg_grey-3">
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
            className="tf-sw-collection"
            slidesPerView={6}
            breakpoints={{
              768: {
                slidesPerView: 6,
              },
              576: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={15}
            loop={false}
            autoplay={false}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp130",
              nextEl: ".snbn130",
            }}
          >
            {collectionData3.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.imgAlt}
                      src={item.imgSrc}
                      width={item.imgWidth}
                      height={item.imgHeight}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-5"
                    >
                      {item.title}
                    </Link>
                    <div className="count">{item.itemCount} items</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center" />
          <div className="nav-sw nav-next-slider nav-next-collection snbp130">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-collection snbn130">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
