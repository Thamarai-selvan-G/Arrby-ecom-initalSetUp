import React from "react";
import Link from "next/link";
import Image from "next/image";
import { collectionItems14 } from "@/data/categories";
export default function CollectionsBanner2() {
  return (
    <section className="bg_green-6 flat-spacing-12">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Styles that are hot right now
          </span>
        </div>
        <div className="tf-grid-layout md-col-2">
          {collectionItems14.map((item) => (
            <div key={item.id} className="collection-item-centered hover-img">
              <Link href={item.href} className="img-style">
                <Image
                  className="lazyload"
                  data-src={item.imgSrc}
                  alt={item.alt}
                  src={item.imgSrc}
                  width={item.width}
                  height={item.height}
                />
              </Link>
              <div className="content">
                <Link
                  href={item.href}
                  className="tf-btn btn-light btn-fill-line hover-icon rounded-0 fw-6"
                >
                  <span>{item.buttonText}</span>
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
