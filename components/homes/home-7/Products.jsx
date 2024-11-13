"use client";
import { ProductCard } from "@/components/shopCards/ProductCard";
import { products1 } from "@/data/products";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Summer Essentials</span>
          <p className="sub-title text_black-2">
            Beat the Heat in Style: It's time to stock up on summer essentials!
          </p>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <Swiper
            className="swiper tf-sw-product-sell wrap-sw-over"
            slidesPerView={4} // Equivalent to data-preview={4}
            spaceBetween={30} // Equivalent to data-space-lg={30}
            breakpoints={{
              1024: {
                slidesPerView: 4, // Equivalent to data-tablet={3}
              },
              640: {
                slidesPerView: 3, // Equivalent to data-tablet={3}
              },
              0: {
                slidesPerView: 2, // Equivalent to data-mobile={2}
                spaceBetween: 15, // Equivalent to data-space-md={15}
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp132",
              nextEl: ".snbn132",
            }}
            pagination={{ clickable: true, el: ".spd132" }}
          >
            {products1.map((product, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp132">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn132">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd132" />
        </div>
      </div>
    </section>
  );
}
