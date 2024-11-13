"use client";

import { recentCollectionData } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section>
      <div className="container-full">
        <Swiper
          className="tf-sw-recent"
          slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1.3,
            },
          }}
          spaceBetween={15}
          loop={true}
          autoplay={false}
        >
          {recentCollectionData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.imgAlt}
                      src={item.imgSrc}
                      width={item.imgWidth}
                      height={item.imgHeight}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <p className="subheading">{item.subheading}</p>
                    <h5 className="heading">{item.heading}</h5>
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn style-3 fw-6 btn-light-icon radius-3 animate-hover-btn"
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
