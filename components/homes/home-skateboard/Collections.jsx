import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionLines } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-18 pb-0">
      <div className="container">
        <div className="grid-3-layout-md wow fadeInUp" data-wow-delay="0s">
          {collectionLines.map((item) => (
            <div
              key={item.id}
              className={`${item.id} collection-line-upper hover-img`}
            >
              <div className="collection-inner">
                <Link href={item.href} className="collection-image img-style">
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.width}
                    height={item.height}
                  />
                </Link>
                <div className="collection-content text-center">
                  <p className="subheading text-white">{item.subheading}</p>
                  <h5 className="heading text-white">{item.heading}</h5>
                  <Link
                    href={item.href}
                    className="tf-btn btn-fill animate-hover-btn collection-title"
                  >
                    <span>SHOP NOW</span>
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
