"use client";
import ProductCard22 from "@/components/shopCards/ProductCard22";
import { products42 } from "@/data/products";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Current Favorite Styles
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider snbp203">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider snbn203">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-3">
          <Swiper
            className="swiper tf-sw-product-sell-1 wrap-sw-over"
            spaceBetween={30}
            breakpoints={{
              1003: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp203",
              nextEl: ".snbn203",
            }}
          >
            {products42.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <ProductCard22 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-sell-1 nav-next-slider box-icon w_46 round snbp203">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-sell-1 nav-prev-slider box-icon w_46 round snbn203">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
