"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
export default function ProductCard15({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const slide = product;
  return (
    <div
      className={` ${
        product.populer
          ? "card-product style-price bg_blue-6 radius-10 overflow-hidden "
          : "card-product style-price bg_grey-12 radius-10 overflow-hidden"
      }`}
    >
      <div className="card-product-wrapper rounded-0">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt="image-product"
            width={533}
            height={399}
          />
          <Image
            className="lazyload img-hover"
            src={slide.imgHoverSrc}
            alt="image-product"
            width={533}
            height={399}
          />
        </Link>
        <div
          className={`list-product-btn absolute-2 ${
            !product.populer ? "style-blue" : ""
          }`}
        >
          <a
            href="#quick_add"
            onClick={() => setQuickAddItem(slide.id)}
            data-bs-toggle="modal"
            className="box-icon quick-add tf-btn-loading"
          >
            <span className="icon icon-bag" />
            <span className="tooltip">Quick Add</span>
          </a>
          <a
            onClick={() => addToWishlist(slide.id)}
            className="box-icon wishlist btn-icon-action"
          >
            <span
              className={`icon icon-heart ${
                isAddedtoWishlist(slide.id) ? "added" : ""
              }`}
            />
            <span className="tooltip">
              {isAddedtoWishlist(slide.id)
                ? "Already Wishlisted"
                : "Add to Wishlist"}
            </span>
            <span className="icon icon-delete" />
          </a>
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
            onClick={() => addToCompareItem(product.id)}
            className="box-icon compare btn-icon-action"
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
            onClick={() => setQuickViewItem(slide)}
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
          >
            <span className="icon icon-view" />
            <span className="tooltip">Quick View</span>
          </a>
        </div>
        <div className="on-sale-wrap text-end">
          <div
            className={`on-sale-item  fw-7 fs-12 
              ${product.populer ? "best-seller" : ""} 
              ${product.new ? "new" : ""} 
              ${product.recommend ? "recommend" : ""} 
            `}
          >
            {" "}
            {product.populer ? "Best Seller !" : ""}
            {product.recommend ? "Recommend !" : ""}
            {product.new ? "New !" : ""}
          </div>
        </div>
      </div>
      <div className="card-product-info">
        <Link href={`/shop-collection-list`} className="vendor fw-7 link">
          {slide.vendor}
        </Link>
        <Link
          href={`/product-detail/${product.id}`}
          className="title fw-7 link"
        >
          {slide.title}
        </Link>
        <ul className="list-color-product">
          {slide.colors.map((color, colorIndex) => (
            <li
              key={colorIndex}
              className={`list-color-item color-swatch ${
                currentImage == color.imgSrc ? "active" : ""
              }  `}
              onMouseOver={() => setCurrentImage(color.imgSrc)}
            >
              <span className="tooltip">{color.name}</span>
              <span className={`swatch-value ${color.colorClass}`} />
              <Image
                className="lazyload"
                src={color.imgSrc}
                alt="image-product"
                width={533}
                height={399}
              />
            </li>
          ))}
        </ul>
        <div className="price">${slide.price.toFixed(2)}</div>
      </div>
      <div className="tf-price-table-contents">
        <ul>
          {slide.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="fw-5 fs-16">
              <i className="icon icon-check" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="tf-price-table-btn text-center">
          <Link
            href={`/product-detail/${product.id}`}
            className={` ${
              product.populer
                ? "tf-btn btn-md radius-3 fw-7 btn-icon animate-hover-btn bg_white"
                : "tf-btn btn-md radius-3 fw-7 bg_blue-6 btn-fill btn-icon animate-hover-btn"
            }`}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
