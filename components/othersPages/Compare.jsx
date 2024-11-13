"use client";
import { useContextElement } from "@/context/Context";
import { allProducts, products1 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Compare() {
  const { setQuickViewItem } = useContextElement();
  const { setQuickAddItem } = useContextElement();

  const { removeFromCompareItem, compareItem, setCompareItem } =
    useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([...allProducts.filter((elm) => compareItem.includes(elm.id))]);
  }, [compareItem]);

  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div>
          <div className="tf-compare-table">
            <div className="tf-compare-row tf-compare-grid">
              <div className="tf-compare-col d-md-block d-none" />

              {items.map((elm, i) => (
                <div key={i} className="tf-compare-col">
                  <div className="tf-compare-item">
                    <div
                      className="tf-compare-remove link"
                      onClick={() => removeFromCompareItem(elm.id)}
                    >
                      Remove
                    </div>
                    <Link
                      className="tf-compare-image"
                      href={`/product-detail/${elm.id}`}
                    >
                      <Image
                        className="lazyload"
                        data-src={elm.imgSrc}
                        alt="img-compare"
                        width={713}
                        height={1070}
                        src={elm.imgSrc}
                      />
                    </Link>
                    <Link
                      className="tf-compare-title"
                      href={`/product-detail/${elm.id}`}
                    >
                      {elm.title}
                    </Link>
                    <div className="price">
                      <span className="price-on-sale">
                        ${elm.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="tf-compare-group-btns d-flex gap-10">
                      <a
                        href="#quick_view"
                        data-bs-toggle="modal"
                        className="tf-btn btn-outline-dark radius-3"
                        onClick={() => setQuickViewItem(elm)}
                      >
                        <i className="icon icon-view" />
                        <span>QUICK VIEW</span>
                      </a>
                      <a
                        href="#quick_add"
                        data-bs-toggle="modal"
                        className="tf-btn btn-outline-dark radius-3"
                        onClick={() => setQuickAddItem(elm.id)}
                      >
                        <i className="icon icon-bag" />
                        <span>QUICK ADD</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tf-compare-row tf-compare-grid">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Availability</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  className="tf-compare-col tf-compare-field tf-compare-stock"
                  style={{ flex: 1 }}
                >
                  <div className="icon">
                    <i className="icon-check" />
                  </div>
                  <span className="fw-5">In Stock</span>
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Vendor</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  className="tf-compare-col tf-compare-value text-center"
                  style={{ flex: 1 }}
                >
                  Ecomus
                </div>
              ))}
            </div>
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Color</h6>
              </div>
              {items.map((elm, i) => (
                <div
                  className="tf-compare-col tf-compare-value text-center"
                  style={{ flex: 1 }}
                >
                  Grey, Pink, Light Pink, White
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
