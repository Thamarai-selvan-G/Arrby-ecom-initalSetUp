"use client";

import { collectionData4 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-6 pt_0">
      <div className="container-full">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            0: {
              slidesPerView: 1.3,
              spaceBetween: 15,
            },
          }}
          loop={true}
          className="tf-sw-recent"
        >
          {collectionData4.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style radius-10 o-hidden"
                  >
                    <Image
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.imgAlt}
                      src={item.imgSrc}
                      width={800}
                      height={622}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <p className="subheading text-white">{item.subheading}</p>
                    <h5 className="heading text-white">{item.title}</h5>
                    <p className="subtext text-white">{item.description}</p>
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
