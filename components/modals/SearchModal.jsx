"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tfLoopItems } from "@/data/products";
export default function SearchModal() {
  return (
    <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
      <div className="canvas-wrapper">
        <header className="tf-search-head">
          <div className="title fw-5">
            Search our site
            <div className="close">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div>
          <div className="tf-search-sticky">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="tf-mini-search-frm"
            >
              <fieldset className="text">
                <input
                  type="text"
                  placeholder="Search"
                  className=""
                  name="text"
                  tabIndex={0}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <button className="" type="submit">
                <i className="icon-search" />
              </button>
            </form>
          </div>
        </header>
        <div className="canvas-body p-0">
          <div className="tf-search-content">
            <div className="tf-cart-hide-has-results">
              <div className="tf-col-quicklink">
                <div className="tf-search-content-title fw-5">Quick link</div>
                <ul className="tf-quicklink-list">
                  <li className="tf-quicklink-item">
                    <Link href={`/shop-default`} className="">
                      Fashion
                    </Link>
                  </li>
                  <li className="tf-quicklink-item">
                    <Link href={`/shop-default`} className="">
                      Men
                    </Link>
                  </li>
                  <li className="tf-quicklink-item">
                    <Link href={`/shop-default`} className="">
                      Women
                    </Link>
                  </li>
                  <li className="tf-quicklink-item">
                    <Link href={`/shop-default`} className="">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tf-col-content">
                <div className="tf-search-content-title fw-5">
                  Need some inspiration?
                </div>
                <div className="tf-search-hidden-inner">
                  {tfLoopItems.map((product, index) => (
                    <div className="tf-loop-item" key={index}>
                      <div className="image">
                        <Link href={`/product-detail/${product.id}`}>
                          <Image
                            alt={product.imgAlt}
                            src={product.imgSrc}
                            width={product.imgWidth}
                            height={product.imgHeight}
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href={`/product-detail/${product.id}`}>
                          {product.title}
                        </Link>
                        <div className="tf-product-info-price">
                          {product.isOnSale ? (
                            <>
                              <div className="compare-at-price">
                                ${product.compareAtPrice.toFixed(2)}
                              </div>
                              <div className="price-on-sale fw-6">
                                ${product.salePrice.toFixed(2)}
                              </div>
                            </>
                          ) : (
                            <div className="price fw-6">
                              ${product.price.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
