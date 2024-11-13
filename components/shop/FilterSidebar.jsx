"use client";
import { layouts } from "@/data/shop";
import ProductGrid from "./ProductGrid";
import { useState } from "react";

import SidebarFilter from "./SidebarFilter";

import Pagination from "../common/Pagination";
import Sorting from "./Sorting";

export default function FilterSidebar() {
  const [gridItems, setGridItems] = useState(3);
  const [products, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  return (
    <>
      <section className="flat-spacing-1">
        <div className="container">
          <div className="tf-shop-control grid-3 align-items-center">
            <div />
            <ul className="tf-control-layout d-flex justify-content-center">
              {layouts.map((layout, index) => (
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
            <SidebarFilter setProducts={setProducts} />
            <div className="tf-shop-content wrapper-control-shop">
              <div className="meta-filter-shop" />
              <ProductGrid allproducts={finalSorted} gridItems={gridItems} />
              {/* pagination */}{" "}
              {finalSorted.length ? (
                <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                  <Pagination />
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="btn-sidebar-mobile start-0">
        <a
          href="#sidebarmobile"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasLeft"
        >
          <button className="type-hover">
            <i className="icon-open" />
            <span className="fw-5">Open sidebar</span>
          </button>
        </a>
      </div>
    </>
  );
}
