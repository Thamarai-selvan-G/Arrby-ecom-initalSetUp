"use client";
import ProductCard17 from "@/components/shopCards/ProductCard17";
import { products23 } from "@/data/products";
import React, { useEffect, useState } from "react";
const tabs = ["NEW RELEASES", "BEST SELLERS"];
export default function Products() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(products23);
  useEffect(() => {
    setFiltered(
      [...products23].filter((el) => el.filterCategories.includes(activeTab))
    );
  }, [activeTab, products23]);
  return (
    <section className="flat-spacing-1 pb_0">
      <div className="">
        <div className="flat-animate-tab">
          <ul
            className="widget-tab-3 d-flex justify-content-center wow fadeInUp"
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
            <div
              className="tab-pane active show"
              id="newReleases"
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 md-col-3 gap-0">
                {filtered.map((product) => (
                  <ProductCard17 key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
