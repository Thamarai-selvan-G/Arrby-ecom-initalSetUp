"use client";
import ProductCard21 from "@/components/shopCards/ProductCard21";
import { products40 } from "@/data/products";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [allproducts, setAllproducts] = useState([...products40]);
  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setAllproducts((pre) => [...pre, ...products40.slice(0, 12)]);
      setLoading(false);
      setLoaded(true);
    }, 1000);
  };
  const tabs = ["Best seller", "Sale", "Graphics", "Jeans"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(allproducts);
  useEffect(() => {
    setFiltered(
      [...allproducts].filter((el) => el.filterCategories.includes(activeTab))
    );
  }, [activeTab, allproducts]);
  return (
    <section className="flat-spacing-17">
      <div className="container">
        <div className="flat-animate-tab">
          <ul
            className="widget-tab-3 style-2 d-flex justify-content-center wow fadeInUp"
            data-wow-delay="0s"
            role="tablist"
          >
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
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show">
              <div className="grid-layout " data-grid="grid-4">
                {filtered.map((product, index) => (
                  <ProductCard21 key={index} product={product} />
                ))}
              </div>
              {!loaded && (
                <div className="tf-pagination-wrap view-more-button text-center">
                  <button
                    className={`tf-btn-loading tf-loading-default style-2 btn-loadmore ${
                      loading ? "loading" : ""
                    } `}
                    onClick={() => handleLoad()}
                  >
                    <span className="text">Load more</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
