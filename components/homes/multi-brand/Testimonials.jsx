"use client";

import { slides, testimonials3 } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      className="flat-testimonial-v2 py-0 wow fadeInUp"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 type-1 flat-thumbs-testimonial">
          <div className="box-left">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="tf-sw-tes-2"
              breakpoints={{
                992: { spaceBetween: 40 },
                768: { spaceBetween: 30 },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Pagination, Thumbs]}
              navigation={{
                prevEl: ".snbp302",
                nextEl: ".snbn302",
              }}
              pagination={{ clickable: true, el: ".spd302" }}
            >
              {testimonials3.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2">
                    <div className="icon">
                      <Image
                        className="lazyloaded"
                        data-src="/images/item/quote.svg"
                        src="/images/item/quote.svg"
                        alt=""
                        width={37}
                        height={25}
                      />
                    </div>
                    <div className="heading fs-12 mb_18">
                      PEOPLE ARE TALKING
                    </div>
                    <div className="rating">
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                    </div>
                    <p className="text">
                      "The shipping is always fast and the customer service team
                      is friendly and helpful. I highly recommend this site to
                      anyone looking for affordable clothing."
                    </p>
                    <div className="author box-author">
                      <div className="box-img d-md-none rounded-0">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          alt={testimonial.altText}
                          src={testimonial.imgSrc}
                          width={450}
                          height={513}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{testimonial.name}</div>
                        <a
                          href={`#`} // Directly added href here
                          className="metas link"
                        >
                          Purchase item :{" "}
                          <span>{testimonial.purchaseItem}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp302">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn302">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2 spd302" />
          </div>
          <div className="box-right">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="tf-thumb-tes"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="grid-img-group style-ter-1">
                    {slide.images.map((image, idx) => (
                      <div
                        className={`box-img item-${
                          idx + 1
                        } hover-img testimonial-hover-skincare`}
                        key={idx}
                      >
                        <div className="img-style">
                          <Image
                            className="lazyload"
                            data-src={image.src}
                            alt={image.alt}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                          />
                        </div>
                      </div>
                    ))}
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
