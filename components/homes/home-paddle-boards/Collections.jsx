import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItemsV2 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-8">
      <div className="container">
        <div className="masonry-layout-v4 wow fadeInUp" data-wow-delay="0s">
          {collectionItemsV2.map((item) => (
            <div
              key={item.id}
              className={`${item.id} collection-item-v2 hover-img`}
            >
              <Link href={item.href} className="collection-inner">
                <div className="collection-image img-style radius-10">
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.imgWidth}
                    height={item.imgHeight}
                  />
                </div>
                <div
                  className={`collection-content ${item.contentClass || ""}`}
                >
                  <div className="top wow fadeInUp" data-wow-delay="0s">
                    <h5 className="heading text-white">{item.heading}</h5>
                    {item.subheading && (
                      <p className="subheading text-white">{item.subheading}</p>
                    )}
                    <button
                      className={`tf-btn ${item.buttonClass} collection-other-link fw-6`}
                    >
                      <span>{item.buttonLabel}</span>
                      <i className="icon icon-arrow1-top-left" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
