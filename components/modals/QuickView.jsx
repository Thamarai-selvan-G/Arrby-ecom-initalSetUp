"use client";
import { useContextElement } from "@/context/Context";

import Image from "next/image";
import Link from "next/link";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Quantity from "../shopDetails/Quantity";
import { colors, sizeOptions } from "@/data/singleProductOptions";
import React, { useState } from "react";

export default function QuickView() {
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizeOptions[0]);

  const openModalSizeChoice = () => {
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    var myModal = new bootstrap.Modal(document.getElementById("find_size"), {
      keyboard: false,
    });

    myModal.show();
    document
      .getElementById("find_size")
      .addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    const backdrops = document.querySelectorAll(".modal-backdrop");
    if (backdrops.length > 1) {
      // Apply z-index to the last backdrop
      const lastBackdrop = backdrops[backdrops.length - 1];
      lastBackdrop.style.zIndex = "1057";
    }
  };

  return (
    <div className="modal fade modalDemo" id="quick_view">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="wrap">
            <div className="tf-product-media-wrap">
              {quickViewItem && (
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".snbqvp",
                    nextEl: ".snbqvn",
                  }}
                  className="swiper tf-single-slide"
                >
                  {[
                    quickViewItem.isLookBookProduct
                      ? "/images/products/orange-1.jpg"
                      : quickViewItem.imgSrc,
                    quickViewItem.isLookBookProduct
                      ? "/images/products/pink-1.jpg"
                      : quickViewItem.imgHoverSrc
                      ? quickViewItem.imgHoverSrc
                      : quickViewItem.imgSrc,
                  ].map((product, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="item">
                        <Image
                          alt={""}
                          src={product}
                          width={720}
                          height={1045}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="swiper-button-next button-style-arrow single-slide-prev snbqvp" />
                  <div className="swiper-button-prev button-style-arrow single-slide-next snbqvn" />
                </Swiper>
              )}
            </div>
            <div className="tf-product-info-wrap position-relative">
              <div className="tf-product-info-list">
                <div className="tf-product-info-title">
                  <h5>
                    <Link
                      className="link"
                      href={`/product-detail/${quickViewItem.id}`}
                    >
                      {quickViewItem.title}
                    </Link>
                  </h5>
                </div>
                <div className="tf-product-info-badges">
                  <div className="badges text-uppercase">Best seller</div>
                  <div className="product-status-content">
                    <i className="icon-lightning" />
                    <p className="fw-6">
                      Selling fast! 48 people have this in their carts.
                    </p>
                  </div>
                </div>
                <div className="tf-product-info-price">
                  <div className="price">${quickViewItem.price.toFixed(2)}</div>
                </div>
                <div className="tf-product-description">
                  <p>
                    Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia
                    ac aptent ligula facilisis a auctor habitant parturient a
                    a.Interdum fermentum.
                  </p>
                </div>
                <div className="tf-product-info-variant-picker">
                  <div className="variant-picker-item">
                    <div className="variant-picker-label">
                      Color:
                      <span className="fw-6 variant-picker-label-value">
                        {currentColor.value}
                      </span>
                    </div>
                    <form className="variant-picker-values">
                      {colors.map((color) => (
                        <React.Fragment key={color.id}>
                          <input
                            id={color.id}
                            type="radio"
                            name="color1"
                            readOnly
                            checked={currentColor == color}
                          />
                          <label
                            onClick={() => setCurrentColor(color)}
                            className="hover-tooltip radius-60"
                            htmlFor={color.id}
                            data-value={color.value}
                          >
                            <span
                              className={`btn-checkbox ${color.className}`}
                            />
                            <span className="tooltip">{color.value}</span>
                          </label>
                        </React.Fragment>
                      ))}
                    </form>
                  </div>
                  <div className="variant-picker-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="variant-picker-label">
                        Size:
                        <span className="fw-6 variant-picker-label-value">
                          {currentSize.value}
                        </span>
                      </div>
                      <div
                        className="find-size btn-choose-size fw-6"
                        onClick={() => openModalSizeChoice()}
                      >
                        Find your size
                      </div>
                    </div>
                    <form className="variant-picker-values">
                      {sizeOptions.map((size) => (
                        <React.Fragment key={size.id}>
                          <input
                            type="radio"
                            name="size1"
                            id={size.id}
                            readOnly
                            checked={currentSize == size}
                          />
                          <label
                            onClick={() => setCurrentSize(size)}
                            className="style-text"
                            htmlFor={size.id}
                            data-value={size.value}
                          >
                            <p>{size.value}</p>
                          </label>
                        </React.Fragment>
                      ))}
                    </form>
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <div className="quantity-title fw-6">Quantity</div>
                  <Quantity />
                </div>
                <div className="tf-product-info-buy-button">
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                      onClick={() => addProductToCart(quickViewItem.id)}
                    >
                      <span>
                        {isAddedToCartProducts(quickViewItem.id)
                          ? "Already Added - "
                          : "Add to cart - "}
                      </span>
                      <span className="tf-qty-price">
                        ${quickViewItem.price.toFixed(2)}
                      </span>
                    </a>
                    <a
                      onClick={() => addToWishlist(quickViewItem.id)}
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                    >
                      <span
                        className={`icon icon-heart ${
                          isAddedtoWishlist(quickViewItem.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {isAddedtoWishlist(quickViewItem.id)
                          ? "Already Wishlisted"
                          : "Add to Wishlist"}
                      </span>
                      <span className="icon icon-delete" />
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="offcanvasLeft"
                      onClick={() => addToCompareItem(quickViewItem.id)}
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                    >
                      <span
                        className={`icon icon-compare ${
                          isAddedtoCompareItem(quickViewItem.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoCompareItem(quickViewItem.id)
                          ? "Already Compared"
                          : "Add to Compare"}
                      </span>
                      <span className="icon icon-check" />
                    </a>
                    <div className="w-100">
                      <a href="#" className="btns-full">
                        Buy with
                        <Image
                          alt=""
                          src="/images/payments/paypal.png"
                          width={64}
                          height={18}
                        />
                      </a>
                      <a href="#" className="payment-more-option">
                        More payment options
                      </a>
                    </div>
                  </form>
                </div>
                <div>
                  <Link
                    href={`/product-detail/${quickViewItem.id}`}
                    className="tf-btn fw-6 btn-line"
                  >
                    View full details
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
