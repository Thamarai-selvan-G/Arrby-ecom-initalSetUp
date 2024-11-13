"use client";
import { products31 } from "@/data/products";
import React from "react";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import Image from "next/image";
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
    <section className="flat-spacing-5 pt_0">
      <div className="container-full">
        <div className="flat-title">
          <p
            className="sub-title wow fadeInUp letter-2 text-14 text_black-3 fw-6"
            data-wow-delay="0s"
          >
            HANDBAG
          </p>
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best Selling
          </span>
        </div>
        <div className="tf-grid-layout tf-col-2 md-col-3 gap-0">
          {products31.map((product, index) => (
            <div
              key={index}
              className={`card-product type-line-padding-2 ${
                index % 2 === 0 ? "" : "border-start-0"
              } ${index % 3 === 2 ? "border-start-md-0" : ""}`}
            >
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
                    width={668}
                    height={668}
                  />
                  <Image
                    className="lazyload img-hover"
                    data-src={product.imgHoverSrc}
                    alt="image-product"
                    src={product.imgHoverSrc}
                    width={668}
                    height={668}
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
              <div className="card-product-info text-center">
                <Link
                  href={`/product-detail/${product.id}`}
                  className="title link fw-5 text-14"
                >
                  {product.title}
                </Link>
                <span className="price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pagination-wrap-spacing">
          <Link
            href={`/shop-collection-sub`}
            className="tf-btn btn-outline-2 rounded-0 btn-md animate-hover-btn letter-2"
          >
            VIEW ALL BEST SELLER
          </Link>
        </div>
      </div>
    </section>
  );
}
