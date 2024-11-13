import React from "react";
import Link from "next/link";
export default function VideoBanner() {
  return (
    <section className="tf-slideshow slider-video position-relative">
      <div className="banner-wrapper">
        <video
          src="/images/slider/slider-video-2.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="box-content text-center">
          <div className="container wow fadeInUp" data-wow-delay="0s">
            <p className="subheading text-white fw-7">
              FREE SHIPPING OVER ORDER $120
            </p>
            <h1 className="heading text-white">Spring Collection</h1>
            <p className="description text-white">
              Here is your chance to upgrade your wardrobe with a variation of
              styles
            </p>
            <Link
              href={`/shop-women`}
              className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
            >
              <span>Shop now</span>
              <i className="icon icon-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
