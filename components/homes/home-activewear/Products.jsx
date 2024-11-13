"use client";

import { ProductCard } from "@/components/shopCards/ProductCard";
import { products27 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="flat-title mb_1 flex-row justify-content-between px-0">
          <span
            className="title wow fadeInUp font-young-serif"
            data-wow-delay="0s"
          >
            New releases
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-brand nav-next-slider snbn142">
              <span className="icon icon-arrow1-left" />
            </div>
            <div className="nav-sw round nav-prev-brand nav-prev-slider snbp142">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-3">
          <Swiper
            loop={false}
            autoplay={false}
            breakpoints={{
              0: { slidesPerView: 2 },
              520: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp142",
              nextEl: ".snbn142",
            }}
          >
            {products27.map((product, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-brand box-icon w_46 round snbn142">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-brand box-icon w_46 round snbp142">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
