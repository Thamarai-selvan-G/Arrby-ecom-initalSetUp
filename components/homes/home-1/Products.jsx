"use client";
import { products1 } from "@/data/products";
import React, { useState } from "react";
import { ProductCard } from "../../shopCards/ProductCard";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [allproducts, setAllproducts] = useState([...products1]);
  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setAllproducts((pre) => [...pre, ...products1.slice(0, 12)]);
      setLoading(false);
      setLoaded(true);
    }, 1000);
  };

  return (
    <section className="flat-spacing-5 pt_0 flat-seller">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Best Seller
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Shop the Latest Styles: Stay ahead of the curve with our newest
            arrivals
          </p>
        </div>
        <div
          className="grid-layout wow fadeInUp"
          data-wow-delay="0s"
          data-grid="grid-4"
        >
          {allproducts.map((product, i) => (
            <ProductCard product={product} key={i} />
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
    </section>
  );
}
