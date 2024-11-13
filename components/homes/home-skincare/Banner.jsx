import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="tf-slideshow slider-video position-relative">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          src="/images/collections/banner-collection-1.jpg"
          data-src="/images/collections/banner-collection-1.jpg"
          alt="image-collection"
          width={1800}
          height={893}
        />
        <div className="box-content text-center">
          <div className="container">
            <p className="subheading text-white fw-7">ULTRA-PREMIUM SILK</p>
            <h1 className="heading text-white">Silk Blouses Shirts</h1>
            <p className="description text-white">
              Shop our luxury silk button-up blouses made with ultra-soft,
              washable silk.
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <Link
                href={`/shop-collection-sub`}
                className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
              >
                <span>Shop collection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
