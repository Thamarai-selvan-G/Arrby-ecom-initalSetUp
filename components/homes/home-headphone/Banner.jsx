import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-8 pb_0">
      <div className="container">
        <div className="tf-banner-collection">
          <Image
            className="lazyload"
            data-src="/images/collections/banner-collection.jpg"
            alt="img-banner"
            loading="lazy"
            src="/images/collections/banner-collection.jpg"
            width={2000}
            height={761}
          />
          <div className="box-content">
            <div className="container wow fadeInUp" data-wow-delay="0s">
              <div className="sub fw-7 text_white">ECOMUS HEADPHONE DESIGN</div>
              <h2 className="heading fw-6 text_white">Uniting Performance</h2>
              <p className="text_white">Fast wireless charging on-the-go.</p>
              <Link
                href={`/shop-default`}
                className="rounded-full tf-btn style-3 fw-6 btn-light-icon animate-hover-btn"
              >
                <span>Shop Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
