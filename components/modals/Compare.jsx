"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";
export default function Compare() {
  const { removeFromCompareItem, compareItem, setCompareItem } =
    useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([...allProducts.filter((elm) => compareItem.includes(elm.id))]);
  }, [compareItem]);

  return (
    <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="close-popup">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </header>
        <div className="canvas-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tf-compare-list">
                  <div className="tf-compare-head">
                    <div className="title">Compare Products</div>
                  </div>
                  <div className="tf-compare-offcanvas">
                    {items.map((elm, i) => (
                      <div key={i} className="tf-compare-item">
                        <div className="position-relative">
                          <div
                            className="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => removeFromCompareItem(elm.id)}
                          >
                            <i className="icon-close" />
                          </div>
                          <Link href={`/product-detail/${elm.id}`}>
                            <Image
                              className="radius-3"
                              alt=""
                              src={elm.imgSrc}
                              style={{ objectFit: "contain" }}
                              width={720}
                              height={1005}
                            />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tf-compare-buttons">
                    <div className="tf-compare-buttons-wrap">
                      <Link
                        href={`/compare`}
                        className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn"
                      >
                        Compare
                      </Link>
                      <div
                        className="tf-compapre-button-clear-all link"
                        onClick={() => setCompareItem([])}
                      >
                        Clear All
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
