import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className="flat-spacing-19">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-1">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/collection-58.jpg"
              alt="collection-img"
              src="/images/collections/collection-58.jpg"
              width={800}
              height={760}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="heading">
              Redefining Fashion <br />
              Excellence
            </div>
            <p className="description">
              Here is your chance to upgrade your wardrobe with a variation of
              styles
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill rounded-full animate-hover-btn"
            >
              Read our stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
