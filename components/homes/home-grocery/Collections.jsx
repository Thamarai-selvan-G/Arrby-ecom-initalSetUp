"use client";
import { slides13 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-13 pt_0">
      <div className="container">
        <Swiper
          className="tf-sw-collection"
          slidesPerView={2} // Equivalent to data-preview={2}
          spaceBetween={30} // Equivalent to data-space={30}
          loop={false} // Equivalent to data-loop="false"
          autoplay={false} // Equivalent to data-auto-play="false"
          breakpoints={{
            // Equivalent to data-tablet={2}, data-mobile="1.2"
            768: {
              slidesPerView: 2, // For tablets
            },
            0: {
              slidesPerView: 1.2, // For mobile
            },
          }}
        >
          {slides13.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 hover-img">
                <Link href={`/product-detail`} className="collection-inner">
                  <div className="collection-image radius-10 img-style">
                    <Image
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.imgAlt}
                      src={slide.imgSrc}
                      width={800}
                      height={542}
                    />
                  </div>
                  <div className="collection-content text-start">
                    <div className="bottom wow fadeInUp" data-wow-delay="0s">
                      <p className={`subheading fs-14 fw-7 ${slide.color} `}>
                        {slide.subheading}
                      </p>
                      <h5 className={`heading  fw-6 ${slide.color}`}>
                        {slide.heading.split("\n")[0]}
                        <br />
                        {slide.heading.split("\n")[1]}
                      </h5>
                      <button
                        className={`tf-btn style-3 ${slide.buttonClass} radius-60 animate-hover-btn`}
                      >
                        Shop now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
