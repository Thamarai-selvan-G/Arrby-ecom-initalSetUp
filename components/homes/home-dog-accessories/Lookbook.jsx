import React from "react";
import Image from "next/image";
import Link from "next/link";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
export default function Lookbook() {
  return (
    <section>
      <div className="container">
        <div className="wrap-lookbook lookbook-dog">
          <div className="image radius-10 o-hidden">
            <Image
              className="lazyload"
              data-src="/images/shop/file/lookbook-10.jpg"
              alt="image-lookbook"
              src="/images/shop/file/lookbook-10.jpg"
              width={1400}
              height={686}
            />
          </div>
          <div className="lookbook-item item-1">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[3]} />
                </ul>
              </div>
            </div>
          </div>
          <div className="lookbook-item item-2">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[4]} />
                </ul>
              </div>
            </div>
          </div>
          <div className="lookbook-item item-3">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[5]} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
