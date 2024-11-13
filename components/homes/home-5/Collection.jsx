"use client";
import Image from "next/image";
import { collectionData2 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Collection() {
  return (
    <section className="flat-spacing-15">
      <div className="container-full">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Featured Collections
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw nav-next-slider nav-next-collection snbp123">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-collection snbn123">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={15}
          loop={false}
          autoplay={false}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 2.4,
              spaceBetween: 30,
            },
            0: {
              slidesPerView: 2.4,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp123",
            nextEl: ".snbn123",
          }}
        >
          {collectionData2.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v3 hover-img">
                <Link
                  href={`/shop-collection-sub`}
                  className="collection-image img-style"
                >
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.imgAlt}
                    src={item.imgSrc}
                    width={600}
                    height={822}
                  />
                  <span className="box-icon">
                    <i className="icon-icon icon-arrow1-top-left" />
                  </span>
                </Link>
                <div className="collection-content">
                  <Link
                    href={`/shop-collection-sub`}
                    className="link title fw-5"
                  >
                    {item.title}
                  </Link>
                  <div className="count">{item.itemCount}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
