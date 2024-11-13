"use client";

import { testimonials6, thumbnailImages } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-testimonial-v2 flat-spacing-12">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
          <div className="box-left">
            <Swiper
              slidesPerView={1} // data-preview
              spaceBetween={30} // data-space-md
              breakpoints={{
                768: {
                  spaceBetween: 40, // data-space-lg
                },
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              navigation={{
                prevEl: ".snbp171",
                nextEl: ".snbn171",
              }}
            >
              {testimonials6.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2 lg-3">
                    <div className="icon">
                      <Image
                        className="lazyloaded"
                        src="/images/item/quote.svg"
                        alt="quote icon"
                        width={37}
                        height={25}
                      />
                    </div>
                    <div className="heading fs-12 mb_18">
                      OUR CUSTOMERS' RAVE REVIEWS
                    </div>
                    <div className="rating">
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                      <i className="icon-start" />
                    </div>
                    <p className="text">{item.review}</p>
                    <div className="author box-author">
                      <div className="box-img d-md-none rounded-0">
                        <Image
                          className="lazyload img-product"
                          src={item.imgSrc}
                          alt="image-product"
                          width={750}
                          height={703}
                        />
                      </div>
                      <div className="content">
                        <div className="name">{item.name}</div>
                        <a href={`#`} className="metas link">
                          Purchase item:<span> {item.purchaseItem}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp171">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn171">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2" />
          </div>
          <div className="box-right">
            <Swiper
              slidesPerView={1} // data-preview
              spaceBetween={30} // data-space
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbnailImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="img-sw-thumb">
                    <Image
                      className="lazyload img-product"
                      src={image.src}
                      alt={image.alt}
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
