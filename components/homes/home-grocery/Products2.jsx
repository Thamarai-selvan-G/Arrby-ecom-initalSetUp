"use client";
import { useContextElement } from "@/context/Context";
import { products48 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products2() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const tabs = ["Meat", "Oils", "Tomatoes", , "Soup"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(products48);
  useEffect(() => {
    setFiltered(
      [...products48].filter((el) => el.filterCategories.includes(activeTab))
    );
  }, [activeTab, products48]);
  return (
    <section className="flat-spacing-5 pt_0">
      <div className="container">
        <div className="flat-animate-tab">
          <div className="flat-title flat-title-tab flex-row justify-content-between px-0">
            <span
              className="title text-nowrap fw-6 wow fadeInUp"
              data-wow-delay="0s"
            >
              Popular products
            </span>
            <ul className="widget-tab-5" role="tablist">
              {tabs.map((tab, index) => (
                <li
                  onClick={() => setActiveTab(tab)}
                  className="nav-tab-item"
                  role="presentation"
                  key={index}
                >
                  <a className={activeTab === tab ? "active" : ""}>{tab}</a>
                </li>
              ))}
              <li className="nav-tab-item">
                <Link
                  href={`/shop-collection-sub`}
                  className="d-flex align-items-center gap-10"
                >
                  Shop all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="meat" role="tabpanel">
              <div className="tf-grid-layout tf-col-2 lg-col-4">
                {filtered.map((product, index) => (
                  <div key={index} className="card-product style-9">
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
                          width={360}
                          height={360}
                        />
                        <Image
                          className="lazyload img-hover"
                          data-src={product.imgHoverSrc}
                          alt="image-product"
                          src={product.imgHoverSrc}
                          width={360}
                          height={360}
                        />
                      </Link>
                      <div className="list-product-btn absolute-2">
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
                            {" "}
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
                          onClick={() => setQuickViewItem(product)}
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <div className="inner-info">
                        <Link
                          href={`/product-detail/${product.id}`}
                          className="title link fw-6"
                        >
                          {product.title}
                        </Link>
                        <span className="price fw-6">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="list-product-btn">
                        <a
                          href="#quick_add"
                          onClick={() => setQuickAddItem(product.id)}
                          data-bs-toggle="modal"
                          className="box-icon quick-add tf-btn-loading"
                        >
                          <span className="icon icon-bag" />
                          <span className="tooltip">Add to cart</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
