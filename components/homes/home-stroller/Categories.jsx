"use client";

import { products } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-5">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Shop by categories
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-product nav-next-slider snbp280">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-product nav-prev-slider snbn280">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          className="swiper tf-sw-product-sell sw-wrapper-right"
          slidesPerView={4.6}
          spaceBetween={30}
          //   pagination={{clickable:true, clickable: true }}
          breakpoints={{
            768: {
              // Medium screens
              slidesPerView: 4.6,
              spaceBetween: 30,
            },
            480: {
              // Small screens
              slidesPerView: 2.6,
              spaceBetween: 15,
            },
            0: {
              // Small screens
              slidesPerView: 1.6,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp280",
            nextEl: ".snbn280",
          }}
        >
          <div className="swiper-wrapper">
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-v3 hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={product.imgSrc}
                      alt={product.imgAlt}
                      src={product.imgSrc}
                      width={product.imgWidth}
                      height={product.imgHeight}
                    />
                    <span className="box-icon">
                      <i className="icon-icon icon-arrow1-top-left" />
                    </span>
                  </Link>
                  <div className="collection-content">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-5"
                    >
                      {product.title}
                    </Link>
                    <div className="count">{product.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
