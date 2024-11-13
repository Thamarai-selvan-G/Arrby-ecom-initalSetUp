"use client";

import { imagesData, testimonialsData } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-testimonial-v2 bg_grey-2">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
          <div className="box-left wow fadeInUp" data-wow-delay="0s">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className={"tf-sw-tes-2"}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation, Pagination]}
              navigation={{
                prevEl: ".snbp122",
                nextEl: ".snbn122",
              }}
              pagination={{ clickable: true, el: ".spd122" }}
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2">
                    <div className="icon">
                      <Image
                        className="lazyloaded"
                        data-src="/images/item/quote.svg"
                        alt=""
                        src="/images/item/quote.svg"
                        width={37}
                        height={25}
                      />
                    </div>
                    <div className="rating">
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                    </div>
                    <p className="text">{testimonial.quote}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none rounded-0">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          alt={testimonial.alt}
                          src={testimonial.imgSrc}
                          width={750}
                          height={851}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{testimonial.name}</div>
                        <a href={`#`} className="metas link">
                          Purchase item : <span>{testimonial.item}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp122">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn122">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2 spd122" />
          </div>
          <div className="box-right wow fadeInUp" data-wow-delay="0s">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="tf-thumb-tes"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {imagesData.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="img-sw-thumb">
                    <Image
                      className="lazyload img-product"
                      data-src={image.src}
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                    />
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
