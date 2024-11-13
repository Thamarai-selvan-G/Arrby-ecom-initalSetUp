import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-19 pt_0 pb_0">
      <div className="container">
        <div className="tf-grid-layout bg_e7e4df gap-0 rounded-0 md-col-2 tf-img-with-text style-3">
          <div className="tf-content-wrap">
            <div>
              <h2 className="heading wow fadeInUp" data-wow-delay="0s">
                Summer-Ready <br />
                Savings
              </h2>
              <p
                className="description text_black-2 wow fadeInUp"
                data-wow-delay="0s"
              >
                Sets come equipped with easy to use storage solutions to keep
                your kitchen <br />
                organized and pristine.
              </p>
              <Link href={`/shop-collection-list`} className="tf-btn btn-line">
                Shop Collection
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
          <div className="tf-image-wrap">
            <Image
              className="lazyload"
              data-src="/images/collections/kitchen-wear-4.png"
              alt="collection-img"
              src="/images/collections/kitchen-wear-4.png"
              width={800}
              height={533}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
