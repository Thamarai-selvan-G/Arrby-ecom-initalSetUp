"use client";

import { testimonialSlides, thumbnailSlides } from "@/data/testimonials";
import React, { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="flat-title">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            What clients say about us
          </span>
        </div>
        <div className="wrap-carousel wrapper-thumbs-testimonial flat-thumbs-testimonial">
          <div className="box-left wow fadeInUp" data-wow-delay="0s">
            <Swiper
              className="tf-thumb-tes"
              slidesPerView={1}
              spaceBetween={30}
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbnailSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="img-sw-thumb">
                    <Image
                      className="lazyload img-product"
                      src={slide.imgSrc}
                      data-src={slide.imgSrc}
                      alt={slide.altText}
                      width={slide.width}
                      height={slide.height}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="box-right wow fadeInUp" data-wow-delay="0s">
            <Swiper
              className="tf-sw-tes-2"
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: { spaceBetween: 40 },
                576: { spaceBetween: 30 },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Pagination, Thumbs]}
              navigation={{
                prevEl: ".snbp193",
                nextEl: ".snbn193",
              }}
              pagination={{ clickable: true, el: ".spd193" }}
            >
              {testimonialSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg">
                    <div className="icon icon-quote" />
                    <div className="rating">
                      {Array.from({ length: slide.rating }).map((_, i) => (
                        <i key={i} className="icon-start" />
                      ))}
                    </div>
                    <p className="text fw-5">{slide.quote}</p>
                    <div className="divider" />
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <Image
                          className="lazyload img-product"
                          src={slide.imageSrc}
                          data-src={slide.imageSrc}
                          alt="image-product"
                          width={550}
                          height={585}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{slide.author}</div>
                        <a href="#" className="metas link">
                          Purchase item :<span>{slide.purchaseItem}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="nav-sw nav-next-slider nav-next-tes-2 lg snbp193">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-tes-2 lg snbn193">
              <span className="icon icon-arrow-right" />
            </div>
            <div className="sw-dots style-2 sw-pagination-tes-2 spd193" />
          </div>
        </div>
      </div>
    </section>
  );
}
