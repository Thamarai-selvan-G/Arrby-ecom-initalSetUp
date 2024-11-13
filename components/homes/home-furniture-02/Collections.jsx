import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems9 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Design deals, delivered free
          </span>
        </div>
        <div className="wrap-carousel wrap-mobile">
          <div
            className="swiper tf-sw-mobile"
            data-preview="1.3"
            data-space={15}
          >
            <div className="swiper-wrapper grid-mobile-1">
              {collectionItems9.map((slide, index) => (
                <div key={index} className="swiper-slide">
                  <div className="collection-item-v2 hover-img">
                    <Link
                      href={`/shop-collection-sub`}
                      className="collection-inner"
                    >
                      <div className="collection-image img-style">
                        <Image
                          className="lazyload"
                          data-src={slide.imgSrc}
                          alt={slide.imgAlt}
                          src={slide.imgSrc}
                          width={slide.imgWidth}
                          height={slide.imgHeight}
                        />
                      </div>
                      <div className="collection-content">
                        <div className="top wow fadeInUp" data-wow-delay="0s">
                          <h5 className="heading">{slide.heading}</h5>
                          <p className="subheading">{slide.subheading}</p>
                        </div>
                        <div
                          className="bottom wow fadeInUp"
                          data-wow-delay="0s"
                        >
                          <button className="tf-btn btn-line collection-other-link fw-6">
                            <span>Shop now</span>
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
