"use client";
import Image from "next/image";
import { products29 } from "@/data/products";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";

export default function Lookbook() {
  const swiperRef = useRef(null);
  return (
    <section className="section-lookbook-activewear">
      <div className="container-full">
        <div className="flat-activewear-lookbook radius-20 o-hidden bg_grey-11 flat-spacing-12">
          <div className="container">
            <div className="flat-lookbook-v3 d-flex">
              <div className="col-left w-50">
                <div className="slider-wrap-lookbook">
                  <div className="inner-sw-lookbook">
                    <div className="flat-title-lookbook">
                      <p className="label text_black">SHOP THIS LOOK</p>
                      <h3 className="heading font-young-serif">
                        Bundle &amp; Save
                      </h3>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <Swiper
                        className="tf-lookbook"
                        direction="vertical"
                        spaceBetween={0}
                        slidesPerView={3}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: ".spd140" }}
                      >
                        {products29.map(
                          ({ id, imgSrc, title, price, options }) => (
                            <SwiperSlide key={id}>
                              <div className="tf-bundle-product-item type-lg">
                                <div className="tf-product-bundle-image">
                                  <Link
                                    href={`/product-detail/${id}`}
                                    className="radius-5 o-hidden"
                                  >
                                    <Image
                                      alt={title}
                                      src={imgSrc}
                                      width={720}
                                      height={1005}
                                    />
                                  </Link>
                                </div>
                                <div className="tf-product-bundle-infos">
                                  <Link
                                    href={`/product-detail/${id}`}
                                    className="tf-product-bundle-title fs-16"
                                  >
                                    {title}
                                  </Link>
                                  <div className="tf-product-bundle-price">
                                    <div className="price fs-16">{price}</div>
                                  </div>
                                  <div className="tf-product-bundle-variant position-relative">
                                    <select className="tf-select">
                                      {options.map((option, index) => (
                                        <option key={index}>{option}</option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                        )}
                        <div className="sw-dots style-2 sw-pagination-lookbook justify-content-center d-xl-none spd140" />
                      </Swiper>
                      <button
                        type="submit"
                        className="tf-btn justify-content-center style-2 btn-fill radius-3 animate-hover-btn"
                      >
                        Add selected to cart - $114.00 USD
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
                      data-src="/images/shop/file/lb-activewear.jpg"
                      alt="collection-img"
                      src="/images/shop/file/lb-activewear.jpg"
                      width={800}
                      height={1109}
                    />
                  </div>
                  <div
                    className="navigation-sw-dot type-black item-1"
                    onClick={() => swiperRef.current.slideTo(0)}
                  >
                    <span />
                  </div>
                  <div
                    className="navigation-sw-dot type-black item-2"
                    onClick={() => swiperRef.current.slideTo(1)}
                  >
                    <span />
                  </div>
                  <div
                    className="navigation-sw-dot type-black item-3"
                    onClick={() => swiperRef.current.slideTo(2)}
                  >
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
