"use client";
import React, { useState } from "react";

export default function Pagination2() {
  // State to track the active page
  const [activePage, setActivePage] = useState(1);

  // Function to handle page click
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <li className={activePage === 1 ? "active" : ""}>
        <div className="pagination-item" onClick={() => handlePageClick(1)}>
          1
        </div>
      </li>
      <li className={activePage === 2 ? "active" : ""}>
        <a
          className="pagination-item animate-hover-btn"
          onClick={() => handlePageClick(2)}
        >
          2
        </a>
      </li>
      <li className={activePage === 3 ? "active" : ""}>
        <a
          className="pagination-item animate-hover-btn"
          onClick={() => handlePageClick(3)}
        >
          3
        </a>
      </li>
      <li>
        <a
          onClick={() => setActivePage((pre) => (pre != 3 ? pre + 1 : pre))}
          className="pagination-item animate-hover-btn"
        >
          <i className="icon-arrow-right" />
        </a>
      </li>
    </>
  );
}
