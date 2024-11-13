"use client";

import { testimonials10 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="flat-spacing-18 bg_grey-5 flat-testimonial">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-5">Customer Reviews</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            className="tf-sw-testimonial"
            spaceBetween={30}
            slidesPerView={3}
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
            autoplay={{ delay: 5000 }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp242",
              nextEl: ".snbn242",
            }}
            pagination={{ clickable: true, el: ".spd242" }}
          >
            {testimonials10.map(
              ({ id, delay, heading, text, author, product }) => (
                <SwiperSlide key={id}>
                  <div
                    className="testimonial-item style-column bg_white wow fadeInUp"
                    data-wow-delay={delay}
                  >
                    <div className="rating">
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                    </div>
                    <div className="heading">{heading}</div>
                    <div className="text">{text}</div>
                    <div className="author">
                      <div className="name">{author.name}</div>
                      <div className="metas">{author.metas}</div>
                    </div>
                    <div className="product">
                      <div className="image">
                        <a href="#">
                          <Image
                            className="lazyload"
                            data-src={product.imgSrc}
                            alt={product.title}
                            src={product.imgSrc}
                            width={360}
                            height={450}
                          />
                        </a>
                      </div>
                      <div className="content-wrap">
                        <div className="product-title">
                          <a href="#">{product.title}</a>
                        </div>
                        <div className="price">{product.price}</div>
                      </div>
                      <a href="#" className="">
                        <i className="icon-arrow1-top-left" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp242">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn242">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd242" />
        </div>
      </div>
    </section>
  );
}
