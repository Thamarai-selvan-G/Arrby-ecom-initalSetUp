"use client";
import { products34 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Products2() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-18 pt_0">
      <div className="container">
        <div className="flat-title flex-row justify-content-between px-0">
          <span
            className="title wow fadeInUp font-caprasimo"
            data-wow-delay="0s"
          >
            Trending Products
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-sell-1 nav-next-slider snbp294">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-sell-1 nav-prev-slider snbn294">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          spaceBetween={30}
          slidesPerView={4.5}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
            },
            576: {
              slidesPerView: 3.5,
            },
            0: {
              slidesPerView: 2.5,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp294",
            nextEl: ".snbn294",
          }}
        >
          {products34.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="card-product">
                <div className="card-product-wrapper rounded-0">
                  <Link
                    href={`/product-detail/${slide.id}`}
                    className="product-img"
                  >
                    <Image
                      className="lazyload img-product"
                      data-src={slide.imgSrc}
                      alt={`image-product-${index}`}
                      src={slide.imgSrc}
                      width={360}
                      height={450}
                    />
                    <Image
                      className="lazyload img-hover"
                      data-src={slide.imgHoverSrc}
                      alt={`image-product-hover-${index}`}
                      src={slide.imgHoverSrc}
                      width={360}
                      height={450}
                    />
                  </Link>
                  <div className="list-product-btn absolute-2">
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(slide.id)}
                      data-bs-toggle="modal"
                      className="box-icon bg_white quick-add tf-btn-loading"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                    <a
                      onClick={() => addToWishlist(slide.id)}
                      className="box-icon bg_white wishlist btn-icon-action"
                    >
                      <span
                        className={`icon icon-heart ${
                          isAddedtoWishlist(slide.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {isAddedtoWishlist(slide.id)
                          ? "Already Wishlisted"
                          : "Add to Wishlist"}
                      </span>
                      <span className="icon icon-delete" />
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="offcanvasLeft"
                      onClick={() => addToCompareItem(slide.id)}
                      className="box-icon bg_white compare btn-icon-action"
                    >
                      <span
                        className={`icon icon-compare ${
                          isAddedtoCompareItem(slide.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoCompareItem(slide.id)
                          ? "Already Compared"
                          : "Add to Compare"}
                      </span>
                      <span className="icon icon-check" />
                    </a>
                    <a
                      href="#quick_view"
                      onClick={() => setQuickViewItem(slide)}
                      data-bs-toggle="modal"
                      className="box-icon bg_white quickview tf-btn-loading"
                    >
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <Link
                    href={`/product-detail/${slide.id}`}
                    className="title link font-caprasimo"
                  >
                    {slide.title}
                  </Link>
                  <span className="price">${slide.price.toFixed(2)}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
