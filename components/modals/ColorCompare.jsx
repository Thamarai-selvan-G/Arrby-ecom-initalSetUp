"use client";
import React from "react";
import Image from "next/image";
export default function ColorCompare() {
  return (
    <div
      className="modal fade modalDemo tf-product-modal modal-part-content"
      id="compare_color"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Compare color</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="tf-compare-color-wrapp">
            <div className="tf-compare-color-grid">
              <input
                type="checkbox"
                className="sr-only"
                id="remove-compare-color-beige-1"
              />
              <div className="tf-compare-color-item">
                <div className="tf-compare-color-top">
                  <label
                    htmlFor="remove-compare-color-beige-1"
                    className="tf-compare-color-remove"
                  >
                    Remove
                  </label>
                  <Image
                    className="lazyload"
                    data-src="/images/shop/products/hmgoepprod2.jpg"
                    alt="img-compare"
                    src="/images/shop/products/hmgoepprod2.jpg"
                    width={713}
                    height={1070}
                  />
                </div>
                <div className="tf-compare-color-bottom">
                  <div className="tf-compare-color-color">
                    <span className="tf-color-list-color bg-color-beige" />
                    <span>Beige</span>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <select className="tf-select" name="id">
                      <option value={46633906045232}>S - $8.00</option>
                      <option value={47256262738224}>M - $8.00</option>
                      <option value={47256262770992}>L - $8.00</option>
                      <option value={47256262803760}>XL - $8.00</option>
                    </select>
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                    >
                      <span>Add to cart</span>
                    </a>
                  </form>
                </div>
              </div>
              <input
                type="checkbox"
                className="sr-only"
                id="remove-compare-color-beige-2"
              />
              <div className="tf-compare-color-item">
                <div className="tf-compare-color-top">
                  <label
                    htmlFor="remove-compare-color-beige-2"
                    className="tf-compare-color-remove"
                  >
                    Remove
                  </label>
                  <Image
                    className="lazyload"
                    data-src="/images/shop/products/hmgoepprod12.jpg"
                    alt=""
                    src="/images/shop/products/hmgoepprod12.jpg"
                    width={768}
                    height={1152}
                  />
                </div>
                <div className="tf-compare-color-bottom">
                  <div className="tf-compare-color-color">
                    <span className="tf-color-list-color bg-color-blue" />
                    <span>Blue</span>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <select className="tf-select" name="id" required>
                      <option value={46633906045232}>S - $8.00</option>
                      <option value={47256262738224}>M - $8.00</option>
                      <option value={47256262770992}>L - $8.00</option>
                      <option value={47256262803760}>XL - $8.00</option>
                    </select>
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                    >
                      <span>Add to cart</span>
                    </a>
                  </form>
                </div>
              </div>
              <input
                required
                type="checkbox"
                className="sr-only"
                id="remove-compare-color-beige-3"
              />
              <div className="tf-compare-color-item">
                <div className="tf-compare-color-top">
                  <label
                    htmlFor="remove-compare-color-beige-3"
                    className="tf-compare-color-remove"
                  >
                    Remove
                  </label>
                  <Image
                    className="lazyload"
                    data-src="/images/shop/products/hmgoepprod7.jpg"
                    alt=""
                    src="/images/shop/products/hmgoepprod7.jpg"
                    width={713}
                    height={1070}
                  />
                </div>
                <div className="tf-compare-color-bottom">
                  <div className="tf-compare-color-color">
                    <span className="tf-color-list-color bg-color-black" />
                    <span>Black</span>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <select className="tf-select" name="id">
                      <option value={46633906045232}>S - $8.00</option>
                      <option value={47256262738224}>M - $8.00</option>
                      <option value={47256262770992}>L - $8.00</option>
                      <option value={47256262803760}>XL - $8.00</option>
                    </select>
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                    >
                      <span>Add to cart</span>
                    </a>
                  </form>
                </div>
              </div>
              <input
                type="checkbox"
                className="sr-only"
                id="remove-compare-color-beige-4"
              />
              <div className="tf-compare-color-item">
                <div className="tf-compare-color-top">
                  <label
                    htmlFor="remove-compare-color-beige-4"
                    className="tf-compare-color-remove"
                  >
                    Remove
                  </label>
                  <Image
                    className="lazyload"
                    data-src="/images/shop/products/hmgoepprod14.jpg"
                    alt=""
                    src="/images/shop/products/hmgoepprod14.jpg"
                    width={768}
                    height={1152}
                  />
                </div>
                <div className="tf-compare-color-bottom">
                  <div className="tf-compare-color-color">
                    <span className="tf-color-list-color bg-color-white" />
                    <span>White</span>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <select className="tf-select" name="id">
                      <option value={46633906045232}>S - $8.00</option>
                      <option value={47256262738224}>M - $8.00</option>
                      <option value={47256262770992}>L - $8.00</option>
                      <option value={47256262803760}>XL - $8.00</option>
                    </select>
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                    >
                      <span>Add to cart</span>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
