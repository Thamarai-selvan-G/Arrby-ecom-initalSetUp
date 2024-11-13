"use client";
import Link from "next/link";
import { collectionData6 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="flat-spacing-15 pt_0 flat-control-sw">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span
            className="title wow fadeInUp fw-6 text_blue-1"
            data-wow-delay="0s"
          >
            Outdoor gear for those geared <br />
            to the outdoors.
          </span>
          <div className="box-sw-navigation">
            <div className="sw-dots style-2 medium sw-pagination-collection justify-content-center" />
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={15}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
          loop={false}
          autoplay={false}
          className="swiper tf-sw-collection sw-wrapper-right"
        >
          {collectionData6.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item large hover-img">
                <div className="collection-inner">
                  <Link
                    href={`/shop-collection-list`} // Directly added link
                    className="collection-image img-style"
                  >
                    <Image
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.altText}
                      src={item.imgSrc}
                      width={360}
                      height={503}
                    />
                  </Link>
                  <div className="collection-content">
                    <Link
                      href={`/shop-collection-list`} // Directly added link
                      className="tf-btn collection-title hover-icon fw-6 text_blue-1 px-16"
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
      </div>
    </section>
  );
}
