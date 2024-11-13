"use client";
import { imageGroups2, testimonials9 } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section
      className="flat-testimonial-v2 bg_grey-5 wow fadeInUp"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 type-1 flat-thumbs-testimonial">
          <div className="box-left">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="swiper tf-sw-tes-2"
              breakpoints={{
                1200: {
                  spaceBetween: 40,
                },
                768: {
                  spaceBetween: 30,
                },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              navigation={{
                prevEl: ".snbp235",
                nextEl: ".snbn235",
              }}
            >
              {testimonials9.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2">
                    <div className="icon">
                      <Image
                        className="lazyloaded"
                        data-src={testimonial.quoteSrc}
                        src={testimonial.quoteSrc}
                        width={37}
                        height={25}
                        alt="quote icon"
                      />
                    </div>
                    <div className="heading fs-12 mb_18">
                      {testimonial.heading}
                    </div>
                    <div className="rating">
                      <i className="icon-start text_primary" />
                      <i className="icon-start text_primary" />
                      <i className="icon-start text_primary" />
                      <i className="icon-start text_primary" />
                      <i className="icon-start text_primary" />
                    </div>
                    <p className="text">{testimonial.text}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none rounded-0">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          src={testimonial.imgSrc}
                          alt="author image"
                          width={450}
                          height={513}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{testimonial.author}</div>
                        <a href={testimonial.link} className="metas link">
                          Purchase item :<span>{testimonial.product}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp235">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn235">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2" />
          </div>
          <div className="box-right">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="swiper tf-thumb-tes"
              breakpoints={{
                1200: {
                  spaceBetween: 40,
                },
                768: {
                  spaceBetween: 30,
                },
              }}
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {imageGroups2.map((images, index) => (
                <SwiperSlide key={index}>
                  <div className="grid-img-group style-ter-1">
                    {images.map((image, i) => (
                      <div
                        className={`box-img item-${
                          i + 1
                        } hover-img testimonial-hover-skincare`}
                        key={i}
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
