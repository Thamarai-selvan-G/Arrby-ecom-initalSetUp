import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/collection-25.jpg"
              alt="collection-img"
              src="/images/collections/collection-25.jpg"
              width="800"
              height="885"
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <span className="sub-heading text-uppercase fw-7">
              SPRING SALE 30% OFF
            </span>
            <div className="heading">
              Effortless <br />
              Denim Delights
            </div>
            <p className="description">
              Discover the versatility of denim with our collection of jeans,
              jackets
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill radius-3 animate-hover-btn"
            >
              Shop collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
