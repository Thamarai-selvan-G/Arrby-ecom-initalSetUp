"use client";
import Image from "next/image";
import { testimonials8 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="flat-spacing-18 flat-testimonial bg_grey-7">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Happy Clients</span>
          <p className="sub-title">
            See what our satisfied customers have to say about our electronic
            accessories.
          </p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            className="swiper tf-sw-testimonial"
            slidesPerView={1}
            spaceBetween={15}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp250",
              nextEl: ".snbn250",
            }}
            pagination={{ clickable: true, el: ".spd250" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials8.map((item, index) => (
              <SwiperSlide key={index} className="height-auto">
                <div
                  className="testimonial-item h-100 bg_white style-column wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="rating">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <i key={idx} className="icon-start" />
                    ))}
                  </div>
                  <div className="heading">{item.heading}</div>
                  <div className="text">{item.text}</div>
                  <div className="author">
                    <div className="name">{item.author.name}</div>
                    <div className="metas">{item.author.meta}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href={`#`}>
                        <Image
                          className="lazyload"
                          data-src={item.product.imgSrc}
                          alt={item.product.imgAlt}
                          src={item.product.imgSrc}
                          width={600}
                          height={721}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href={`#`}>{item.product.title}</a>
                      </div>
                      <div className="price">{item.product.price}</div>
                    </div>
                    <a href={`#`}>
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp250">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn250">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd250" />
        </div>
      </div>
    </section>
  );
}
