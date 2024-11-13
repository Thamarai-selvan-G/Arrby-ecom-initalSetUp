import React from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
export default function Topbar4() {
  return (
    <div className="tf-top-bar bg_grey-7">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <ul className="d-flex gap-20">
              <li>
                <Link href={`/contact-1`} className="fw-5">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/blog-grid`} className="fw-5">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`#`} className="fw-5">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center overflow-hidden">
            <div
              className="swiper tf-sw-top_bar"
              data-preview={1}
              data-space={0}
              data-loop="true"
              data-speed={1000}
              data-delay={2000}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5">
                    Spring Sale: Sweet Crunchy Salad.
                    <Link
                      href={`/shop-default`}
                      title="all collection"
                      className="tf-btn btn-line"
                    >
                      {" "}
                      Shop now
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </p>
                </div>
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5">
                    Summer sale discount off 70%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            <div className="d-inline-block">
              Need help?
              <span className="fw-7">
                Call Us:
                <a
                  href="tel:+18001090"
                  style={{ textDecoration: "underline" }}
                  aria-describedby="external-message"
                >
                  +18001090
                </a>
              </span>
            </div>
            <div className="tf-currencies">
              <CurrencySelect topStart />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages"
                }
                topStart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
