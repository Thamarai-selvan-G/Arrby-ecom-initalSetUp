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
    <section>
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <span className="title">Shop Gram</span>
        <p className="sub-title">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>
      </div>

      <Swiper
        slidesPerView={5} // Equivalent to data-preview
        breakpoints={{
          1024: {
            slidesPerView: 5, // Equivalent to data-tablet
          },
          640: {
            slidesPerView: 3, // Equivalent to data-tablet
          },
          0: {
            slidesPerView: 2, // Equivalent to data-mobile
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".spd121" }}
        className="swiper tf-sw-shop-gallery"
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="gallery-item hover-img rounded-0 wow fadeInUp"
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
                <Link href={`/product-detail/${item.id}`} className="box-icon">
                  <span className="icon icon-bag" />
                  <span className="tooltip">{item.tooltip}</span>
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="sw-dots sw-pagination-gallery justify-content-center spd121" />
    </section>
  );
}
