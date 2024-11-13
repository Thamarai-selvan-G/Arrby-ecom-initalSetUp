import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems10 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-28">
      <div className="container-full">
        <div
          className="masonry-layout style-2 wow fadeInUp"
          data-wow-delay="0s"
        >
          {collectionItems10.map((item) => (
            <div
              key={item.id}
              className={`${item.id} collection-item large hover-img`}
            >
              <div className="collection-inner">
                <Link
                  href={item.href}
                  className="collection-image img-style rounded-0"
                >
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
                  <Link
                    href={item.href}
                    className="tf-btn collection-title hover-icon rounded-0 text-14"
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
