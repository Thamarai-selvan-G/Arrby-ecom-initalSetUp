"use client";
import { ProductCard } from "@/components/shopCards/ProductCard";
import { products1 } from "@/data/products";
import React from "react";
import Link from "next/link";

export default function Products() {
  return (
    <div className="flat-spacing-8 page-search-inner">
      <div className="tf-search-head">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="tf-mini-search-frm"
        >
          <fieldset className="text">
            <input
              required
              type="text"
              placeholder="Search"
              className=""
              name="text"
              tabIndex={0}
              defaultValue=""
              aria-required="true"
            />
          </fieldset>
          <button className="" type="submit">
            <i className="icon-search" />
          </button>
        </form>
        <div className="tf-col-quicklink">
          <span className="title">Quick link:</span>
          <Link href={`/shop-collection-list`}>Fashion</Link>,
          <Link href={`/home-men`}>Men</Link>,
          <Link href={`/shop-women`}>Women</Link>,
          <Link href={`/shop-collection-sub`}>Accessories</Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf-search-content-title">
              Need some inspiration?
            </div>
          </div>
          {products1.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <ProductCard product={elm} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
