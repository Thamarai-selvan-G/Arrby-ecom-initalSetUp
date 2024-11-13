"use client";
import Image from "next/image";
import { testimonials2, thumbnails } from "@/data/testimonials";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-12 line">
      <div className="container">
        <div className="wrap-carousel wrapper-thumbs-testimonial flat-thumbs-testimonial">
          <div className="box-left wow fadeInUp" data-wow-delay="0s">
            <Swiper
              slidesPerView={1} // Adjust based on your requirements (data-preview attribute)
              spaceBetween={30} // Adjust based on your requirements (data-space attribute)
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbnails.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <div className="img-sw-thumb">
                    <Image
                      className="lazyload img-product"
                      data-src={thumb.imgSrc}
                      alt={thumb.alt}
                      src={thumb.imgSrc}
                      width="550"
                      height="585"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="box-right wow fadeInUp" data-wow-delay="0s">
            <Swiper
              slidesPerView={1} // Adjust based on your requirements (data-preview attribute)
              spaceBetween={30} // Adjust based on your requirements (data-space-lg attribute)
              breakpoints={{
                768: { spaceBetween: 30 }, // Adjust based on your requirements (data-space-md attribute)
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation, Pagination]}
              navigation={{
                prevEl: ".snbp118",
                nextEl: ".snbn118",
              }}
              pagination={{ clickable: true, el: ".spd118" }}
            >
              {testimonials2.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg">
                    <div className="icon icon-quote" />
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="icon-start" />
                      ))}
                    </div>
                    <p className="text fw-5">{testimonial.quote}</p>
                    <div className="divider" />
                    <div className="author box-author">
                      <div className="box-img d-md-none">
                        <Image
                          className="lazyload img-product"
                          data-src={testimonial.imgSrc}
                          alt={testimonial.alt}
                          src={testimonial.imgSrc}
                          width="550"
                          height="585"
                        />
                      </div>
                      <div className="content">
                        <div className="name">{testimonial.name}</div>
                        <a href={`#`} className="metas link">
                          Purchase item: <span>{testimonial.purchaseItem}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="nav-sw nav-next-slider nav-next-tes-2 lg snbp118">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-tes-2 lg snbn118">
              <span className="icon icon-arrow-right" />
            </div>
            <div className="sw-dots style-2 sw-pagination-tes-2 spd118" />
          </div>
        </div>
      </div>
    </section>
  );
}
