"use client";

import { galleryItems } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Link from "next/link";
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
            slidesPerView={5}
            spaceBetween={7}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 7,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 7,
              },
            }}
            className="tf-sw-shop-gallery"
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd128" }}
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="img-style">
                    <Image
                      className="lazyload img-hover"
                      data-src={item.imgSrc}
                      alt={item.imgAlt}
                      src={item.imgSrc}
                      width={item.imgWidth}
                      height={item.imgHeight}
                    />
                  </div>
                  {item.detail ? (
                    <Link
                      href={`/product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </Link>
                  ) : (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(item.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd128" />
        </div>
      </div>
    </section>
  );
}
