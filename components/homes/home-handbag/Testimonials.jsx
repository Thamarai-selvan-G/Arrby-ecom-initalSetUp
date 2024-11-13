"use client";

import { brandThumbnails, testimonials12 } from "@/data/testimonials";
import React, { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-spacing-21 bg_grey-2">
      <div className="container">
        <div className="flat-thumbs-testimonial">
          <Swiper
            className="tf-sw-tes-2 flat-wrap-tes-text"
            spaceBetween={15} // Change based on data-space-md
            breakpoints={{
              768: {
                spaceBetween: 30, // Change based on data-space-lg
              },
            }}
            slidesPerView={1} // Change based on data-preview
            loop={true} // Change based on data-loop
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
          >
            {testimonials12.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-ver-text">
                  <div className="heading">{item.heading}</div>
                  <p className="content">
                    {item.content.split("<br />").map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < item.content.split("<br />").length - 1 && (
                          <br className="d-md-block d-none" />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="tf-thumb-tes thumb-tes-brands"
            spaceBetween={0} // Change based on data-space
            slidesPerView={3} // Change based on data-preview
            loop={true} // If looping is needed
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
          >
            {brandThumbnails.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="thumb-tes-item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
