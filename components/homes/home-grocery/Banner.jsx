import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text img-text-3 img-text-3-style-2">
          <div className="tf-image wow fadeInUp" data-wow-delay="0s">
            <div className="grid-img-group">
              <div className="box-img item-1 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/img-w-text-grocery1.jpg"
                    alt="img-slider"
                    src="/images/collections/img-w-text-grocery1.jpg"
                    width={470}
                    height={420}
                  />
                </div>
              </div>
              <div className="box-img item-2 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/img-w-text-grocery2.jpg"
                    alt="img-slider"
                    src="/images/collections/img-w-text-grocery2.jpg"
                    width={600}
                    height={713}
                  />
                </div>
              </div>
              <div className="box-img item-3 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/img-w-text-grocery3.jpg"
                    alt="img-slider"
                    src="/images/collections/img-w-text-grocery3.jpg"
                    width={706}
                    height={628}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <p
              className="subheading text-uppercase fw-7"
              style={{ color: "#253d4e" }}
            >
              PERFECT GIFT FOR YOU
            </p>
            <h2 className="heading fade-item fade-item-1 fw-6">
              Ecomus Subscription
            </h2>
            <p className="desc fade-item fade-item-2">
              Delivered every month! Perfect for your favorite vegan or anyone
              you want <br />
              to introduce to the best better-for-you foods out there.
            </p>
            <Link
              href={`/shop-default`}
              className="tf-btn btn-fill animate-hover-btn btn-icon radius-60"
            >
              <span>Shop collection</span>
              <i className="icon icon-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
