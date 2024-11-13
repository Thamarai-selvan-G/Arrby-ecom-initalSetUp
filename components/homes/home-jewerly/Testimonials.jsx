"use client";

import { testimonials15 } from "@/data/testimonials";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing-23 bg_brown-4">
      <div className="container-full">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-8 font-poppins fs-28">
            LOVE NOTES AN ECOMUS
          </span>
          <p className="sub-title font-poppins fs-14 text_black-2">
            Where wishlists come true. Discover the pieces of their (or your)
            dreams.
          </p>
        </div>
        <div className="container">
          <div className="wrap-carousel">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd198" }}
            >
              {testimonials15.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="height-auto">
                  <div
                    className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
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
            <div className="sw-dots medium d-flex style-2 sw-pagination-testimonial justify-content-center spd198" />
          </div>
        </div>
      </div>
    </section>
  );
}
