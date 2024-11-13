"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "@/components/common/LanguageSelect";
import CurrencySelect from "@/components/common/CurrencySelect";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Topbar() {
  return (
    <div className="tf-top-bar bg_dark line">
      <div className="container-full px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_white fw-5">
              <span>(+333) 123-1688</span>
              <span>sayhello@ecomus.com</span>
            </div>
          </div>
          <div className="text-center overflow-hidden">
            <Swiper
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
              loop
            >
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5 text_white">
                  Spring Fashion Sale{" "}
                  <Link
                    href={`/shop-default`}
                    title="all collection"
                    className="tf-btn btn-line"
                  >
                    {" "}
                    Shop now
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5 text_white">
                  <a>Summer sale discount off 70%</a>
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5 text_white">
                  <a>Time to refresh your wardrobe.</a>
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages color-white"
                }
                topStart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
