import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItemsV5 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-12 pb_0">
      <div className="container">
        <div
          className="flat-title title-upper wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title fw-8 font-poppins">GIFT GUIDES</span>
          <p className="sub-title font-poppins text_black-2">
            Where wishlists come true. Discover the pieces of their (or your)
            dreams.
          </p>
        </div>
        <div className="masonry-layout-v2">
          {collectionItemsV5.map((item) => (
            <div
              key={item.id}
              className={`${item.id} collection-item-v5 hover-img wow fadeInUp`}
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <Link href={item.href} className="collection-image img-style">
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.imgWidth}
                    height={item.imgHeight}
                  />
                </Link>
                <div className="collection-content">
                  <Link href={item.href} className="collection-title">
                    <span>{item.title}</span>
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
