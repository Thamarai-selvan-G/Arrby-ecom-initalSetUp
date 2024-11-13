"use client";
import { slides2 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="flat-spacing-24 flat-testimonial flat-testimonial-bg-1">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title text-white">Our happy customer</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp210",
              nextEl: ".snbn210",
            }}
            pagination={{ clickable: true, el: ".spd210" }}
            className="swiper tf-sw-testimonial"
          >
            {slides2.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testimonial-item style-column wow fadeInUp bg_white rounded-0"
                  data-wow-delay={slide.wowDelay}
                >
                  <div className="rating">
                    {[...Array(slide.rating)].map((_, i) => (
                      <i key={i} className="icon-start" />
                    ))}
                  </div>
                  <div className="heading">{slide.heading}</div>
                  <div className="text">{slide.text}</div>
                  <div className="author">
                    <div className="name">{slide.author.name}</div>
                    <div className="metas">{slide.author.metas}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src={slide.product.imgSrc}
                          alt=""
                          src={slide.product.imgSrc}
                          width={slide.product.imgWidth}
                          height={slide.product.imgHeight}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href="#">{slide.product.title}</a>
                      </div>
                      <div className="price">{slide.product.price}</div>
                    </div>
                    <a href="#">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp210">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn210">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd210" />
        </div>
      </div>
    </section>
  );
}
