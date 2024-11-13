"use client";

import ProductCard19 from "@/components/shopCards/ProductCard19";
import { products38 } from "@/data/products";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <div className="box-video-wrap">
              <video
                src="/images/slider/video-jewerly.mp4"
                autoPlay
                muted
                playsInline
                loop
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <p className="sub-title font-poppins fw-7 fs-14">
                SPRING SALE 30% OFF
              </p>
              <span className="title fw-8 font-poppins">SHOP THIS LOOK</span>
            </div>
            <div className="position-relative wrap-carousel style-2">
              <div className="nav-sw nav-next-slider nav-next-sell-1 snbp197">
                <span className="icon icon-arrow-left" />
              </div>
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  1000: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbp197",
                  nextEl: ".snbn197",
                }}
              >
                {products38.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard19 white={false} product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="nav-sw nav-prev-slider nav-prev-sell-1 snbn197">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
