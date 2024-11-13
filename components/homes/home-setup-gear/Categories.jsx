"use client";

import { collections6 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-11 pb-0">
      <div className="container">
        <div className="position-relative">
          <div className="flat-title flex-row justify-content-center px-0">
            <span className="title wow fadeInUp" data-wow-delay="0s">
              Shop by category.
            </span>
          </div>
          <div className="sw-pagination-wrapper">
            <Swiper
              className="swiper tf-sw-collection"
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                520: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={false}
              autoplay={false}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd244" }}
            >
              {collections6.map((collection, index) => (
                <SwiperSlide key={index}>
                  <div className="collection-item hover-img style-2">
                    <div className="collection-inner">
                      <Link
                        href={`/shop-collection-sub`} // Link directly added in JSX
                        className="collection-image img-style radius-10"
                      >
                        <Image
                          className="lazyload"
                          data-src={collection.imgSrc}
                          alt={collection.imgAlt}
                          src={collection.imgSrc}
                          width={600}
                          height={721}
                        />
                      </Link>
                      <div className="collection-content justify-content-end align-items-center">
                        <div className="bottom">
                          <Link
                            href={`/shop-collection-sub`} // Link directly added in JSX
                            className="tf-btn collection-title hover-icon btn-light radius-3"
                          >
                            <span>{collection.title}</span>
                            <i className="icon icon-arrow1-top-left" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 small sw-pagination-collection justify-content-center spd244" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
