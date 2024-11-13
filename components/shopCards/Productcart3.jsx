"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "../common/Countdown";
export default function Productcart3({ product }) {
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
    <div className="card-product style-3" key={product.id}>
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            data-src={product.imgSrc}
            src={currentImage}
            alt="image-product"
            width="720"
            height="1005"
          />
          <Image
            className="lazyload img-hover"
            data-src={product.imgHoverSrc}
            src={product.imgHoverSrc}
            alt="image-product"
            width="720"
            height="1005"
          />
        </Link>
        <div className="list-product-btn column-right">
          <a
            onClick={() => addToWishlist(product.id)}
            className="box-icon bg_white wishlist btn-icon-action"
          >
            <span
              className={`icon icon-heart ${
                isAddedtoWishlist(product.id) ? "added" : ""
              }`}
            ></span>
            <span className="tooltip">
              {isAddedtoWishlist(product.id)
                ? "Already Wishlisted"
                : "Add to Wishlist"}
            </span>
            <span className="icon icon-delete"></span>
          </a>
          <a
            data-bs-toggle="offcanvas"
            href="#compare"
            aria-controls="offcanvasLeft"
            onClick={() => addToCompareItem(product.id)}
            className="box-icon bg_white compare btn-icon-action"
          >
            <span
              className={`icon icon-compare ${
                isAddedtoCompareItem(product.id) ? "added" : ""
              }`}
            ></span>
            <span className="tooltip">
              {isAddedtoCompareItem(product.id)
                ? "Already Compared"
                : "Add to Compare"}
            </span>
            <span className="icon icon-check"></span>
          </a>
          <a
            href="#quick_view"
            onClick={() => setQuickViewItem(product)}
            data-bs-toggle="modal"
            className="box-icon bg_white quickview tf-btn-loading"
          >
            <span className="icon icon-view"></span>
            <span className="tooltip">Quick View</span>
          </a>
        </div>
        <div className="list-product-btn absolute-3">
          <a
            href="#quick_add"
            onClick={() => setQuickAddItem(product.id)}
            data-bs-toggle="modal"
            className="box-icon quick-add style-2"
          >
            <span className="icon icon-bag"></span>
            <span className="text">QUICK ADD</span>
          </a>
        </div>
        {product.sizes && (
          <div className="size-list style-2">
            {product.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        )}
        {product.discount && (
          <div className="on-sale-wrap text-end">
            <div className="on-sale-item">{product.discount}</div>
          </div>
        )}
        {product.countdown && (
          <div className="countdown-box">
            <div className="js-countdown">
              <CountdownComponent labels={product.countdown.labels} />
            </div>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <Link href={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
        <span className="price">${product.price.toFixed(2)}</span>
        {product.colors && (
          <ul className="list-color-product">
            {product.colors.map((color) => (
              <li
                className={`list-color-item color-swatch ${
                  currentImage == color.imgSrc ? "active" : ""
                }  `}
                onMouseOver={() => setCurrentImage(color.imgSrc)}
                key={color.name}
              >
                <span className="tooltip">{color.name}</span>
                <span
                  className={`swatch-value ${color.colorClass} ${color.bgClass}`}
                />
                <Image
                  className="lazyload"
                  data-src={color.imgSrc}
                  src={color.imgSrc}
                  alt="image-product"
                  width={720}
                  height={1005}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
