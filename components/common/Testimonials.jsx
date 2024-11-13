"use client";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import React from "react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      className="flat-spacing-5 pt_0 flat-testimonial"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Happy Clients</span>
          <p className="sub-title">Hear what they say about us</p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            className="swiper tf-sw-testimonial"
            spaceBetween={30} // Equivalent to data-space-lg
            slidesPerView={3} // Equivalent to data-preview
            breakpoints={{
              0: {
                slidesPerView: 1, // Equivalent to data-mobile
                spaceBetween: 15, // Equivalent to data-space-md
              },
              640: {
                slidesPerView: 2, // Equivalent to data-mobile
                spaceBetween: 15, // Equivalent to data-space-md
              },
              1024: {
                slidesPerView: 3, // Equivalent to data-tablet
                spaceBetween: 30, // Equivalent to data-space-md
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{ clickable: true, el: ".spb3" }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className="testimonial-item style-column wow fadeInUp"
                  data-wow-delay={testimonial.delay}
                >
                  <div className="rating">
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                    <i className="icon-start" />
                  </div>
                  <div className="heading">{testimonial.heading}</div>
                  <div className="text">{testimonial.text}</div>
                  <div className="author">
                    <div className="name">{testimonial.name}</div>
                    <div className="metas">{testimonial.metas}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href={`#`}>
                        <Image
                          className="lazyload"
                          data-src={testimonial.imageSrc}
                          src={testimonial.imageSrc}
                          width={70}
                          height={98}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href={`#`}>{testimonial.productTitle}</a>
                      </div>
                      <div className="price">{testimonial.price}</div>
                    </div>
                    <a href={`#`} className="">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp3">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn3">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spb3" />
        </div>
      </div>
    </section>
  );
}
