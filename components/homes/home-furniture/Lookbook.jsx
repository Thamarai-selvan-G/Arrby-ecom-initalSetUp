"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
import { Navigation, Pagination } from "swiper/modules";
export default function Lookbook() {
  return (
    <section className="flat-spacing-27 pb-0">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <span className="title">Room for inspiration</span>
      </div>
      <div className="hover-sw-nav view-default">
        <Swiper
          className="swiper tf-sw-lookbook slideshow-lookbook-furniture"
          slidesPerView={1.4} // Mapping data-preview to slidesPerView
          spaceBetween={15} // Mapping data-space-md to spaceBetween
          breakpoints={{
            768: {
              // Mapping for tablet view
              slidesPerView: 1.4, // Mapping data-tablet to slidesPerView
              spaceBetween: 30, // Mapping data-space-lg to spaceBetween
            },
            1024: {
              // Mapping for larger screens
              slidesPerView: 1.4, // Same as data-preview for large screens
              spaceBetween: 30, // Mapping data-space-lg to spaceBetween
            },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".snbp164",
            nextEl: ".snbn164",
          }}
          pagination={{ clickable: true, el: ".spd164" }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="wrap-lookbook lookbook-1">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/slider/009furniture-banner-10.jpg"
                  alt="image-lookbook"
                  src="/images/slider/009furniture-banner-10.jpg"
                  width={2153}
                  height={1059}
                />
              </div>
              <div className="lookbook-item item-1">
                <div className="inner">
                  <div className="btn-group dropdown dropup dropdown-center">
                    <button
                      className="tf-pin-btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span />
                    </button>
                    <ul className="dropdown-menu p-0 border-0">
                      <LookbookComponent product={lookbookProducts[6]} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lookbook-item item-2">
                <div className="inner">
                  <div className="btn-group dropdown dropup dropdown-center">
                    <button
                      className="tf-pin-btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span />
                    </button>
                    <ul className="dropdown-menu p-0 border-0">
                      <LookbookComponent product={lookbookProducts[7]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="wrap-lookbook lookbook-2">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/slider/009furniture-banner-11.jpg"
                  alt="image-lookbook"
                  src="/images/slider/009furniture-banner-11.jpg"
                  width={1435}
                  height={706}
                />
              </div>
              <div className="lookbook-item item-1">
                <div className="inner">
                  <div className="btn-group dropdown dropup dropdown-center">
                    <button
                      className="tf-pin-btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span />
                    </button>
                    <ul className="dropdown-menu p-0 border-0">
                      <LookbookComponent product={lookbookProducts[8]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="wrap-lookbook lookbook-3">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/slider/009furniture-banner-12.jpg"
                  alt="image-lookbook"
                  src="/images/slider/009furniture-banner-12.jpg"
                  width={1435}
                  height={706}
                />
              </div>
              <div className="lookbook-item item-1">
                <div className="inner">
                  <div className="btn-group dropdown dropup dropdown-center">
                    <button
                      className="tf-pin-btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span />
                    </button>
                    <ul className="dropdown-menu p-0 border-0">
                      <LookbookComponent product={lookbookProducts[9]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="nav-sw style-2 nav-next-slider nav-next-lookbook box-icon w_46 round snbp164">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw style-2 nav-prev-slider nav-prev-lookbook box-icon w_46 round snbn164">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="wrap-pagination">
            <div className="container-full">
              <div className="sw-dots sw-pagination-lookbook justify-content-center spd164" />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
