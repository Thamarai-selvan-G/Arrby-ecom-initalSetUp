"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { testimonialData } from "@/data/testimonials";

import { Navigation, Pagination } from "swiper/modules";

const TestimonialSection = () => {
  return (
    <section className="flat-spacing-18 flat-testimonial">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Happy Customers</span>
          <p className="sub-title">Hear what they say about us</p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={15}
            loop={false}
            autoplay={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              520: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp152",
              nextEl: ".snbn152",
            }}
            pagination={{ clickable: true, el: ".spd152" }}
          >
            {testimonialData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`testimonial-item style-column wow fadeInUp`}
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="rating">
                    {Array(slide.rating)
                      .fill()
                      .map((_, index) => (
                        <i key={index} className="icon-start" />
                      ))}
                  </div>
                  <div className="heading">{slide.heading}</div>
                  <div className="text">{slide.text}</div>
                  <div className="author">
                    <div className="name">{slide.authorName}</div>
                    <div className="metas">{slide.authorMeta}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href={`#`}>
                        <Image
                          className="lazyload"
                          data-src={slide.productImgSrc}
                          alt=""
                          src={slide.productImgSrc}
                          width="360"
                          height="360"
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href={`#`}>{slide.productTitle}</a>
                      </div>
                      <div className="price">{slide.productPrice}</div>
                    </div>
                    <a href={`#`}>
                      <i className="icon-arrow1-top-left"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp152">
            <span className="icon icon-arrow-left"></span>
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn152">
            <span className="icon icon-arrow-right"></span>
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd152"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
