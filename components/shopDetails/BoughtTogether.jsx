"use client";
import Image from "next/image";
import React from "react";

export default function BoughtTogether() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="tf-product-form-bundle"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div className="tf-bundle-products">
        <div className="tf-bundle-product-item item-has-checkox check mb_15">
          <div className="tf-bundle-check align-self-center">
            <input type="checkbox" defaultChecked="checked" id="bundle-ck-1" />
            <label htmlFor="bundle-ck-1" className="">
              <i className="icon-check" />
            </label>
          </div>
          <div className="tf-product-bundle-image">
            <a href="#">
              <Image
                alt=""
                src="/images/shop/products/p-d1.png"
                width={770}
                height={1075}
              />
            </a>
          </div>
          <div className="tf-product-bundle-infos">
            <span className="tf-product-bundle-title">
              <strong>This item:</strong> Cotton jersey top
            </span>
            <div className="tf-product-bundle-variant position-relative">
              <select className="tf-select">
                <option>Beige / S</option>
                <option>Beige / M</option>
                <option>Beige / L</option>
                <option>Beige / XL</option>
                <option>Black / S</option>
                <option>Black / M</option>
                <option>Black / L</option>
                <option>Black / XL</option>
                <option>Blue / S</option>
                <option>Blue / M</option>
                <option>Blue / L</option>
                <option>Blue / XL</option>
                <option>White / S</option>
                <option>White / M</option>
                <option>White / L</option>
                <option>White / XL</option>
              </select>
            </div>
            <div className="tf-product-bundle-price">
              <div className="compare-at-price">$10.00</div>
              <div className="price-on-sale">$8.00</div>
            </div>
          </div>
        </div>
        <div className="tf-bundle-product-item item-has-checkox check mb_15">
          <div className="tf-bundle-check align-self-center">
            <input type="checkbox" defaultChecked="checked" id="bundle-ck-2" />
            <label htmlFor="bundle-ck-2" className="">
              <i className="icon-check" />
            </label>
          </div>
          <div className="tf-product-bundle-image">
            <a href="#">
              <Image
                alt=""
                src="/images/shop/products/hmgoepprod.jpg"
                width={713}
                height={1070}
              />
            </a>
          </div>
          <div className="tf-product-bundle-infos">
            <a href="#" className="tf-product-bundle-title">
              Oversized Motif T-shirt
            </a>
            <div className="tf-product-bundle-price">
              <div className="price">$25.00</div>
            </div>
          </div>
        </div>
        <div className="tf-bundle-product-item item-has-checkox check">
          <div className="tf-bundle-check align-self-center">
            <input type="checkbox" defaultChecked="checked" id="bundle-ck-3" />
            <label htmlFor="bundle-ck-3" className="">
              <i className="icon-check" />
            </label>
          </div>
          <div className="tf-product-bundle-image">
            <a href="#">
              <Image
                alt=""
                src="/images/shop/products/hmgoepprod2.jpg"
                width={713}
                height={1070}
              />
            </a>
          </div>
          <div className="tf-product-bundle-infos">
            <a href="#" className="tf-product-bundle-title">
              Oversized Printed T-shirt
            </a>
            <div className="tf-product-bundle-variant position-relative">
              <select className="tf-select">
                <option>Beige / S</option>
                <option>Beige / M</option>
                <option>Beige / L</option>
                <option>Beige / XL</option>
                <option>Black / S</option>
                <option>Black / M</option>
                <option>Black / L</option>
                <option>Black / XL</option>
                <option>Blue / S</option>
                <option>Blue / M</option>
                <option>Blue / L</option>
                <option>Blue / XL</option>
                <option>White / S</option>
                <option>White / M</option>
                <option>White / L</option>
                <option>White / XL</option>
              </select>
            </div>
            <div className="tf-product-bundle-price">
              <div className="price">$18.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-product-bundle-total-submit">
        <span className="text">Total price:</span>
        <div className="compare-at-price">$51.00 USD</div>
        <div className="price-on-sale">$53.00 USD</div>
      </div>
      <a
        href="#"
        className="tf-btn w-100 radius-3 justify-content-center btn-primary animate-hover-btn"
      >
        Add selected to cart
      </a>
    </form>
  );
}
