"use client";

import { recentCollections3 } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Collections2() {
  return (
    <section>
      <div className="container">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            576: { slidesPerView: 3 },
            0: { slidesPerView: 1.3 },
          }}
          modules={[Autoplay]}
          spaceBetween={15}
          autoplay={{ delay: 3000 }}
          className="tf-sw-recent"
        >
          {recentCollections3.map((collection, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 lg hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="radius-20 collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={collection.imgSrc}
                      alt={collection.alt}
                      src={collection.imgSrc}
                      width={600}
                      height={771}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <p className="subheading text_white">
                      {collection.subheading}
                    </p>
                    <h5 className="heading text_white fw-6">
                      {collection.heading}
                    </h5>
                    <Link
                      href={`/shop-collection-sub`}
                      className="rounded-full tf-btn style-3 fw-6 btn-light-icon animate-hover-btn"
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
