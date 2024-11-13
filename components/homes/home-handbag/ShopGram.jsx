"use client";
import { products32 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-13 pb_0">
      <div className="container-full">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Instagram
          </span>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            className="swiper tf-sw-shop-gallery"
            slidesPerView={5}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={0}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd186" }}
          >
            {products32.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
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
                      <span className="tooltip">Quick Add</span>
                    </a>
                  ) : (
                    <Link
                      href={`/product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">View product</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd186" />
        </div>
      </div>
    </section>
  );
}
