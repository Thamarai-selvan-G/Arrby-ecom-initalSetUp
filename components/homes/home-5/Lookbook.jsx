"use client";
import { ProductCard5 } from "@/components/shopCards/ProductCard5";
import { products3 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { ProductCard } from "@/components/shopCards/ProductCard";
export default function Lookbook() {
  return (
    <section className="flat-spacing-16">
      <div className="container">
        <div className="flat-lookbook-v2">
          <div className="col-left">
            <div className="wrap-lookbook lookbook-sw radius-10 o-hidden">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/shop/file/lookbook-5.jpg"
                  alt="collection-img"
                  src="/images/shop/file/lookbook-5.jpg"
                  width={1000}
                  height={1138}
                />
              </div>
              <div className="navigation-sw-dot nav-next-lookbook snbp126">
                <span />
              </div>
              <div className="navigation-sw-dot nav-prev-lookbook snbn126">
                <span />
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="slider-wrap-lookbook">
              <div className="nav-sw nav-next-slider nav-next-lookbook snbp126">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="inner-sw-lookbook">
                <div className="flat-title-lookbook">
                  <p className="label">SPRING SALE 30% OFF</p>
                  <h3 className="heading">Shop this look</h3>
                </div>
                <Swiper
                  className="swiper tf-sw-lookbook wrap-sw-over"
                  slidesPerView={1} // corresponds to data-preview, data-tablet, data-mobile
                  breakpoints={{
                    768: {
                      slidesPerView: 1, // corresponds to data-tablet
                      spaceBetween: 15, // corresponds to data-space-md
                    },
                    1024: {
                      slidesPerView: 1, // corresponds to data-preview
                      spaceBetween: 30, // corresponds to data-space-lg
                    },
                  }}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".snbp126",
                    nextEl: ".snbn126",
                  }}
                  pagination={{ clickable: true, el: ".spd126" }}
                >
                  {products3.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <ProductCard product={elm} />
                    </SwiperSlide>
                  ))}

                  <div className="sw-dots style-2 sw-pagination-lookbook d-md-none spd126" />
                </Swiper>
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-lookbook snbn126">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
