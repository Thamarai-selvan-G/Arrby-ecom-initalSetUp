"use client";

import { slides3 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Collections() {
  return (
    <section className="flat-spacing-13">
      <div className="container-full">
        <Swiper
          className="swiper tf-sw-recent"
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            0: { slidesPerView: 1.3 },
          }}
          spaceBetween={30}
          //   pagination={{clickable:true, clickable: true }}
        >
          {slides3.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v2 hover-img">
                <Link
                  href={`/shop-collection-sub`}
                  className="collection-inner"
                >
                  <div className="collection-image img-style">
                    <Image
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.imgAlt}
                      src={slide.imgSrc}
                      width={600}
                      height={666}
                    />
                  </div>
                  <div className="collection-content">
                    <div className="top wow fadeInUp" data-wow-delay="0s">
                      <h5 className="heading text_white">{slide.heading}</h5>
                      <p className="subheading text_white">
                        {slide.subheading}
                      </p>
                    </div>
                    <div className="bottom wow fadeInUp" data-wow-delay="0s">
                      <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                        <span>Shop now</span>
                        <i className="icon icon-arrow1-top-left" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
