"use client";

import { testimonials5 } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="">
      <div className="container-full">
        <div className="bg_blue-4 radius-100 radius-10 rounded-top-0 flat-spacing-21">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <span className="title fw-6">What our customers are saying</span>
          </div>
          <div className="container">
            <div className="wrap-carousel">
              <Swiper
                className="swiper tf-sw-testimonial mb_60"
                slidesPerView={4}
                spaceBetween={15}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
                modules={[Pagination]}
                pagination={{ clickable: true, el: ".spd179" }}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="testimonial-item style-box wow fadeInUp"
                      data-wow-delay={testimonial.delay}
                    >
                      <div className="author">
                        <div className="name">{testimonial.name}</div>
                        <div className="metas">
                          <i className="icon-check" /> Verify customer
                        </div>
                      </div>
                      <div className="rating color-black">
                        <i className="icon-start" />
                        <i className="icon-start" />
                        <i className="icon-start" />
                        <i className="icon-start" />
                        <i className="icon-start" />
                      </div>
                      <div className="heading">{testimonial.heading}</div>
                      <div className="text">{testimonial.text}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="sw-dots d-flex style-2 sw-pagination-testimonial justify-content-center spd179" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
