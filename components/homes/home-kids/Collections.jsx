"use client";
import Image from "next/image";
import { collections8 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Collections() {
  return (
    <section className="flat-spacing-3 flat-banner-cls-kid">
      <div className="container">
        <Swiper
          className="swiper tf-sw-recent"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.3,
            },
          }}
        >
          {collections8.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v2 hover-img">
                <Link
                  href={`/shop-collection-sub`}
                  className="collection-inner"
                >
                  <div className="collection-image radius-10 img-style">
                    <Image
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.alt}
                      src={collection.imgSrc}
                      width={600}
                      height={665}
                    />
                  </div>
                  <div className="collection-content">
                    <div className="top wow fadeInUp" data-wow-delay="0s">
                      <h5 className="heading">{collection.heading}</h5>
                      <p className="subheading">{collection.subheading}</p>
                    </div>
                    <div className="bottom wow fadeInUp" data-wow-delay="0s">
                      <button className="tf-btn btn-line collection-other-link fw-6">
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
