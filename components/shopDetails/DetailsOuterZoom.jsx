"use client";
import React, { useState } from "react";
import Quantity from "./Quantity";

import Slider1ZoomOuter from "./sliders/Slider1ZoomOuter";
import { useContextElement } from "@/context/Context";
import { openCartModal } from "@/utlis/openCartModal";

export default function DetailsOuterZoom({ product }) {
  const [currentColor, setCurrentColor] = useState(product[0].colors[0]);
  const [currentSize, setCurrentSize] = useState(product[0].sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
  } = useContextElement();
  return (
    <section
      className="flat-spacing-4 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div
        className="tf-main-product section-image-zoom"
        style={{ maxWidth: "100vw", overflow: "clip" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <Slider1ZoomOuter
                    images={currentColor.img.map((imageSrc, index) => ({
                      src: imageSrc, // Use imageSrc from the current color's image array
                      width: 800, // Default width
                      height: 1200, // Default height
                      alt: `${currentColor.name} image ${index + 1}`, // Dynamic alt text
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-title">
                    <h5>{product ? product[0].title : "product name"}</h5>
                  </div>

                  <div className="tf-product-info-price">
                    <div className="price-on-sale">
                      ₹{currentColor.price.toFixed(2)}
                    </div>

                    <div className="compare-at-price">
                      ₹{currentColor.oldPrice.toFixed(2)}
                    </div>

                    <div className="badges-on-sale">
                      <span>20</span>% OFF
                    </div>
                  </div>

                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:
                        <span className="fw-6 variant-picker-label-value">
                          {currentColor.name}
                        </span>
                      </div>
                      <form className="variant-picker-values">
                        {product[0].colors.map((color) => (
                          <React.Fragment key={color.name}>
                            <input
                              id={color.name}
                              type="radio"
                              name="color1"
                              readOnly
                              checked={currentColor == color}
                            />
                            <label
                              onClick={() => setCurrentColor(color)}
                              className="hover-tooltip radius-60"
                              htmlFor={color.name}
                              data-value={color.name}
                            >
                              <span
                                className={`btn-checkbox ${color.colorClass}`}
                              />
                              <span className="tooltip">{color.name}</span>
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
                        <a
                          href="#find_size"
                          data-bs-toggle="modal"
                          className="find-size fw-6"
                        >
                          Find your size
                        </a>
                      </div>
                      <form className="variant-picker-values">
                        {product[0].sizes.map((size) => (
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
                    <Quantity setQuantity={setQuantity} />
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form onSubmit={(e) => e.preventDefault()} className="">
                      <a
                        onClick={() => {
                          openCartModal();
                          addProductToCart(product.id);
                        }}
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                      >
                        <span>
                          {isAddedToCartProducts(product.id)
                            ? "Already Added"
                            : "Add to cart"}{" "}
                          -{" "}
                        </span>
                        <span className="tf-qty-price">
                          ₹{(currentColor.price * quantity).toFixed(2)}
                        </span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
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
                        <span className="icon icon-delete" />
                      </a>
        
                      <div className="w-100">
                        <a href="#" className="btns-full">
                          Buy with
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <StickyItem /> iuhnjhucgiwnjcegyubgrfxgkmcjaxfnij */}
    </section>
  );
}
