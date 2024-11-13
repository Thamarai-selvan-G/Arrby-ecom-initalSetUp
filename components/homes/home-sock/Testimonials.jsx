"use client";
import { testimonials14 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="bg-yellow-8 flat-spacing-18">
      <div className="flat-title">
        <span className="title wow fadeInUp" data-wow-delay="0s">
          See what our other sock lovers think
        </span>
      </div>
      <div className="container">
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            spaceBetween={30} // for larger screens
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp277",
              nextEl: ".snbn277",
            }}
            pagination={{ clickable: true, el: ".spd277" }}
          >
            {testimonials14.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item style-row">
                  <div className="image">
                    <Image
                      className="lazyload"
                      data-src={testimonial.imgSrc}
                      alt={testimonial.imgAlt}
                      src={testimonial.imgSrc}
                      width={testimonial.imgWidth}
                      height={testimonial.imgHeight}
                    />
                  </div>
                  <div className="content">
                    <div className="rating color-black">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="icon-start" />
                      ))}
                    </div>
                    <div className="text">{testimonial.text}</div>
                    <div className="author pb_8 line-black">
                      <div className="name">{testimonial.author}</div>
                      <div className="metas">{testimonial.meta}</div>
                    </div>
                    <div className="product">
                      <div className="img-thumb radius-5 o-hidden">
                        <Image
                          className="lazyload"
                          data-src={testimonial.productImgSrc}
                          alt={testimonial.productImgAlt}
                          src={testimonial.productImgSrc}
                          width={testimonial.productImgWidth}
                          height={testimonial.productImgHeight}
                        />
                      </div>
                      <div className="content-wrap">
                        <div className="product-title">
                          <a href={testimonial.productLink}>
                            {testimonial.productTitle}
                          </a>
                        </div>
                        <div className="price">{testimonial.productPrice}</div>
                      </div>
                      <a href={testimonial.productLink}>
                        <i className="icon-arrow1-top-left" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp277">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn277">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd277" />
        </div>
      </div>
    </section>
  );
}
