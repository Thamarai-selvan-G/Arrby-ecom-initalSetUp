"use client";

import ProductCard19 from "@/components/shopCards/ProductCard19";
import { products38 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Products() {
  return (
    <section className="flat-spacing-18 bg_brown-3">
      <div className="container">
        <div
          className="flat-title wow fadeInUp title-upper"
          data-wow-delay="0s"
        >
          <span className="title fw-8 font-poppins text-white">
            BEST SELLERS
          </span>
          <div className="d-flex gap-16 align-items-center">
            <div className="nav-sw-arrow nav-next-slider type-white nav-next-product snbp196">
              <span className="icon icon-arrow1-left" />
            </div>
            <Link
              href={`/product-style-05`}
              className="tf-btn btn-line fs-12 fw-6 font-poppins btn-line-light"
            >
              VIEW ALL
            </Link>
            <div className="nav-sw-arrow nav-prev-slider type-white nav-prev-product snbn196">
              <span className="icon icon-arrow1-right" />
            </div>
          </div>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <div className="swiper tf-sw-product-sell wrap-sw-over">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                1000: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp196",
                nextEl: ".snbn196",
              }}
            >
              {products38.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard19 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp196">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn196">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
