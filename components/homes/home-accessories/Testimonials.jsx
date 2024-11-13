"use client";

import { testimonials17, thumbSlides } from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial flat-thumbs-testimonial-v2 bg-gradient-3">
          <div className="box-left">
            <Swiper
              className="swiper tf-sw-tes-2"
              slidesPerView={1} // Matches data-preview={1}
              spaceBetween={30} // Matches spaceBetween={30}
              breakpoints={{
                768: {
                  // For medium devices (matches data-space-md={30})
                  spaceBetween: 30,
                },
                1024: {
                  // For large devices (matches data-space-lg={40})
                  spaceBetween: 40,
                },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation, Pagination]}
              navigation={{
                prevEl: ".snbpt12",
                nextEl: ".snbnt12",
              }}
              pagination={{
                el: ".spt12",
              }}
            >
              {testimonials17.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={46}
                        height={31}
                        viewBox="0 0 46 31"
                        fill="none"
                      >
                        <path
                          d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                          stroke="#B5B5B5"
                        />
                      </svg>
                    </div>
                    <div className="heading fs-14 mb_18 text-white">
                      {testimonial.title}
                    </div>
                    <div className="rating">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <i className="icon-start" key={i} />
                        )
                      )}
                    </div>
                    <p className="text text-white">{testimonial.text}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <Image
                          width={450}
                          height={475}
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          src={testimonial.imgSrc}
                          alt={testimonial.imgAlt}
                        />
                      </div>
                      <div className="content">
                        <div className="name text-white fw-6">
                          {testimonial.author}
                        </div>
                        <a href="#" className="metas link text-white">
                          Purchase item :{" "}
                          <span className="fw-6">
                            {testimonial.productTitle}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider line-white nav-next-tes-2 snbpt12">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider line-white nav-prev-tes-2 snbnt12">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 dots-white sw-pagination-tes-2 spt12" />
          </div>
          <div className="box-right">
            <Swiper
              slidesPerView={1} // Matches data-preview={1}
              spaceBetween={30} // Matches data-space={30}
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div className="box-img item-2 hover-img radius-10 o-hidden">
                    <div className="img-style">
                      <Image
                        width={450}
                        height={475}
                        className="lazyload"
                        data-src={slide.imgSrc}
                        src={slide.imgSrc}
                        alt={slide.imgAlt}
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
