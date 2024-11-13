"use client";
import React, { useState } from "react";

export default function Pagination() {
  // State to track the active page
  const [activePage, setActivePage] = useState(1);

  // Function to handle page click
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <li className={activePage === 1 ? "active" : ""}>
        <a className="pagination-link" onClick={() => handlePageClick(1)}>
          1
        </a>
      </li>{" "}
      <li className={activePage === 2 ? "active" : ""}>
        <a
          className="pagination-link animate-hover-btn"
          onClick={() => handlePageClick(2)}
        >
          2
        </a>
      </li>
      <li className={activePage === 3 ? "active" : ""}>
        <a
          className="pagination-link animate-hover-btn"
          onClick={() => handlePageClick(3)}
        >
          3
        </a>
      </li>
      <li className={activePage === 4 ? "active" : ""}>
        <a
          className="pagination-link animate-hover-btn"
          onClick={() => handlePageClick(4)}
        >
          4
        </a>
      </li>
      <li>
        <a
          onClick={() => setActivePage((pre) => (pre !== 4 ? pre + 1 : pre))}
          className="pagination-link animate-hover-btn"
        >
          <span className="icon icon-arrow-right" />
        </a>
      </li>
    </>
  );
}
