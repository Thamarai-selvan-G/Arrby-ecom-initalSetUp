"use client";
import Productcard4 from "@/components/shopCards/Productcart4";
import { products1 } from "@/data/products";
import { useState } from "react";

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
    <section className="flat-spacing-6">
      <div className="container">
        <div className="flat-title mb_1 gap-14">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            New Arrivals
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Shop the Latest Styles: Stay ahead of the curve with our newest
            arrivals
          </p>
        </div>
        <div className="grid-layout" data-grid="grid-4">
          {allproducts.map((product, i) => (
            <Productcard4 product={product} key={i} />
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
