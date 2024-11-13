"use client";
import { filterData, labels } from "@/data/brandList";
import { useEffect, useState } from "react";

export default function Brands() {
  const [currentTitle, setCurrentTitle] = useState("all");
  const [selected, setselected] = useState([]);
  useEffect(() => {
    if (currentTitle.toLowerCase() == "all") {
      setselected(filterData);
    } else {
      setselected(
        [...filterData].filter(
          (elm) => elm.title.toLowerCase() == currentTitle.toLowerCase()
        )
      );
    }
  }, [currentTitle]);

  return (
    <section className="flat-spacing-1">
      <div className="container tf-brands-filter-wrap">
        <div className="tf-brands-filter">
          {labels.map((filter, index) => (
            <button
              key={index}
              onClick={() => setCurrentTitle(filter.title)}
              className={`tf-btns-filter tf-tab-link ${
                currentTitle?.toLowerCase() == filter.title.toLowerCase()
                  ? "is--active"
                  : ""
              } ${filter.isDisabled ? "is-disable" : ""}`}
              id={`tf_filter_${filter.title}`}
            >
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
        <div id="parent" className="tf-brands-source-linklist d-grid">
          {selected.map((filter, index) => (
            <div
              className={`tf_filter_${filter.title.toLowerCase()} tf-filter-item tf-tab-content ${
                filter.brands.length === 0 ? "is-disable" : ""
              }`}
              key={index}
            >
              <div className="tf-filter-item-inner">
                <div className="tf-titles-filter">
                  <h4 className="tf-font-normal">{filter.title}</h4>
                </div>
                <div className="tf-content-brands">
                  {filter.brands.map((brand, idx) => (
                    <div className="tf-item-inner" key={idx}>
                      <a href={brand.href}>{brand.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
