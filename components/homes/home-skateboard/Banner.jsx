import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-3 bg_yellow-3 rounded-0">
          <div
            className="tf-content-wrap w-100 wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="inner">
              <div className="heading text-uppercase fw-8">
                CUSTOM <br />
                SKATEBOARD
              </div>
              <p className="description">
                Shop our luxury silk button-up blouses made with ultra-soft,
                washable silk.
              </p>
              <Link
                href={`/shop-collection-list`}
                className="tf-btn btn-line collection-other-link fw-6"
              >
                <span>Shop Collection</span>
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/banner-wtext-stakeboard.jpg"
              alt="collection-img"
              src="/images/collections/banner-wtext-stakeboard.jpg"
              width={720}
              height={539}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
