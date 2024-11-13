"use client";
import React from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import LookbookComponent from "@/components/common/LookbookComponent";
import { lookbookProducts } from "@/data/products";
export default function Lookbook() {
  const { setQuickViewItem } = useContextElement();
  return (
    <section className="flat-spacing-3">
      <div className="container-full">
        <div className="flat-title">
          <p
            className="sub-title wow fadeInUp letter-2 text-14 text_black-3 fw-6"
            data-wow-delay="0s"
          >
            ALL GOOD THINGS
          </p>
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Shop this look
          </span>
        </div>
        <div className="wrap-lookbook lookbook-handbag">
          <div className="image">
            <Image
              className="lazyload"
              data-src="/images/slider/bg_lookbook.jpg"
              alt="image-lookbook"
              src="/images/slider/bg_lookbook.jpg"
              width={2000}
              height={765}
            />
          </div>
          <div className="lookbook-item item-1">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn pin-black"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[24]} />
                </ul>
              </div>
            </div>
          </div>
          <div className="lookbook-item item-2">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn pin-black"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[25]} />
                </ul>
              </div>
            </div>
          </div>
          <div className="lookbook-item item-3">
            <div className="inner">
              <div className="btn-group dropdown dropup dropdown-center">
                <button
                  className="tf-pin-btn pin-black"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span />
                </button>
                <ul className="dropdown-menu p-0 border-0">
                  <LookbookComponent product={lookbookProducts[26]} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
