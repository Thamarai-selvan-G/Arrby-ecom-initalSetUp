import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="tf-slideshow slideshow-effect-zoom">
      <div className="container">
        <div className="wrap-content">
          <div className="content-left">
            <h1 className="heading fade-item fade-item-1">
              Limited Edition
              <br />
              Collection
            </h1>
            <p className="desc fade-item fade-item-2">
              Shop exclusive pieces from our limited edition collection
            </p>
            <Link
              href={`/shop-collection-sub`}
              className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
            >
              <span>Shop collection</span>
              <i className="icon icon-arrow-right"></i>
            </Link>
          </div>
          <div className="content-right position-relative">
            <div className="grid-img-group">
              <div className="box-img item-1 hover-img">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/slider/te2.jpg"
                    alt="img-slider"
                    src="/images/slider/te2.jpg"
                    width="367"
                    height="480"
                  />
                </div>
              </div>
              <div className="box-img item-2 hover-img">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/slider/te1.jpg"
                    alt="img-slider"
                    src="/images/slider/te1.jpg"
                    width="611"
                    height="858"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
