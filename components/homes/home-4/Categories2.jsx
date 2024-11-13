"use client";
import Image from "next/image";
import { collectionData } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Categories2() {
  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Shop by categories</span>
        </div>
        <div className="hover-sw-nav">
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            breakpoints={{
              992: { slidesPerView: 4, spaceBetween: 30 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            loop={false}
            autoplay={false}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp119",
              nextEl: ".snbn119",
            }}
            pagination={{ clickable: true, el: ".spd119" }}
          >
            {collectionData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-item style-2 hover-img">
                  <div className="collection-inner">
                    <Link
                      href={`/shop-collection-sub`} // Directly included link
                      className="collection-image img-style rounded-0"
                    >
                      <Image
                        className="lazyload"
                        data-src={item.imgSrc}
                        alt={item.imgAlt}
                        src={item.imgSrc}
                        width={600}
                        height={721}
                      />
                    </Link>
                    <div className="collection-content">
                      <Link
                        href={`/shop-collection-sub`} // Directly included link
                        className="tf-btn collection-title hover-icon fs-15"
                      >
                        <span>{item.title}</span>
                        <i className="icon icon-arrow1-top-left" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-collection box-icon w_46 round snbp119">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-collection box-icon w_46 round snbn119">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd119" />
        </div>
      </div>
    </section>
  );
}
