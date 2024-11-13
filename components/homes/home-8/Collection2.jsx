import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection2() {
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-2">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/collection-65.jpg"
              alt="collection-img"
              src="/images/collections/collection-65.jpg"
              width={600}
              height={448}
            />
          </div>
          <div
            className="tf-content-wrap text-center w-100 wow fadeInUp"
            data-wow-delay="0s"
          >
            <span className="sub-heading text-uppercase fw-7">
              GET YOUR FASHION FIX HERE
            </span>
            <div className="heading">Spring Collections</div>
            <p className="description">
              Shop our luxury silk button-up blouses made with ultra-soft,
              <br className="d-none d-xl-block" />
              washable silk.
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
