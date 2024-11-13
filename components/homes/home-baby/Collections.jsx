"use client";

import { collections11 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView: 1.3,
      },
    },
  };
  return (
    <section className="flat-spacing-13">
      <div className="container">
        <Swiper {...swiperOptions}>
          {collections11.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style radius-10"
                  >
                    <Image
                      className="lazyload"
                      data-src={testimonial.imgSrc}
                      alt="collection-img"
                      src={testimonial.imgSrc}
                      width={600}
                      height={323}
                    />
                  </Link>
                  <div
                    className="collection-content text-start wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading fw-6">
                      {testimonial.title.split("<br />").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h5>
                    <p className="subtext">{testimonial.subtext}</p>
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn style-3 btn-primary animate-hover-btn"
                    >
                      <span>Shop now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
