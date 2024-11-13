"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
export default function Hero() {
  return (
    <div className="tf-slideshow slideshow-men slider-effect-fade position-relative">
      <Swiper className="swiper tf-sw-slideshow">
        <SwiperSlide className="swiper-slide">
          <div className="wrap-slider">
            <Image
              className="lazyload"
              data-src="/images/slider/men-slide1.jpg"
              alt="men-slideshow-01"
              src="/images/slider/men-slide1.jpg"
              width={2000}
              height={929}
            />
            <div className="lookbook-1">
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
                      <LookbookComponent product={lookbookProducts[13]} />
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
              data-src="/images/slider/men-slide2.jpg"
              alt="men-slideshow-02"
              src="/images/slider/men-slide2.jpg"
              width={2000}
              height={929}
            />
            <div className="lookbook-2">
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
                      <LookbookComponent product={lookbookProducts[14]} />
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
            <div className="nav-arr-default nav-next-slider navigation-next-slider">
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
            <div className="dots-default sw-pagination-slider" />
            <div className="nav-arr-default nav-prev-slider navigation-prev-slider">
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
