"use client";
import { products35 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-17">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title font-caprasimo">Shop Gram</span>
          <p className="sub-title text_black-3">
            Tag @deependofficial and #deependclothing for a chance to be
            featured!
          </p>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            className="swiper tf-sw-shop-gallery"
            slidesPerView={5}
            spaceBetween={7}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              640: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd295" }}
          >
            {products35.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item rounded-0 hover-img wow fadeInUp"
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
          <div className="sw-dots sw-pagination-gallery justify-content-center spd295" />
        </div>
      </div>
    </section>
  );
}
