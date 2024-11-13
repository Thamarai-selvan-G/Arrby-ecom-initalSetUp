import React from "react";
import Pagination from "../common/Pagination";
import { products1 } from "@/data/products";
import Productcard23 from "../shopCards/Productcard23";

export default function ShopStyleList() {
  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="grid-layout" data-grid="grid-list">
          {/* card product 1 */}
          {products1.map((elm, i) => (
            <Productcard23 product={elm} key={i} pro />
          ))}
          {/* card product 2 */}
        </div>
        {/* pagination */}
        <ul className="tf-pagination-wrap tf-pagination-list">
          <Pagination />
        </ul>
      </div>
    </section>
  );
}
