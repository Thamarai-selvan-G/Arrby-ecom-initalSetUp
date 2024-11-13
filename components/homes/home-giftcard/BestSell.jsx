"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
import Quantity from "@/components/shopDetails/Quantity";
import { Gallery, Item } from "react-photoswipe-gallery";
import { productBestcell } from "@/data/products";
import { useContextElement } from "@/context/Context";
const priceOptions = [
  { id: "values-1", price: 268.0, checked: true },
  { id: "values-2", price: 333.0, checked: false },
  { id: "values-3", price: 564.0, checked: false },
  { id: "values-4", price: 633.0, checked: false },
];
export default function BestSell() {
  const [currentPrice, setCurrentPrice] = useState(priceOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();

  return (
    <>
      <div className="container">
        <div className="line" />
      </div>
      {/* detail */}
      <section className="flat-spacing-11">
        <div className="container">
          <div className="flat-title">
            <span className="title fw-6">Don't miss our sale</span>
          </div>
          <div className="tf-main-product section-image-zoom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="tf-product-media-wrap sticky-top">
                    <div className="other-image-zoom" id="gallery-started">
                      <Gallery>
                        <Item
                          original={productBestcell[0].imgSrc}
                          thumbnail={productBestcell[0].imgSrc}
                          width={1409}
                          height={1001}
                        >
                          {({ ref, open }) => (
                            <a className="item" onClick={open}>
                              <Image
                                className="radius-10 tf-image-zoom lazyload"
                                alt="img-giftcard"
                                src={productBestcell[0].imgSrc}
                                width={1409}
                                height={1001}
                                ref={ref}
                              />
                            </a>
                          )}
                        </Item>
                      </Gallery>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tf-product-info-wrap position-relative">
                    <div className="tf-zoom-main" />
                    <div className="tf-product-info-list other-image-zoom">
                      <div className="tf-product-info-title">
                        <h5>{productBestcell[0].title}</h5>
                      </div>
                      <div className="tf-product-info-badges">
                        <div className="badges">BEST SELLER</div>
                        <div className="product-status-content">
                          <i className="icon-lightning" />
                          <p className="fw-6">
                            Selling fast! 72 people have this in their carts.
                          </p>
                        </div>
                      </div>
                      <div className="tf-product-info-price">
                        <div className="price">
                          ${currentPrice.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="tf-product-info-liveview">
                        <div className="liveview-count">20</div>
                        <p className="fw-6">
                          People are viewing this right now
                        </p>
                      </div>
                      <div className="tf-product-info-countdown">
                        <div className="countdown-wrap">
                          <div className="countdown-title">
                            <i className="icon-time" />
                            <p>HURRY UP! SALE ENDS IN:</p>
                          </div>
                          <div className="tf-countdown style-1">
                            <div className="js-countdown">
                              <CountdownComponent
                                targetDate="2025-08-07"
                                labels="Days :,Hours :,Mins :,Secs"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-variant-picker">
                        <div className="variant-picker-item">
                          <div className="variant-picker-label">
                            Denominations:
                            <span className="fw-6 variant-picker-label-value">
                              ${currentPrice.price.toFixed(2)}
                            </span>
                          </div>
                          <form className="variant-picker-values">
                            {priceOptions.map((color) => (
                              <React.Fragment key={color.id}>
                                <input
                                  id={color.id}
                                  type="radio"
                                  name="color1"
                                  readOnly
                                  checked={currentPrice == color}
                                />
                                <label
                                  onClick={() => setCurrentPrice(color)}
                                  className="style-text"
                                >
                                  <p>${color.price.toFixed(2)}</p>
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
                          <div className="tf-cart-checkbox mb_12 w-100 item-has-checkox opacity-100 flex-wrap">
                            <div className="tf-checkbox-wrapp">
                              <input
                                className=""
                                type="checkbox"
                                id="CartDrawer-Form_agree"
                                name="agree_checkbox"
                              />
                              <div>
                                <i className="icon-check" />
                              </div>
                            </div>
                            <label
                              htmlFor="CartDrawer-Form_agree"
                              className="fw-6"
                            >
                              I want to send this as a gift
                            </label>
                            <div className="wrap-content w-100">
                              <div className="tf-product-form">
                                <div className="tf-field">
                                  <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    required
                                    type="email"
                                    id="property1"
                                    name="properties[email]"
                                    autoComplete="abc@xyz.com"
                                  />
                                  <label
                                    className="tf-field-label"
                                    htmlFor="property1"
                                  >
                                    Recipient email
                                  </label>
                                </div>
                                <div className="tf-field">
                                  <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    required
                                    type="text"
                                    id="property2"
                                    name="properties[name]"
                                  />
                                  <label
                                    className="tf-field-label"
                                    htmlFor="property2"
                                  >
                                    Recipient name (optional)
                                  </label>
                                </div>
                                <div className="tf-field">
                                  <textarea
                                    className="tf-field-input tf-input"
                                    name="note"
                                    id="property3"
                                    placeholder=""
                                    defaultValue={""}
                                  />
                                  <label
                                    className="tf-field-label"
                                    htmlFor="property3"
                                  >
                                    Message (optional)
                                  </label>
                                  <p className="text-end">200 characters max</p>
                                </div>
                                <div className="tf-field style-1">
                                  <input
                                    className="fw-6"
                                    required
                                    type="date"
                                    name="date"
                                    defaultValue=""
                                  />
                                  <label className="tf-field-label" htmlFor="">
                                    Send on (optional)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            onClick={() =>
                              addProductToCart(productBestcell[0].id)
                            }
                            className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                          >
                            <span>
                              {isAddedToCartProducts(productBestcell[0].id)
                                ? "Already Added"
                                : "Add to cart -"}{" "}
                            </span>
                            <span className="tf-qty-price">
                              ${(quantity * currentPrice.price).toFixed(2)}
                            </span>
                          </a>
                          <a
                            onClick={() => addToWishlist(productBestcell[0].id)}
                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                          >
                            <span
                              className={`icon icon-heart ${
                                isAddedtoWishlist(productBestcell[0].id)
                                  ? "added"
                                  : ""
                              }`}
                            />
                            <span className="tooltip">
                              {isAddedtoWishlist(productBestcell[0].id)
                                ? "Already Wishlisted"
                                : "Add to Wishlist"}
                            </span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            onClick={() =>
                              addToCompareItem(productBestcell[0].id)
                            }
                            aria-controls="offcanvasLeft"
                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                          >
                            <span
                              className={`icon icon-compare ${
                                isAddedtoCompareItem(productBestcell[0].id)
                                  ? "added"
                                  : ""
                              }`}
                            />
                            <span className="tooltip">
                              {" "}
                              {isAddedtoCompareItem(productBestcell[0].id)
                                ? "Already Compared"
                                : "Add to Compare"}
                            </span>
                            <span className="icon icon-check" />
                          </a>
                        </form>
                      </div>
                      <div className="tf-product-info-extra-link">
                        <a
                          href="#ask_question"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <svg
                              className="d-inline-block"
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 13H11V15H9V13ZM11 11.355V12H9V10.5C9 10.2348 9.10536 9.98043 9.29289 9.79289C9.48043 9.60536 9.73478 9.5 10 9.5C10.2841 9.49998 10.5623 9.4193 10.8023 9.26733C11.0423 9.11536 11.2343 8.89837 11.3558 8.64158C11.4773 8.3848 11.5234 8.0988 11.4887 7.81684C11.454 7.53489 11.34 7.26858 11.1598 7.04891C10.9797 6.82924 10.7409 6.66523 10.4712 6.57597C10.2015 6.48671 9.91204 6.47587 9.63643 6.54471C9.36081 6.61354 9.11042 6.75923 8.91437 6.96482C8.71832 7.1704 8.58468 7.42743 8.529 7.706L6.567 7.313C6.68863 6.70508 6.96951 6.14037 7.38092 5.67659C7.79233 5.2128 8.31952 4.86658 8.90859 4.67332C9.49766 4.48006 10.1275 4.44669 10.7337 4.57661C11.3399 4.70654 11.9007 4.99511 12.3588 5.41282C12.8169 5.83054 13.1559 6.36241 13.3411 6.95406C13.5263 7.54572 13.5511 8.17594 13.4129 8.78031C13.2747 9.38467 12.9785 9.9415 12.5545 10.3939C12.1306 10.8462 11.5941 11.1779 11 11.355Z" />
                            </svg>
                          </div>
                          <div className="text fw-6">Ask a question</div>
                        </a>
                        <a
                          href="#delivery_return"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <svg
                              className="d-inline-block"
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={18}
                              viewBox="0 0 22 18"
                              fill="currentColor"
                            >
                              <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z" />
                            </svg>
                          </div>
                          <div className="text fw-6">Delivery &amp; Return</div>
                        </a>
                        <a
                          href="#share_social"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <svg
                              role="presentation"
                              focusable="false"
                              width={17}
                              height={20}
                              fill="none"
                            >
                              <path
                                d="M12.75 12.188a3.42 3.42 0 0 0-2.273.86L7.29 11a3.443 3.443 0 0 0 0-2l3.188-2.047a3.424 3.424 0 1 0-1.016-1.575L6.272 7.422a3.437 3.437 0 1 0 0 5.152l3.189 2.051a3.438 3.438 0 1 0 3.289-2.437Zm0-9.375a1.563 1.563 0 1 1 0 3.125 1.563 1.563 0 0 1 0-3.125ZM4 11.563a1.562 1.562 0 1 1 0-3.125 1.562 1.562 0 0 1 0 3.125Zm8.75 5.625a1.563 1.563 0 1 1 0-3.126 1.563 1.563 0 0 1 0 3.126Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="text fw-6">Share</div>
                        </a>
                      </div>
                      <div className="tf-product-info-trust-seal">
                        <div className="tf-product-trust-mess">
                          <i className="icon-safe" />
                          <p className="fw-6">
                            Guarantee Safe <br />
                            Checkout
                          </p>
                        </div>
                        <div className="tf-payment">
                          <Image
                            alt=""
                            src="/images/payments/visa.png"
                            width={48}
                            height={30}
                          />
                          <Image
                            alt=""
                            src="/images/payments/img-1.png"
                            width={49}
                            height={30}
                          />
                          <Image
                            alt=""
                            src="/images/payments/img-2.png"
                            width={48}
                            height={30}
                          />
                          <Image
                            alt=""
                            src="/images/payments/img-3.png"
                            width={57}
                            height={30}
                          />
                          <Image
                            alt=""
                            src="/images/payments/img-4.png"
                            width={49}
                            height={30}
                          />
                        </div>
                      </div>
                      <div>
                        <Link
                          href={`/product-detail`}
                          className="tf-btn btn-line fw-6"
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
        </div>
      </section>
    </>
  );
}
