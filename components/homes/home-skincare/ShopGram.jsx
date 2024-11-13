"use client";

import { galleryItems2 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <>
      <div className="container">
        <div className="line" />
      </div>
      {/* Shop Gram */}
      <section className="flat-spacing-1">
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
                768: { slidesPerView: 5, spaceBetween: 7 },
                480: { slidesPerView: 3, spaceBetween: 7 },
                0: { slidesPerView: 2, spaceBetween: 7 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd267" }}
            >
              {galleryItems2.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="gallery-item hover-img wow fadeInUp"
                    data-wow-delay={slide.delay}
                  >
                    <div className="img-style">
                      <Image
                        className="lazyload img-hover"
                        data-src={slide.src}
                        alt="image-gallery"
                        src={slide.src}
                        width={400}
                        height={400}
                      />
                    </div>
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(slide.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="sw-dots sw-pagination-gallery justify-content-center spd267" />
          </div>
        </div>
      </section>
    </>
  );
}
