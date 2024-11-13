"use client";

import { collections3 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <section className="flat-spacing-10 flat-testimonial">
      <div className="container">
        <div className="wrap-carousel style-2">
          <Swiper
            slidesPerView={6}
            breakpoints={{
              768: { slidesPerView: 6 },
              576: { slidesPerView: 4 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp186",
              nextEl: ".snbn186",
            }}
            pagination={{ clickable: true, el: ".spd186" }}
            className="tf-sw-testimonial"
          >
            {collections3.map((collection, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item-circle has-bg hover-img">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.alt}
                      src={collection.imgSrc}
                      width={124}
                      height={125}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-6"
                    >
                      {collection.title}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp186">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn186">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd186" />
        </div>
      </div>
    </section>
  );
}
