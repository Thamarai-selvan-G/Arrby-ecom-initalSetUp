"use client";
import { products43 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function Shopgram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-7">
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
              1024: { slidesPerView: 5, spaceBetween: 7 },
              768: { slidesPerView: 4, spaceBetween: 7 },
              500: { slidesPerView: 3, spaceBetween: 7 },
              0: { slidesPerView: 2, spaceBetween: 7 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd204" }}
          >
            {products43.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item hover-img wow fadeInUp"
                  data-wow-delay={slide.wowDelay}
                >
                  <div className="img-style">
                    <Image
                      className="lazyload img-hover"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={400}
                      height={400}
                    />
                  </div>
                  {slide.quickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(slide.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                  ) : (
                    <Link
                      href={`/product-detail/${slide.id}`}
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
          <div className="sw-dots sw-pagination-gallery justify-content-center spd204" />
        </div>
      </div>
    </section>
  );
}
