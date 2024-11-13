"use client";
import { testimonial3, thumbnailSlides2 } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-5 pt_0">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial flat-thumbs-testimonial-v2 bg-gradient-2">
          <div className="box-left">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              breakpoints={{
                1024: {
                  // Large screens
                  spaceBetween: 40,
                },
                768: {
                  // Medium screens
                  spaceBetween: 30,
                },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="swiper tf-sw-tes-2"
              modules={[Navigation, Thumbs]}
              navigation={{
                prevEl: ".snbp286",
                nextEl: ".snbn286",
              }}
            >
              {testimonial3.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={46}
                        height={31}
                        viewBox="0 0 46 31"
                        fill="none"
                      >
                        <path d={testimonial.iconPath} stroke="#B5B5B5" />
                      </svg>
                    </div>
                    <div className="heading fs-14 mb_18 text-white">
                      {testimonial.heading}
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="text_white icon-start" />
                      ))}
                    </div>
                    <p className="text text-white">{testimonial.text}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          alt={testimonial.imgAlt}
                          src={testimonial.imgSrc}
                          width={testimonial.imgWidth}
                          height={testimonial.imgHeight}
                        />
                      </div>
                      <div className="content">
                        <div className="name text-white fw-6">
                          {testimonial.authorName}
                        </div>
                        <a href="#" className="metas link text-white">
                          Purchase item :{" "}
                          <span className="fw-6">
                            {testimonial.productName}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider line-white nav-next-tes-2 snbp286">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider line-white nav-prev-tes-2 snbn286">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 dots-white sw-pagination-tes-2" />
          </div>
          <div className="box-right">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="swiper tf-thumb-tes"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbnailSlides2.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="box-img item-2 hover-img radius-10 o-hidden">
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.imgAlt}
                        src={slide.imgSrc}
                        width={slide.imgWidth}
                        height={slide.imgHeight}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
