"use client";

import { useContextElement } from "@/context/Context";
import { galleryItems3 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
            className="tf-sw-shop-gallery"
            spaceBetween={7}
            slidesPerView={5}
            breakpoints={{
              1000: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              576: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination]}
            pagination={{
              el: ".spdsg1",
            }}
          >
            {galleryItems3.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp"
                  data-wow-delay={item.wowDelay}
                >
                  <div className="img-style">
                    <Image
                      className="lazyload img-hover"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={400}
                      height={400}
                    />
                  </div>
                  {item.quickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(item.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">
                        {item.quickAdd ? "Quick Add" : "View product"}
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">"View product</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 justify-content-center sw-pagination-gallery spdsg1" />
        </div>
      </div>
    </section>
  );
}
