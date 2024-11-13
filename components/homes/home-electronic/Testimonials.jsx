"use client";
import { testimonials7 } from "@/data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="flat-spacing-18 flat-testimonial bg_grey-7">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Happy Clients</span>
          <p className="sub-title">
            See what our satisfied customers have to say about our electronic
            accessories.
          </p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            className="tf-sw-testimonial"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp162",
              nextEl: ".snbn162",
            }}
            pagination={{ clickable: true, el: ".spd162" }}
          >
            {testimonials7.map((item, index) => (
              <SwiperSlide key={index} className="height-auto">
                <div
                  className="testimonial-item h-100 bg_white style-column wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="icon-start text_primary" />
                    ))}
                  </div>
                  <div className="heading">{item.heading}</div>
                  <div className="text">“ {item.text} ”</div>
                  <div className="author">
                    <div className="name">{item.authorName}</div>
                    <div className="metas">{item.authorMeta}</div>
                  </div>
                  <div className="product">
                    <div className="image">
                      <a href={`#`}>
                        <Image
                          className="lazyload"
                          data-src={item.productImage}
                          alt=""
                          src={item.productImage}
                          width={360}
                          height={360}
                        />
                      </a>
                    </div>
                    <div className="content-wrap">
                      <div className="product-title">
                        <a href={`#`}>{item.productTitle}</a>
                      </div>
                      <div className="price">{item.productPrice}</div>
                    </div>
                    <a href={`#`} className="">
                      <i className="icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp162">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn162">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd162" />
        </div>
      </div>
    </section>
  );
}
