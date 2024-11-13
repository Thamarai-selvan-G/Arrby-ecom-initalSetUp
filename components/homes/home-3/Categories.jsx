import React from "react";
import Link from "next/link";
export default function Categories() {
  return (
    <section className="flat-spacing-12 bg_orange-4 flat-bg-collection">
      <div className="container">
        <div className="flat-title gap-12">
          <span className="title text-white wow fadeInUp" data-wow-delay="0s">
            Sustainable Style
          </span>
          <p className="sub-title text_white wow fadeInUp" data-wow-delay="0s">
            Better materials. Better quality. Better Price and Better for the
            planet.
          </p>
        </div>
        <div
          className="swiper tf-sw-collection sw-auto wow fadeInUp row align-items-center justify-content-center"
          style={{ rowGap: "20px" }}
        >
          <div className="swiper-slide">
            <Link href={`/shop-default`} className="collection-title-v2">
              New Arrival
            </Link>
          </div>
          <div className="swiper-slide">
            <Link href={`/shop-default`} className="collection-title-v2">
              Men
            </Link>
          </div>
          <div className="swiper-slide">
            <Link href={`/shop-default`} className="collection-title-v2">
              Shoes
            </Link>
          </div>
          <div className="swiper-slide">
            <Link href={`/shop-default`} className="collection-title-v2">
              Women
            </Link>
          </div>
          <div className="swiper-slide">
            <Link href={`/shop-default`} className="collection-title-v2">
              Accessories
            </Link>
          </div>

          <div className="sw-dots dots-white sw-pagination-collection justify-content-center" />
        </div>
        <div
          className="d-flex justify-content-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <Link
            href={`/shop-collection-list`}
            title="all collection"
            className="tf-btn btn-line fw-6 collection-other-link"
          >
            View all categories
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
      </div>
    </section>
  );
}
