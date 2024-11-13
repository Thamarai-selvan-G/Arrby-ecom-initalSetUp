"use client";

import { collections4 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Collections2() {
  return (
    <section className="bg_cream-2 flat-spacing-12">
      <div className="container">
        <div className="flat-title flat-title-v5">
          <span className="title wow fadeInUp text-center" data-wow-delay="0s">
            Explore each unique collection
          </span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={3} // data-preview
            breakpoints={{
              768: {
                slidesPerView: 3, // data-tablet
              },
              480: {
                slidesPerView: 2, // data-mobile
              },
              0: {
                slidesPerView: 1, // data-mobile
              },
            }}
            spaceBetween={30} // data-space
            loop={false} // data-loop
            autoplay={false} // data-auto-play
            className="swiper-wrapper"
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd167" }}
          >
            {collections4.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item hover-img">
                  <div className="img-style">
                    <Link href={`/shop-default`}>
                      <Image
                        className="lazyload"
                        src={item.imgSrc}
                        alt="banner-collection"
                        width={920}
                        height={1112}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title">
                      <Link href={`/shop-default`} className="link fw-5">
                        {item.title}
                      </Link>
                    </div>
                    <Link
                      href={`/shop-default`}
                      className="tf-btn btn-line fw-6"
                    >
                      Shop Collection
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd167" />
        </div>
      </div>
    </section>
  );
}
