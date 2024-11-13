import React from "react";
import Link from "next/link";
import CartLength from "../common/CartLength";
import WishlistLength from "../common/WishlistLength";
export default function ToolbarBottom() {
  return (
    <div className="tf-toolbar-bottom type-1150">
      <div className="toolbar-item active">
        <a
          href="#toolbarShopmb"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasLeft"
        >
          <div className="toolbar-icon">
            <i className="icon-shop" />
          </div>
          <div className="toolbar-label">Shop</div>
        </a>
      </div>
      <div className="toolbar-item">
        <a
          href="#canvasSearch"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasLeft"
        >
          <div className="toolbar-icon">
            <i className="icon-search" />
          </div>
          <div className="toolbar-label">Search</div>
        </a>
      </div>
      <div className="toolbar-item">
        <a href="#login" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-account" />
          </div>
          <div className="toolbar-label">Account</div>
        </a>
      </div>
      <div className="toolbar-item">
        <Link href={`/wishlist`}>
          <div className="toolbar-icon">
            <i className="icon-heart" />
            <div className="toolbar-count">
              <WishlistLength />
            </div>
          </div>
          <div className="toolbar-label">Wishlist</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <a href="#shoppingCart" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-bag" />
            <div className="toolbar-count">
              <CartLength />
            </div>
          </div>
          <div className="toolbar-label">Cart</div>
        </a>
      </div>
    </div>
  );
}
