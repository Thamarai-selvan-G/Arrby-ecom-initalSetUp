"use client";

import { collections9 } from "@/data/categories";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BannerCollections() {
  return (
    <section className="flat-spacing-20 pb_0">
      <div className="container">
        <Swiper
          className="swiper tf-sw-collection"
          slidesPerView={3} // Equivalent to data-preview
          breakpoints={{
            1000: {
              slidesPerView: 3, // Equivalent to data-tablet
            },
            768: {
              slidesPerView: 2, // Equivalent to data-tablet
            },
            640: {
              slidesPerView: 2, // Equivalent to data-mobile
            },
            0: {
              slidesPerView: 1.2, // Equivalent to data-mobile
            },
          }}
          spaceBetween={30} // Equivalent to data-space-lg and data-space-md
          loop={false} // Equivalent to data-loop
          autoplay={false} // Equivalent to data-auto-play
        >
          {collections9.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="collection-item-v6 hover-img radius-10 o-hidden">
                <a className="collection-inner">
                  <div className="collection-image img-style">
                    <Image
                      className="lazyload"
                      data-src={item.imageSrc}
                      alt={item.altText}
                      src={item.imageSrc}
                      width={690}
                      height={840}
                    />
                  </div>
                  <div className="collection-content text-center">
                    <h5
                      className="heading text-white fw-6 wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      {item.title}
                    </h5>
                    <p
                      className="subheading text-white wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
