"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
import { Navigation } from "swiper/modules";
export default function Lookbook() {
  return (
    <div className="tf-slideshow slideshow-lookbook slider-effect-fade position-relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp247",
          nextEl: ".snbn247",
        }}
        className="swiper tf-sw-lookbook"
      >
        <SwiperSlide className="swiper-slide">
          <div className="wrap-slider">
            <Image
              className="lazyload"
              data-src="/images/shop/file/lookbook-7.jpg"
              alt="men-slideshow-01"
              src="/images/shop/file/lookbook-7.jpg"
              width={1800}
              height={851}
            />
            <div className="lookbook-1">
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
                      <LookbookComponent product={lookbookProducts[15]} />
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
                      <LookbookComponent product={lookbookProducts[16]} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lookbook-item item-3">
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
                      <LookbookComponent product={lookbookProducts[17]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wrap-slider">
            <Image
              className="lazyload"
              data-src="/images/shop/file/lookbook-8.jpg"
              alt="men-slideshow-02"
              src="/images/shop/file/lookbook-8.jpg"
              width={1800}
              height={852}
            />
            <div className="lookbook-1">
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
                      <LookbookComponent product={lookbookProducts[18]} />
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
                      <LookbookComponent product={lookbookProducts[19]} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lookbook-item item-3">
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
                      <LookbookComponent product={lookbookProducts[20]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="wrap-slider">
            <Image
              className="lazyload"
              data-src="/images/shop/file/lookbook-9.jpg"
              alt="men-slideshow-01"
              src="/images/shop/file/lookbook-9.jpg"
              width={1800}
              height={852}
            />
            <div className="lookbook-1">
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
                      <LookbookComponent product={lookbookProducts[21]} />
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
                      <LookbookComponent product={lookbookProducts[22]} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lookbook-item item-3">
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
                      <LookbookComponent product={lookbookProducts[23]} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="wrap-pagination text-center">
        <div className="container">
          <div className="box-nav-pagination justify-content-center">
            <div className="nav-arr-default nav-next-slider nav-next-lookbook snbp247">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={11}
                  viewBox="0 0 7 11"
                  fill="currentColor"
                >
                  <path d="M5.5 11L0 5.5L5.5 0L6.47625 0.97625L1.9525 5.5L6.47625 10.0238L5.5 11Z" />
                </svg>
              </span>
            </div>
            <div className="dots-default sw-pagination-lookbook" />
            <div className="nav-arr-default nav-prev-slider nav-prev-lookbook snbn247">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={11}
                  viewBox="0 0 7 11"
                  fill="currentColor"
                >
                  <path d="M1.5 11L7 5.5L1.5 0L0.52375 0.97625L5.0475 5.5L0.52375 10.0238L1.5 11Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
