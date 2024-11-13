"use client";
import { imageGroups, testimonials4 } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 type-1 flat-thumbs-testimonial">
          <div className="box-left wow fadeInUp" data-wow-delay="0s">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[Navigation, Pagination, Thumbs]}
              navigation={{
                prevEl: ".snbp268",
                nextEl: ".snbn268",
              }}
              pagination={{ clickable: true, el: ".spd268" }}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {testimonials4.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2">
                    <div className="icon">
                      <Image
                        className="lazyload"
                        data-src={testimonial.iconSrc}
                        alt="quote icon"
                        src={testimonial.iconSrc}
                        width={37}
                        height={25}
                      />
                    </div>
                    <div className="heading fs-12 mb_18">
                      {testimonial.heading}
                    </div>
                    <div className="rating">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <i key={i} className="icon-start" />
                      ))}
                    </div>
                    <p className="text">{testimonial.text}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none rounded-0">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.authorImgSrc}
                          alt="author"
                          src={testimonial.authorImgSrc}
                          width={450}
                          height={513}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{testimonial.authorName}</div>
                        <a
                          href={testimonial.purchaseLink}
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
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp268">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn268">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2 spd268" />
          </div>
          <div className="box-right wow fadeInUp" data-wow-delay="0s">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true, clickable: true }}
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {imageGroups.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid-img-group style-ter-1">
                    {group.images.map((image, i) => (
                      <div
                        key={i}
                        className={`box-img item-${
                          i + 1
                        } hover-img testimonial-hover-skincare`}
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
