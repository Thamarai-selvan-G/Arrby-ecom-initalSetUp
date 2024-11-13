import React from "react";

export default function SidebarToggler() {
  return (
    <div className="btn-sidebar-mobile d-flex start-0">
      <button
        className="type-hover"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarmobile"
        aria-controls="offcanvasRight"
      >
        <i className="icon-open" />
        <span className="fw-5">Open sidebar</span>
      </button>
    </div>
  );
}
