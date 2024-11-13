"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProductCard27({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);
  return (
    <div className="card-product style-8 border-0 bg_grey-11">
      <div className="card-product-wrapper">
        <a href={`/product-detail/${product.id}`} className="product-img">
          <Image
            width={360}
            height={360}
            className="lazyload img-product"
            data-src={product.imgSrc}
            src={currentImage}
            alt={product.alt}
          />
          <Image
            width={360}
            height={360}
            className="lazyload img-hover"
            data-src={product.imgHoverSrc}
            src={product.imgHoverSrc}
            alt={product.alt}
          />
        </a>
        <div className="list-product-btn absolute-2">
          <a
            href="#quick_add"
            data-bs-toggle="modal"
            className="box-icon bg_white quick-add tf-btn-loading"
            onClick={() => setQuickAddItem(product.id)}
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
              {" "}
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
      </div>
      <div className="card-product-info text-center">
        <a href={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </a>
        <span className="price">${product.price.toFixed(2)}</span>
        <ul className="list-color-product justify-content-center">
          {product.colors.map((color, colorIndex) => (
            <li
              key={colorIndex}
              className={`list-color-item color-swatch ${
                currentImage == color.imgSrc ? "active" : ""
              }`}
              onMouseOver={() => setCurrentImage(color.imgSrc)}
            >
              <span className="tooltip">{color.name}</span>
              <span className={`swatch-value ${color.colorClass}`} />
              <Image
                width={360}
                height={360}
                className="lazyload"
                data-src={color.imgSrc}
                src={color.imgSrc}
                alt={product.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
