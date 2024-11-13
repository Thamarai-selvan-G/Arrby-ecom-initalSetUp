import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className="flat-spacing-27 pt_0 has-line-bottom">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text">
          <div
            className="tf-image-wrap radius-10 wow fadeInUp"
            data-wow-delay="0s"
          >
            <Image
              className="lazyload"
              data-src="/images/collections/dog-4.jpg"
              alt="collection-img"
              src="/images/collections/dog-4.jpg"
              width={800}
              height={831}
            />
          </div>
          <div
            className="tf-content-wrap place-self-center wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="heading">
              Perfect Gift For Every <br />
              Dog Parent
            </div>
            <p className="description">
              Select the amount you would like to give and your
              <br className="d-none d-xl-block" />
              gift card will be delivered via email following purchase.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill radius-3 animate-hover-btn"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
