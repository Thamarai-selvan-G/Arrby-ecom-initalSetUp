"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { galleryData } from "@/data/products";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-7">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Shop Gram</span>
          <p className="sub-title">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            spaceBetween={7} // Equivalent to data-space-lg
            slidesPerView={5} // Equivalent to data-preview
            breakpoints={{
              1024: {
                slidesPerView: 5, // Equivalent to data-tablet
                spaceBetween: 7, // Equivalent to data-space-md
              },
              640: {
                slidesPerView: 3, // Equivalent to data-tablet
                spaceBetween: 7, // Equivalent to data-space-md
              },
              0: {
                slidesPerView: 2, // Equivalent to data-mobile
                spaceBetween: 7, // Equivalent to data-space-md
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd105" }}
          >
            {galleryData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp"
                  data-wow-delay={item.wowDelay}
                >
                  <div className="img-style">
                    <Image
                      className="lazyload img-hover"
                      data-src={item.imgSrc}
                      src={item.imgSrc}
                      alt={item.alt}
                      width={400}
                      height={400}
                    />
                  </div>
                  {item.QuickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(item.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </a>
                  ) : (
                    <Link
                      href={`/product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd105" />
        </div>
      </div>
    </section>
  );
}
