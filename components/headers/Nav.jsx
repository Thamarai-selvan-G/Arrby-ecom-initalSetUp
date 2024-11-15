"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "" }) {
  const pathname = usePathname();

  // Function to check if the current menu item is active
  const isMenuActive = (menuItem) => {
    let active = false;

    // Check if the menu item is a link and matches the current path
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] === pathname.split("/")[1]) {
        active = true;
      }
    }

    // Check for submenus (if the menuItem is an array of items)
    if (menuItem.length) {
      active = menuItem.some(
        (elm) => elm.href?.split("/")[1] === pathname.split("/")[1]
      );
    }

    return active;
  };

  return (
    <>
      <li className="menu-item">
        <Link
          href="/"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/" }) ? "activeMenu" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/shop-collection-list" 
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/shop-collection-list" }) ? "activeMenu" : "" 
          }`}
        >
          Shop
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/fashion"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/fashion" }) ? "activeMenu" : ""
          }`}
        >
          Fashion
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/fragrance"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/fragrance" }) ? "activeMenu" : ""
          }`}
        >
          Fragrance
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/footwear"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/footwear" }) ? "activeMenu" : ""
          }`}
        >
          Footwear
        </Link>
      </li>
      <li className="menu-item">
        <Link
          href="/cosmetics"
          className={`item-link ${Linkfs} ${textColor} ${
            isMenuActive({ href: "/cosmetics" }) ? "activeMenu" : ""
          }`}
        >
          Cosmetics
        </Link>
      </li>
    </>
  );
}
