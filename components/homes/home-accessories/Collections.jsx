"use client";

import { collectionsV4 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="flat-spacing-28">
      <div className="container">
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            1024: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            0: { slidesPerView: 1.4, spaceBetween: 15 },
          }}
          loop={false}
          autoplay={false}
          className="swiper tf-sw-collection"
        >
          {collectionsV4.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 st-lg hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style radius-10 o-hidden"
                  >
                    <Image
                      height={1400}
                      width={1609}
                      className="lazyload"
                      data-src={collection.imgSrc}
                      src={collection.imgSrc}
                      alt={collection.alt}
                    />
                  </Link>
                  <div
                    className="collection-content text-start wow fadeInUp"
                    data-wow-delay={collection.wowDelay}
                  >
                    <h5 className="heading">{collection.title}</h5>
                    <p className="subtext">{collection.description}</p>
                    <Link
                      href={`/shop-collection-sub`}
                      className="tf-btn btn-line collection-other-link fw-6"
                    >
                      <span>Shop Collection</span>
                      <i className="icon icon-arrow1-top-left" />
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
