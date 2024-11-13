"use client";
import Image from "next/image";
import { slides6 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function Collections() {
  return (
    <section className="flat-spacing-12">
      <div className="container-full">
        <div className="flat-title mb_1 gap-14">
          <span className="title wow fadeInUp font-gloock" data-wow-delay="0s">
            Find your fit
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            See a few in their favorite frames from Ecomuse
          </p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd181" }}
          >
            {slides6.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item text-center hover-img">
                  <div className="img-style">
                    <Link href={`/shop-default`}>
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.alt}
                        src={slide.imgSrc}
                        width={600}
                        height={646}
                      />
                    </Link>
                  </div>
                  <div className="content banner-glass-content">
                    <div className="title">
                      <Link href={`/shop-default`} className="link font-gloock">
                        {slide.title}
                      </Link>
                    </div>
                    <p>{slide.description}</p>
                    <Link href={`/shop-default`} className="tf-btn btn-line">
                      SHOP COLLECTION
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd181" />
        </div>
      </div>
    </section>
  );
}
