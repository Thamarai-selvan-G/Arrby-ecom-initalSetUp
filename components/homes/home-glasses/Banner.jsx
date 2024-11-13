"use client";
import Image from "next/image";
import { slides5 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="flat-spacing-6 pt_0 pb_0">
      <div className="">
        <Swiper
          spaceBetween={0}
          pagination={{ clickable: true, clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {slides5.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v4 style-2 hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style radius-0 o-hidden"
                  >
                    <Image
                      className="lazyload"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={1000}
                      height={977}
                    />
                  </Link>
                  <div
                    className="collection-content wow fadeInUp banner-glass-content"
                    data-wow-delay="0s"
                  >
                    <h5 className="heading font-gloock fs-52 text-white">
                      {slide.title}
                    </h5>
                    <Link
                      href={`/shop-default`}
                      className="tf-btn btn-outline-light radius-60"
                    >
                      <span>SHOP NOW</span>
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
