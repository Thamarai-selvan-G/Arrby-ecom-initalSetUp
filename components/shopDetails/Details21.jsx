"use client";
import React, { useState } from "react";
import Slider1 from "./sliders/Slider1";
import Image from "next/image";
import CountdownComponent from "../common/Countdown";
import {
  colors7,
  paymentImages,
  sizeOptions,
} from "@/data/singleProductOptions";
import StickyItem from "./StickyItem";
import Quantity from "./Quantity";

import Slider1Upsell from "./sliders/Slider1Upsell";
export default function Details21() {
  const [currentColor, setCurrentColor] = useState(colors7[0]);
  const [currentSize, setCurrentSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const handleColor = (color) => {
    const updatedColor = colors7.filter(
      (elm) => elm.value.toLowerCase() == color.toLowerCase()
    )[0];
    if (updatedColor) {
      setCurrentColor(updatedColor);
    }
  };
  return (
    <section
      className="flat-spacing-4 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <Slider1Upsell
                    handleColor={handleColor}
                    currentColor={currentColor.value}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-title">
                    <h5>Cotton jersey top</h5>
                  </div>
                  <div className="tf-product-info-badges">
                    <div className="badges">Best seller</div>
                    <div className="product-status-content">
                      <i className="icon-lightning" />
                      <p className="fw-6">
                        Selling fast! 56 people have this in their carts.
                      </p>
                    </div>
                  </div>
                  <div className="tf-product-info-price">
                    <div className="price-on-sale">
                      ${currentColor.price.toFixed(2)}
                    </div>
                    <div className="compare-at-price">
                      ${currentColor.oldPrice.toFixed(2)}
                    </div>
                    <div className="badges-on-sale">
                      <span>20</span>% OFF
                    </div>
                  </div>
                  <div className="tf-product-info-badges">
                    <div className="product-status-content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        width={14}
                        height={19}
                        viewBox="0 0 14 19"
                        fill="none"
                      >
                        <path
                          d="M7.02105 18.6774C10.055 18.6774 12.7816 16.7396 13.6906 13.8451C13.8829 13.2328 14 12.5829 14 11.908C14 8.13282 10.9092 5.08661 10.9092 5.08661C10.9092 5.08661 11.1221 6.31978 10.9896 7.36947C10.8572 8.41917 10.369 9.06356 10.369 9.06356C10.369 9.06356 10.7255 7.41532 10.2518 6.31025C9.70664 5.03834 8.68975 4.44831 8.29913 3.30309C7.84954 1.98502 8.52322 0.452148 8.52322 0.452148C8.52322 0.452148 6.30738 1.30837 4.70616 3.51789C2.89015 6.02383 4.11387 9.25234 4.11387 9.25234C4.11387 9.25234 3.94461 8.36058 3.02684 7.63809C2.10907 6.91559 2.48087 5.79505 2.48087 5.79505C2.48087 5.79505 0 8.57546 0 11.9081C0 12.8128 0.259084 13.7253 0.636502 14.5745C1.75251 17.0855 4.27321 18.6774 7.02105 18.6774Z"
                          fill="#D10028"
                        />
                        <path
                          d="M10.9092 5.08661C10.9092 5.08661 11.0247 5.75685 11.0324 6.52958C11.7557 7.74103 12.4378 9.35357 12.4378 11.1269C12.4378 11.8018 12.3208 12.4517 12.1285 13.064C11.2194 15.9585 8.49284 17.8963 5.45889 17.8963C4.65653 17.8962 3.86005 17.7595 3.10354 17.4922C4.26367 18.2655 5.62682 18.6779 7.02105 18.6774C10.055 18.6774 12.7816 16.7396 13.6906 13.8451C13.8829 13.2328 14 12.5829 14 11.908C14 8.13282 10.9092 5.08661 10.9092 5.08661Z"
                          fill="#B7022D"
                        />
                        <path
                          d="M10.5225 13.5592C10.5225 11.6529 9.27189 10.4233 8.49315 9.63453C7.1065 8.2296 7.3527 6.63104 7.3527 6.63104C7.3527 6.63104 4.63493 8.96756 4.20791 10.9056C3.79964 12.7592 4.82668 13.7896 4.82668 13.7896C4.82668 13.7896 4.34812 13.6048 4.05052 13.2738C3.67147 12.8523 3.53525 12.3415 3.53525 12.3415C3.53525 12.3415 3.37684 12.7248 3.58453 14.0361C3.73216 14.9681 4.21643 15.6656 4.78466 16.1789C6.16577 17.4264 8.3196 17.3057 9.57135 15.9284C10.1077 15.3384 10.5225 14.5588 10.5225 13.5592Z"
                          fill="#FFA91A"
                        />
                        <path
                          d="M5.15997 13.6162C5.11857 13.6162 5.07725 13.5999 5.04656 13.5675C4.9829 13.5003 4.42427 12.8791 4.42427 11.7617C4.42427 11.506 4.45419 11.2406 4.51308 10.9729C4.59939 10.5811 4.79521 10.1391 5.09498 9.65913C5.11693 9.62399 5.15194 9.599 5.19231 9.58967C5.23268 9.58034 5.27511 9.58743 5.31025 9.60938C5.34539 9.63132 5.37038 9.66633 5.37971 9.7067C5.38904 9.74707 5.38195 9.7895 5.36001 9.82464C5.07913 10.2743 4.8969 10.6832 4.81825 11.0401C4.7642 11.2857 4.73678 11.5285 4.73678 11.7617C4.73678 12.7751 5.25143 13.3294 5.27338 13.3525C5.2944 13.3747 5.30845 13.4026 5.31381 13.4326C5.31917 13.4627 5.31559 13.4937 5.30352 13.5217C5.29145 13.5498 5.27142 13.5737 5.24591 13.5905C5.22039 13.6073 5.19052 13.6162 5.15997 13.6162ZM5.57918 9.38177C5.5503 9.38176 5.522 9.37374 5.4974 9.35861C5.47281 9.34349 5.45289 9.32184 5.43985 9.29608C5.42682 9.27032 5.42118 9.24144 5.42356 9.21267C5.42594 9.18389 5.43625 9.15634 5.45334 9.13307L5.49919 9.07113C5.51146 9.05469 5.52685 9.04082 5.54447 9.03033C5.5621 9.01983 5.58162 9.01291 5.60192 9.00996C5.62222 9.00701 5.64291 9.00808 5.66279 9.01312C5.68268 9.01817 5.70138 9.02707 5.71782 9.03934C5.73426 9.05161 5.74813 9.067 5.75862 9.08462C5.76912 9.10225 5.77604 9.12177 5.77899 9.14207C5.78194 9.16237 5.78087 9.18306 5.77583 9.20294C5.77078 9.22283 5.76187 9.24152 5.74961 9.25797L5.70509 9.31803C5.6906 9.33782 5.67165 9.35391 5.64977 9.36499C5.62789 9.37606 5.6037 9.38181 5.57918 9.38177Z"
                          fill="#FFC91D"
                        />
                        <path
                          d="M8.49315 9.63453C7.1065 8.2296 7.3527 6.63104 7.3527 6.63104C7.3527 6.63104 6.48929 7.37346 5.65924 8.36832C6.42345 9.15877 7.39808 10.314 7.39808 11.9971C7.39808 12.9967 6.98332 13.7762 6.44696 14.3663C5.83506 15.0396 5.0075 15.4117 4.16011 15.4714C4.34429 15.7386 4.55752 15.9737 4.78466 16.1789C6.16577 17.4264 8.3196 17.3057 9.57135 15.9284C10.1077 15.3384 10.5225 14.5588 10.5225 13.5592C10.5225 11.6529 9.27189 10.4233 8.49315 9.63453Z"
                          fill="#F79219"
                        />
                        <path
                          d="M8.49315 9.63453C7.1065 8.2296 7.3527 6.63104 7.3527 6.63104C7.3527 6.63104 6.80774 7.10008 6.16772 7.79125C6.33964 8.13876 6.58427 8.50212 6.93099 8.85345C7.70965 9.64234 8.96032 10.8718 8.96032 12.7781C8.96032 13.7778 8.54556 14.5573 8.00919 15.1474C7.17508 16.0652 5.94058 16.4241 4.80099 16.1929C6.18272 17.4251 8.32444 17.3004 9.57135 15.9284C10.1077 15.3384 10.5225 14.5588 10.5225 13.5592C10.5225 11.6529 9.27189 10.4233 8.49315 9.63453Z"
                          fill="#EF7816"
                        />
                      </svg>
                      <p className="fw-6">10 sold in last 12 hours</p>
                    </div>
                  </div>
                  <div className="tf-product-info-liveview">
                    <div className="liveview-count">20</div>
                    <p className="fw-6">People are viewing this right now</p>
                  </div>
                  <div className="tf-product-info-countdown">
                    <div className="countdown-wrap">
                      <div className="countdown-title">
                        <i className="icon-time tf-ani-tada" />
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
                  <div className="tf-product-inventory">
                    <div className="d-flex align-items-center gap-5">
                      <svg width={15} height={15} aria-hidden="true">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r={5}
                          stroke="rgb(255, 255, 255)"
                          strokeWidth={1}
                          fill="currentColor"
                        />
                      </svg>
                      <div className="fw-6">300 in stock</div>
                    </div>
                    <div className="tf-progress-bar mt_5">
                      <span style={{ width: "30%" }} />
                    </div>
                  </div>
                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:{" "}
                        <span className="fw-6 variant-picker-label-value">
                          {currentColor.value}
                        </span>
                      </div>
                      <form className="variant-picker-values">
                        {colors7.map((color) => (
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
                          Size:{" "}
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
                    <Quantity setQuantity={setQuantity} />
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form onSubmit={(e) => e.preventDefault()} className="">
                      <a
                        href="#"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn "
                      >
                        <span>Add to cart -&nbsp;</span>
                        <span className="tf-qty-price">
                          ${(currentColor.price * quantity).toFixed(2)}
                        </span>
                      </a>
                      <a
                        href="#"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <div className="w-100">
                        <a href="#" className="btns-full">
                          Buy with{" "}
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
                  <div className="tf-product-info-extra-link">
                    <a
                      href="#compare_color"
                      data-bs-toggle="modal"
                      className="tf-product-extra-icon"
                    >
                      <div className="icon">
                        <Image
                          alt=""
                          src="/images/item/compare.svg"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="text fw-6">Compare color</div>
                    </a>
                    <a
                      href="#ask_question"
                      data-bs-toggle="modal"
                      className="tf-product-extra-icon"
                    >
                      <div className="icon">
                        <i className="icon-question" />
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
                        <i className="icon-share" />
                      </div>
                      <div className="text fw-6">Share</div>
                    </a>
                  </div>
                  <div className="tf-product-order">
                    <div className="icon">
                      <i className="icon-car-order" />
                    </div>
                    <p>
                      Order in the next{" "}
                      <span className="tf-countdown-simple">
                        04 Hours 16 Mins
                      </span>{" "}
                      to get it between{" "}
                      <strong className="text-decoration-underline">
                        Monday, 1st July
                      </strong>{" "}
                      and{" "}
                      <strong className="text-decoration-underline">
                        Monday, 8st July
                      </strong>
                    </p>
                  </div>
                  <div className="tf-product-info-trust-seal">
                    <div className="tf-product-trust-mess">
                      <i className="icon-safe" />
                      <p className="fw-6">
                        Guarantee Safe <br /> Checkout
                      </p>
                    </div>
                    <div className="tf-payment">
                      {paymentImages.map((image, index) => (
                        <Image
                          key={index}
                          alt={image.alt}
                          src={image.src}
                          width={image.width}
                          height={image.height}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StickyItem />
    </section>
  );
}
