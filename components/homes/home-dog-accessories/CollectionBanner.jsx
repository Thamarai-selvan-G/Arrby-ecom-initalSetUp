import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function CollectionBanner() {
  return (
    <section className="flat-spacing-24">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text img-text-3">
          <div className="tf-image wow fadeInUp" data-wow-delay="0s">
            <div className="grid-img-group">
              <div className="box-img item-1 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/dog-1.jpg"
                    alt="img-slider"
                    src="/images/collections/dog-1.jpg"
                    width={272}
                    height={325}
                  />
                </div>
              </div>
              <div className="box-img item-2 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/dog-2.jpg"
                    alt="img-slider"
                    src="/images/collections/dog-2.jpg"
                    width={400}
                    height={539}
                  />
                </div>
              </div>
              <div className="box-img item-3 hover-img tf-image-wrap">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/dog-3.jpg"
                    alt="img-slider"
                    src="/images/collections/dog-3.jpg"
                    width={217}
                    height={219}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <h2 className="heading fade-item fade-item-1">
              Designs for Modern <br className="d-none d-xl-block" />
              Pet Parents
            </h2>
            <p className="desc fade-item fade-item-2">
              We connect pets and their people through thoughtful, functional
              design that makes morning walks, subway commutes, and park visits
              simpler and more joyful.
            </p>
            <Link
              href={`/shop-default`}
              className="tf-btn btn-line letter-spacing-1 fw-6"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
