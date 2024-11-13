"use client";

import { products4 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
export default function Lookbook() {
  return (
    <section className="flat-spacing-13">
      <div className="container">
        <div className="flat-lookbook-v3 d-flex">
          <div className="col-left w-50">
            <div className="slider-wrap-lookbook">
              <div className="inner-sw-lookbook">
                <div className="flat-title-lookbook">
                  <p className="label">BUNDLE AND SAVE</p>
                  <h3 className="heading">Shop this look</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="">
                  <Swiper
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={0}
                    breakpoints={{
                      1000: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        direction: "horizontal",
                      },
                    }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: ".snbp134",
                      nextEl: ".snbn134",
                    }}
                    pagination={{ clickable: true, el: ".spd134" }}
                    className="tf-lookbook"
                  >
                    {products4.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="tf-bundle-product-item type-lg">
                          <div className="tf-product-bundle-image">
                            <Link href={`/product-detail/${product.id}`}>
                              <Image
                                alt={product.title}
                                src={product.imgSrc}
                                width={product.imgWidth}
                                height={product.imgHeight}
                              />
                            </Link>
                          </div>
                          <div className="tf-product-bundle-infos">
                            <Link
                              href={`/product-detail/${product.id}`}
                              className="tf-product-bundle-title"
                            >
                              {product.title}
                            </Link>
                            <div className="tf-product-bundle-price">
                              {product.compareAtPrice && (
                                <div className="compare-at-price">
                                  {product.compareAtPrice}
                                </div>
                              )}
                              <div className="price-on-sale">
                                ${product.price}
                              </div>
                            </div>
                            <div className="tf-product-bundle-variant position-relative">
                              <select className="tf-select">
                                {product.options.map((option, optionIndex) => (
                                  <option key={optionIndex}>{option}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="sw-dots style-2 sw-pagination-lookbook justify-content-center d-xl-none spd134" />
                  </Swiper>
                  <button
                    type="submit"
                    className="tf-btn w-100 justify-content-center style-2 btn-fill radius-3 animate-hover-btn"
                  >
                    Add selected to cart - $48.00 USD
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
                  data-src="/images/shop/file/lookbook-6.jpg"
                  alt="collection-img"
                  src="/images/shop/file/lookbook-6.jpg"
                  width={1400}
                  height={1941}
                />
              </div>
              <div className="navigation-sw-dot type-black nav-next-lookbook snbp134">
                <span />
              </div>
              <div className="navigation-sw-dot type-black nav-prev-lookbook snbn134">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
