import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CollectionBanner() {
  return (
    <section className="flat-spacing-1 pt_0">
      <div className="container">
        <div className="tf-grid-layout bg_blue-5 gap-0 rounded-0 md-col-2 tf-img-with-text style-3">
          <div className="tf-content-wrap">
            <div>
              <h2 className="heading wow fadeInUp" data-wow-delay="0s">
                Bold <br />
                Collection
              </h2>
              <p
                className="description text_black-2 wow fadeInUp"
                data-wow-delay="0s"
              >
                Ultra-protective cases engineered for your boldest behavior.
                Dual- <br />
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
          <div className="tf-image-wrap">
            <Image
              className="lazyload"
              data-src="/images/collections/phonecase-4.jpg"
              alt="collection-img"
              src="/images/collections/phonecase-4.jpg"
              width={800}
              height={598}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
