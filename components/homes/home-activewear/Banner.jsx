import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-27">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-5">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/banner-collection-activewear.jpg"
              alt="collection-img"
              src="/images/collections/banner-collection-activewear.jpg"
              width={800}
              height={622}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="sub-heading fw-7">LEAVE YOUR MARK</div>
            <div className="heading font-young-serif">
              We're Ecfriend Collective
            </div>
            <p className="description text_black-2 fs-14">
              Since our inception in late 2012, ECfriend has had one intention;
              to help build resilient human beings through performance,
              innovation, sustainability and functionality.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill btn-icon rounded-full animate-hover-btn"
            >
              Learn more <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
