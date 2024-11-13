import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems7 } from "@/data/categories";
export default function Collection() {
  return (
    <section className="flat-spacing-18">
      <div className="container">
        <div className="masonry-layout-v2">
          {collectionItems7.map((item, index) => (
            <div
              key={index}
              className={`${item.itemClass} collection-item-v5 hover-img wow fadeInUp`}
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <Link
                  href={`/shop-default`}
                  className="collection-image img-style"
                >
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.imgAlt}
                    src={item.imgSrc}
                    width={item.imgWidth}
                    height={item.imgHeight}
                  />
                </Link>
                <div className="collection-content">
                  <Link href={`/shop-default`} className="collection-title">
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
