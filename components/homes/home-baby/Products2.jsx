"use client";

import { useContextElement } from "@/context/Context";
import { products50 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  const swiperOptions = {
    slidesPerView: 4, // data-preview
    spaceBetween: 30, // data-space-lg
    breakpoints: {
      768: {
        // data-tablet
        slidesPerView: 4,
        spaceBetween: 30, // data-space-md
      },
      480: {
        // data-mobile
        slidesPerView: 3,
      },
      0: {
        // data-mobile
        slidesPerView: 2,
      },
    },
  };
  const { setQuickViewItem } = useContextElement();
  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  return (
    <section className="flat-spacing-13 pb_0">
      <div className="container">
        <div className="flat-title flex-row justify-content-center">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            June Top Picks
          </span>
        </div>
        <div className="wrap-carousel wrap-sw-2">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".spdp21",
            }}
            navigation={{
              prevEl: ".snbp21",
              nextEl: ".snbn21",
            }}
            className="swiper tf-sw-product-sell-1"
            {...swiperOptions}
          >
            {products50.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="card-product style-9">
                  <div className="card-product-wrapper">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <Image
                        className="lazyload img-product"
                        data-src={product.imgSrc}
                        alt="image-product"
                        src={product.imgSrc}
                        width={360}
                        height={360}
                      />
                      <Image
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={360}
                        height={360}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
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
                          {" "}
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
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
                      </a>
                      <a
                        href="#quick_view"
                        data-bs-toggle="modal"
                        onClick={() => setQuickViewItem(product)}
                        className="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="on-sale-wrap text-end">
                      <div className="on-sale-item">-18%</div>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <div className="inner-info">
                      <Link
                        href={`/product-detail/${product.id}`}
                        className="title link fw-6"
                      >
                        {product.title}
                      </Link>
                      <div>
                        <span className="old-price">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <span className="new-price price-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="list-product-btn">
                      <a
                        href="#quick_add"
                        data-bs-toggle="modal"
                        className="box-icon quick-add tf-btn-loading"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Add to cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider style-white-line nav-next-sell-1 box-icon w_46 round snbp21">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider style-white-line nav-prev-sell-1 box-icon w_46 round snbn21">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spdp21" />
        </div>
      </div>
    </section>
  );
}
