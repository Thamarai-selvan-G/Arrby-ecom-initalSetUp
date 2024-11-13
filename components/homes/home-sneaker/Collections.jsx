import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems13 } from "@/data/categories";
export default function Collections() {
  return (
    <section className="flat-spacing-14 pt_0">
      <div className="container">
        <div className="masonry-layout-v4 wow fadeInUp" data-wow-delay="0s">
          {collectionItems13.map((item) => (
            <div
              key={item.id}
              className={`${item.id} collection-item-v2 hover-img`}
            >
              <Link href={item.href} className="collection-inner">
                <div className="collection-image img-style">
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <div className={`collection-content ${item.justifyContent}`}>
                  <div className={`top wow fadeInUp`} data-wow-delay="0s">
                    <h5 className="heading text-white fw-7">{item.heading}</h5>
                    {item.subheading && (
                      <p className="subheading text-white">{item.subheading}</p>
                    )}
                    <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                      <span>{item.buttonText}</span>
                      <i className={`icon ${item.buttonIcon}`} />
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
