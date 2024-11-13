import React from "react";
import Link from "next/link";
import Image from "next/image";
import { collectionItems8 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-25 pb_0">
      <div className="container-full">
        <div
          className="masonry-layout-v4 style-2 wow fadeInUp"
          data-wow-delay="0s"
        >
          {collectionItems8.map((item, index) => (
            <div
              key={index}
              className={`${item.itemClass} collection-item style-2 hover-img`}
            >
              <div className="collection-inner">
                <Link
                  href={`/shop-collection-sub`}
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
                  <Link
                    href={`/shop-collection-sub`}
                    className="tf-btn collection-title hover-icon font-young-serif text-22 rounded-full"
                  >
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
