import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-banner-sock tf-slideshow position-relative">
      <div className="wrap-slider">
        <Image
          className="lazyload img-dk"
          data-src="/images/slider/banner_image_sock.jpg"
          alt="slideshow"
          loading="lazy"
          src="/images/slider/banner_image_sock.jpg"
          width={3840}
          height={1424}
        />
        <div className="box-content text-center text-md-start">
          <div className="container">
            <p className="subheading text-14 fw-6 letter-2">
              FOR EVERYONE, EVERYDAY
            </p>
            <h2 className="heading">Made sustainably.</h2>
            <p className="d-block text-1">
              Our versatile socks are made with an earth-friendly blend of
              <br />
              organic and recycled materials.
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <Link
                href={`/shop-collection-sub`}
                className="tf-btn btn-color-4 rounded-0 fw-6 animate-hover-btn letter-2"
              >
                <span>SHOP NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
