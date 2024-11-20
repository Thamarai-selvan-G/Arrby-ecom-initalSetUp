"use client";
import React from "react";
import Link from "next/link";
import { navItems } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();

  // Function to check if the current menu item is active
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] === pathname.split("/")[1]) {
        active = true;
      }
    }
    return active;
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop-collection-list" },
    { label: "Fashion", href: "/fashion" },
    { label: "Fragrance", href: "/fragrance" },
    { label: "Footwear", href: "/footwear" },
    { label: "Cosmetics", href: "/cosmetics" },
  ];

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {navItems.map((item, i) => (
              <li key={i} className="nav-mb-item">
                <Link
                  href={item.href}
                  className={`mb-menu-link ${
                    isMenuActive(item) ? "activeMenu" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mb-other-content">
            <div className="d-flex group-icon">
              <Link href={`/wishlist`} className="site-nav-icon">
                <i className="icon icon-heart" />
                Wishlist
              </Link>
              <Link href={`/home-search`} className="site-nav-icon">
                <i className="icon icon-search" />
                Search
              </Link>
            </div>
            <div className="mb-notice">
              <Link href={`/contact-1`} className="text-need">
                Need help ?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                Address: 1234 Fashion Street, Suite 567, <br />
                New York, NY 10001
              </li>
              <li>
                Email: <b>info@fashionshop.com</b>
              </li>
              <li>
                Phone: <b>(212) 555-1234</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <Link href={`/login`} className="site-nav-icon">
            <i className="icon icon-account" />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
