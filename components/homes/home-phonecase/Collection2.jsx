import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection2() {
  return (
    <section>
      <div className="container">
        <div className="tf-grid-layout md-col-2 bg_yellow-5 tf-img-with-text style-5 style-6">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/phonecase-9.jpg"
              alt="collection-img"
              src="/images/collections/phonecase-9.jpg"
              width={800}
              height={598}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="heading">
              Classic <br />
              Collection
            </div>
            <p className="description text_black-2">
              Ultra-protective cases engineered for your boldest behavior. Dual-
              layer protection a 3mm raised front lip.
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn btn-outline-dark radius-3 link justify-content-center wow fadeInUp"
              data-wow-delay="0s"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
