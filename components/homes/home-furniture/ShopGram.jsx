"use client";

import { galleryItems } from "@/data/productGallery";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function ShopGram() {
  return (
    <section className="pb-0 flat-spacing-18">
      <div className="container-full px-0">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Shop Gram</span>
          <p className="sub-title">
            Here’s some of our most popular products people are in love with.
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-shop-gallery"
          slidesPerView={5}
          breakpoints={{
            768: { slidesPerView: 5 }, // data-tablet
            576: { slidesPerView: 3 }, // data-mobile
            0: { slidesPerView: 2 }, // data-mobile
          }}
          spaceBetween={0} // data-space-lg
          //   pagination={{clickable:true, clickable: true }} // for pagination
          //   modules={[Pagination]}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="gallery-item hover-img rounded-0 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="img-style">
                  <Image
                    className="lazyload img-hover"
                    data-src={item.src}
                    alt={item.alt}
                    src={item.src}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
