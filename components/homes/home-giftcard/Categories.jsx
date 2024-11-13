"use client";

import { collectionSlides } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="position-relative">
          <div className="flat-title flex-row justify-content-between px-0">
            <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
              Popular Categories
            </span>
          </div>
          <div className="sw-pagination-wrapper">
            <Swiper
              className="swiper tf-sw-collection"
              slidesPerView={4}
              spaceBetween={15}
              loop={false}
              autoplay={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd174" }}
            >
              {collectionSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="collection-item-v2 type-small hover-img">
                    <Link
                      href={`/shop-collection-sub`}
                      className="collection-inner"
                    >
                      <div className="collection-image img-style radius-10">
                        <Image
                          className="lazyload"
                          data-src={slide.imgSrc}
                          alt={slide.imgAlt}
                          src={slide.imgSrc}
                          width={slide.imgWidth}
                          height={slide.imgHeight}
                        />
                      </div>
                      <div className="collection-content">
                        <div className="top">
                          <h5 className="heading fw-5">{slide.heading}</h5>
                          <p className="subheading">
                            <span>{slide.itemsCount}</span>
                          </p>
                        </div>
                        <div className="bottom">
                          <button className="tf-btn collection-title hover-icon btn-light">
                            <span>{slide.btnText}</span>
                            <i className={slide.btnIconClass} />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 medium sw-pagination-collection justify-content-center spd174" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
