"use client";

import { recentCollections5 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function BannerCollections() {
  return (
    <section className="flat-spacing-10 pt_0">
      <div className="container-full">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.3,
            },
          }}
          loop={true}
          className="swiper tf-sw-recent"
        >
          {recentCollections5.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="collection-item-v4 style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style rounded-0"
                  >
                    <Image
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={1000}
                      height={806}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp banner-glass-content"
                    data-wow-delay={item.wowDelay}
                  >
                    <p className="subheading text-white letter-2">
                      {item.subheading}
                    </p>
                    <h5 className="heading text-white">{item.heading}</h5>
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn style-3 fw-6 text-14 text-uppercase btn-light-icon rounded-0 letter-2 animate-hover-btn"
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
