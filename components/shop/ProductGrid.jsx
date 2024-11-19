import React from "react";
import { ProductCard } from "../shopCards/ProductCard";

export default function ProductGrid({ allproducts, gridItems }) {
 
  return (
    <>
      <div
        style={{
          width: "fit-content",
          margin: "0  auto",
          fontSize: "17px",
          marginBottom: "24px",
        }}
      >
        {allproducts.length} product(s) found
      </div>
      <div className="grid-layout wrapper-shop" data-grid={`grid-${gridItems}`}>
        {/* card product 1 */}
        {allproducts.map((elm) => (
          <ProductCard product={elm} key={elm.id} />
        ))}
      </div>
    </>
  );
}
