import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collcetion2() {
  return (
    <section className="flat-spacing-19 pt_0 pb_0">
      <div className="container">
        <div className="tf-grid-layout gap-0 rounded-0 md-col-2 tf-img-with-text style-3">
          <div className="tf-content-wrap">
            <div>
              <div className="heading fs-42 wow fadeInUp" data-wow-delay="0s">
                Gift ideas for summer
              </div>
              <p
                className="description text_black-2 wow fadeInUp"
                data-wow-delay="0s"
              >
                Summer carries with it festivities, reunions, journeys and
                <br />
                unforgettable moments in time
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
              data-src="/images/collections/decor_img1.jpg"
              alt="collection-img"
              src="/images/collections/decor_img1.jpg"
              width={800}
              height={598}
            />
          </div>
        </div>
        <div className="tf-grid-layout gap-0 rounded-0 md-col-2 tf-img-with-text style-3 bg-f5fbfd">
          <div className="tf-image-wrap">
            <Image
              className="lazyload"
              data-src="/images/collections/decor_img2.jpg"
              alt="collection-img"
              src="/images/collections/decor_img2.jpg"
              width={800}
              height={598}
            />
          </div>
          <div className="tf-content-wrap">
            <div>
              <div className="heading fs-42 wow fadeInUp" data-wow-delay="0s">
                Renovate your room
              </div>
              <p
                className="description text_black-2 wow fadeInUp"
                data-wow-delay="0s"
              >
                Summer carries with it festivities, reunions, journeys and
                <br />
                unforgettable moments in time
              </p>
              <Link href={`/shop-collection-list`} className="tf-btn btn-line">
                Shop Collection
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
