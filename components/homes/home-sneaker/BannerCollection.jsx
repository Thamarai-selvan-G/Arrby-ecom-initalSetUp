import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function BannerCollection() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-5">
          <div className="d-flex gap-30">
            <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
              <Image
                className="lazyload"
                data-src="/images/collections/banner-sneaker-1.jpg"
                alt="collection-img"
                src="/images/collections/banner-sneaker-1.jpg"
                width={336}
                height={481}
              />
            </div>
            <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
              <Image
                className="lazyload"
                data-src="/images/collections/banner-sneaker-2.jpg"
                alt="collection-img"
                src="/images/collections/banner-sneaker-2.jpg"
                width={336}
                height={481}
              />
            </div>
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="sub-heading fw-7">ABOUT US</div>
            <div className="heading fw-7 fs-42">
              A SERVICE-FIRST HOME FOR CONTEMPORARY STYLE
            </div>
            <p className="description text_black-2 fs-16">
              Rooted in Amsterdam street culture we’ve always supported local
              initiatives, creatives and athletes from day one. Working on
              unique collaborations with both local and international brands and
              hosting regular events and parties in our shops for our community.
              Something we’ll continue doing wherever we go.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn btn-line collection-other-link fw-6"
            >
              <span>SHOP COLLECTION</span>
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
