"use client";
import Image from "next/image";
import { products30 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-10">
      <div className="container">
        <div className="flat-title mb_1 wow fadeInUp" data-wow-delay="0s">
          <span className="title font-young-serif">Be active. Be social</span>
          <p className="sub-title text_black-3">
            Follow <strong>@ecactive</strong> on Instagram
          </p>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <div className="swiper tf-sw-shop-gallery">
            <Swiper
              spaceBetween={7}
              slidesPerView={5}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd148" }}
            >
              {products30.map((item, index) => (
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
                        <span className="tooltip">{item.tooltip}</span>
                      </a>
                    ) : (
                      <Link
                        href={`/product-detail/${item.id}`}
                        className="box-icon"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">{item.tooltip}</span>
                      </Link>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd148" />
        </div>
      </div>
    </section>
  );
}
