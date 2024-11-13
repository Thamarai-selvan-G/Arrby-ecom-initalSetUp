"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
import { Pagination } from "swiper/modules";
export default function Lookbook() {
  return (
    <section className="flat-spacing-6">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <span className="title">Shop the look</span>
        <p className="sub-title">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>
      </div>
      <Swiper
        className="swiper tf-sw-lookbook"
        spaceBetween={0} // Equivalent to data-space-lg and data-space-md
        slidesPerView={2} // Equivalent to data-preview
        breakpoints={{
          1024: {
            slidesPerView: 2, // Equivalent to data-tablet
            spaceBetween: 0, // Equivalent to data-space-md
          },
          640: {
            slidesPerView: 1, // Equivalent to data-mobile
            spaceBetween: 0, // Equivalent to data-space-md
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd110" }}
      >
        <SwiperSlide className="swiper-slide">
          <div className="wrap-lookbook lookbook-1">
            <div className="image">
              <Image
                className="lazyload"
                data-src="/images/shop/file/lookbook-3.jpg"
                alt="image-lookbook"
                src="/images/shop/file/lookbook-3.jpg"
                width="800"
                height="585"
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
                    <LookbookComponent product={lookbookProducts[0]} />
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
                    <LookbookComponent product={lookbookProducts[1]} />
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
                data-src="/images/shop/file/lookbook-4.jpg"
                alt="image-lookbook"
                src="/images/shop/file/lookbook-4.jpg"
                width="800"
                height="585"
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
                    <LookbookComponent product={lookbookProducts[2]} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="wrap-pagination">
          <div className="container-full">
            <div className="sw-dots sw-pagination-lookbook justify-content-center spd110" />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
