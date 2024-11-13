"use client";

import { products20 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Products() {
  const {
    setQuickViewItem,
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();

  return (
    <section className="flat-spacing-1 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            New Arrivals
          </span>
        </div>
        <div className="wrap-carousel wrap-sw-2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp233",
              nextEl: ".snbn233",
            }}
            pagination={{ clickable: true, el: ".spd233" }}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            className="swiper tf-sw-product-sell wrap-sw-over"
          >
            {products20.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product bg_white radius-20">
                  <div className="card-product-wrapper border-line">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <Image
                        className="lazyload img-product"
                        src={product.imgSrc}
                        alt="image-product"
                        width={1200}
                        height={1200}
                      />
                      <Image
                        className="lazyload img-hover"
                        src={product.imgHoverSrc}
                        alt="image-product"
                        width={360}
                        height={360}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
                      <a
                        href="#quick_add"
                        onClick={() => setQuickAddItem(product.id)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quick-add tf-btn-loading"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        onClick={() => addToCompareItem(product.id)}
                        aria-controls="offcanvasLeft"
                        className="box-icon bg_white compare btn-icon-action"
                      >
                        <span
                          className={`icon icon-compare ${
                            isAddedtoCompareItem(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {" "}
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
                      </a>
                      <a
                        href="#quick_view"
                        onClick={() => setQuickViewItem(product)}
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
                      href={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <span className="price"> ${product.price.toFixed(2)} </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp233">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn233">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd233" />
        </div>
      </div>
    </section>
  );
}
