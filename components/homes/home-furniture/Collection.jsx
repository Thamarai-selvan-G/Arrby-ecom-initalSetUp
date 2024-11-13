import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="masonry-layout-v4 wow fadeInUp" data-wow-delay="0s">
          <div className="item-1 collection-item-v2 hover-img">
            <Link href={`/shop-collection-sub`} className="collection-inner">
              <div className="collection-image img-style">
                <Image
                  className="lazyload"
                  data-src="/images/collections/009furniture-banner-01.jpg"
                  alt="collection-img"
                  src="/images/collections/009furniture-banner-01.jpg"
                  width={1058}
                  height={1194}
                />
              </div>
              <div className="collection-content">
                <div className="top wow fadeInUp" data-wow-delay="0s">
                  <h5 className="heading text-white">Spring Collection</h5>
                  <p className="subheading text-white">
                    Every piece is made to last beyond the season
                  </p>
                  <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                    <span>Shop Collection</span>
                    <i className="icon icon-arrow1-top-left" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="item-2 collection-item-v2 hover-img">
            <Link href={`/shop-collection-sub`} className="collection-inner">
              <div className="collection-image img-style">
                <Image
                  className="lazyload"
                  data-src="/images/collections/009furniture-banner-02.jpg"
                  alt="collection-img"
                  src="/images/collections/009furniture-banner-02.jpg"
                  width={1056}
                  height={575}
                />
              </div>
              <div className="collection-content justify-content-end">
                <div className="bottom wow fadeInUp" data-wow-delay="0s">
                  <h5 className="heading text-white">Up to 30% off</h5>
                  <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                    <span>Shop Collection</span>
                    <i className="icon icon-arrow1-top-left" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div className="item-3 collection-item-v2 hover-img">
            <Link href={`/shop-collection-sub`} className="collection-inner">
              <div className="collection-image img-style">
                <Image
                  className="lazyload"
                  data-src="/images/collections/009furniture-banner-03.jpg"
                  alt="collection-img"
                  src="/images/collections/009furniture-banner-03.jpg"
                  width={1056}
                  height={575}
                />
              </div>
              <div className="collection-content justify-content-end">
                <div className="bottom wow fadeInUp" data-wow-delay="0s">
                  <h5 className="heading text-white">Lighting Collection</h5>
                  <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                    <span>Shop Collection</span>
                    <i className="icon icon-arrow1-top-left" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
