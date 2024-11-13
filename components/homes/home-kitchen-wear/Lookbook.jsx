"use client";
import { products19 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
export default function Lookbook() {
  const swiperRef = useRef(null);
  return (
    <section className="flat-spacing-21">
      <div className="container">
        <div className="flat-lookbook-v3 d-flex lookbook-kitchen-wear">
          <div className="col-left w-50">
            <div className="slider-wrap-lookbook">
              <div className="inner-sw-lookbook">
                <div className="flat-title-lookbook">
                  <p className="label">BUNDLE AND SAVE</p>
                  <h3 className="heading">Save with bundle</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="">
                  <Swiper
                    direction="vertical"
                    spaceBetween={0}
                    slidesPerView={3}
                    breakpoints={{
                      1000: {
                        slidesPerView: 3,
                        direction: "vertical",
                      },
                      768: {
                        slidesPerView: 1,
                        direction: "horizontal",
                      },
                      576: {
                        slidesPerView: 1,
                        direction: "horizontal",
                      },
                      0: {
                        slidesPerView: 1,
                        direction: "horizontal",
                      },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="swiper tf-lookbook"
                    modules={[Pagination]}
                    pagination={{ clickable: true, el: ".spd208" }}
                  >
                    {products19.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="tf-bundle-product-item type-lg">
                          <div className="tf-product-bundle-image">
                            <Link href={`/product-detail/${slide.id}`}>
                              <Image
                                alt={slide.imgAlt}
                                src={slide.imgSrc}
                                width={160}
                                height={120}
                              />
                            </Link>
                          </div>
                          <div className="tf-product-bundle-infos">
                            {slide.title && (
                              <Link
                                href={`/product-detail/${slide.id}`}
                                className="tf-product-bundle-title"
                              >
                                {slide.title}
                              </Link>
                            )}
                            <div className="tf-product-bundle-price">
                              {slide.compareAtPrice && (
                                <div className="compare-at-price">
                                  {slide.compareAtPrice}
                                </div>
                              )}
                              {slide.price ? (
                                <div className="price-on-sale text_red-1">
                                  {slide.price}
                                </div>
                              ) : (
                                <div className="price">
                                  ${slide.price.toFixed(2)}
                                </div>
                              )}
                            </div>
                            {slide.variants && (
                              <div className="tf-product-bundle-variant position-relative">
                                <select className="tf-select">
                                  {slide.variants.map(
                                    (variant, variantIndex) => (
                                      <option key={variantIndex}>
                                        {variant}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="sw-dots style-2 sw-pagination-lookbook justify-content-center d-xl-none spd208" />
                  </Swiper>
                  <button
                    type="submit"
                    className="tf-btn justify-content-center style-2 btn-fill radius-3 animate-hover-btn"
                  >
                    Add selected to cart - $340.00 USD
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-right w-50">
            <div className="wrap-lookbook lookbook-sw">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src="/images/shop/file/lookbook-11.jpg"
                  alt="collection-img"
                  src="/images/shop/file/lookbook-11.jpg"
                  width={800}
                  height={1109}
                />
              </div>
              <div
                className="navigation-sw-dot type-black item-1 nav-next-lookbook"
                onClick={() => swiperRef.current.slideTo(1)}
              >
                <span />
              </div>
              <div
                className="navigation-sw-dot type-black item-2 nav-prev-lookbook"
                onClick={() => swiperRef.current.slideTo(0)}
              >
                <span />
              </div>
              <div
                className="navigation-sw-dot type-black item-3 nav-prev-lookbook"
                onClick={() => swiperRef.current.slideTo(2)}
              >
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
