"use client";

import { testimonialData2 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="flat-spacing-18 flat-testimonial bg_grey-12">
      <div className="container">
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            loop={false}
            className="swiper tf-sw-testimonial"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp227",
              nextEl: ".snbn227",
            }}
            pagination={{ clickable: true, el: ".spd227" }}
          >
            {testimonialData2.map((item, index) => (
              <SwiperSlide key={index} className="height-auto">
                <div
                  className="testimonial-item h-100 bg_white style-column wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="rating">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <i key={i} className="icon-start text_blue-1" />
                    ))}
                  </div>
                  <div className="heading text_blue-1">{item.heading}</div>
                  <div className="text text_blue-1">{item.text}</div>
                  <div className="author">
                    <div className="name text_blue-1">{item.authorName}</div>
                    <div className="metas text_blue-1">{item.authorMeta}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href={`#`}>
                        {" "}
                        {/* Directly added link */}
                        <Image
                          className="lazyload"
                          data-src={item.imgSrc}
                          alt=""
                          src={item.imgSrc}
                          width={533}
                          height={533}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a
                          className="text_blue-1 link"
                          href={`#`} // Directly added link
                        >
                          {item.productTitle}
                        </a>
                      </div>
                      <div className="price text_blue-1">{item.price}</div>
                    </div>
                    <a href={`#`} className="text_blue-1">
                      {" "}
                      {/* Directly added link */}
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial style-blue lg snbp227">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial style-blue lg snbn227">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd227" />
        </div>
      </div>
    </section>
  );
}
