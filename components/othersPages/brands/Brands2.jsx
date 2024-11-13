"use client";
import { filterItems, labels } from "@/data/brandList";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const FilterItem = ({ className, title, brands }) => (
  <div className={`tf-filter-item tf-tab-content ${className}`}>
    <div className="tf-filter-item-inner">
      <div className="tf-titles-filter">
        <h4 className="tf-font-normal">{title}</h4>
      </div>
      <div className="tf-content-brands">
        {brands.length === 0 ? (
          <div className="tf-item-inner"></div>
        ) : (
          brands.map((brand, index) => (
            <div className="tf-item-inner" key={index}>
              <Link href={`/shop-default`}>
                <Image alt="" src={brand.imgSrc} width="200" height="106" />
              </Link>
              <Link href={`/shop-default`} target={brand.target || "_self"}>
                {brand.text}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
export default function Brands2() {
  const [currentTitle, setCurrentTitle] = useState("all");
  const [selected, setselected] = useState([]);
  useEffect(() => {
    if (currentTitle.toLowerCase() == "all") {
      setselected(filterItems);
    } else {
      setselected(
        [...filterItems].filter(
          (elm) => elm.title.toLowerCase() == currentTitle.toLowerCase()
        )
      );
    }
  }, [currentTitle]);
  return (
    <section className="flat-spacing-1">
      <div className="container">
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
        <div id="parent" className="tf-brands-source-linklist style-row">
          {selected.map((item, index) => (
            <FilterItem
              key={index}
              className={item.className}
              title={item.title}
              brands={item.brands}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
