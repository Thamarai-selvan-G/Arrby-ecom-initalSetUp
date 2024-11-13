"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function ProductCard21({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  const {
    setQuickViewItem,
    quickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    isAddedtoCompareItem,
  } = useContextElement();
  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div className="card-product fl-item">
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${product.id}`} className="product-img">
          <Image
            className="lazyload img-product"
            data-src={product.imgSrc}
            alt="image-product"
            src={currentImage}
            width={720}
            height={1005}
          />
          <Image
            className="lazyload img-hover"
            data-src={product.imgHoverSrc}
            alt="image-product"
            src={product.imgHoverSrc}
            width={720}
            height={1005}
          />
        </Link>
        {!product.preOrder && !product.soldOut && (
          <div className="list-product-btn">
            <a
              href={product.quickAddLink}
              data-bs-toggle="modal"
              onClick={() => quickAddItem(product.id)}
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
              href={product.compareLink}
              data-bs-toggle="offcanvas"
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
            </a>
            <a
              href={product.quickViewLink}
              onClick={() => setQuickViewItem(product)}
              data-bs-toggle="modal"
              className="box-icon bg_white quickview tf-btn-loading"
            >
              <span className="icon icon-view" />
              <span className="tooltip">Quick View</span>
            </a>
          </div>
        )}
        {product.sizes?.length > 0 ? (
          <div className="size-list">
            <span>{product.sizes.join(", ")}</span>
          </div>
        ) : (
          ""
        )}
        {product.preOrder && (
          <div className="on-sale-wrap text-end">
            <div className="on-sale-item pre-order">{"Pre-Order"}</div>
          </div>
        )}
        {product.soldOut && (
          <div className="sold-out">
            <span>Sold out</span>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <Link href={`/product-detail/${product.id}`} className="title link">
          {" "}
          Regular Fit Oxford Shirt{" "}
        </Link>
        <span className="price">
          {product.oldPrice && (
            <span className="old-price">{product.oldPrice}</span>
          )}
          <span className="new-price">
            ${product.price.toFixed(2) || product.price.toFixed(2)}
          </span>
        </span>
        <ul className="list-color-product">
          {product.colors?.map((color, index) => (
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
                data-src={color.imgSrc}
                alt="image-product"
                src={color.imgSrc}
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
