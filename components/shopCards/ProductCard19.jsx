"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
export default function ProductCard19({ product, white = true }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const {
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <div className="card-product style-brown">
      <div className="card-product-wrapper rounded-0">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt="image-product"
            width={720}
            height={1005}
          />
          <Image
            className="lazyload img-hover"
            src={product.imgHoverSrc}
            alt="image-product"
            width={720}
            height={1005}
          />
        </Link>
        <div className="list-product-btn absolute-2">
          <a
            href="#shoppingCart"
            data-bs-toggle="modal"
            className="box-icon quick-add tf-btn-loading"
            onClick={() => addProductToCart(product.id)}
          >
            <span className="icon icon-bag" />
            <span className="tooltip">
              {isAddedToCartProducts(product.id)
                ? "Already Added"
                : "Add to cart"}
            </span>
          </a>
          <a
            onClick={() => addToWishlist(product.id)}
            className="box-icon wishlist btn-icon-action"
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
            onClick={() => setQuickViewItem(product)}
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
          >
            <span className="icon icon-view" />
            <span className="tooltip">Quick View</span>
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.id}`}
          className={`title link font-poppins ${white ? "text-white" : ""}`}
        >
          {product.title}
        </Link>
        <span className={`price font-poppins ${white ? "text-white" : ""}`}>
          ${product.price.toFixed(2)}
        </span>
        <ul className="list-color-product">
          {product.colors.map((color, index) => (
            <li
              key={index}
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
                width={720}
                height={1005}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
