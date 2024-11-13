"use client";

import { useContextElement } from "@/context/Context";
import { products49 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      clickable: true,
      el: ".spdp2",
    },
  };
  return (
    <section className="flat-spacing-17 flat-flash-sale flat-spacing-flash-sell">
      <div className="container">
        <div className="tf-flash-sale">
          <div className="heading-flash-sale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={31}
              viewBox="0 0 21 31"
              fill="none"
            >
              <path
                d="M20.0916 11.5447C20.02 11.3956 19.9077 11.2698 19.7677 11.1817C19.6277 11.0936 19.4656 11.0469 19.3002 11.0469H13.6903L18.3286 1.77202C18.3954 1.63804 18.427 1.48925 18.4204 1.33968C18.4138 1.19011 18.3692 1.04468 18.2908 0.917131C18.1295 0.657911 17.8463 0.5 17.5424 0.5H6.99547C6.81673 0.500164 6.64228 0.5548 6.49538 0.656625C6.34848 0.75845 6.2361 0.902628 6.17322 1.06994L0.899757 15.1325C0.849964 15.2655 0.833013 15.4085 0.850345 15.5494C0.867677 15.6903 0.91878 15.8249 0.999308 15.9419C1.0803 16.0586 1.18832 16.154 1.31417 16.2199C1.44002 16.2858 1.57994 16.3203 1.72201 16.3204H7.62717L4.38446 29.4083C4.33605 29.603 4.35562 29.8084 4.43991 29.9904C4.52421 30.1724 4.66817 30.3201 4.84794 30.4091C5.02771 30.4978 5.23235 30.5225 5.42806 30.4791C5.62376 30.4357 5.7988 30.3269 5.92425 30.1705L19.9868 12.4751C20.0904 12.3458 20.1552 12.1898 20.1738 12.0251C20.1923 11.8604 20.1638 11.6939 20.0916 11.5447Z"
                fill="currentColor"
              />
            </svg>
            Flash sale
          </div>
          <Swiper
            modules={[Pagination]}
            className="swiper tf-sw-product-sell"
            {...swiperOptions}
          >
            {products49.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="card-product style-8">
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
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
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
                    {product.salePercentage ? (
                      <div className="on-sale-wrap text-end">
                        <div className="on-sale-item">
                          {product.salePercentage}%
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="card-product-info">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="title link fw-6"
                    >
                      {product.title}
                    </Link>
                    <span className="price">
                      {product.oldPrice && (
                        <span className="old-price">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="new-price price-primary">
                        ${product.price.toFixed(2)}
                      </span>
                    </span>
                    <div className="pr-stock">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${
                              (product.available /
                                (product.available + product.sold)) *
                              100
                            }%`,
                          }}
                          aria-valuenow={product.available}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="pr-stock-status d-flex justify-content-between align-items-center">
                        <div className="pr-stock-available">
                          <span className="pr-stock-label">Available: </span>
                          <span className="pr-stock-value fw-6">
                            {product.available}
                          </span>
                        </div>
                        <div className="pr-stock-sold">
                          <span className="pr-stock-label">Sold: </span>
                          <span className="pr-stock-value fw-6">
                            {product.sold}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      onClick={() => addProductToCart(product.id)}
                      className="tf-btn tf-btn-loading"
                    >
                      {isAddedToCartProducts(product.id)
                        ? "Already Added"
                        : "ADD TO CART"}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots d-md-none style-2 sw-pagination-product justify-content-center spdp2" />
        </div>
      </div>
    </section>
  );
}
