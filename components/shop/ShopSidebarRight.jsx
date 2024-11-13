"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { layouts, sortingOptions } from "@/data/shop";
import ProductGrid from "./ProductGrid";
import Pagination from "../common/Pagination";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";

export default function ShopSidebarRight() {
  const [gridItems, setGridItems] = useState(3);
  const [products, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  return (
    <>
      <section className="flat-spacing-1">
        <div className="container">
          <div className="tf-shop-control grid-3 align-items-center">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter"></span>
                <span className="text">Filter</span>
              </a>
            </div>
            <ul className="tf-control-layout d-flex justify-content-center">
              {layouts.slice(0, 3).map((layout, index) => (
                <li
                  key={index}
                  className={`tf-view-layout-switch ${layout.className} ${
                    gridItems == layout.dataValueGrid ? "active" : ""
                  }`}
                  onClick={() => setGridItems(layout.dataValueGrid)}
                >
                  <div className="item">
                    <span className={`icon ${layout.iconClass}`} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="tf-control-sorting d-flex justify-content-end">
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <Sorting setFinalSorted={setFinalSorted} products={products} />
              </div>
            </div>
          </div>
          <div className="tf-row-flex">
            <div className="tf-shop-content">
              <ProductGrid allproducts={finalSorted} gridItems={gridItems} />
              {/* pagination */}{" "}
              {finalSorted.length ? (
                <ul className="tf-pagination-wrap tf-pagination-list">
                  <Pagination />
                </ul>
              ) : (
                ""
              )}
            </div>{" "}
            <Sidebar />
          </div>
        </div>
      </section>
      <div className="btn-sidebar-style2">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarmobile"
          aria-controls="offcanvas"
        >
          <i className="icon icon-sidebar-2" />
        </button>
      </div>
      <ShopFilter setProducts={setProducts} />
    </>
  );
}
