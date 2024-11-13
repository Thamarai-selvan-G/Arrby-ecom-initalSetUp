import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CollectionBanner() {
  return (
    <section>
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-6">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/kid_cls_1.jpg"
              alt="collection-img"
              src="/images/collections/kid_cls_1.jpg"
              width={800}
              height={598}
            />
          </div>
          <div
            className="tf-content-wrap text-center w-100 wow fadeInUp"
            data-wow-delay="0s"
          >
            <span className="sub-heading text-uppercase fw-7">
              SUMMER SALE 30% OFF
            </span>
            <div className="heading">Winter-to-Spring</div>
            <p className="description">
              Shop our luxury silk button-up blouses made with ultra-soft,
              <br className="d-none d-xl-block" />
              washable silk.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill radius-60 animate-hover-btn"
            >
              Shop collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
